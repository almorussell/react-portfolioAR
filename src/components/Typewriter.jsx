import { useState, useEffect } from "react";


function Typewriter() {
  const text = "Thanks for stopping by ❤︎⁠";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 30 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return <h1 className="typewriter">
    {displayText}
    <span className="cursor">_</span>
    </h1>;
}

export default Typewriter;

