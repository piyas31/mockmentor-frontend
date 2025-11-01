import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { LogOut, User as UserIcon } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      navigate("/login");
    } else {
      setUser(user);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent cursor-pointer inline-block"
            >
              MockMentor
            </Link>

            {/* Auth Button */}
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back,{" "}
            <span className="text-green-400">
              {user?.user_metadata?.name || "User"}
            </span>
            !
          </h1>
          <p className="text-gray-400">Ready to ace your next interview?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-2">0</div>
            <div className="text-gray-400">Mock Interviews</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-2">0</div>
            <div className="text-gray-400">Resume Reviews</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-2">0%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center">
          <UserIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your Dashboard</h2>
          <p className="text-gray-400 mb-6">
            This is your personal dashboard. Start practicing with mock
            interviews, analyze your resume, and get career guidance from our AI
            mentor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/mock-interview-form")}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg
											font-semibold transition-all transform hover:scale-105"
            >
              StartMock Interview
            </button>

            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg font-semibold transition-all">
              Analyze Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
