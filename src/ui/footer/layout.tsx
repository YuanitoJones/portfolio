import { socialMedia } from "../../const/socialMediaLinks";
import { Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <h1>Mis redes sociales</h1>
        <div className="socialMediaList">
          {Object.keys(socialMedia).map((link: string) => {
            return (
              <div key={link} className="socialMediaElement">
                <p>{link}:</p>
                <span>{socialMedia[link]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
