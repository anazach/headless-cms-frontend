import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/navbar.css";

const Navbar = () => {
  const [menuItem, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get("wp-json/wp/v2/menu");

      const items = await response.data;
      setMenuItems(items);
    };
    fetchData();
  }, []);

  const removeSpaceFromString = (str) => {
    let cleanStr = str.replace(/\s/g, "");
    return cleanStr;
  };

  return (
    <nav>
      {menuItem.map((item, i) => (
        <li key={i}>
          {item.title === "Frontpage" ? (
            <Link to="/">{item.title}</Link>
          ) : (
            <Link to={removeSpaceFromString(item.title)}>{item.title}</Link>
          )}
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
