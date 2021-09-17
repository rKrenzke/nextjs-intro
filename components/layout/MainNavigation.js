import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Indy Zoo</div>
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
