import React, { useState } from "react";

const ContactForm = ({ onValidityChange }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; phone?: string; email?: string }>({}); 


  const validateForm = () => {
    const newErrors: { firstName?: string; lastName?: string; phone?: string; email?: string } = {}; 

    if (!firstName.trim()) newErrors.firstName = "First name is required"; 

    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) newErrors.phone = "Invalid phone number, must be 10 digits";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email address";

    setErrors(newErrors);

    onValidityChange && onValidityChange(Object.keys(newErrors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid, submitting data...");
    }
  };

  const handleBlur = () => {
    validateForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-y-4">
          <div className="text-center">
            <label className="block text-xl font-bold mb-4 dark:text-white">Contact Information</label>
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">First Name</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} onBlur={handleBlur} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm mb-2 dark:text-white">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} onBlur={handleBlur} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Phone</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={handleBlur} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
