// In ./components/option.js
import React from 'react';

export const Option = ({ text, onClick }) => {
    return (
        <button className="option" onClick={onClick}>
            {text}
        </button>
    );
};
