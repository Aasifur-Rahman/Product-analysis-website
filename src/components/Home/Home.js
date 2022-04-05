import React from 'react';
import camera from '../../images/camera.jpg'
import ThreeReviews from '../ThreeReviews/ThreeReviews';

// import Review from '../Review/Review';
// import Reviews from '../Reviews/Reviews';
import useReview from '../useReview/useReview';
import './Home.css'

const Home = () => {

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-12 col-md-12 col-xl-6'>
                    <h1 className='display-1 fw-normal me-3 '>Here is your <span className='special-color'>the next </span>go to camera</h1>
                    <h2 className='display-3 fw-normal me-3 '><span className='special-color'>Best</span> in the budget</h2>
                    <p className='me-5 fs-4'>Sony Alpha A600 mirrorless digital camera with 15-50mm lens is the go to camera for all.You can take cool pictures with the 24.3-megapixel APS-C image sensor.It also has High-resolution OLED Tru-Finder.Over all this is a budget beast.</p>
                </div>

                <div className='col-12 col-md-12 col-xl-6'>
                    <img width='100%' src={camera} alt="loading" />
                </div>
            </div>

            <div>
                <h1 className='display-3 fw-normal'>Customer's <span className='special-color'>Review</span></h1>
            </div>
            <div>
                <ThreeReviews></ThreeReviews>
            </div>

        </div>
    );
};

export default Home;