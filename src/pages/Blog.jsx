import PageBanner from '../components/PageBanner';
import usePageTitle from '../hooks/usePageTitle';
import styles from './PageLayout.module.css';

const posts = [
  {
    title: 'Tendências de confeitaria para o próximo ano',
    summary: 'Cores vivas, texturas naturais e combinações de açúcares especiais.',
  },
  {
    title: 'Como escolher o açúcar ideal para cada preparo',
    summary: 'Diferenças práticas entre refinado, demerara, mascavo e orgânico.',
  },
  {
    title: 'Receitas para datas comemorativas',
    summary: 'Sugestões de sobremesas marcantes para compartilhar com a família.',
  },
];

function Blog() {
  usePageTitle('Blog');

  return (
    <main>
      <PageBanner
        kicker="Blog"
        title="Conteúdos e inspirações"
        description={`Guias rápidos, tendências e bastidores da marca inspirados no site original.`}
      />
      <section className={styles.section} aria-labelledby="lista-posts">
        <div className="container">
          <h2 id="lista-posts" className="section-title">
            Últimas publicações
          </h2>
          <div className={styles.gridTwo}>
            {posts.map((post) => (
              <article key={post.title} className={styles.card}>
                <p className="badge">Blog União</p>
                <h3 className="section-title" style={{ fontSize: '20px' }}>
                  {post.title}
                </h3>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  {post.summary}
                </p>
                <button className="btn btn-secondary" type="button" style={{ marginTop: '12px' }}>
                  Ler mais
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
