import { socialMedia } from "../../const/socialMediaLinks";
import "../../app/globals.css";

const Footer = () => {
  return (
    <footer>
      <div className="p-2 bg-steelblue-400">
        <h1>Mis redes sociales</h1>
        <div>
          {Object.keys(socialMedia).map((link) => (
            <div key={link} className="p-3">
              <p className="text-pretty">{link}:</p>
              <span className="text-red-100">{socialMedia[link]}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
