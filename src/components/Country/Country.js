import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags, name, region}= props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;