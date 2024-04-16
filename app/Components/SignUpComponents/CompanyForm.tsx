import React, { useState, useEffect } from 'react';

const CompanyForm = ({ onValidityChange }) => {
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [errors, setErrors] = useState<{ companyName: string, streetAddress: string, city: string, state: string, zipCode: string}>({
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'companyName':
        return !value.trim() ? "Company name is required" : "";
      case 'streetAddress':
        return !value.trim() ? "Street address is required" : "";
      case 'city':
        return !value.trim() ? "City is required" : "";
      case 'state':
        return !value.trim() ? "State is required" : "";
      case 'zipCode':
        return !/^\d{5}(-\d{4})?$/.test(value) ? "Invalid ZIP code" : "";
      case 'phone':
        return value && !/^\d{10}$/.test(value.replace(/\D/g, '')) ? "Invalid phone number" : "";
      default:
        return "";
    }
  };

  useEffect(() => {
    const newErrors = {
      companyName: validateField('companyName', companyName),
      streetAddress: validateField('streetAddress', streetAddress),
      city: validateField('city', city),
      state: validateField('state', state),
      zipCode: validateField('zipCode', zipCode),
    };

    setErrors(newErrors);

    const isFormValid = Object.keys(newErrors).every(key => !newErrors[key]);
    onValidityChange(isFormValid);
  }, [companyName, streetAddress, city, state, zipCode, onValidityChange]);

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  return (
    <div>
      <form noValidate>
        <div className="grid gap-y-4">
          <div className="text-center">
            <label className="block text-xl font-bold mb-4 dark:text-white">Company Information</label>
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm mb-2 dark:text-white">Company Name</label>
            <input 
              type="text" 
              id="companyName" 
              name="companyName" 
              value={companyName} 
              onChange={(e) => setCompanyName(e.target.value)} 
              onBlur={handleBlur} 
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
              required 
            />
            {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="streetAddress" className="block text-sm mb-2 dark:text-white">Street Address</label>
              <input 
                type="text" 
                id="streetAddress" 
                name="streetAddress" 
                value={streetAddress} 
                onChange={(e) => setStreetAddress(e.target.value)} 
                onBlur={handleBlur} 
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                required 
              />
              {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
            </div>
            <div>
              <label htmlFor="city" className="block text-sm mb-2 dark:text-white">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                onBlur={handleBlur} 
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                required 
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="state" className="block text-sm mb-2 dark:text-white">State</label>
              <input 
                type="text" 
                id="state" 
                name="state" 
                value={state} 
                onChange={(e) => setState(e.target.value)} 
                onBlur={handleBlur} 
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                required 
              />
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm mb-2 dark:text-white">ZIP Code</label>
              <input 
                type="text" 
                id="zipCode" 
                name="zipCode" 
                value={zipCode} 
                onChange={(e) => setZipCode(e.target.value)} 
                onBlur={handleBlur} 
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                required 
              />
              {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
