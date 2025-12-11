import styles from './NewsletterForm.module.css';

function NewsletterForm({ compact = false }) {
  return (
    <form className={styles.wrapper} aria-label="Inscrição em newsletter">
      <div className={styles.inputRow}>
        <label className="sr-only" htmlFor="news-name">
          Nome
        </label>
        <input
          id="news-name"
          name="name"
          type="text"
          className={styles.input}
          placeholder="Seu nome"
          required
        />
        <label className="sr-only" htmlFor="news-email">
          E-mail
        </label>
        <input
          id="news-email"
          name="email"
          type="email"
          className={styles.input}
          placeholder="seu@email.com"
          required
        />
        {!compact && (
          <button type="submit" className="btn btn-primary">
            Assinar
          </button>
        )}
      </div>
      {compact && (
        <button type="submit" className="btn btn-primary">
          Assinar newsletter
        </button>
      )}
      <small>
        Ao enviar você concorda em receber comunicações da marca União. Seus dados são protegidos.
      </small>
    </form>
  );
}

export default NewsletterForm;
