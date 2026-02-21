import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 relative">
                <div className="h-2 w-full bg-gradient-to-r from-primary-400 to-primary-600 absolute top-0 left-0"></div>
                <div className="p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-extrabold text-stone-900 mb-2">Gourmemo</h1>
                        <p className="text-stone-500 font-medium">お気に入りのお店を、もっと身近に。</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-1.5" htmlFor="email">メールアドレス</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-stone-400"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-1.5" htmlFor="password">パスワード</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-stone-400"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-stone-600 font-medium cursor-pointer">
                                <input type="checkbox" className="mr-2 rounded text-primary-600 focus:ring-primary-500 h-4 w-4 border-stone-300" />
                                ログインを保持する
                            </label>
                            <Link href="#" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">パスワードをお忘れですか？</Link>
                        </div>

                        <Button className="w-full py-6 text-base font-bold rounded-xl bg-stone-900 hover:bg-stone-800 text-white shadow-md">
                            ログイン
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm font-medium text-stone-600">
                        アカウントをお持ちでないですか？{" "}
                        <Link href="#" className="text-primary-600 font-bold hover:text-primary-700 transition-colors">新規登録</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
