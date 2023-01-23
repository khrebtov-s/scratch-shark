import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tip from './Tip';
import Finger from '../../../../img/SVG/finger-click.svg';

const liStyle = {
    cursor: 'pointer',
};

const Preset = (props) => {
    const { preset, handler } = props;
    const [showTip, setShowTip] = useState(false);

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    };

    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    const closeTipHandler = () => {
        setShowTip(false);
    };

    if (showTip) {
        return <Tip handler={closeTipHandler} />;
    };

    return (
        <div className="check-list">

            <div className="check-list-head">
                <div className="title-spend">Ticket Rank Method</div>
                <button className='green'
                    onClick={() => {
                        setShowTip(true);
                    }}
                >
                    <img className="finger-button" src={Finger} alt="" />
                    <div className="title-button">What`s This?</div>
                    <span className="i-button" ></span>
                </button>
            </div>
            <ul>
                <li
                    className={preset === 'jackpot' ? 'checkmark' : ''}
                    style={liStyle}
                    onClick={() => {
                        handler('jackpot');
                    }}
                >
                    Best odds: Jackpot
                </li>
                <li
                    className={preset === 'bestValue' ? 'checkmark' : ''}
                    style={liStyle}
                    onClick={() => {
                        handler('bestValue');
                    }}
                >
                    Best value
                </li>
                <li
                    className={preset === 'anyPrize' ? 'checkmark' : ''}
                    style={liStyle}
                    onClick={() => {
                        handler('anyPrize');
                    }}
                >
                    Best odds: Any prize
                </li>
            </ul>
        </div >
    );
};

Preset.propTypes = {
    handler: PropTypes.func.isRequired,
    preset: PropTypes.string.isRequired,
};

export default Preset;
