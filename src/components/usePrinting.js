import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// True while the page is being printed or saved as PDF,
// so shortened lists can show everything on paper.
export default function usePrinting() {
  const [printing, setPrinting] = useState(false);
  useEffect(() => {
    const on = () => flushSync(() => setPrinting(true));
    const off = () => setPrinting(false);
    window.addEventListener("beforeprint", on);
    window.addEventListener("afterprint", off);
    return () => {
      window.removeEventListener("beforeprint", on);
      window.removeEventListener("afterprint", off);
    };
  }, []);
  return printing;
}
