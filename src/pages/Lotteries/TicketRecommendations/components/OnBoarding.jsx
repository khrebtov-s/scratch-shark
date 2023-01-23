/* eslint-disable nonblock-statement-body-position */
import React from 'react';
import PropTypes from 'prop-types';

const OnBoarding = (props) => {
    const { onClick, currentGuide } = props;

    const renderGuide = () => {
        if (currentGuide === 0)
            return (
                <div>
                    <span className="tap-ticket" />
                    <h2>Tap the Ticket</h2>
                    <p>to view prize details</p>
                    <span className="swipe-ticket" />
                    <h2>Swipe Left/Right</h2>
                    <p>to switch between tickets</p>
                </div>
            );
        else {
            return (
                <div style={{ height: '100%' }}>
                    <div className="new-ticket-guide" />
                    <p>
                        <b>New</b>– Identifies a ticket that was released less than two
                        months ago
          </p>
                    <div className="nojackpot-ticket-guide" />
                    <p>
                        <b>No Jackpot</b>– There are no jackpots (prizes over $10,000) in
                        this game
          </p>

                    <div className="icon-oval buyx-ticket-guide">
                        <h2>x2</h2>
                        <h3
                            style={{
                                position: 'realative',
                                transform: 'translateY(-60%)',
                                width: '50px',
                            }}
                        >
                            Buy Two
            </h3>
                    </div>
                    <p>
                        <b>Buy 2</b> – Use your budget to buy two (or more) of this lower
                        priced game to maximize your odds
          </p>
                </div>
            );
        }
    };
    return (
        <div
            id="onboarding"
            onClick={onClick}
            style={{
                height: '100%',
                overflow: 'auto',
            }}
        >
            {renderGuide()}
        </div>
    );
};

OnBoarding.propTypes = {
    onClick: PropTypes.func.isRequired,
    currentGuide: PropTypes.number.isRequired,
};

export default OnBoarding;
