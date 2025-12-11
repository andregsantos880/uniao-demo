import PageBanner from '../components/PageBanner';
import usePageTitle from '../hooks/usePageTitle';
import styles from './PageLayout.module.css';

function Contato() {
  usePageTitle('Contato');

  return (
    <main>
      <PageBanner
        kicker="Contato"
        title="Fale com a União"
        description={`Canais oficiais para sugestões, dúvidas e parcerias, preservando o tom institucional do site original.`}
      />
      <section className={styles.section} aria-labelledby="form-contato">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 id="form-contato" className="section-title">
            Envie sua mensagem
          </h2>
          <form className={styles.card}>
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" required style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" required style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)' }} />
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="4"
              required
              style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)', resize: 'vertical' }}
            />
            <button type="submit" className="btn btn-primary" style={{ marginTop: '12px', justifySelf: 'start' }}>
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contato;
