import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare,faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import {Helmet} from "react-helmet";


const Contact = () => {
  return (
    <>
      <Helmet>
        <style>{`body {
                  overflow-y: hidden; 
                }`}
        </style>
      </Helmet>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <h4> Just say <span>hello!</span></h4>
          <p>⭐If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I'd love to help with it. You can contact me via mail or simply click on the social media icon. Let's connect⭐</p>
        </div>
        <div className={styles.rightContainer}>
          <h4> Contact <span>Information </span></h4>
          <div className={styles.iconsBarContact}>
        <a href="https://github.com/Ana-Becerril">
            <FontAwesomeIcon icon ={faGithubSquare} className={styles.githubIcon}/>
        </a>
        <a href="https://www.linkedin.com/in/anabecbel/">
            <FontAwesomeIcon icon ={faLinkedin} className={styles.linkedinIcon}/>
        </a>
        <a href="https://twitter.com/karenbecbel">
            <FontAwesomeIcon icon ={faTwitterSquare} className={styles.twitterIcon}/>
        </a>
        <a href="https://wa.me/525585516701">
            <FontAwesomeIcon icon ={faWhatsappSquare} className={styles.whatsappIcon}/>
        </a>
        </div>
        </div>
      </div>
    </>
  );
};
  
  export default Contact;