import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { motion, useCycle, AnimatePresence } from "framer-motion";

import "./DynamicFilter.css";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as ReactIcon } from "./icons/React-icon.svg";
import { ReactComponent as FullStackIcon } from "./icons/nodejs.svg";
import { ReactComponent as JSIcon } from "./icons/javascript.svg";

const svgVariants = {
  animateDown: {
    scale: 1.3,
    rotate: 0,
    y: 3,
    transition: {
      rotate: {
        duration: 0.5,
      },
      yoyo: Infinity,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  animateUp: {
    rotate: 180,
    y: -3,
    transition: {
      rotate: {
        duration: 0.5,
      },
      yoyo: Infinity,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const DynamicFilter = (props) => {
  const [stack, setStack] = useState("Menu");
  const [showDropDown, setShowDropDown] = useState(false);
  props.currentStack(stack);

  const changeStack = (name) => {
    setStack(name);
  };

  return (
    <>
      <h2
        style={{
          fontFamily: "roboto,Noto Sans Myanmar UI,arial,sans-serif",
          color: "#202124",
          lineHeight: "23px",
          marginTop: "17px",
        }}
      >
        {" "}
        Don't waste your time, dear visitor. Browse elegantly.
      </h2>
      <h4
        style={{
          fontFamily: "roboto,Noto Sans Myanmar UI,arial,sans-serif",
          color: "#202124",
          lineHeight: "23px",
          marginTop: "17px",
        }}
        className="react-love"
      >
        {" "}
        How could one not love React?
        <span role="img" aria-label="happy-face" className="happy-face">
          🤷🏻‍♀️
        </span>
      </h4>
      <Navbar>
        <NavItem
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
          icon={<CaretIcon />}
        >
          <DropdownMenu
            showDropDown={showDropDown}
            changeStack={changeStack}
          ></DropdownMenu>
        </NavItem>
      </Navbar>
    </>
  );
};

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const [animation, cycleAnimation] = useCycle("animateDown", "animateUp");
  return (
    <li className="nav-item">
      <motion.span
        className="icon-button"
        onClick={() => {
          setOpen(!open);
          cycleAnimation();
          props.setShowDropDown(!props.showDropDown);
        }}
        whileTap={{ scale: 0.8 }}
      >
        <motion.div
          variants={svgVariants}
          initial="initial"
          animate={animation}
        >
          {props.icon}
        </motion.div>
      </motion.span>

      {open && props.children}
    </li>
  );
};

const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const [stack, setStack] = useState("Menu");
  props.changeStack(stack);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = (props) => {
    return (
      <span
        className="menu-item"
        onClick={() => {
          setStack(props.name);
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        {/* <span className="icon-right">{props.rightIcon}</span> */}
      </span>
    );
  };

  return (
    <motion.div
      className="dropdown"
      style={{ height: menuHeight }}
      ref={dropdownRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            name="Menu"
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Choose a stack
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem name="Menu" goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Go back</h2>
          </DropdownItem>
          <DropdownItem
            name="React"
            leftIcon={<ReactIcon style={{ width: "100px", height: "100px" }} />}
          >
            React
          </DropdownItem>
          <DropdownItem name="Fullstack" leftIcon={<FullStackIcon />}>
            Fullstack
          </DropdownItem>
          <DropdownItem name="Javascript" leftIcon={<JSIcon />}>
            Vanilla Javascript
          </DropdownItem>
        </div>
      </CSSTransition>
    </motion.div>
  );
};

export default DynamicFilter;
