import styles from './style.module.css';

const Contact = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <h4> Just say <span>hello!</span></h4>
          <p>⭐If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I'd love to help with it. You can contact me via mail or simply click on the social media icon. Let's connect⭐</p>
          <p> Or </p>
          <a href="mailto:anabecdev@gmail.com">Send Email</a>
        </div>
        <div className={styles.rightContainer}>
          <h4> Contact <span>Information </span></h4>
        </div>
      </div>
    </>
  );
};
  
  export default Contact;