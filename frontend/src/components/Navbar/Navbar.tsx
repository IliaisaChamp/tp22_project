import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo_container}>
          <img
            className={styles.logo_img}
            src='/public/logo.svg'
            alt='логотип IT-карточек'
          />
          <h1 className={styles.logo_text}>IT-cards</h1>
        </div>
        <button className={styles.logout_button}>
          <div>Выход</div>
          <div className={styles.logout_img}></div>
        </button>
      </nav>
    </header>
  );
};
