import React from 'react';
import Review from '../Review/Review';
import useReview from '../useReview/useReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div>
            <h2>This is Review Section of Camera World</h2>
            <div>
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