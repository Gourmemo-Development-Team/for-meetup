"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getReviewsByShopId, getAverageRating, type Review } from "@/lib/reviews";

type Props = {
  shopId: string;
};

export default function ShopCardReview({ shopId }: Props) {
  const [latestReview, setLatestReview] = useState<Review | null>(null);
  const [avg, setAvg] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reviews = getReviewsByShopId(shopId);
    setCount(reviews.length);
    setAvg(getAverageRating(shopId));
    setLatestReview(reviews.length > 0 ? reviews[reviews.length - 1] : null);
  }, [shopId]);

  if (!latestReview) return null;

  return (
    <div className="mt-3 pt-3 border-t border-stone-100">
      <div className="flex items-center gap-2 mb-1">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-3 h-3 ${s <= (avg ?? 0) ? "fill-amber-400 text-amber-400" : "text-stone-200"}`} />
          ))}
        </div>
        <span className="text-xs font-semibold text-amber-600">{avg}</span>
        <span className="text-xs text-stone-400">職場レビュー {count}件</span>
      </div>
      <p className="text-xs text-stone-500 line-clamp-2">
        <span className="font-medium text-stone-600">{latestReview.authorName}：</span>
        {latestReview.comment}
      </p>
    </div>
  );
}
