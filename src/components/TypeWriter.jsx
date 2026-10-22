import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Types each word, waits, deletes it, then moves to the next one.
export default function TypeWriter({ words, typeSpeed = 75, deleteSpeed = 40, pause = 1600 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduced]);

  if (reduced) return <span className="typed">{words[0]}</span>;

  return (
    <span className="typed" aria-hidden="true">
      {text}
      <span className="caret" />
    </span>
  );
}
