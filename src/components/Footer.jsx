import NewsletterForm from './NewsletterForm';
import styles from './Footer.module.css';

const footerLinks = [
  {
    title: 'Produtos',
    items: ['Açúcar refinado', 'Demerara', 'Orgânico', 'Linha gourmet'],
  },
  {
    title: 'Receitas',
    items: ['Bolos', 'Sobremesas', 'Bebidas', 'Doces de festa'],
  },
  {
    title: 'Institucional',
    items: ['Nossa história', 'Sustentabilidade', 'Contato', 'Fale conosco'],
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/logo.svg" alt="União" loading="lazy" />
            <p>
              Mais de um século adoçando momentos especiais com qualidade, inovação e cuidado.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className={styles.heading}>{group.title}</p>
              <ul className={styles.linkList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.newsletter}>
            <p className={styles.heading}>Receba novidades</p>
            <NewsletterForm compact />
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} União. Todos os direitos reservados.</span>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram da União">
              Instagram
            </a>
            <a href="#" aria-label="YouTube da União">
              YouTube
            </a>
            <a href="#" aria-label="Facebook da União">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
