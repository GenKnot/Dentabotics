import { Counter1 } from "components/reuseable/counter";

export const factList5 = [
  { id: 1, title: 'Micron Precision', amount: 285 },
  { id: 2, title: 'Research Papers', amount: 12 },
  { id: 3, title: 'Patents & Awards', amount: 14 }
];

export default function Facts7() {
  return (
    <section className="wrapper bg-dark">
      <div className="container py-14 pt-md-17 pb-md-21">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 text-white align-items-center">
          <div className="col-lg-4">
            <h3 className="display-4 text-white mb-3 pe-xxl-15">Advancing Dental Technology</h3>
            <p className="lead fs-lg mb-0 pe-xxl-10">Pioneering the future of precision dental surgery.</p>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList5.map(({ id, title, amount }) => (
                <Counter1 key={id} title={title} number={amount} titleColor="text-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
