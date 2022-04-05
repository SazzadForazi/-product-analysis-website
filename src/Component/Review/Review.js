import React from 'react';
import "./Review.css"
const Review = ({ review }) => {
    return (
        <div className='col-md-4'>
            <div className="card">
                <h5 className="card-header">Public Reviews</h5>
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <p className="card-text">{review.review}</p>
                    <p>{review.Rating}</p>
                    <div className='bg-primary'>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;