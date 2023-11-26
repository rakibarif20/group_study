import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";


const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    pages,
  } = useGlobalContext();
  const container = useRef(null);
  const {page,links} = pages;
  const [columns,setColumns] = useState('col-2')
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    setColumns('col-2')
    if(links.length===3){
      setColumns('col-3')
    }
    if(links.length >3){
      setColumns('col-4')
    }
  }, [location,columns]);
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { icon, url, label } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
