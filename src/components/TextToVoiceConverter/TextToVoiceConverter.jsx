/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaArrowDown } from "react-icons/fa";

function TextToVoiceConverter() {
  const [voices, setVoices] = useState([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
  const [textToSpeech, setTextToSpeech] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize the speech synthesis and get available voices when the component mounts.
    initSpeechSynthesis();
  }, []);

  useEffect(() => {
    // Handle audio play and pause when isPlaying changes.
    if (isPlaying) {
    playAudio();
    } else {
      pauseAudio();
    }
  }, [isPlaying, playAudio]);

  const initSpeechSynthesis = () => {
    const availableVoices = window.speechSynthesis.getVoices();
    setVoices(availableVoices);
  };

  const handleVoiceChange = (event) => {
    setSelectedVoiceIndex(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextToSpeech(event.target.value);
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const playAudio = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.voice = voices[selectedVoiceIndex];
    speech.text = textToSpeech;
    window.speechSynthesis.speak(speech);
  };

  const pauseAudio = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="bg-gradient-to-br from-blue-800 to-purple-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white font-semibold mb-5">
        Text to Speech Converter
      </h1>
      <textarea
        className="bg-purple-800 text-white w-96 h-48 px-4 py-2 rounded-lg resize-none outline-none border-0 mb-5"
        placeholder="Write anything here"
        value={textToSpeech}
        onChange={handleTextChange}
      ></textarea>
      <div className="flex items-center gap-4">
        <select
          className="text-white bg-purple-800 h-10 px-4 py-2 rounded-lg appearance-none"
          value={selectedVoiceIndex}
          onChange={handleVoiceChange}
        >
          {voices.map((voice, index) => (
            <option key={index} value={index}>
              {voice.name}
              <FaArrowDown></FaArrowDown>
            </option>
          ))}
        </select>
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center"
          onClick={toggleAudio}
        >
          {isPlaying ? <FaPause /> : <FaPlay />} Listen
        </button>
      </div>
    </div>
  );
}

export default TextToVoiceConverter;
