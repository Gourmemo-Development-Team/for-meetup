export type Review = {
  id: string;
  shopId: string;
  authorName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

const STORAGE_KEY = "gourmemo_reviews";

export function getReviews(): Review[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getReviewsByShopId(shopId: string): Review[] {
  return getReviews().filter((r) => r.shopId === shopId);
}

export function addReview(review: Omit<Review, "id" | "createdAt">): Review {
  const newReview: Review = {
    ...review,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const reviews = getReviews();
  reviews.push(newReview);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  return newReview;
}

export function getAverageRating(shopId: string): number | null {
  const reviews = getReviewsByShopId(shopId);
  if (reviews.length === 0) return null;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
