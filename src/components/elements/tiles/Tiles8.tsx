import { fadeInAnimate } from "utils/animation";

// ====================================================
type Tiles8Props = { hiddenShape?: boolean };
// ====================================================

export default function Tiles8({ hiddenShape }: Tiles8Props) {
  return (
    <div className="col-lg-6 position-relative order-lg-2">
      {hiddenShape ? null : (
        <div
          className="shape rounded bg-pale-green rellax d-block"
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

      <div className="row gx-md-5 gy-5 position-relative">
        <div className="col-5">
          <img
            alt="demo"
            src="/img/home/sa1.png"
            className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
            style={fadeInAnimate("300ms")}
          />
          <img
            alt=""
            src="/img/home/sa2.png"
            className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
            style={fadeInAnimate("600ms")}
          />
        </div>

        <div className="col-7">
          <img
            alt="demo"
            src="/img/home/sa3.png"
            className="img-fluid rounded shadow-lg mb-5"
            style={fadeInAnimate("900ms")}
          />
          <img
            alt="demo"
            src="/img/home/sa4.png"
            className="img-fluid rounded shadow-lg d-flex col-11"
            style={fadeInAnimate("1200ms")}
          />
        </div>
      </div>
    </div>
  );
}
