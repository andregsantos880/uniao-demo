import PageBanner from '../components/PageBanner';
import usePageTitle from '../hooks/usePageTitle';
import styles from './PageLayout.module.css';

const timeline = [
  {
    year: '1914',
    text: 'Nasce a marca União, introduzindo padrões de qualidade inéditos para o açúcar refinado.',
  },
  {
    year: '1960',
    text: 'Expansão das linhas e campanhas que marcam a cultura gastronômica brasileira.',
  },
  {
    year: '2000+',
    text: 'Portfólio diversificado com demerara, orgânico e soluções para confeitaria profissional.',
  },
];

function Historia() {
  usePageTitle('História');

  return (
    <main>
      <PageBanner
        kicker="História União"
        title="Mais de um século adoçando memórias"
        description={`Uma trajetória de inovação, cuidado com o campo e conexão afetiva com quem cozinha.`}
      />
      <section className={styles.section} aria-labelledby="linha-do-tempo">
        <div className="container">
          <h2 id="linha-do-tempo" className="section-title">
            Linha do tempo
          </h2>
          <div className={styles.gridTwo}>
            {timeline.map((item) => (
              <div key={item.year} className={styles.card}>
                <p className="badge">{item.year}</p>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Historia;
