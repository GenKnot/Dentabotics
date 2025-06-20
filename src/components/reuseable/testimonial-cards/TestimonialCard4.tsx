import Carousel from "../Carousel";
import TestimonialCard2 from "./TestimonialCard2";


// ============================================================
interface TestimonialCard4Props {
    className?: string;
    sliderWrapperClassname?: string;
}

// ============================================================

export const testimonialList2 = [
    {
        title: 'Transforming Dental Surgery',
        miniTitle: 'Next-Generation Technology',
        review: `Our intelligent surgical system combines advanced robotics with AI-powered precision, achieving unprecedented accuracy of 0.285mm while ensuring optimal patient safety and comfort.`
    }
];

export default function TestimonialCard4({
                                             className = "",
                                             sliderWrapperClassname = "p-10 p-md-11 p-lg-13"
                                         }: TestimonialCard4Props) {
    return (
        <div className={`card shadow-lg ${className}`}>
            <div className="row gx-0">
                <div
                    style={{backgroundImage: "url(/img/home/tm2.png)"}}
                    className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start"
                />

                <div className="col-lg-6">
                    <div className={sliderWrapperClassname}>
                        <div className="swiper-container dots-closer mb-4">
                            <Carousel grabCursor slidesPerView={1} navigation={false}>
                                {testimonialList2.map((item, i) => (

                                    <div className="text-center" key={i}>
                                        <div className="blockquote-details justify-content-center text-center pb-4">
                                            <div className="info ps-0">
                                                <h5 className="mb-1">{item.title}</h5>
                                                <p className="mb-0">{item.miniTitle}</p>
                                            </div>
                                        </div>

                                        <p>“{item.review}”</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
