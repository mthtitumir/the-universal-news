"use client";
import { useState, useEffect } from "react";

const TextToVoiceConverter = ({description}) => {
  console.log(description)
  const [isPlaying, setIsPlaying] = useState(false);
  const [textToRead, setTextToRead] = useState(description);
  const [speech] = useState(new SpeechSynthesisUtterance());
  const [showVoiceOptions, setShowVoiceOptions] = useState(false);

  useEffect(() => {
    const voicesList = window.speechSynthesis.getVoices();
    speech.voice = voicesList[0];

    window.speechSynthesis.onvoiceschanged = () => {
      const updatedVoicesList = window.speechSynthesis.getVoices();
      speech.voice = updatedVoicesList[0];
    };
  }, []);

  const togglePlayback = () => {
    if (isPlaying) {
      // Stop the audio
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Start playing the audio
      speech.text = textToRead;
      window.speechSynthesis.speak(speech);
      setIsPlaying(true);
    }
  };

  const handleButtonClick = () => {
    setShowVoiceOptions(true); // Show voice options when "Listen" is clicked
    togglePlayback();
  };

  useEffect(() => {
    // Add an event listener to reset UI after speech finishes
    speech.onend = () => {
      setIsPlaying(false);
      setShowVoiceOptions(false); // Hide voice options when speech ends
    };
  }, [speech]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Text to Speech Converter</h1>
      <button
        onClick={handleButtonClick}
        className={`px-4 py-2 rounded-md ${
          isPlaying ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isPlaying ? "Stop" : "Listen"}
      </button>
      <p id="textToRead" className="text-lg mt-4">
        {description.repeat(10).length > 500
          ? description.repeat(10).split(0, 501)
          : description.repeat(10)}
      </p>
    </div>
  );
};

export default TextToVoiceConverter;
