import React from 'react'
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const CountryCode = () => {
    const [phone, setPhone] = useState('');

    return (
      <div>
        <PhoneInput
          defaultCountry="cm"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      </div>
    );
}
export default CountryCode
