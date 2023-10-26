import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey.hook";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const onEscape = React.useCallback(() => setToastList([]), []);

  useEscapeKey(onEscape);

  function addToast(message, variant) {
    const newToast = {
      toastId: crypto.randomUUID(),
      message,
      variant,
    };
    setToastList([...toastList, newToast]);
  }

  function removeToast(id) {
    setToastList(toastList.filter((toast) => toast.toastId !== id));
  }

  const contextValue = {
    toastList,
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
