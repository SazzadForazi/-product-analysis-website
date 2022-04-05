import React from 'react';
import './CustomerReview.css'
const CustomerReview = ({ hom }) => {
    return (
        <div className='col-md-4'>
            <div className="card">
                <h5 className="card-header">Public Reviews</h5>
                <div className="card-body">
                    <h5 className="card-title">{hom.name}</h5>
                    <p className="card-text">{hom.review}</p>
                    <p>{hom.Rating}</p>
                    <div className='bg-primary mb-5'>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star "></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;