import Link from "next/link";
import { Star, MapPin, Clock, Phone, ChevronLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewSection from "@/components/ReviewSection";

export default async function ShopDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // In a real app we'd fetch the shop data based on ID, for now using mock data
    const shop = {
        id,
        name: "鮨 銀座 きた川",
        rating: 4.8,
        reviews: 124,
        genre: "寿司",
        area: "銀座",
        price: "￥20,000〜",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80",
        tags: ["デート", "接待", "個室あり"],
        description: "厳選された旬の食材と熟練の職人技が織りなす至極の握りをご堪能いただけます。落ち着いた和の空間で、特別なひとときをお過ごしください。毎日豊洲から仕入れる新鮮な魚介を、赤酢を使用したこだわりのシャリで提供しております。",
        address: "東京都中央区銀座X-X-X 銀座ビル 2F",
        hours: "17:00〜23:00 (L.O. 22:00)",
        phone: "03-XXXX-XXXX",
    };

    return (
        <div className="min-h-screen pb-24 bg-stone-50">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 h-14 flex items-center justify-between">
                    <Link href="/" className="flex items-center text-stone-600 hover:text-stone-900 transition-colors">
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        <span className="font-medium text-sm">一覧に戻る</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Heart className="w-5 h-5 text-stone-400" />
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="pt-14 pb-16 md:pb-0">
        {/* Cover Image */}
        <div className="w-full h-[35vh] md:h-[50vh] relative bg-stone-900">
          <img 
            src={shop.image} 
            alt={shop.name} 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-10 max-w-4xl">
          {/* Main Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 mb-8 border border-stone-100">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-stone-500 mb-2">
                  <span>{shop.genre}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                  <span>{shop.area}</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-stone-900 mb-3">{shop.name}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm font-medium">
                  <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 w-fit px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="text-base">{shop.rating}</span>
                    <span className="text-xs opacity-70">({shop.reviews}件)</span>
                  </div>
                  <span className="text-stone-600">予算: {shop.price}</span>
                </div>
              </div>
              <Button size="lg" className="md:w-auto bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 shrink-0 font-bold">
                予約する
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {shop.tags.map(tag => (
                <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-stone-100 text-stone-700 rounded-lg text-xs md:text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

                        <p className="text-stone-700 leading-relaxed mb-8 text-base/7">
                            {shop.description}
                        </p>

                        {/* Additional Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-stone-100">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-stone-900 mb-1">住所</div>
                                    <div className="text-sm text-stone-600">{shop.address}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-stone-900 mb-1">営業時間</div>
                                    <div className="text-sm text-stone-600">{shop.hours}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-stone-900 mb-1">ご予約・お問い合わせ</div>
                                    <div className="text-sm text-stone-600">{shop.phone}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reviews */}
                <div className="container mx-auto px-4 pb-8 max-w-4xl">
                  <ReviewSection shopId={id} />
                </div>
            </main>
        </div>
    );
}
