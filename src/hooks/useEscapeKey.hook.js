import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeypress(event) {
      if (event.key === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [callback]);
}

export default useEscapeKey;
