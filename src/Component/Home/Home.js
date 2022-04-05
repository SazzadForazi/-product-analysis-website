import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerReview from '../CustomerReview/CustomerReview';
import CustomLink from '../CustomLink/CustomLink';
import "./Home.css"
const Home = () => {
    const [homs, setHomes] = useState({})
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/review.json/main/review.json')
            .then(res => res.json())
            .then(data => setHomes(data))
    }, [])
    return (
        <div className="container home">
            <div className="row">
                <div className="col-md-6">
                    <h4>About Laptops Direct</h4>
                    <p>Buy cheap laptops, laptop computers and pc laptops from Laptops Direct. Our best prices guaranteed on cheap laptops. Brands of cheap laptops include acer laptops, toshiba laptops, sony laptops, samsung laptops.</p>
                    <br />
                    <h4>About Trustpilot</h4>
                    <p>We're open to all.
                        Reviews are published without moderation.

                        We show reviews chronologically, and you can filter by star rating, language, location, or keyword.
                        Read about the journey of reviews on Trustpilot.

                        We encourage useful, constructive feedback.
                        Here are 8 tips for writing reviews.

                        We fight fake reviews.
                        Here’s how we safeguard our platform.</p>
                </div>
                <div className="col-md-6">
                    <img src="https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..v1588859331.jpg" alt="" />
                </div>
            </div>
            <br /><br />
            <h2>Customer Review</h2>

            <div className='row'>
                {
                    homs.slice(1, 4).map(hom => <CustomerReview
                        key={hom.id}
                        hom={hom}
                    >
                    </CustomerReview>)
                }
            </div>
            <button type="button" className="btn btn-primary review-btn">
                <Link to='/reviews' className='link'>View</Link>
            </button>
        </div>

    );
};

export default Home;