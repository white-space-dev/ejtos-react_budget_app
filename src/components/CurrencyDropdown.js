import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyDropdown = () => {
    const { currency } = useContext(AppContext);
    const [showOptions, setShowOptions] = useState(false)

    const currencies = [
        {name: "Pound", symbol: "£"},
        {name: "Ruppee", symbol: "₹"},
        {name: "Dollar", symbol: "$"},
        {name: "Euro", symbol: "€"},
    ]

    const dispatch = useContext(AppContext);
    const handleCurrencyChange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
        setShowOptions(false);    }
    return (
        <div className="dropdown">
        {/* Button to toggle the dropdown menu */}
        <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            onClick={() => setShowOptions(prev => !prev)}
        >
            Currency ({currency})
            <span className="caret"></span>
        </button>
        
        {/* Conditional rendering of the dropdown menu */}
        {showOptions && (
            <ul style={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderStyle: 'solid', listStyleType: 'none', padding: 0 }}>
                {currencies.map(curr => (
                    <li key={curr} onClick={() => handleCurrencyChange(curr)} style={{ padding: '8px 12px' }}>
                        {curr.symbol} {curr.name}
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
};
export default CurrencyDropdown;
