import { heroHighlight } from '../data/content';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className="container" aria-labelledby="hero-title">
      <div className={styles.hero}>
        <div>
          <span className="tagline">Tradição que adoça o Brasil</span>
          <h1 id="hero-title" className="section-title hero-text">
            {heroHighlight.title}
          </h1>
          <p className="section-subtitle">{heroHighlight.subtitle}</p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href={heroHighlight.ctaPrimary.href}>
              {heroHighlight.ctaPrimary.label}
            </a>
            <a className="btn btn-secondary" href={heroHighlight.ctaSecondary.href}>
              {heroHighlight.ctaSecondary.label}
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statCircle} aria-hidden="true" />
              <strong>Mais de 100 anos de história</strong>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statCircle} aria-hidden="true" />
              <strong>Portfólio completo para todas as receitas</strong>
            </div>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80"
            alt="Mesa com bolo e ingredientes preparados com açúcar União"
            loading="lazy"
          />
          <div className={styles.accentCard}>
            <p className="badge">Receitas testadas e aprovadas</p>
            <small>Passo a passo claro e ingredientes selecionados.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
