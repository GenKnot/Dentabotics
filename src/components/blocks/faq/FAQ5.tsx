const faq = [
    {
        id: 1,
        title: 'Digital Aesthetic System',
        description: `AI-powered platform delivering personalized treatment planning and real-time health monitoring.`
    },
    {
        id: 2,
        title: 'Precision Surgical Systems',
        description: `Robotic platform achieving 0.285mm accuracy through advanced control technology.`
    },
    {
        id: 3,
        title: 'Intelligent Navigation Platform',
        description: `Real-time surgical guidance with automatic 3D reconstruction and path planning.`
    },
    {
        id: 4,
        title: 'Enhanced Safety Protocol',
        description: `Advanced warning system protecting critical structures during surgical procedures.`
    }
];

export default function FAQ5() {
    return (
        <section className="">
            <div className="container pb-11 pb-md-13">
                <div className="row gx-md-8 gx-xl-12 gy-10">
                    {faq.map((item) => (
                        <div className="col-lg-6" key={item.id}>
                            <div className="d-flex flex-row">
                                <div>
              <span className="icon btn btn-sm btn-circle btn-primary pe-none me-5">
                <i className="uil uil-comment-exclamation"/>
              </span>
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p className="mb-0">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
