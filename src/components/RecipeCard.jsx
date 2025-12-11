import styles from './RecipeCard.module.css';

function RecipeCard({ recipe }) {
  return (
    <article className={`card ${styles.card}`}>
      <img
        className={styles.image}
        src={recipe.image}
        alt={`Receita União: ${recipe.title}`}
        loading="lazy"
      />
      <h3 className="section-title" style={{ fontSize: '22px', marginBottom: 6 }}>
        {recipe.title}
      </h3>
      <div className={styles.meta}>
        <span>{recipe.time}</span>
        <span>{recipe.difficulty}</span>
      </div>
    </article>
  );
}

export default RecipeCard;
