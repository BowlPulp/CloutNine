import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight, FiSun, FiMoon } from "react-icons/fi";

const FlipNavWrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <FlipNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

const FlipNav = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`p-4 border-b-[1px] ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex items-center justify-between relative`}>
      <NavLeft setIsOpen={setIsOpen} isDarkMode={isDarkMode} />
      <NavRight isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <NavMenu isOpen={isOpen} isDarkMode={isDarkMode} />
    </nav>
  );
};

const Logo = ({ isDarkMode }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Logo"
        width={40}
        height={32}
        className="object-contain"
      />
      <p className={`text-xl font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>CloutNine</p>
    </div>
  );
};

const NavLeft = ({ setIsOpen, isDarkMode }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`block lg:hidden text-2xl ${isDarkMode ? 'text-white' : 'text-gray-950'}`}
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo isDarkMode={isDarkMode} />
      <NavLink text="Home" isDarkMode={isDarkMode} />
      <NavLink text="About" isDarkMode={isDarkMode} />
      <NavLink text="Portfolio" isDarkMode={isDarkMode} />
      <NavLink text="Contact" isDarkMode={isDarkMode} />
    </div>
  );
};

const NavLink = ({ text, isDarkMode }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className={`flex items-center h-[30px] ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{text}</span>
        <span className={`flex items-center h-[30px] ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`}>
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`p-2 rounded-full transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen, isDarkMode }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className={`absolute p-4 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <MenuLink text="Home" isDarkMode={isDarkMode} />
      <MenuLink text="About" isDarkMode={isDarkMode} />
      <MenuLink text="Portfolio" isDarkMode={isDarkMode} />
      <MenuLink text="Contact" isDarkMode={isDarkMode} />
    </motion.div>
  );
};

const MenuLink = ({ text, isDarkMode }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className={`h-[30px] ${isDarkMode ? 'text-white' : 'text-gray-950'}`} />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className={`flex items-center h-[30px] ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{text}</span>
        <span className={`flex items-center h-[30px] ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`}>
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};