import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <article className={`card ${styles.card}`}>
      <img
        className={styles.image}
        src={product.image}
        alt={`Produto União: ${product.title}`}
        loading="lazy"
      />
      <span className={styles.badge}>{product.badge}</span>
      <h3 className="section-title" style={{ fontSize: '22px', marginBottom: 4 }}>
        {product.title}
      </h3>
      <p className="section-subtitle" style={{ margin: 0 }}>
        {product.description}
      </p>
    </article>
  );
}

export default ProductCard;
