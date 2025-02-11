import styles from "./Pill.module.scss";

export default function Pill({ data }) {
  const { image, text, color } = data;
  return (
    <div
      className={styles.pill}
      style={{ backgroundColor: color ? color : null }}
    >
      {text && <h1>{text}</h1>}
      {image && <img src={image} alt="Illustration" />}
    </div>
  );
}
