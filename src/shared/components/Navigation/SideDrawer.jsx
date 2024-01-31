import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./CSS/SideDrawer.css";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

SideDrawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideDrawer;
