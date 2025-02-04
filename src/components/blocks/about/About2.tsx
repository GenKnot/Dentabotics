import Banner4 from "../banner/Banner4";
import ListColumn from "components/reuseable/ListColumn";
import {Fragment} from "react";
import LightBox from "../../LightBox";

export const aboutList1 = [
    ['Global leader in major dental markets worldwide', 'Advanced robotics pioneer since 2020'],
    ['Consistent 11.4% annual market growth', 'Strategic research collaborations established']
];

export default function About2() {
  return (
      <section className="bg-white container pt-13 pt-md-17" id="technology">
          <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
              <div className="col-md-8 col-lg-6 position-relative">
                  <Fragment>
                      {/* USED FOR IMAGE LIGHTBOX */}
                      <LightBox />

                          <div
                              className="shape rounded bg-soft-primary rellax d-md-block"
                              style={{ width: "85%", height: "90%", right: "-1.5rem", bottom: "-1.8rem" }}
                          />


                      <figure className="rounded">
                          <img src={`/img/home/h4.png`} alt='Photo' />
                      </figure>
                  </Fragment>
              </div>

              <div className="col-lg-5 offset-lg-1">
                  <h2 className="fs-15 text-uppercase text-muted mb-3">Market Leadership</h2>
                  <h3 className="display-4 mb-6">Driving innovation in the expanding dental robotics industry.</h3>

                  <p className="mb-6">
                      The dental robotics market is witnessing rapid expansion, with the US market reaching $3.7 billion by 2032 and a remarkable 11.4% CAGR. With North America commanding 68% of the global market and China showing highest growth potential, we're positioned to lead this technological revolution.
                  </p>

                  <ListColumn rowClass="gx-xl-8" list={aboutList1} />
              </div>
          </div>
      </section>
  );
}
