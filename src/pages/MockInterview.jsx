import { useState } from 'react';
import { Mic, MicOff, Video, Monitor, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MockInterviewPage() {
  const navigate = useNavigate();
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [screenShare, setScreenShare] = useState(false);
  const [showEndPopup, setShowEndPopup] = useState(false);

  const transcript = [
    { id: 1, sender: 'recruiter', text: 'Welcome to your mock interview!' },
    { id: 2, sender: 'user', text: 'Hi! Happy to be here.' },
    { id: 3, sender: 'recruiter', text: 'Can you tell me about your last project?' },
    { id: 4, sender: 'user', text: 'Sure! I built a React + Tailwind dashboard project.' },
  ];

  const handleEndCall = () => {
    setShowEndPopup(true);
  };

  const handleOk = () => {
    setShowEndPopup(false);
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row gap-4 p-4 relative">
      {/* Left Side: Video + Controls */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl text-green-400 font-bold text-center mb-2">Mock Interview Session</h2>

        <div className="flex-1 flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-gray-800 border border-white/10 rounded-2xl flex flex-col">
            <div className="bg-black p-2 text-center text-white font-semibold rounded-t-xl">
              Recruiter
            </div>
            <div className="flex-1 bg-black rounded-b-2xl flex items-center justify-center text-white text-xl min-h-[200px] md:min-h-[250px]">
              Video Feed
            </div>
          </div>

          <div className="flex-1 bg-black border border-white/10 rounded-2xl flex flex-col">
            <div className="bg-black p-2 text-center text-white font-semibold rounded-t-xl">
              You
            </div>
            <div className="flex-1 bg-black rounded-b-2xl flex items-center justify-center text-white text-xl min-h-[200px] md:min-h-[250px]">
              Video Feed
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-2">
          <button
            onClick={() => setMicOn(!micOn)}
            className={`p-3 rounded-full border border-white/20 transition-colors ${
              micOn ? 'bg-black/30' : 'bg-red-500'
            }`}
          >
            {micOn ? <Mic className="w-5 h-5 text-white" /> : <MicOff className="w-5 h-5 text-white" />}
          </button>
          <button
            onClick={() => setCameraOn(!cameraOn)}
            className={`p-3 rounded-full border border-white/20 transition-colors ${
              cameraOn ? 'bg-black/30' : 'bg-red-500'
            }`}
          >
            <Video className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setScreenShare(!screenShare)}
            className={`p-3 rounded-full border border-white/20 transition-colors ${
              screenShare ? 'bg-green-500' : 'bg-black/30'
            }`}
          >
            <Monitor className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleEndCall}
            className="p-3 rounded-full border border-red-500 bg-red-600 hover:bg-red-700 transition-colors"
          >
            <Phone className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Right Side: Transcript Panel */}
      <div className="w-full md:w-1/3 flex flex-col gap-4 mt-4 md:mt-0">
        <h2 className="text-green-400 font-bold text-xl text-center">Voice to Text</h2>
        <div className="bg-black-600 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex flex-col gap-2 overflow-y-auto h-[120px] md:h-auto">
          {transcript.map((t) => (
            <div
              key={t.id}
              className={`p-2 rounded-lg max-w-[80%] break-words ${
                t.sender === 'user'
                  ? 'ml-auto bg-green-500 text-white shadow-lg'
                  : 'mr-auto bg-gray-900 text-gray-200'
              }`}
            >
              {t.text}
            </div>
          ))}
        </div>
      </div>

      {/* End Call Popup */}
      {showEndPopup && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-6 w-80 flex flex-col items-center gap-4">
            <h3 className="text-white text-lg font-bold">End Call?</h3>
            <p className="text-gray-300 text-center">You will return to Dashboard.</p>
            <button
              onClick={handleOk}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
