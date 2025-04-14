import styles from "./AlphabetCard.module.css";

export const AlphabetCard = ({ letter, imageSrc, altText }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={altText} className={styles.signImage} />
      </div>
      <h2 className={styles.letter}>{letter}</h2>
    </article>
  );
};
