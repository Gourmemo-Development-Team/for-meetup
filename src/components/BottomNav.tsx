import Link from "next/link";
import { Home, Search, Heart, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 z-50 md:hidden pb-safe">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-stone-500 hover:text-primary-600">
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">ホーム</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center w-full h-full text-stone-500 hover:text-primary-600">
          <Search className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">さがす</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center w-full h-full text-stone-500 hover:text-primary-600">
          <Heart className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">保存</span>
        </Link>
        <Link href="/login" className="flex flex-col items-center justify-center w-full h-full text-stone-500 hover:text-primary-600">
          <User className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">マイページ</span>
        </Link>
      </div>
    </nav>
  );
}
