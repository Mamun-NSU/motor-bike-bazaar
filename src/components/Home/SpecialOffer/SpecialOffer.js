import React from "react";
import "./SpecialOffer.css";
import { Carousel } from "react-bootstrap";

const SpecialOffer = () => {
    return (
        <div className="my-3">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://i.ibb.co/vm1PBxm/yamaha-yzf-r1.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h2 className="text-primary">Special offer on Yamaha</h2>
                        <h4 className="text-success">
                            For very limited time, this special offer will close very soon!!
                        </h4>
                        <h5 className="text-dark">If you want to buy 50% discount...</h5>

                        <button className="btn btn-success">
                            <a src="/">Contact Us</a>
                        </button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SpecialOffer;
