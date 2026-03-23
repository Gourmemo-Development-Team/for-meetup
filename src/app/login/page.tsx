"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = createClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setMessage("登録確認メールを送信しました。メール内のリンクをクリックして登録を完了してください。");
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        
        router.push("/");
        router.refresh(); // Refresh to ensure middleware catches the new session
      }
    } catch (err: any) {
      setError(err.message || "認証に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 relative">
        <div className="h-2 w-full bg-gradient-to-r from-primary-400 to-primary-600 absolute top-0 left-0"></div>
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-stone-900 mb-2">Gourmemo</h1>
            <p className="text-stone-500 font-medium">職場のグルメ共有ツール</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>
            )}
            {message && (
              <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">{message}</div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1.5" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-stone-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1.5" htmlFor="password">
                  パスワード
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-stone-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-6 text-base font-bold rounded-xl bg-stone-900 hover:bg-stone-800 text-white shadow-md relative disabled:opacity-70"
            >
              {loading ? "処理中..." : isSignUp ? "アカウント登録" : "ログイン"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm font-medium text-stone-600">
            {isSignUp ? "すでにアカウントをお持ちですか？ " : "アカウントをお持ちでないですか？ "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
                setMessage(null);
              }}
              className="text-primary-600 font-bold hover:text-primary-700 transition-colors underline"
            >
              {isSignUp ? "ログインへ戻る" : "新規登録"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
