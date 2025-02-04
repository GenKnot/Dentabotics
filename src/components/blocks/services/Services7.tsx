import {Fragment} from "react";
import color from "../../../utils/color";


export const timelineList = [
    {
        id: 1,
        icon: 'https://cdn.lordicon.com/zpxybbhl.json',
        color: color.aqua,
        title: '2024 Innovation',
        description: `$700K investment in prototype development, advancing our core dental robotics technology.`
    },
    {
        id: 2,
        icon: 'https://cdn.lordicon.com/wxnxiano.json',
        color: color.yellow,
        title: '2025 Clinical Trials',
        description: `$1.4M funding secured for comprehensive clinical testing and validation phase.`
    },
    {
        id: 3,
        icon: 'https://cdn.lordicon.com/oqhlhtfq.json',
        color: color.blue,
        title: '2026 Production',
        description: `$7M investment establishing state-of-the-art manufacturing facilities.`
    },
    {
        id: 4,
        icon: 'https://cdn.lordicon.com/rqqkvjqf.json',
        color: color.green,
        title: '2027 Certification',
        description: `$14M funding supporting NMPA approval and initial market launch.`
    },
    {
        id: 5,
        icon: 'https://cdn.lordicon.com/gqdnbnwt.json',
        color: color.purple,
        title: '2028 Expansion',
        description: `$28M investment in advanced navigation systems and market growth.`
    },
    {
        id: 6,
        icon: 'https://cdn.lordicon.com/kxoxiwrf.json',
        color: color.red,
        title: '2029 Global',
        description: `IPO milestone achievement and establishment of global presence.`
    }
];

export default function Services7() {
    return (
        <Fragment>
            <div className="row text-center mt-xl-12 text-white">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h2 className="fs-15 text-uppercase text-muted mb-3">Milestones & Vision</h2>
                    <h3 className="display-4 mb-9 px-xxl-11 text-white">
                        Building the future of dental surgery through continuous innovation.
                    </h3>
                </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17 text-white">
                {timelineList.map(({icon, color, ...item}) => (
                    <div className="col-md-6 col-lg-4" key={item.id}>

                        <div className="d-flex flex-row">

                            <div>
                                <h4 className="mb-1 text-blue">{item.title}</h4>
                                <p className="mb-0">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}
