import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader color="#1c1c1c" size={50} />
    </div>
  );
};
