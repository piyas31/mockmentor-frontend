import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MockInterviewForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    topic: '',
    designation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/mock-interview');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-400">
          Start Mock Interview
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Interview Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
              placeholder="Frontend Development"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
              placeholder="Software Engineer"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Start Interview
          </button>
        </form>
      </div>
    </div>
  );
}
