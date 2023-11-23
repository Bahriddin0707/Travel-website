import styles from "./Row.module.css"

const Row = (props) => {
  return (
      <div className={styles.grid}>
        {props.children}
      </div>
  );
};

export default Row;
