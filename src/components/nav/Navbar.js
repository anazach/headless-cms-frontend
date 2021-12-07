import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/navbar.css";

const Navbar = () => {
  const [menuItem, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost/wpreact/wp-json/wp/v2/menu");
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
 
<nav className="flex items-center justify-between p-10 bg-gray-50">

<div className="flex items-center flex-shrink-0 text-black mr-6">
  <Link to="/" className="font-bold text-3xl">RaiseIT</Link>
</div>

<div className="flex flex-row sm:flex sm:items-center sm:w-auto">

  <div className="flex text-sm sm:flex-grow">
  {menuItem.map((item, i) => (
        <li key={i}>
          {item.title === "Frontpage" ? (
            <Link to="/">{item.title}</Link>
          ) : (
            <Link to={removeSpaceFromString(item.title)}
            className="text-xl font-semibold"
            >{item.title}
            </Link>
          )}
        </li>
      ))}
  </div>

</div>
</nav>



    
  );
};

export default Navbar;
