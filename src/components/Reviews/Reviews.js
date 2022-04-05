import React from 'react';
import Review from '../Review/Review';
import useReview from '../useReview/useReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='container'>
            <h2 className='mt-4'>What our customer says!</h2>
            <div className="mt-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>

    );
};

export default Reviews;