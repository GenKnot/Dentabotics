import NextLink from "../../reuseable/links/NextLink";

interface Link {
  id: number;
  title: string;
  url: string;
}

export const learnMore: Link[] = [
  { id: 1, title: "Solutions", url: "#solutions" },
  { id: 2, title: "Technology", url: "#technology" },
  { id: 3, title: "Products", url: "#products" },
  { id: 4, title: "Roadmap", url: "#roadmap" }
];

export default function Footer10() {
  const widget = (list: Link[], title: string) => {
    return (
        <div className="widget">
          <h4 className="widget-title text-white mb-3">{title}</h4>
          <ul className="list-unstyled text-reset mb-0">
            {list.map(({ url, title, id }) => (
                <li key={id} className="mb-2">
                  <NextLink href={url} title={title} />
                </li>
            ))}
          </ul>
        </div>
    );
  };

  return (
      <footer className="bg-dark text-inverse">
        <div className="container pt-8 pt-lg-10 pb-7">
          <div className="row gy-6 gy-lg-0">
            <div className="col-lg-5">
              <div className="widget">
                <h3 className="h2 mb-3 text-white">Transform Dental Surgery</h3>
                <p className="lead mb-5">
                  Partner with DentaBotics to bring AI-powered precision robotics to your practice and revolutionize dental healthcare.
                </p>
                <NextLink title="Contact Us" href="#" className="btn btn-white rounded-pill" />
              </div>
            </div>

            <div className="col-md-4 col-lg-3 offset-lg-1">{widget(learnMore, "Quick Links")}</div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Contact</h4>
                <p className="mb-2">Montreal, Canada</p>
                <a href="mailto:info@denta-botics.com" className="text-white">info@denta-botics.com</a>
              </div>
            </div>
          </div>

          <hr className="mt-8 mt-md-10 mb-5" />

          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-0">© 2025 DentaBotics. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}