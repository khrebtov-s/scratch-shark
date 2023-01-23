import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import moment from 'moment';
import PropTypes, { any } from 'prop-types';
import { fetchLottery } from '../../../../api/lotteriesAPI';
import { toJS } from '../../../../utils/toJS';
import toCommas from '../../../../utils/toCommas';
import toBux from '../../../../utils/toBux';
import { getExplorerLots } from '../../../../redux/reducers/authReducer';

const DetailsModal = (props) => {
    const [firstLoad, setFirstLoad] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [fetchedLottery, setFetchedLottery] = useState({
        name: 'Loading',
        rating: 1,
        topPrize: {
            amount: 0,
        },
        onSaleDate: '',
        prizeTiers: [],
        ticketPrice: {
            amount: 0,
        },
        ticketsPrinted: '',
    });

    const {
        lottery,
        setShowModalDetails,
        explorerLots,
        location,
        match,
        breakeven
    } = props;


    const {
        name,
        rating,
        description,
        topPrize,
        onSaleDate,
        ticketPrice,
        ticketsPrinted,
    } = lottery;

    const topPrizeAmount = toBux(topPrize.amount) || 0;
    let formatedOnSaleDate = '';
    if (onSaleDate) {
        formatedOnSaleDate =
            moment(lottery.onSaleDate.date).format('M/D/YYYY') || '';
    }
    const ticketPriceAmount = toBux(ticketPrice.amount) || 0;

    let prizeTiers = [];
    if (lottery.prizeTiers) {
        prizeTiers =
            lottery.prizeTiers.sort((a, b) => {
                if (!a.prize || !b.prize) return;
                if (a.prize.amount < b.prize.amount) {
                    return 1;
                } else {
                    return -1;
                }
            }) || [];
    }

    let oddsAnyPrize = (lottery.anyPrizeOdds * 100).toFixed(2);

    const rankAnyPrize = () => {
        if (lottery.price === lotteries.price) {
            let prizeTierArray = [];
            let prizeTier = lotteries.map((lottery) => {
                prizeTierArray.push((lottery.anyPrizeOdds * 100).toFixed(2));
                return prizeTierArray;
            });
            let idx = prizeTierArray.findIndex((prizeTierEl) => {
                return prizeTierEl > oddsAnyPrize;
            });
            if (idx === -1) {
                let closest = prizeTierArray.sort(function (a, b) { return b - a });
                let idx = prizeTierArray.findIndex((prizeTierEl) => {
                    return prizeTierEl === closest[1];
                });
                return idx + 1;
            }
            return idx + 1;
        } else {
            return null;
        }
    }

    const expectedReturn = () => {
        let sumRemainingAmount = 0;
        let sumRemaining = 0;
        let after = 0;
        let before = 0;
        {
            breakeven && (
                prizeTiers.map((prizeTier) => {
                    const { prize, remainingTickets } = prizeTier;
                    sumRemainingAmount += ((prize.amount) * remainingTickets);
                    return sumRemainingAmount;
                })
            )
        }

        {
            !breakeven && (
                prizeTiers.map((prizeTier) => {
                    const { prize, remainingTickets } = prizeTier;
                    if (lottery.ticketPrice.amount < prize.amount) {
                        sumRemainingAmount += ((prize.amount) * remainingTickets);
                        return sumRemainingAmount;
                    }
                    return sumRemainingAmount;
                }
                )
            )
        }
        let sumRem = lottery.ticketsRemaining * (lottery.ticketPrice.amount / 100);
        let reusltExpected = sumRemainingAmount / sumRem;
        return reusltExpected;

    }

    let oddsExpectedReturn = expectedReturn();

    const rankExpectedReturn = () => {
        if (lottery.price === lotteries.price) {
            let prizeTierArray = [];
            let prizeTier = lotteries.map((lottery) => {
                let sumRemainingPrizeAmount = 0;
                let sumRemainingPrize = 0;
                lottery.prizeTiers.map((param) => {
                    const { prize, remainingTickets } = param;
                    sumRemainingPrizeAmount += (prize.amount * remainingTickets);
                    sumRemainingPrize += remainingTickets;

                    return sumRemainingPrizeAmount, sumRemainingPrize;
                });
                let prizeOddsRank = ((sumRemainingPrizeAmount / sumRemainingPrize) / 100).toFixed(2);
                prizeTierArray.push(prizeOddsRank);
            });

            let idx = prizeTierArray.findIndex((prizeTierEl) => {
                return prizeTierEl > oddsExpectedReturn;
            });

            if (idx === -1) {
                let closest = prizeTierArray.sort(function (a, b) { return b - a });
                let idx = prizeTierArray.findIndex((prizeTierEl) => {
                    return prizeTierEl === closest[1];
                });
                return idx + 1;
            }
            return idx + 1;
        } else if (price === undefined) {
            return null;
        }
    }

    const sumTicketsRemaining = () => {
        let sumRemaining = 0;
        prizeTiers.map((prizeTier) => {
            const { prize, remainingTickets } = prizeTier;
            sumRemaining += remainingTickets;
            return sumRemaining;
        })
        return sumRemaining;
    }

    const oddsJackpot = 100 / lottery.jackpotOdds;

    const rankJackpot = () => {
        if (lottery.price === lotteries.price) {
            let idx = lotteries.findIndex((lottery) => {
                return (100 / lottery.jackpotOdds) > oddsJackpot;
            });
            return idx + 1;
        } else {
            return null;
        }
    }

    const renderTiersOdds = () => {
        return (
            <>
                <tr style={{ background: 'none' }}>
                    <td>Jackpot Odds</td>
                    <td>{oddsJackpot === Infinity
                        ? 'No Jackpot'
                        : '1 in ' + toCommas(Math.ceil(1 / (lottery.jackpotOdds)))
                    }</td>
                </tr>
                <tr>
                    {breakeven === true ? (
                        <>
                            <td>Any Prize Odds (w/ BE)</td>
                            <td>1 in {(1 / lottery.anyPrizeOdds).toFixed(2)}</td>
                        </>
                    )
                        : (
                            <>
                                <td>Any Prize Odds (w/o BE)</td>
                                <td>1 in {(1 / lottery.anyPrizeWithoutBreakeven).toFixed(2)}</td>
                            </>
                        )}
                </tr>
                <tr style={{ background: 'none' }}>
                    {breakeven === true
                        ? <td>Expected Return (w/ BE)</td>
                        : <td>Expected Return (w/o BE)</td>}
                    <td>{expectedReturn().toFixed(1)}%</td>
                </tr>
            </>
        );
    };

    const renderTiers = () => {
        let result = 0;
        if (prizeTiers.length === 0) return;
        return prizeTiers.map((prizeTier) => {
            if (prizeTier.length === 0) return;
            const { prize, winningTickets, remainingTickets } = prizeTier;
            return (
                <tr key={prizeTier.id} className="t-prize">
                    <td>{'$ ' + toBux(prize.amount)}</td>
                    <td>{toCommas(winningTickets)}</td>
                    <td>{remainingTickets === 0 ? '0' : toCommas(remainingTickets)}</td>
                </tr>
            );
        });
    };

    return (
        <>
            <div className='background_hint-modal'
                onTouchStart={(e) => {
                    e.preventDefault();
                    { showModal && (setShowModal(!showModal)) }
                }}
            />
            <div className="ticket-info-wrapper details-wrapper modal-details">
                <div className="ticket-details">
                    <div className="ticket-details-header details-header">
                        <h2>{name}</h2>
                    </div>
                    <div className="table-wrapper" style={{ height: '430px' }}>
                        <div className="counts-ticket">
                            <h2>On Sale:</h2>
                            <p>{formatedOnSaleDate}</p>
                        </div>
                        <div className="counts-ticket">
                            <h2>Initial Odds:</h2>
                            <p>
                                1 in
                                {' ' + rating.toFixed(2)}
                            </p>
                        </div>
                        <div className="counts-ticket">
                            <h2>Tickets Printed:</h2>
                            <p>{ticketsPrinted === undefined ? toCommas(lottery.ticketsPrintedWithoutBreakeven) : toCommas(ticketsPrinted)}</p>
                        </div>
                        <div className="counts-ticket">
                            <h2>Tickets Remaining:</h2>
                            <p>{toCommas(lottery.ticketsRemaining)}</p>
                        </div>

                        <table className="t-rank">
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td style={{ paddingRight: '10px' }}>Metric</td>
                                </tr>
                                {renderTiersOdds()}
                            </tbody>
                        </table>
                        <table className="t-rank">
                            <tbody>
                                <tr>
                                    <td>Prize</td>
                                    <td>at Start</td>
                                    <td>Remaining</td>
                                </tr>
                                {renderTiers()}
                            </tbody>
                        </table>
                    </div>
                    <div className="close-details">
                        <button
                            className="icon-cross"
                            onClick={() => {
                                setShowModalDetails(false)
                            }}
                        />
                        <h2>Close Details</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsModal;