//導入路由功能組件
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 導入頁面組件
import Home from './Pages/Home';
import Intro from './Pages/Intro';
import Proc from './Pages/Proc';
import Demo from './Pages/Demo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        {/* 導覽元件 */}
        <nav className="flex justify-center gap-8 p-6 bg-black/50 backdrop-blur-md sticky top-0 border-b border-white/10">
          <Link to="/" className="hover:text-cyan-400 transition">首頁</Link>
          <Link to="/intro" className="hover:text-cyan-400 transition">簡介</Link>
          <Link to="/proc" className="hover:text-cyan-400 transition">製作歷程</Link>
          <Link to="/Demo" className="hover:text-cyan-400 transition">成果影片</Link>
        </nav>

        {/* 路由出口 */}
        <main className="container mx-auto p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/proc" element={<Proc />} />
            <Route path="/Demo" element={<Demo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;