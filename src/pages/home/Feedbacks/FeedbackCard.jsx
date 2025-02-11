import styles from "./FeedbackCard.module.scss";

export default function FeedbackCard({ data }) {
  const { id, body, parent, illustration } = data;
  return (
    <div className={styles.card}>
      <p>{data.body}</p>
      <div className={styles.parentDetails}>
        <div className={styles.profile}>
          <p className={`title ${styles.initial}`}>{parent.initial}</p>
          {parent.image && (
            <img src={parent.image} alt="Parent Profile Image" />
          )}
        </div>
        <div className={`title ${styles.name}`}>{parent.name}</div>
      </div>
      <div className={styles.illustrationWraper}>
        <img
          className={styles.illustration}
          src={illustration}
          alt="illustration"
        />
      </div>
    </div>
  );
}
