import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  userName: string;
  userImage: string;
  rating: number;
  date: string;
  comment: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border-b pb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={review.userImage}
            alt={review.userName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="font-semibold">{review.userName}</h4>
            <div className="flex items-center text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <span className="text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-600">{review.comment}</p>
    </div>
  );
}