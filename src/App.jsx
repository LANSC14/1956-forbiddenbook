import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// 導入頁面組件
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Making from './Pages/Making';
import Video from './Pages/Video';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        
        <nav className="bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-100 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
            
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/" onClick={closeMenu} className="text-lg font-bold tracking-tighter hover:text-orange-400 transition-all">
                1956 · 不該看的書
              </Link>
            </div>

            {/* 手機版按鈕：簡單的兩條線 */}
            <button 
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>

            {/* 電腦版選單：維持原樣 */}
            <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
              <Link to="/Introduction" className="hover:text-orange-400 transition-colors opacity-80 hover:opacity-100">簡介</Link>
              <Link to="/Making" className="hover:text-orange-400 transition-colors opacity-80 hover:opacity-100">製作歷程</Link>
              <Link to="/Video" className="hover:text-orange-400 transition-colors opacity-80 hover:opacity-100">成果影片</Link>
            </div>
          </div>

          {/* ✅ 手機版局部下拉：只在手機顯示，高度自適應 */}
          <div className={`
            md:hidden absolute top-16 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10
            overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          `}>
            <div className="flex flex-col items-center py-6 gap-6 shadow-2xl">
              <Link to="/Introduction" onClick={closeMenu} className="text-base tracking-widest hover:text-orange-400">簡介</Link>
              <Link to="/Making" onClick={closeMenu} className="text-base tracking-widest hover:text-orange-400">製作歷程</Link>
              <Link to="/Video" onClick={closeMenu} className="text-base tracking-widest hover:text-orange-400">成果影片</Link>
            </div>
          </div>
        </nav>

        {/* 路由出口 */}
        <main className="container mx-auto px-4 md:px-10 py-6 md:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Making" element={<Making />} />
            <Route path="/Video" element={<Video />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;