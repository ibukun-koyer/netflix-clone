import { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`Nav ${show && "show"}`}>
      <img
        className="netflix_logo"
        src="https://th.bing.com/th/id/R715e69176d3cec74504b3ae00f2676c6?rik=yoSpTrzjov6XKg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fNetflix_logo.png&ehk=vblLomxEOi9u3NalB5RKWNW%2bDE1zdZAPLeMukzmzS2E%3d&risl=&pid=ImgRaw"
      />
      <img
        className="avatar_logo"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
      />
    </div>
  );
}
export default Nav;
