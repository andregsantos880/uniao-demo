import PageBanner from '../components/PageBanner';
import usePageTitle from '../hooks/usePageTitle';
import styles from './PageLayout.module.css';

const pillars = [
  {
    title: 'Agricultura regenerativa',
    description: 'Iniciativas para preservar o solo, promover biodiversidade e reduzir emissões na cadeia.',
  },
  {
    title: 'Comunidades parceiras',
    description: 'Programas de capacitação e apoio a produtores rurais e colaboradores.',
  },
  {
    title: 'Recursos hídricos',
    description: 'Uso consciente da água e reaproveitamento em processos industriais.',
  },
  {
    title: 'Energia limpa',
    description: 'Investimento em biomassa e fontes renováveis para operações mais eficientes.',
  },
];

function Sustentabilidade() {
  usePageTitle('Sustentabilidade');

  return (
    <main>
      <PageBanner
        kicker="Sustentabilidade"
        title="Cuidado com o futuro"
        description={`Compromissos ambientais e sociais alinhados ao que o site original apresenta.`}
      />
      <section className={styles.section} aria-labelledby="pilares">
        <div className="container">
          <h2 id="pilares" className="section-title">
            Principais pilares
          </h2>
          <div className={styles.gridTwo}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className={styles.card}>
                <h3 className="section-title" style={{ fontSize: '20px' }}>
                  {pillar.title}
                </h3>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sustentabilidade;
