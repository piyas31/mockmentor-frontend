import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MockInterviewForm from './pages/MockInterviewForm';
import MockInterview from './pages/MockInterview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/mock-interview-form" element={<MockInterviewForm />} />
         <Route path="/mock-interview" element={<MockInterview />} />
      </Routes>
    </Router>
  );
}

export default App;
