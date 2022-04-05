import React from 'react';

const Review = (props) => {
    const { name, photo, id, comment, rating } = props.review;
    return (
        <div>
            <div>
                <div className="col">
                    <div className="card h-100 ">
                        <img className='p-3' width='100%' src={photo} alt="" />
                        <div className="card-body">
                            <p><small className='text-muted'>ID: {id}</small></p>
                            <h5 className="card-title">Name: {name}</h5>
                            <p>Rating: {rating}</p>
                            <p className="card-text">Comment: {comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;