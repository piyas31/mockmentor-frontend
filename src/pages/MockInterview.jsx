import { useState } from 'react';
import { Mic, MicOff, Video, Monitor, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MockInterviewPage() {
  const navigate = useNavigate();
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [screenShare, setScreenShare] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [transcript, setTranscript] = useState([
    { id: 1, sender: 'recruiter', text: 'Welcome to your mock interview!' },
    { id: 2, sender: 'user', text: 'Hi! Happy to be here.' },
    { id: 3, sender: 'recruiter', text: 'Can you tell me about your last project?' },
    { id: 4, sender: 'user', text: 'Sure! I built a React + Tailwind dashboard project.' },
    { id: 5, sender: 'recruiter', text: 'Sounds great! What challenges did you face?' },
    { id: 6, sender: 'user', text: 'Mainly managing state efficiently and API integrations.' },
  ]);

  const handleEndCall = () => setShowEndModal(true);
  const handleConfirmEnd = () => navigate('/dashboard');
  const handleCancelEnd = () => setShowEndModal(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row gap-4 p-4 relative">
      {/* Left Side: Video + Controls */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-center text-xl font-bold text-green-400 mb-2">Mock Interview Session</h2>
        <div className="flex-1 flex flex-col md:flex-row gap-4">
          {/* Recruiter Video */}
          <div className="flex-1 bg-gray-800 border-2 border-gray-600 rounded-2xl shadow-xl flex flex-col">
            <div className="bg-gray-700 p-2 text-center text-white font-semibold rounded-t-xl border-b border-gray-600">
              Recruiter
            </div>
            <div className="flex-1 bg-gray-900 rounded-b-2xl flex items-center justify-center text-white text-xl min-h-[200px] md:min-h-[250px] shadow-inner">
              Video Feed
            </div>
          </div>

          {/* User Video */}
          <div className="flex-1 bg-gray-800 border-2 border-gray-600 rounded-2xl shadow-xl flex flex-col">
            <div className="bg-gray-700 p-2 text-center text-white font-semibold rounded-t-xl border-b border-gray-600">
              You
            </div>
            <div className="flex-1 bg-gray-900 rounded-b-2xl flex items-center justify-center text-white text-xl min-h-[200px] md:min-h-[250px] shadow-inner">
              Video Feed
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-2 flex-wrap">
          <button
            onClick={() => setMicOn(!micOn)}
            className="p-3 rounded-full border border-gray-600 transition-colors bg-black/30"
          >
            {micOn ? <Mic className="w-5 h-5 text-white" /> : <MicOff className="w-5 h-5 text-white" />}
          </button>
          <button
            onClick={() => setCameraOn(!cameraOn)}
            className="p-3 rounded-full border border-gray-600 transition-colors bg-black/30"
          >
            <Video className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setScreenShare(!screenShare)}
            className={`p-3 rounded-full border border-gray-600 transition-colors ${screenShare ? 'bg-gray-700' : 'bg-black/30'}`}
          >
            <Monitor className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleEndCall}
            className="p-3 rounded-full border border-red-600 bg-red-600 hover:bg-red-700 transition-colors"
          >
            <Phone className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Right Side: Transcript Panel */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <h2 className="text-green-400 font-bold text-xl text-center">Voice to Text</h2>
        <div className="flex-1 bg-black/70 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex flex-col gap-2 overflow-y-auto max-h-[500px]">
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

      {/* Modal */}
      {showEndModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-800 rounded-2xl p-6 w-11/12 max-w-md text-center border border-gray-600">
            <h3 className="text-xl font-bold text-green-400 mb-4">End Interview</h3>
            <p className="text-gray-300 mb-6">Are you sure you want to go back to Dashboard?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmEnd}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-all"
              >
                OK
              </button>
              <button
                onClick={handleCancelEnd}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
