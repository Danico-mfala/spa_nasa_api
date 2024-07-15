import React, { useState, useEffect } from "react";
import "../assets/css/Typewriter.css";

interface TypewriterProps {
    text: string[];
    speed?: number;
    pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    speed = 100,
    pauseTime = 1500,
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < text[index].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index][charIndex]);
                setCharIndex(charIndex + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const pauseTimeout = setTimeout(() => {
                setDisplayedText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % text.length);
            }, pauseTime);
            return () => clearTimeout(pauseTimeout);
        }
    }, [charIndex, index, text, speed, pauseTime]);

    return (
        <span className="typewriter">
            {displayedText}
            <span className="cursor">|</span>
        </span>
    );
};

export default Typewriter;
