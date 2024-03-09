import React, { useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useForm } from 'react-hook-form';
import LoadingBar from 'react-top-loading-bar';

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const botToken = '7134695920:AAFvG_6zDXZsWV13CE5f4t9T8_bZwKythfo';
  const chatId = '6683825647';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      ref.current.continuousStart(); // Memulai loading bar
      ref.current.complete(); // Menyelesaikan loading bar
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

      if (response.ok) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false); // Nonaktifkan loading bar setelah pengiriman selesai
    }
  };

  const darkModeClass = isDarkMode ? 'text-white bg-zinc-900' : '';

  return (
    <>
      <LoadingBar color="#00ff62" ref={ref} />
      <form onSubmit={handleSubmit(onSubmit)} className={`mt-8`} noValidate>
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
          {errors.email && <span className="text-red-500">{errors.email.message}</span>} {/* Menampilkan pesan kesalahan */}
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
          {errors.message && <span className="text-red-500">{errors.message.message}</span>} {/* Menampilkan pesan kesalahan */}
        </div>

        <button type="submit" className="bg-slate-600 text-white py-2 px-4 rounded-md w-full">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
