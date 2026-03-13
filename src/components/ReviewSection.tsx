"use client";

import { useState, useEffect } from "react";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import { getReviewsByShopId, getAverageRating, type Review } from "@/lib/reviews";
import { Star } from "lucide-react";

type Props = {
  shopId: string;
};

export default function ReviewSection({ shopId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const reload = async () => {
    setLoading(true);
    const data = await getReviewsByShopId(shopId);
    setReviews(data);
    setLoading(false);
  };

  useEffect(() => {
    reload();
  }, [shopId]);

  const avg = getAverageRating(reviews);

  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-stone-900">
          職場のレビュー{" "}
          <span className="text-stone-400 font-normal text-sm">
            （{reviews.length}件）
          </span>
        </h2>
        {avg !== null && (
          <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            {avg}
          </div>
        )}
      </div>

      {loading ? (
        <p className="text-sm text-stone-400 text-center py-6">読み込み中...</p>
      ) : (
        <ReviewList reviews={reviews} />
      )}
      <ReviewForm shopId={shopId} onReviewAdded={reload} />
    </div>
  );
}
