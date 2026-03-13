"use client";

import { useState, useEffect } from "react";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import { getReviewsByShopId, type Review } from "@/lib/reviews";
import { Star } from "lucide-react";

type Props = {
  shopId: string;
};

export default function ReviewSection({ shopId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(getReviewsByShopId(shopId));
  }, [shopId]);

  const reload = () => {
    setReviews(getReviewsByShopId(shopId));
  };

  const avg =
    reviews.length > 0
      ? Math.round((reviews.reduce((a, r) => a + r.rating, 0) / reviews.length) * 10) / 10
      : null;

  return (
    <div className="mt-6 space-y-6">
      {/* Summary */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-stone-900">
          職場のレビュー <span className="text-stone-400 font-normal text-sm">（{reviews.length}件）</span>
        </h2>
        {avg !== null && (
          <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            {avg}
          </div>
        )}
      </div>

      <ReviewList reviews={reviews} />
      <ReviewForm shopId={shopId} onReviewAdded={reload} />
    </div>
  );
}
