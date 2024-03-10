import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useForm } from 'react-hook-form';
import Alert from './Alert';
import { PulseLoader } from 'react-spinners';

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const botToken = '7134695920:AAFvG_6zDXZsWV13CE5f4t9T8_bZwKythfo';
  const chatId = '6683825647';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const removeAlert = () => {
    setSuccess(false);
    setError(false);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setShowButton(false);
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        }),
      });
      response.ok ? setSuccess(true) : setError(true);
      response.ok && reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setError(true);
    } finally {
      setLoading(false);
      setShowButton(true);
    }
  };

  const darkModeClass = isDarkMode ? 'text-white bg-zinc-900' : '';

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={`mt-8`} noValidate>
        {success ? <Alert classname={'bg-green-300'} icon={'✔'} status="Success!" message="Your message has been sent 😊" onClick={removeAlert} /> : ''}
        {error ? <Alert classname={'bg-red-300'} icon={'✖'} status="Error!" message="Something went wrong. Please try again later." onClick={removeAlert} /> : ''}
        <div className="flex flex-col mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            {...register('name', { required: 'Please enter username' })}
            aria-invalid={errors.name ? 'true' : 'false'}
            className={`border rounded-md py-2 px-3 focus:outline-none focus:border-slate-700 ${darkModeClass}`}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address. Please use example@example.com format',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
            className={`border rounded-md py-2 px-3 focus:outline-none focus:border-slate-700  ${darkModeClass}`}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            {...register('message', { required: 'Please enter message' })}
            rows="4"
            aria-invalid={errors.message ? 'true' : 'false'}
            className={`border rounded-md py-2 px-3 focus:outline-none focus:border-slate-700 ${darkModeClass} `}
          ></textarea>
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>

        {showButton && (
          <button type="submit" className="bg-slate-600 text-white py-2 px-4 rounded-md w-full">
            Send Message
          </button>
        )}
        {loading && (
          <div className="flex justify-center">
            <PulseLoader size={15} color="#1e293b" speedMultiplier={0.5} />
          </div>
        )}
      </form>
    </>
  );
};

export default ContactForm;
