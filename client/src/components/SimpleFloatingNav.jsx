import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Example = () => {
  return <SimpleFloatingNav />;
};

const SimpleFloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-[50%] top-8 z-[9999] w-fit -translate-x-[50%] text-sm text-[var(--primary)]">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-100 p-2">
        <Logo />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <JoinButton to="/contact" />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between bg-neutral-100 rounded-lg border-[1px] border-neutral-700 p-2 w-[90vw] max-w-[400px]">
        <Logo />
        <button
          onClick={toggleMenu}
          className="z-[10000] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative">
            <span
              className={`absolute h-0.5 w-full bg-[var(--primary)] transition-all duration-300 ${
                isOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-[var(--primary)] top-2 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-[var(--primary)] transition-all duration-300 ${
                isOpen ? "-rotate-45 top-2.5" : "top-4"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden absolute top-16 left-[50%] -translate-x-[50%] w-[90vw] max-w-[400px] bg-neutral-100 border-[1px] border-neutral-700 rounded-lg overflow-hidden"
      >
        <div className="flex flex-col p-4 gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </NavLink>
          <JoinButton to="/contact" onClick={() => setIsOpen(false)} />
        </div>
      </motion.div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Logo"
        width={40}
        height={32}
        className="object-contain"
      />
      <p className="text-xl font-bold text-[var(--primary)]">CloutNine</p>
    </Link>
  );
};

const NavLink = ({ children, to, onClick }) => {
  return (
    <Link to={to} className="block overflow-hidden" onClick={onClick}>
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-[#090909]">
          {children}
        </span>
      </motion.div>
    </Link>
  );
};

const JoinButton = ({ to, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
        border-neutral-700 px-4 py-1.5 font-medium
        text-[var(--primary)] transition-all duration-300
        before:absolute before:inset-0
        before:-z-10 before:translate-y-[200%]
        before:scale-[2.5]
        before:rounded-[100%] before:bg-neutral-50
        before:transition-transform before:duration-1000
        before:content-[""]
        hover:scale-105 hover:border-neutral-50 hover:text-[var(--accent)]
        hover:before:translate-y-[0%]
        active:scale-100
      `}
    >
      Contact Us
    </Link>
  );
};