import { supabase } from "./supabase";

export type Review = {
  id: string;
  shop_id: string;
  author_name: string;
  rating: number;
  comment: string;
  created_at: string;
};

export async function getReviewsByShopId(shopId: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("shop_id", shopId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function addReview(
  review: Omit<Review, "id" | "created_at">
): Promise<Review> {
  const { data, error } = await supabase
    .from("reviews")
    .insert([review])
    .select()
    .single();
  if (error) throw error;
  return data;
}

export function getAverageRating(reviews: Review[]): number | null {
  if (reviews.length === 0) return null;
  const sum = reviews.reduce((a, r) => a + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
