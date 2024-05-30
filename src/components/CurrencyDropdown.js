import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyDropdown = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency ?? 0)
    const [showOptions, setShowOptions] = useState(false)
    console.log('adsf', showOptions)
    return (
        // <>
        //         <div className="input-group-prepend">
        //         <label className="input-group-text" htmlFor="inputGroupSelect01">Currency ({newCurrency})</label>
        //           <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setNewCurrency(event.target.value)}>
        //                 {/* <option defaultValue>Currency ({newCurrency})</option> */}
        //         <option value="$ Dollar" name="dollar"> $ Dollar</option>
        //         <option value="£ Pound" name="pound">£ Pound</option>
        //         <option value="€ Euro" name="euro">€ Euro</option>
        //         <option value="₹ Ruppee" name="ruppee">₹ Ruppee</option>
        //           </select>
        //           </div>
        //           </>
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" onClick={() => setShowOptions(prev => !prev)}>Dropdown Example
                <span className="caret"></span></button>
            {showOptions ? (<ul style={{backgroundColor: 'white', borderColor: 'black', borderWidth: 1}}>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
            </ul>) : null}
        </div>
    );
};
export default CurrencyDropdown;
