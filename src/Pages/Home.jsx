import homeHero from '../assets/index-img-2.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* 1. 完全還原的背景圖片層 - 保持清晰度與亮度 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        {/* 2. 保持你原本的遮罩亮度 - 僅僅微調 RWD 邊距 */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 3. 內容層 - 保持純白、粗體、直接的設計 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-6">
        
        {/* 還原主標題：粗體無襯線 (font-sans)，無陰影，大號字 */}
        <h1 className="text-6xl md:text-8xl font-black mb-5 tracking-tightest drop-shadow-sm">
          1956 · 不該看的書
        </h1>

        {/* 還原副標題：清晰、 font-light */}
        <p className="text-2xl md:text-3xl mb-12 tracking-[0.2em] font-light">
          VR 歷史體驗遊戲
        </p>
        
        {/* 還原按鈕：純白底、黑字、圓角 */}
        <Link to="/Introduction">
          <button className="px-10 py-4 bg-white text-black rounded-full text-lg font-semibold 
                           hover:bg-gray-100 active:scale-95 transition-all duration-150 shadow-2xl">
            欲知詳情
          </button>
        </Link>
      </div>
    </div>
  );
}