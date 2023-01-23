import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../recommendations.scss';

const liStyle = {
    cursor: 'pointer',
};

const SelectBreakeven = (props) => {
    const { breakeven, handler } = props;

    const breakevens = (breaeven) => {
        const breakevenArray = [true, false];
        return breakevenArray.map((itemBreakeven) => {
            return (
                <li
                    className={breaeven === itemBreakeven ? 'selectmark' : ''}
                    style={liStyle}
                    onClick={() => {
                        {
                            itemBreakeven !== breaeven && (
                                handler(itemBreakeven)
                            )
                        }
                    }
                    }
                    key={itemBreakeven}
                >
                    {itemBreakeven === true
                        ? 'Incl. B/E'
                        : itemBreakeven === false
                            ? 'Excl. B/E'
                            : ''}
                </li >
            )
        })
    }

    return (
        <div className="select-wrapper position-right">
            <div className="select-list select ">
                <ul className="modal-select">
                    {breakevens(breakeven)}
                </ul>
            </div>
        </div>
    );
};

SelectBreakeven.propTypes = {
    handler: PropTypes.func.isRequired,
    breakeven: PropTypes.bool.isRequired,
};

export default SelectBreakeven;
