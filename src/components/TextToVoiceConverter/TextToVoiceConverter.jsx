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
  }, [isPlaying]);

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
    <div className="bg-white  h-full w-full flex flex-col items-center justify-center pb-4">
      
      <textarea
        className="bg-white border border-cyan-600  w-full h-72 px-4 py-2 rounded-lg resize-none outline-none  mb-5"
        placeholder="Write anything here"
        value={textToSpeech}
        onChange={handleTextChange}
      ></textarea>
      <div className="flex items-center gap-4">
        <select
          className="border border-cyan-600  h-10 px-4 py-2 rounded-lg appearance-none"
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
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center  gap-1"
          onClick={toggleAudio}
        >
          {isPlaying ? <FaPause /> : <FaPlay />} Listen
        </button>
      </div>
    </div>
  );
}

export default TextToVoiceConverter;
