import styles from './Card.module.css'

const Card = ({title, body}) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default Card
