import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../recommendations.scss';

const liStyle = {
    cursor: 'pointer',
};

const SelectSpend = (props) => {
    const { price, handler } = props;

    const prices = (price) => {
        const pricesArray = [25, 20, 10, 5, 3, 2, 1];
        return pricesArray.map((itemPrice) => {
            return (
                <li
                    className={price === itemPrice ? 'selectmark' : ''}
                    style={liStyle}
                    onClick={() => {
                        {
                            itemPrice !== price && (
                                handler(itemPrice)
                            )
                        }
                    }
                    }
                    key={itemPrice}
                >
                    ${itemPrice} Spend
                </li >
            )
        })
    }

    return (
        <div className="select-wrapper position-left">
            <div className="select-list select">
                <ul className="modal-select">
                    {prices(price)}
                </ul>
            </div>
        </div>
    );
};

SelectSpend.propTypes = {
    handler: PropTypes.func.isRequired,
    price: PropTypes.number,
};

export default SelectSpend;
