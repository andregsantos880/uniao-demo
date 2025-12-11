import PageBanner from '../components/PageBanner';
import RecipeCard from '../components/RecipeCard';
import NewsletterForm from '../components/NewsletterForm';
import { recipeCards } from '../data/content';
import usePageTitle from '../hooks/usePageTitle';
import styles from './PageLayout.module.css';

function Receitas() {
  usePageTitle('Receitas');

  return (
    <main>
      <PageBanner
        kicker="Receitas"
        title="Receitas testadas, do clássico ao contemporâneo"
        description={`Seleção de sobremesas, bebidas e preparos salgados para todos os níveis de habilidade.`}
      />
      <section className={styles.section} aria-labelledby="grade-receitas">
        <div className="container">
          <h2 id="grade-receitas" className="section-title">
            Destaques da temporada
          </h2>
          <div className={styles.gridTwo}>
            {recipeCards.map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="cta-news">
        <div className="container" style={{ display: 'grid', gap: '12px' }}>
          <h2 id="cta-news" className="section-title">
            Receba novas receitas
          </h2>
          <p className="section-subtitle">
            Inscreva-se para receber coleções exclusivas e guias temáticos inspirados no site original.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}

export default Receitas;
