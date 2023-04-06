import {useEffect, useState} from "react";

export default function usePageVisibility() {
  const [visibilityStatus, setVisibilityStatus] = useState(true);

  const onFocus = () => {
    setVisibilityStatus(true)
  }

  const onBlur = () => {
    setVisibilityStatus(false)
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        onFocus()
      } else {
        onBlur()
      }
    });
    // Specify how to clean up after this effect:
    return () => {
      document.removeEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          onFocus()
        } else {
          onBlur()
        }
      });
    };
  });

  return visibilityStatus;
}