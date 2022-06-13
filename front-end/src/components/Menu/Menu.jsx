import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className="w-10/12 m-auto">
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Category</li>
        <li>About</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Connect</li>
      </ul>
    </div>
  );
};

export default Menu;
