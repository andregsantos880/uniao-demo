import Hero from '../components/Hero';
import NewsletterForm from '../components/NewsletterForm';
import ProductCard from '../components/ProductCard';
import RecipeCard from '../components/RecipeCard';
import { productHighlights, recipeCards, storyHighlights } from '../data/content';
import usePageTitle from '../hooks/usePageTitle';
import styles from './Home.module.css';

function Home() {
  usePageTitle('Início');

  return (
    <main>
      <Hero />

      <section className={`section-bg ${styles.section}`} aria-labelledby="produtos">
        <div className="container">
          <h2 id="produtos" className="section-title">
            Produtos União
          </h2>
          <p className="section-subtitle">
            Portfólio completo para adoçar, decorar e trazer textura às suas receitas favoritas.
          </p>
          <div className={styles.productGrid}>
            {productHighlights.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="receitas">
        <div className="container">
          <h2 id="receitas" className="section-title">
            Receitas em destaque
          </h2>
          <p className="section-subtitle">
            Dicas práticas e combinações criativas para surpreender a família e os amigos.
          </p>
          <div className={styles.recipeGrid}>
            {recipeCards.map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section-bg ${styles.section}`} aria-labelledby="historia">
        <div className="container">
          <h2 id="historia" className="section-title">
            História que conecta gerações
          </h2>
          <p className="section-subtitle">
            União está presente em mesas brasileiras há mais de um século, celebrando datas e conquistas.
          </p>
          <div className={styles.storyStrip}>
            {storyHighlights.map((story) => (
              <div className={styles.storyItem} key={story.title}>
                <h3 className="section-title" style={{ fontSize: '20px' }}>
                  {story.title}
                </h3>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  {story.description}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.bannerRow}>
            <div className={styles.bannerCard}>
              <p className="badge">Sustentabilidade</p>
              <h3 className="section-title" style={{ fontSize: '22px' }}>
                Cana responsável do campo à mesa
              </h3>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Programas socioambientais, uso consciente da água e energia renovável em nossas operações.
              </p>
            </div>
            <div className={styles.bannerCard}>
              <p className="badge">Inovação</p>
              <h3 className="section-title" style={{ fontSize: '22px' }}>
                Linha completa para confeitaria
              </h3>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Açúcar de confeiteiro, mascavo, demerara e mais, sempre com a qualidade União.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="newsletter">
        <div className="container" style={{ display: 'grid', gap: '18px' }}>
          <h2 id="newsletter" className="section-title">
            Cadastre-se e receba inspirações
          </h2>
          <p className="section-subtitle">
            Receba receitas sazonais, coleções temáticas e novidades do portfólio diretamente no seu e-mail.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}

export default Home;
