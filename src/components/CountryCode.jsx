import React from 'react'
import { useState } from 'react';
import PhoneInput  from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CountryCode = () => {
  const [phone, setPhone] = useState('');

  return (
    
  <PhoneInput

    DefaultCountry="cm"
    value={phone}
    onChange={(phone) => setPhone(phone)}
    inputStyle={{ width: '240px', height: '40px'}}
    
  />
    
  );
}
export default CountryCode
