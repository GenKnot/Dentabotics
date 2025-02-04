import {Fragment} from "react";
import Navbar from "components/blocks/navbar/navbar-1"
import {Hero15} from "../components/blocks/hero";
import {Services13, Services7} from "../components/blocks/services";
import {Tiles8, Tiles9} from "../components/elements/tiles";
import {Facts7} from "../components/blocks/facts";
import {TestimonialCard4} from "../components/reuseable/testimonial-cards";
import {About2} from "../components/blocks/about";
import {Blog8} from "../components/blocks/blog";
import {FAQ5} from "../components/blocks/faq";
import ListColumn from "../components/reuseable/ListColumn";
import {Portfolio8} from "../components/blocks/portfolio";
import Teams from "../components/Teams";
import {Process3} from "../components/blocks/process";
import {Footer10} from "../components/blocks/footer";


const serviceList1 = [
    ['Surgical Robot Safety', 'Medical Robot Precision'],
    ['Medical Monitoring']
];

export default function Home() {
    return (
        <Fragment>
            <header className="wrapper bg-light">
                <Navbar
                    button={
                        <a href="#solutions" className="btn btn-primary rounded-xl">
                            Learn More
                        </a>
                    }/>
            </header>

            <main className="content-wrapper">
                <Hero15 />

                <Services13/>

                <Blog8/>

                <About2/>

                <FAQ5/>

                <section className="wrapper bg-light">
                    <div className="container py-11 py-md-13">

                        <div className={"row gx-lg-8 gx-xl-12 gy-10 align-items-center pb-11 pb-md-13"}>
                            <Tiles8 hiddenShape/>

                            <div className={"col-lg-6"}>
                                <h3 className="display-4 mb-5">Unmatched Safety in Every Procedure</h3>
                                <p className="mb-5">Our intelligent system ensures patient safety through real-time
                                    monitoring and automatic protection. The advanced warning system prevents operations
                                    near critical structures, maintaining precision even if patient position shifts
                                    during surgery.</p>

                                <ListColumn list={serviceList1} bulletColor='primary'/>
                            </div>
                        </div>


                        <div className={"row gx-lg-8 gx-xl-12 gy-10 align-items-center py-11 py-md-13"}>
                            <Tiles9 hiddenShape/>

                            <div className={"col-lg-6"}>
                                <h3 className="display-4 mb-5">Minimally Invasive with Maximum Results</h3>
                                <p className="mb-5">Revolutionary approach eliminates traditional invasive procedures
                                    like tissue flaps, significantly reducing recovery time and complications. With
                                    procedure times averaging just 90 minutes and enhanced aesthetic outcomes, our
                                    system transforms both the surgical experience and results. The streamlined workflow
                                    also reduces surgeon fatigue and increases practice efficiency.</p>
                            </div>
                        </div>

                    </div>
                </section>


                <Facts7/>
                <section className="wrapper bg-light">
                    <div className="container pt-16 pt-md-18">
                        <TestimonialCard4 className="mt-n18 mt-md-n23 mb-14 mb-md-18"/>
                    </div>
                </section>


                <Portfolio8/>

                <section className="wrapper bg-dark">
                    <div className="container pt-8 pb-3" id="roadmap">
                        <Services7/>
                    </div>
                </section>

                <section className="wrapper">
                    <div className="container pt-13 pb-3" id="team">
                        <Teams />
                    </div>
                </section>

                <section className="wrapper">
                    <div className="container pt-8 pb-3">
                        <Process3 />
                    </div>
                </section>
            </main>

            <Footer10 />
        </Fragment>
    );
}
