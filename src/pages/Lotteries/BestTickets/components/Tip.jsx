import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Tip = (props) => {
    const { handler } = props;
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    function preventDefault(e) {
        e.preventDefault();
    }

    function disableScroll() {
        document.body.addEventListener('touchmove', preventDefault, { passive: false });
    }
    function enableScroll() {
        document.body.removeEventListener('touchmove', preventDefault);
    }

    return (
        <div
            className="full-screen padding-4p b-flex"
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                top: '0',
            }}
        >

            <div
                style={{
                    margin: '0 auto',
                    maxWidth: '500px',
                    height: 'calc(100% - 33px)',
                }}
            >
                <div className="header">
                    <div className="white">
                        <h2>Ticket Rank Method</h2>
                        <div className="back"
                            onClick={handler}>
                            <span className="icon-left-arrow" />
                            <p >Back</p>
                        </div>
                    </div>
                </div >
                <div className="ticket-finder" style={{ marginTop: '2rem' }}>
                    <div className="value">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="dice" />
                            <h2>Has the best odds of winning a jackpot:</h2>
                        </div>
                        <p>
                            By selecting this option, ScratchShark will identify the ticket
                            that gives you the best odds of winning a 5-figure prize or
                            greater.
                        </p>
                    </div>
                    <div className="value">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="dice" />
                            <h2>Has the best odds of winning any prize:</h2>
                        </div>
                        <p>
                            By selecting this option, ScratchShark will identify the ticket
                            that gives you the best odds of winning something. It won't
                            necessarily recommend the ticket with the best odds of winning a
                            jackpot, but it will maximize the odds of scratching a winner.
                        </p>
                    </div>
                    <div className="value">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="dice" />
                            <h2>Has the best value:</h2>
                        </div>
                        <p>
                            By selecting this option, ScratchShark will identify the ticket
                            that gives you the highest expected value. That is to say, the
                            ticket with the largest amount of unclaimed prize money relative
                            to the number of tickets remaining. In other words, this option
                            will recommend the ticket that gives you the most bang for your
                            buck!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Tip.propTypes = {
    handler: PropTypes.func.isRequired,
};

export default Tip;
