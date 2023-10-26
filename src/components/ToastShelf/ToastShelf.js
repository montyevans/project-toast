import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, setToastList }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
        <li className={styles.toastWrapper} key={toast.toastId}>
          <Toast
            toastId={toast.toastId}
            variant={toast.variant}
            message={toast.message}
            setToastList={setToastList}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
