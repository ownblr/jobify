import React, { useState, useEffect } from 'react';

const PersonalInfoForm = ({ onValidityChange }) => {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 0 || /^\d{10}$/.test(phone.replace(/\D/g, ''));
  };

  const validateZipCode = (zipCode) => {
    return /^\d{5}(-\d{4})?$/.test(zipCode);
  };

  useEffect(() => {
    const isFormValid = streetAddress.trim() !== "" && city.trim() !== "" && state.trim() !== "" && validateZipCode(zipCode) && validateEmail(email) && validatePhone(phone);
    onValidityChange(isFormValid);
  }, [streetAddress, city, state, zipCode, phone, email, onValidityChange]);

  return (
    <div>
      <form>
        <div className="grid gap-y-4">
          <div className="text-center">
            <label className="block text-xl font-bold mb-4 dark:text-white">Personal Information</label>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="streetAddress" className="block text-sm mb-2 dark:text-white">Street Address</label>
              <input type="text" id="streetAddress" name="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm mb-2 dark:text-white">City</label>
              <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm mb-2 dark:text-white">State</label>
              <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm mb-2 dark:text-white">ZIP Code</label>
              <input type="text" id="zipCode" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
              {!validateZipCode(zipCode) && zipCode.length > 0 && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid ZIP code.</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Phone</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
            {!validatePhone(phone) && phone.length > 0 && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid phone number.</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            {!validateEmail(email) && email.length > 0 && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
            )}
          </div>

        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
