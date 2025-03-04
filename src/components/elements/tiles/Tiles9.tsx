import { fadeInAnimate } from "utils/animation";

// ====================================================
type Tiles9Props = { hiddenShape?: boolean };
// ====================================================

export default function Tiles9({ hiddenShape }: Tiles9Props) {
  return (
    <div className="col-lg-6 position-relative">
      {hiddenShape ? null : (
        <div
          className="shape rounded bg-pale-yellow rellax d-block"
          style={{
            zIndex: 0,
            top: "50%",
            left: "50%",
            width: "50%",
            height: "60%",
            transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)"
          }}
        />
      )}

      <div className="row gx-md-5 gy-5 position-relative align-items-center">
        <div className="col-6">
          <img
            alt=""
            src="/img/home/sa5.png"
            className="img-fluid rounded shadow-lg d-flex ms-auto"
            style={fadeInAnimate("300ms")}
          />
        </div>

        <div className="col-6">
          <img
            alt=""
            src="/img/home/sa6.png"
            className="img-fluid rounded shadow-lg mb-5"
            style={fadeInAnimate("900ms")}
          />
          <img
            alt=""
            src="/img/home/sa7.png"
            className="img-fluid rounded shadow-lg d-flex col-10"
            style={fadeInAnimate("1200ms")}
          />
        </div>
      </div>
    </div>
  );
}
