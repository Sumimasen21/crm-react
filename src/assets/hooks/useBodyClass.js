import { useEffect } from "react";

export default function useBodyClass(className) {
  useEffect(() => {
    return () => {
      document.body.className = className;
    };
  }, [className]);
}
// Как динамически менять класс только у body, я так и не понял, пришлось вот так :)