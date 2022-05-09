import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://i.ibb.co/vm1PBxm/yamaha-yzf-r1.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h3 className="text-primary">Yamaha YZF R1</h3>
                        <p>
                            The Yamaha YZF-R1 is a 1,000 cc class sports motorcycle made by Yamaha. It was first released in 1998.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://i.ibb.co/2dYVwhp/honda-dream-neo-640.jpg" alt="Second slide" />

                    <Carousel.Caption>
                        <h3 className="text-primary">Honda Dream NEO</h3>
                        <p>
                            The Dream Neo is the most affordable motorcycle in Honda India's range. Being a Honda, the built quality of the Neo is slightly better.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://i.ibb.co/TPfsfCq/suzuki.jpg" alt="Third slide" />

                    <Carousel.Caption>
                        <h3 className="text-primary">Suzuki Gixxer</h3>
                        <p>
                            The Suzuki Gixxer is a 154.9 cc naked motorcycle from Suzuki. The bike was launched in September 2014.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
