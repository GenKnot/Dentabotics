import { ProcessList2 } from "components/reuseable/process-list";

export const processList4 = [
    {
        no: "1",
        title: "Research Foundation",
        subtitle: "Established research bases with leading hospitals in North America and China, driving innovation in dental robotics."
    },
    {
        no: "2",
        title: "Clinical Validation",
        subtitle: "Partnered with top hospitals like Ruijin Hospital and Shanghai Ninth People's Hospital for clinical trials and validation."
    },
    {
        no: "3",
        title: "Market Expansion",
        subtitle: "Implementing high-end medical leasing model and developing healthcare experience training bases for wider adoption."
    }
];

export default function Process3() {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 mb-16 mb-md-18 align-items-center">
      <div className="col-md-8 col-lg-6 position-relative">
        <div
          className="shape bg-dot primary rellax w-17 h-21"
          style={{ top: "-2rem", left: "-1.9rem" }}
        />

        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: "85%", height: "90%", right: "-1.5rem", bottom: "-1.8rem" }}
        />

        <figure className="rounded">
          <img src="/img/home/f2.png" alt="Image" />
        </figure>
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Our Development Path</h2>
        <h3 className="display-4 mb-7">Building a comprehensive dental healthcare ecosystem.</h3>

        {processList4.map((item) => (
          <ProcessList2
            {...item}
            key={item.no}
            className="icon btn btn-block btn-soft-primary pe-none me-5"
          />
        ))}
      </div>
    </div>
  );
}
