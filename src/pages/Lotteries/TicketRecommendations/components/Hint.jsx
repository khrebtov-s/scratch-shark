import React from 'react';
import PropTypes from 'prop-types';
import buyTwo from '../../../../img/SVG/buy-two.svg';
import noJackpotImage from '../../../../img/SVG/no-jackpot.svg';
import Prize from '../../../../img/SVG/prize.svg';
import JackpotImage from '../../../../img/SVG/jackpot.svg';
import toBux from '../../../../utils/toBux';

const Hint = (props) => {
    const { typeHint, handler, ticketPrice, numberToWords, isX2, isRare, topPrize, numTypes } = props;
    return (
        <>
            {typeHint === 'isNew' || typeHint === 'isHot' || typeHint === 'isRare' ? (
                <>
                <div className="r-ticket-modal">
                    <div className="d-flex">
                        <div className={typeHint === 'isNew' ? 'ticket-new' : typeHint === 'isHot' ? 'ticket-hot' : typeHint === 'isRare' ? 'ticket-rare' : ''}>
                            <h2>{typeHint === 'isNew' ? 'New' : typeHint === 'isHot' ? 'Hot' : typeHint === 'isRare' ? 'Rare' : ''}</h2>
                            <h3>Ticket</h3>
                        </div>
                        <h4>{typeHint === 'isNew' ? '- New' : typeHint === 'isHot' ? '- Hot' : typeHint === 'isRare' ? '- Rare' : ''}</h4>
                    </div>
                    <p>
                        {typeHint === 'isNew'
                            ? 'New: This game was launched within the past two months'
                            : typeHint === 'isHot'
                                ? 'Hot: This ticket offers extraordinary odds of winning'
                                : typeHint === 'isRare'
                                    ? 'Quantities of this ticket are limited and it may be hard to find'
                                    : ''}
                    </p>
                    <button className="btn-close-modal icon-cross"
                        onClick={() => {
                            handler();
                        }}></button>
                </div>
                <div className={
                    'triangle' + ' ' + 
                    (typeHint === 'isNew' || typeHint === 'isHot' ? 'triangle-new' : numTypes ? 'triangle-rare' : '')
                  } />
           </> )
            : typeHint === 'isX2' || typeHint === 'ticketPrice' || typeHint === 'noJackpot' || typeHint === 'jackpot' ? (
                <>
                <div className="r-ticket-modal down">
                    <div className="d-flex">
                        <div className="img-wrapper">
                            <img src={(typeHint === 'isX2' 
                                        ? buyTwo 
                                            : typeHint === 'ticketPrice' 
                                                ? Prize 
                                                    : typeHint === 'noJackpot' 
                                                        ? noJackpotImage 
                                                            : typeHint === 'jackpot' 
                                                                ? JackpotImage 
                                                                    : '')} 
                            alt=""
                            style={{
                                height: '32px',
                                width: '40px',
                            }} />
                        </div>
                        <h4 style={{ marginLeft: '5px' }}>
                            {typeHint === 'isX2' 
                                ? ('- Buy ' + capitalize(numberToWords.toWords(isX2))) 
                                    : typeHint === 'ticketPrice' 
                                        ? ' Price' 
                                            : typeHint === 'noJackpot'
                                                ? '- No Jackpot' 
                                                    : typeHint === 'jackpot' 
                                                        ? ' Jackpot'
                                                            : ''}
                        </h4>
                    </div>
                    <p>
                    {typeHint === 'isX2' 
                        ? `ScratchShark recommends buying ${capitalize(numberToWords.toWords(isX2))} of this $${ticketPrice} ticket`
                            : typeHint === 'ticketPrice' 
                                ? `This price of this ticket is $${ticketPrice}`
                                    : typeHint === 'noJackpot'
                                        ? 'There are no 5 figure prizes remaining in this game'
                                            : typeHint === 'jackpot' 
                                                ? `The largest prize available is $${toBux(topPrize)}`
                                                    : ''}
                    </p>
                    <button className="btn-close-modal icon-cross"
                        onClick={() => {
                            handler();
                        }}></button>
                </div>
                <div className={
                    'triangle' + ' ' + 
                    (typeHint === 'ticketPrice' || typeHint === 'isX2'  
                        ? 'triangle-x2' 
                            : typeHint === 'noJackpot' || typeHint === 'jackpot'  
                                ? 'triangle-notJackpot' 
                                    : '')
                  }
                />
            </>
            ) : ''}
        </>
    )
};

export default Hint;

function capitalize(s) {
    return s && s[0].toLowerCase() + s.slice(1);
}





