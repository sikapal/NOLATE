import React, { useState, useRef } from "react";

const AudioRecorde = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        const audioBlob = new Blob([event.data], { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Microphone access denied:", error);
      alert("Unable to access the microphone. Please grant permissions.");
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="p-4">
      {/* Recording Button */}
      <button
        className={`px-4 py-2 rounded ${
          isRecording ? "bg-red" : "bg-green"
        } text-white`}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? "Stop Recording" : "Add Audio"}
      </button>

      {/* Audio Card */}
      {audioURL && (
        <div className="mt-4 p-4 border rounded shadow-lg bg-white">
          <h4 className="text-lg font-bold">Recorded Audio</h4>
          <audio controls src={audioURL} className="w-full mt-2">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioRecorde;
