import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/review.json/main/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
        // .then(data => console.log(data))
    }, [])
    return (
        <div className="container">
            <div className='row'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}></Review>)

                }
            </div>

        </div>
    );
};

export default Reviews;