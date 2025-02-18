import { useEffect, useState } from "react";

interface Props {
  filename: string;
}

const TextLoader = ({ filename }: Props) => {
  const [title, setTitle] = useState<string | null>(null);
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    const loadTextFile = async () => {
      try {
        const response = await fetch(`${window.location.origin}/${filename}`);
        const text = await response.text();
        const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");

      if (lines.length > 0) {
        setTitle(lines[0]); // First line is the title
        setParagraphs(lines.slice(1)); // Remaining lines are paragraphs
      } else {
        setTitle(null);
        setParagraphs([]);
      }

    } catch (error) {
        console.error("Error loading text file:", error);
      }
    };

    loadTextFile();
  }, [filename]);

  return (
    <div>
      {title && <h2>{title}</h2>}
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default TextLoader;
