import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const ContactForm = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className={`mt-8`}>
      <div className="flex flex-col mb-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className={`border rounded-md py-2 px-3 focus:outline-none focus:border-slate-700 ${isDarkMode && 'bg-zinc-900'}`}
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={`border rounded-md py-2 px-3 focus:outline-none focus:border-slate-700  ${isDarkMode && 'bg-zinc-900'}`}
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          className={`border rounded-md py-2 px-3 focus:outline-none focus:border-slate-700 ${isDarkMode && 'bg-zinc-900'} `}
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-slate-600 text-white py-2 px-4 rounded-md w-full">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;