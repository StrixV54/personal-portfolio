import React, {useState, useEffect} from 'react';
import "./Header.css";

function Header(){
    const [isScrolled,setScroll] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 30) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

    const [toggleShow, setShow] = useState(false);
    
    function toggler(){
      setShow(!toggleShow);
    }

    return (
        <header id="navbar" className={isScrolled && "fixed"}>
        <div className={"logo " + (isScrolled ? "show":"")}>
            <div>{"<"}<a href="#">Shrikant Vk</a>{"/>"}</div>
            <div className={"menu-icon "+(toggleShow?"show":"")} onClick={toggler}>
                <div className="line"></div>
            </div>
        </div>
        <ul style={{display: toggleShow?"block":"none"}}>
            <li><a href="#" onClick={toggler}>Home</a></li>
            <li><a href="#About" onClick={toggler}>About</a></li>
            <li><a href="#Skills" onClick={toggler}>Skills</a></li>
            <li><a href="#Projects" onClick={toggler}>Projects</a></li>
        </ul>
        </header>
    )
}
export default Header;