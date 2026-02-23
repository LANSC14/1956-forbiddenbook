import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// 匯入你剛建立的頁面
import Home from './Pages/Home';
import Fg from './Pages/Fg';
import Intro from './Pages/Intro';
import Proc from './Pages/Proc';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        {/* 導覽列 */}
        <nav className="flex justify-center gap-8 p-6 bg-black/50 backdrop-blur-md sticky top-0 border-b border-white/10">
          <Link to="/" className="hover:text-cyan-400 transition">首頁</Link>
          <Link to="/intro" className="hover:text-cyan-400 transition">介紹 (Intro)</Link>
          <Link to="/fg" className="hover:text-cyan-400 transition">分組 (Fg)</Link>
          <Link to="/proc" className="hover:text-cyan-400 transition">流程 (Proc)</Link>
        </nav>

        {/* 內容區域 */}
        <main className="container mx-auto p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/fg" element={<Fg />} />
            <Route path="/proc" element={<Proc />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;