import Link from "next/link";
import { Star, MapPin, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_SHOPS = [
  {
    id: "1",
    name: "鮨 銀座 きた川",
    rating: 4.8,
    reviews: 124,
    genre: "寿司",
    area: "銀座",
    price: "￥20,000〜",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    tags: ["デート", "接待", "個室あり"],
  },
  {
    id: "2",
    name: "Trattoria La Vita",
    rating: 4.5,
    reviews: 342,
    genre: "イタリアン",
    area: "恵比寿",
    price: "￥6,000〜",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    tags: ["女子会", "ワイン豊富", "テラス席"],
  },
  {
    id: "3",
    name: "炭火焼肉 赤門",
    rating: 4.3,
    reviews: 561,
    genre: "焼肉",
    area: "新宿",
    price: "￥8,000〜",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    tags: ["友人・同僚と", "深夜営業", "飲み放題あり"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-600">Gourmemo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary-600 transition-colors">予約履歴</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary-600 transition-colors">保存済み</Link>
            <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User avatar" />
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-8">
        {/* Hero Search */}
        <section className="relative rounded-2xl overflow-hidden mb-8 bg-stone-900 text-white shadow-xl min-h-[340px] md:min-h-[300px] py-12 md:py-0 flex flex-col items-center justify-center text-center p-4 md:p-6 mx-auto">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="relative z-10 w-full max-w-2xl px-2">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-2 md:mb-4 tracking-tight">とっておきの、一皿を見つけよう。</h1>
            <p className="text-stone-300 text-sm md:text-lg mb-6 md:mb-8">東京の人気レストラン 45,210件</p>
            
            <div className="flex flex-col md:flex-row bg-white rounded-2xl md:rounded-full p-2 shadow-lg w-full max-w-xl mx-auto gap-2 md:gap-0">
              <div className="flex-1 flex items-center px-4 py-2 md:py-0 border-b md:border-b-0 md:border-r border-stone-200">
                <MapPin className="text-stone-400 w-5 h-5 mr-2 shrink-0" />
                <input type="text" placeholder="エリア・駅" className="w-full text-stone-800 outline-none text-sm placeholder:text-stone-400 bg-transparent" />
              </div>
              <div className="flex-1 flex items-center px-4 py-2 md:py-0">
                <Search className="text-stone-400 w-5 h-5 mr-2 shrink-0" />
                <input type="text" placeholder="ジャンル・店名" className="w-full text-stone-800 outline-none text-sm placeholder:text-stone-400 bg-transparent" />
              </div>
              <Button className="rounded-xl md:rounded-full px-6 py-4 md:py-2 bg-primary-600 hover:bg-primary-700 w-full md:w-auto mt-2 md:mt-0 font-bold">
                検索
              </Button>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold">おすすめのレストラン</h2>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Filter className="w-4 h-4 mr-2" />
            絞り込み
          </Button>
        </div>

        {/* Shop List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-16 md:pb-0">
          {MOCK_SHOPS.map((shop) => (
            <Link href={`/shop/${shop.id}`} key={shop.id} className="group flex flex-col rounded-xl overflow-hidden bg-white shadow-sm border border-stone-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={shop.image} alt={shop.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm flex items-center gap-1 font-semibold text-sm">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {shop.rating}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-primary-600 transition-colors line-clamp-1">{shop.name}</h3>
                </div>
                <div className="flex items-center text-sm text-stone-500 mb-4 divide-x divide-stone-300">
                  <span className="pr-2">{shop.genre}</span>
                  <span className="px-2">{shop.area}</span>
                  <span className="pl-2 flex items-center gap-1">
                    <span className="text-stone-400">ディナー</span> {shop.price}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {shop.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
