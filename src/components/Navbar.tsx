import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Check if user is logged in
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleAuthClick = () => {
    if (user) {
      navigate('/dashboard'); // Dashboard দেখাবে
    } else {
      navigate('/login'); // লগইন পেইজে যাবে
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Logo */}
<div className="flex items-center">
  <Link
    to="/"
    className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent cursor-pointer inline-block"
  >
    MockMentor
  </Link>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-green-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-green-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors">
              Contact Us
            </button>
            <button
              onClick={handleAuthClick}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              {user ? 'Dashboard' : 'Login'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={handleAuthClick}
              className="block w-full text-left px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors mt-2"
            >
              {user ? 'Dashboard' : 'Login'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
