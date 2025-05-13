import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";

const FlipNavWrapper = () => {
  return (
    <div className="bg-gray-50">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle closing the menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="p-4 border-b-[1px] bg-white border-gray-200 flex items-center justify-between relative z-50">
      <NavLeft setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} handleLinkClick={handleLinkClick} />
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Logo"
        width={40}
        height={32}
        className="object-contain"
      />
      <p className="text-xl font-bold text-blue-800">CloutNine</p>
    </div>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-2xl text-gray-950"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Home" href="/" />
      <NavLink text="About" href="/about" />
      <NavLink text="Services" href="/services" />
      <NavLink text="Portfolio" href="/portfolio" />
      <NavLink text="Contact" href="/contact" />
    </div>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <a
      href={href}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavMenu = ({ isOpen, handleLinkClick }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 bg-white z-40"
    >
      <MenuLink text="Home" href="/" handleClick={handleLinkClick} />
      <MenuLink text="About" href="/about" handleClick={handleLinkClick} />
      <MenuLink text="Services" href="/services" handleClick={handleLinkClick} />
      <MenuLink text="Portfolio" href="/portfolio" handleClick={handleLinkClick} />
      <MenuLink text="Contact" href="/contact" handleClick={handleLinkClick} />
    </motion.div>
  );
};

const MenuLink = ({ text, href, handleClick }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      href={href}
      onClick={handleClick}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
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