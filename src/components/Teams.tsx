import {Fragment} from "react";

const teams = [
    {
        id: 1,
        name: 'Dr. Xiaoming Zhang',
        designation: 'CEO & Lead Researcher',
        details: 'PhD from Shanghai Jiao Tong and Concordia University. Published 12 papers, 6 patents, and led 8 national projects. 16 years of experience in medical robotics development.',
        image: '/img/ct1.png'
    },
    {
        id: 2,
        name: 'Dr. Zhixiang Liu',
        designation: 'CTO & Algorithm Specialist',
        details: 'Advanced degrees from Shanghai and Concordia University. Expert in UAV control systems and robot fault-tolerant algorithms. Led multiple collaborative control projects.',
        image: '/img/ct2.png'
    },
    {
        id: 3,
        name: 'Dr. Tong He',
        designation: 'Lead Engineer & AI Expert',
        details: 'Specialized in robotic image processing and AI integration. Developed industrial robot simulation systems and 3D reconstruction technologies. Led multiple R&D projects.',
        image: '/img/ct3.png'
    },
    {
        id: 4,
        name: 'Dr. Qingshun Xu',
        designation: 'CMO & Strategic Lead',
        details: 'Graduate of Xi\'an Jiaotong University. 10 years of financial industry experience. Co-founded AidePros Service Inc. Expert in project investment and management.',
        image: '/img/ct4.png'
    }
];

export default function Team6() {
    return (
        <Fragment>
            <div className="row mb-3">
                <div className="col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center">
                    <h2 className="fs-15 text-uppercase text-primary mb-3">Leadership Team</h2>
                    <h3 className="display-4 mb-7 px-lg-19 px-xl-18">
                        Pioneering dental robotics with world-class expertise and innovation
                    </h3>
                </div>
            </div>

            <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-md-20">
                {teams.map((item) => (
                    <div className="col-md-6 col-lg-3" key={item.id}>
                        <div className="position-relative">
                            <div
                                className="shape rounded bg-soft-primary rellax d-md-block"
                                style={{zIndex: 0, width: "98%", height: "98%", right: "-0.75rem", bottom: "-0.75rem"}}
                            />

                            <div className="card shadow-lg">
                                <figure className="card-img-top text-center">
                                    <img className="" style={{ width: "70%", height: "auto" }} src={item.image} alt=""/>
                                </figure>

                                <div className="card-body px-6 py-5">
                                    <h4 className="mb-1">{item.name}</h4>
                                    <p className="mb-2">{item.designation}</p>
                                    <p className="mb-0 fs-sm text-black">{item.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}