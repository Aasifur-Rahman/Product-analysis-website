import React from 'react';
import useReview from '../useReview/useReview';

const ThreeReviews = (props) => {
    const [reviews, setReview] = useReview();
    const ThreeReviews = reviews.slice(0, 3)
    return (
        <div className='mt-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {
                ThreeReviews.map(threeReview =>
                    <div className="col">
                        <div className="card h-100 ">
                            <img className='p-3' width='100%' src={threeReview.photo} alt="" />
                            <div className="card-body w-100">
                                <p><small className='text-muted'>ID: {threeReview.id}</small></p>
                                <h5 className="card-title">Name: {threeReview.name}</h5>
                                <p>Rating: {threeReview.rating}</p>
                                <p className="card-text">Comment: {threeReview.comment}</p>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ThreeReviews;