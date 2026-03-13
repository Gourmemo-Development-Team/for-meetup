"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { addReview } from "@/lib/reviews";
import { Button } from "@/components/ui/button";

type Props = {
  shopId: string;
  onReviewAdded: () => void;
};

export default function ReviewForm({ shopId, onReviewAdded }: Props) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !authorName.trim() || !comment.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      await addReview({
        shop_id: shopId,
        author_name: authorName.trim(),
        rating,
        comment: comment.trim(),
      });
      setSubmitted(true);
      onReviewAdded();
    } catch (err) {
      setError("投稿に失敗しました。もう一度お試しください。");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6 bg-green-50 rounded-xl border border-green-200">
        <p className="text-green-700 font-semibold text-base">✅ レビューを投稿しました！</p>
        <button
          className="mt-3 text-sm text-stone-500 underline"
          onClick={() => {
            setSubmitted(false);
            setRating(0);
            setAuthorName("");
            setComment("");
          }}
        >
          続けて投稿する
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4">
      <h3 className="text-base font-bold text-stone-800">レビューを投稿する</h3>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}

      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-2">評価</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              className="p-0.5"
            >
              <Star
                className={`w-7 h-7 transition-colors ${
                  star <= (hovered || rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-stone-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-1" htmlFor="author">お名前</label>
        <input
          id="author"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="例: 田中"
          className="w-full px-3 py-2 rounded-lg border border-stone-200 bg-white text-sm outline-none focus:ring-2 focus:ring-primary-400"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-600 mb-1" htmlFor="comment">コメント</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="食事の感想や雰囲気など、職場の方へのアドバイスをどうぞ。"
          className="w-full px-3 py-2 rounded-lg border border-stone-200 bg-white text-sm outline-none focus:ring-2 focus:ring-primary-400 resize-none h-24"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={!rating || !authorName.trim() || !comment.trim() || submitting}
        className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-lg"
      >
        {submitting ? "投稿中..." : "投稿する"}
      </Button>
    </form>
  );
}
