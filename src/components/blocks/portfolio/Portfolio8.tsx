import Link from "next/link";
import Image from "next/image";

export const portfolioList5 = [
    {id: 1, color: 'purple', category: 'Remebot', title: 'Position Deviation ≤ 0.5mm', image: '/img/home/p1.png'},
    {id: 2, color: 'purple', category: 'Yakebot', title: 'Autonomous Dental Implant System', image: '/img/home/p2.png'},
    {
        id: 3,
        color: 'purple',
        category: 'RobPath Dencare',
        title: 'Digital Treatment Integration',
        image: '/img/home/p3.png'
    },
    {id: 4, color: 'purple', category: 'Dcarer Robot', title: 'Advanced Surgical Precision', image: '/img/home/p4.png'},
    {
        id: 5,
        color: 'purple',
        category: 'Theta System',
        title: 'Comprehensive Dental Platform',
        image: '/img/home/p5.png'
    },
    {
        id: 6,
        color: 'purple',
        category: 'Shecheng Medical',
        title: 'Innovative Surgical Control',
        image: '/img/home/p6.png'
    }
];

export default function Portfolio8() {
    return (
        <section className="wrapper bg-light" id="products">
            <div className="container pb-14 pb-md-17">
                <div className="row mb-8 text-center">
                    <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                        <h2 className="fs-16 text-uppercase text-primary mb-3">Market Leadership</h2>
                        <h3 className="display-4">Pioneering Innovations in Dental Robotics</h3>
                    </div>
                </div>

                <div className="grid grid-view projects-masonry">
                    <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                        {portfolioList5.map(({id, image, title, category, color}) => (
                            <div className="project item col-md-6 col-xl-4 product" key={id}>
                                <figure className="lift rounded mb-6">
                                    <Image src={image} alt={title} width={1300} height={1132} className="w-100 h-auto"/>
                                </figure>

                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className={`post-category mb-2 text-${color}`}>{category}</div>
                                        <h2 className="post-title h3">{title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
