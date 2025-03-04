import LightBox from "components/LightBox";
import Carousel from "components/reuseable/Carousel";
import NextLink from "components/reuseable/links/NextLink";

export default function Hero15() {
  return (
    <div className="wrapper bg-dark" id="home">
      {/* USED FOR IMAGE LIGHTBOX */}
      <LightBox />

      <div className="swiper-container swiper-hero dots-over">
        <Carousel slidesPerView={1} autoplay={{ delay: 7000, disableOnInteraction: false }}>
          <div
            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style={{ backgroundImage: 'url("/img/home/h5.png")' }}>
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                  <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Precision Robotics For Modern Dentistry
                  </h2>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    Dentabotics - Transforming oral surgery through AI innovation
                  </p>

                  <div className="animate__animated animate__slideInUp animate__delay-3s">
                    <NextLink title="Explore Technology" href="#Technology" className="btn btn-lg btn-outline-white rounded-pill" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style={{ backgroundImage: 'url("/img/home/h7.png")' }}>
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                  <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Revolutionizing Dental Healthcare
                  </h2>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    Leading the $3.7B market with breakthrough surgical precision. Our AI-powered system delivers 0.285mm accuracy for safer, more efficient procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
