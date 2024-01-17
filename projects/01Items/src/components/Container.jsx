import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

// props.children sa hm parent k traf sa wala value access karenga/
//sara value hm parent sa la raha han or hm props.children k help sa use karenga