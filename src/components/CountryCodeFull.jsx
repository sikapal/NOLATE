import React from 'react'
import { useState } from 'react';
import PhoneInput  from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CountryCodeFull = () => {
  const [phone, setPhone] = useState('');

  return (
    
  <PhoneInput

    DefaultCountry="cm"
    value={phone}
    onChange={(phone) => setPhone(phone)}
    inputStyle={{ width: '100px', height: '40px'}}
  
  />
    
  );
}
export default CountryCodeFull
