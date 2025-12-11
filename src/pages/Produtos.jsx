import PageBanner from '../components/PageBanner';
import ProductCard from '../components/ProductCard';
import { productHighlights } from '../data/content';
import usePageTitle from '../hooks/usePageTitle';
import styles from './PageLayout.module.css';

function Produtos() {
  usePageTitle('Produtos');

  return (
    <main>
      <PageBanner
        kicker="Produtos União"
        title="Portfólio completo para cada preparo"
        description={`Açúcares e adoçantes pensados para diferentes texturas, doçuras e momentos, mantendo a identidade da marca.`}
      />
      <section className={styles.section} aria-labelledby="lista-produtos">
        <div className="container">
          <h2 id="lista-produtos" className="section-title">
            Linhas principais
          </h2>
          <p className="section-subtitle">
            Encontre o produto ideal para confeitaria, bebidas, geleias ou pratos especiais.
          </p>
          <div className={styles.gridTwo}>
            {productHighlights.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Produtos;
