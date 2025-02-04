import { ServiceCard2 } from "components/reuseable/service-cards";
import { slideInDownAnimate } from "utils/animation";

export const serviceList2 = [
  {
    id: 1,
    linkUrl: '#',
    title: 'Surgical Excellence',
    icon: 'uil-robot',
    description: `High-precision robotic system delivering unmatched accuracy with 0.285mm shoulder error and 0.311mm root error in dental implant procedures.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Enhanced Safety',
    icon: 'uil-shield-check',
    description: `Advanced warning systems and automatic tracking protect critical structures, with real-time monitoring of nerve proximity and bone density during surgery.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'AI-Powered Planning',
    icon: 'uil-brain',
    description: `Intelligent treatment planning system integrates CT, MRI and other imaging data to create customized surgical paths with automatic 3D reconstruction.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Minimally Invasive',
    icon: 'uil-medical-square',
    description: `Revolutionary approach eliminates the need for tissue flaps, reducing recovery time and complications while ensuring optimal aesthetic outcomes.`
  }
];

export default function Services13() {
  return (
    <section className="wrapper" id="solutions">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h3 className="display-4 mb-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div>

        <div className="row gx-md-8 gy-8 text-center">
          {serviceList2.map((item) => (
            <ServiceCard2 {...item} key={item.id} titleColor="black" hiddenBtn />
          ))}
        </div>
      </div>
    </section>
  );
}
