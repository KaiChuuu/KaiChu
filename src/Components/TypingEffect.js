import React, { useState, useEffect } from 'react';

function TypingEffect({ texts, typingSpeed = 150, pauseTime = 1000 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const fullText = currentText || '';

    if (isDeleting) {
      // Handle deleting the text
      if (displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    } else {
      // Handle typing the text
      if (displayedText.length < fullText.length) {
        setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else if (!isPaused) {
        // Start the pause timer after typing is complete
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    }
  }, [displayedText, isDeleting, texts, currentIndex, typingSpeed, pauseTime, isPaused]);

  return (
    <div>
      {displayedText}
    </div>
  );
}

export default TypingEffect;