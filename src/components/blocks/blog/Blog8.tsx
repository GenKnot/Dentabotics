import { BlogCard4 } from "components/reuseable/blog-cards";

export const blogs = [
  {
    id: 1,
    image: '/img/home/s1.png',
    title: 'High-Precision Implant Surgery',
    description: `With shoulder error of just 0.285mm and root error of 0.311mm, our robotic system achieved unprecedented accuracy in dental implant placement, significantly improving patient outcomes.`
  },
  {
    id: 2,
    image: '/img/home/s2.png',
    title: 'Enhanced Safety in Complex Procedures',
    description: `Our intelligent navigation system automatically detects critical structures like nerves and sinus cavities, providing real-time alerts and preventing potential complications during surgery.`
  },
  {
    id: 3,
    image: '/img/home/s3.png',
    title: 'Minimally Invasive Excellence',
    description: `By eliminating the need for invasive tissue flaps, our system reduced patient recovery time while maintaining superior aesthetic results in front tooth implant procedures.`
  }
];

export default function Blog8() {
  return (
    <section className="wrapper bg-gray" id="Technology">
      <div className="container py-13 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Innovation Success</h2>
            <h3 className="display-3 mb-10">
              Discover how our advanced dental robotics transform surgical precision and patient care.
            </h3>
          </div>
        </div>

        <div className="row grid-view gy-6">
          {blogs.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <BlogCard4 className="card shadow-lg" {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
