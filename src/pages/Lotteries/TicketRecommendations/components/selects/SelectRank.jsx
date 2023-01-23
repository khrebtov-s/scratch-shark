import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../recommendations.scss';

const liStyle = {
    cursor: 'pointer',
};

const SelectRank = (props) => {
    const { preset, handler } = props;

    const presets = (preset) => {
        const presetArray = ['jackpot', 'bestValue', 'anyPrize'];
        return presetArray.map((itemPreset) => {
            return (
                <li
                    className={preset === itemPreset ? 'selectmark' : ''}
                    style={liStyle}
                    onClick={() => {
                        {
                            itemPreset !== preset && (
                                handler(itemPreset)
                            )
                        }
                    }
                    }
                    key={itemPreset}
                >
                    {itemPreset === 'jackpot'
                        ? 'Best Odds: Jackpot'
                        : itemPreset === 'bestValue'
                            ? 'Best Value'
                            : itemPreset === 'anyPrize'
                                ? 'Best Odds: Any Prize'
                                : ''}
                </li >
            )
        })
    }

    return (
        <div className = "select-wrapper">
            <div className="select-list select">
                <ul className="modal-select">
                    {presets(preset)}
                </ul>
            </div>
        </div>
    );
};

SelectRank.propTypes = {
    handler: PropTypes.func.isRequired,
    preset: PropTypes.string.isRequired,
};

export default SelectRank;
