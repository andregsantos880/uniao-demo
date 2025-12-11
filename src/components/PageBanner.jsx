import styles from './PageBanner.module.css';

function PageBanner({ kicker, title, description }) {
  return (
    <section className={styles.banner} aria-labelledby="page-title">
      <div className="container">
        <p className={styles.kicker}>{kicker}</p>
        <div className={styles.text}>
          <h1 id="page-title" className="section-title">
            {title}
          </h1>
          <p className="section-subtitle">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
