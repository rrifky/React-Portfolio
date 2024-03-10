import ContactForm from '../components/Elements/ContactForm';
import Sosmed from '../components/Elements/Sosmed';
import TitleSection from '../components/Elements/TitleSection';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ContactPages = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-zinc-900' : 'bg-white'} `}>
      <div className={`mx-auto max-w-[340px] mb-8 md:max-w-[720px] lg:max-w-[920px]`}>
        <motion.div className="mt-16 xl:mt-0 xl:ml-8" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className={`text-xl md:text-3xl font-medium pt-5 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>Contact</div>
          <div className={`border-t border-slate-300 pt-5 mt-2 md:text-lg  ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Let's Connect</div>
          <div className="flex flex-wrap my-6">
            <Sosmed url={'https://www.linkedin.com/in/rifky-alfarez-8b53bb2b6/'} classname={'bg-[#0A66C2]'} icon={<FaLinkedin />} title="Linkedin" />
            <Sosmed url={'https://github.com/rrifky'} target={'_blank'} classname={'bg-[#171515]'} icon={<FaGithub />} title="Github" />
            <Sosmed url={'https://www.instagram.com/rrfkyalf/'} target={'_blank'} classname={'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'} icon={<FaInstagram />} title="Instagram" />
            <Sosmed url={'https://wa.me/6289650104144'} target={'_blank'} classname={'bg-[#075e54]'} icon={<FaWhatsapp />} title="WhatsApp" />
          </div>
          <div className={`md:text-lg ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Leave a Message</div>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPages;
