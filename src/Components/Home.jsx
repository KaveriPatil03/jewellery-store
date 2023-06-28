import React from 'react';
// import Header from './Header';
// import slider1 from '../img/slider1.jpg'
import Product from './Product';
import NewProducts from './NewProducts';

const Home = () => {
    return (
        <>
            {/* <Header /> */}

            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../img/slider1.jpg" alt="iPhone" className="d-block w-100" height={'500px'} />
                            <div class="carousel-caption  d-md-block">
                                <h1>Jewellery that you’ll love</h1>
                                <p>We provide a wide variety of jewelry, from earrings to bracelets. At Olimp, you will
                                    surely find even the rarest jewelry.</p>

                            </div>
                            {/* <img src={slider1} className="d-block w-100" alt="iPhone" height={'500px'}/> */}
                        </div>
                        <div className="carousel-item">
                            <img src="../img/slider-2.jpg" alt="iPhone" className="d-block w-100" height={'500px'} />
                            <div class="carousel-caption d-md-block">

                                <h1>PEARLS ARE ALWAYS APPROPRIATE</h1>
                                <p>We provide a wide variety of jewelry, from earrings to bracelets. At Olimp, you will
                                    surely find even the rarest jewelry.</p>
                            </div>
                            {/* <img src={slider1} className="d-block w-100" alt="iPhone" height={'500px'}/> */}
                        </div>
                        <div className="carousel-item">
                            <img src="../img/slider-3.jpg" alt="iPhone" className="d-block w-100" height={'500px'} />
                            <div class="carousel-caption d-md-block">

                                <h1>PEARLS ARE ALWAYS APPROPRIATE</h1>
                                <p>We provide a wide variety of jewelry, from earrings to bracelets. At Olimp, you will
                                    surely find even the rarest jewelry.</p>
                            </div>
                            {/* <img src={slider1} className="d-block w-100" alt="iPhone" height={'500px'}/> */}
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <NewProducts />
            </div>
        </>
    )
}

export default Home

