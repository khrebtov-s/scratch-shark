import React, { useState } from 'react';
import PropTypes from 'prop-types';

const liStyle = {
    cursor: 'pointer',
};

const Preset = (props) => {
    const { price, handler } = props;

    const prices = (price) => {
        const pricesArray = [25, 20, 10, 5, 3, 2, 1];
        return pricesArray.map((itemPrice) => {
            return (
                <li
                    className={price === itemPrice ? 'checkmark' : ''}
                    style={liStyle}
                    onClick={() => {
                        handler(itemPrice);
                    }}
                    key={itemPrice}
                >
                    ${itemPrice} Spend
                </li>
            )
        })
    }

    return (
        <div className="check-list">
            <div className="check-list-head">
                {price ? 'Desired Spend' : 'Desired Spend'}
            </div>
            <ul>
                {prices(price)}
            </ul>
        </div>
    );
};

Preset.propTypes = {
    handler: PropTypes.func.isRequired,
};

export default Preset;
