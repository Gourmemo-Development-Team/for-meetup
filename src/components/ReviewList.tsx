"use client";

import { Star } from "lucide-react";
import type { Review } from "@/lib/reviews";

type Props = {
  reviews: Review[];
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${
            s <= rating ? "fill-amber-400 text-amber-400" : "text-stone-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewList({ reviews }: Props) {
  if (reviews.length === 0) {
    return (
      <p className="text-sm text-stone-400 text-center py-6">
        まだレビューがありません。最初の一件を投稿してみましょう！
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-xl border border-stone-100 p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm shrink-0">
                {review.author_name.charAt(0)}
              </div>
              <span className="font-semibold text-stone-800 text-sm">
                {review.author_name}
              </span>
            </div>
            <StarRow rating={review.rating} />
          </div>
          <p className="text-stone-600 text-sm leading-relaxed">{review.comment}</p>
          <p className="text-stone-400 text-xs mt-2">
            {new Date(review.created_at).toLocaleDateString("ja-JP")}
          </p>
        </div>
      ))}
    </div>
  );
}
