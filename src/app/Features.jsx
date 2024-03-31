import React, { useEffect } from "react";
import "./Features.scss";

export default function Features() {
  return (
    <>
      {/* Features you can't miss */}
      <section className="Features section features-cant-miss">
        <div className="shapes-container overflow-clear">
          <div className="shape shape-circle shape-circle-1">
            <div data-aos="fade-up-left" />
          </div>
          <div className="shape shape-circle shape-circle-2">
            <div data-aos="fade-up-right" data-aos-delay={200} />
          </div>
          <div className="shape shape-circle shape-circle-3">
            <div data-aos="fade-up-left" data-aos-delay={400} />
          </div>
          <div className="shape shape-circle shape-circle-4">
            <div data-aos="fade-up-left" data-aos-delay={600} />
          </div>
          <div className="shape shape-triangle shape-animated">
            <div className="animation--rotating" />
          </div>
        </div>
        <div className="container">
          <div className="row gap-y">
            <div className="col-md-6 order-md-last">
              <div className="section-heading">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon"
                    style={{
                      width: "60px",
                      height: "60px",
                      verticalAlign: "middle",
                      fill: "currentColor",
                      overflow: "hidden",
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1">
                    <path d="M790.869333 162.8416c-12.9024-22.0416-26.948267-43.835733-42.1376-65.271467-3.259733-4.599467-6.877867-6.613333-12.791467-5.9904-5.922133 0.631467-8.072533 4.949333-9.2416 9.984-2.8672 12.475733-5.7344 24.951467-8.610133 37.4272-155.639467-35.8144-318.327467-30.523733-471.8848 15.872-9.156267 2.756267-15.598933 13.832533-12.928 21.9392 2.670933 8.098133 14.045867 13.3632 22.801067 10.734933 147.848533-44.663467 304.494933-49.7664 454.357333-15.2832-2.235733 9.7024-4.462933 19.4048-6.698667 29.1072-1.160533 5.051733-1.220267 9.8048 3.072 12.859733s7.867733 2.816 12.398933 0.1792c21.137067-12.2624 43.195733-23.7312 66.141867-34.312533C792.064 176.989867 794.641067 169.309867 790.869333 162.8416z" />
                    <path d="M691.2256 574.848c-7.2192-2.628267-15.9744-3.362133-21.418667-3.549867 3.8656-13.7472 2.705067-28.2624-3.387733-41.344-6.741333-14.464-18.705067-25.429333-33.698133-30.890667-12.885333-4.676267-27.178667-4.667733-39.637333-0.418133 0.2816-8.132267-1.006933-16.0768-3.857067-23.3984-5.649067-14.472533-17.0496-25.463467-32.093867-30.933333-15.095467-5.486933-31.547733-4.3008-44.9536 2.397867l48.861867-150.8096c12.475733-34.286933-2.261333-68.923733-34.269867-80.5888-6.7584-2.4576-13.6704-3.703467-20.539733-3.703467-25.344 0-47.914667 17.041067-57.6 43.665067L360.669867 514.039467c-7.799467 1.169067-19.8912 4.036267-36.6848 10.9056-57.941333 23.7312-107.016533 114.2528-84.804267 206.190933 24.712533 102.382933 76.032 160.904533 171.613867 195.694933 26.837333 9.770667 52.053333 14.72 74.9312 14.72 56.695467 0 92.1856-29.1072 123.6736-58.922667 43.264-40.96 113.339733-232.593067 116.3008-240.7424C735.0272 616.251733 718.9248 584.925867 691.2256 574.848zM701.653333 633.130667c-19.6096 53.8624-77.550933 200.328533-109.8496 230.903467-28.9024 27.3664-58.760533 51.9168-106.077867 51.9168-19.8912 0-42.154667-4.437333-66.184533-13.175467-87.68-31.906133-132.736-83.3792-155.485867-177.6384-13.2608-54.903467 7.2704-150.946133 69.623467-176.494933 6.7584-2.7648 12.5184-4.753067 17.314133-6.178133l-28.731733 84.539733c-2.2784 6.690133 1.3056 13.969067 8.004267 16.238933 6.698667 2.269867 13.969067-1.314133 16.2304-8.004267l126.276267-371.4816c7.4496-20.471467 26.6752-31.163733 45.243733-24.3968 18.901333 6.8864 26.7008 26.530133 18.824533 48.213333l-73.7024 227.438933c-2.0224 6.2464 1.006933 13.013333 7.0144 15.658667 6.024533 2.653867 13.047467 0.315733 16.290133-5.4016l19.217067-33.8688c0.349867-0.622933 0.648533-1.271467 0.896-1.9456 6.468267-17.800533 24.746667-27.306667 41.8048-21.0944 8.1408 2.961067 14.0288 8.558933 16.9984 16.1792 3.0208 7.739733 2.850133 17.032533-0.469333 26.1632l-8.7296 23.995733c-0.008533 0.017067-0.017067 0.034133-0.017067 0.0512-2.414933 6.647467 1.006933 13.994667 7.645867 16.4096 6.647467 2.414933 13.986133-1.006933 16.401067-7.6544 4.8896-13.431467 17.783467-22.468267 32.085333-22.468267 3.968 0 7.893333 0.699733 11.665067 2.0736 8.567467 3.114667 15.4112 9.3952 19.259733 17.646933s4.258133 17.536 1.143467 26.103467l-18.9696 52.1216c-2.414933 6.6304 1.006933 13.986133 7.645867 16.401067 6.6048 2.414933 13.9776-0.9984 16.401067-7.645867l11.144533-30.600533c1.476267-0.170667 3.456-0.298667 5.956267-0.298667 6.144 0 12.552533 0.827733 15.940267 2.056533C696.832 604.1344 706.1504 620.765867 701.653333 633.130667z" />
                  </svg>
                </span>
                <h2 className="heading-line">
                  More likes, more right swipes, less headache
                </h2>
              </div>
              <ul className="list-unstyled">
                <li className="media flex-column flex-md-row text-center text-md-left">
                  <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-mail pe-3x" />
                  <div className="media-body mt-3 mt-md-0">
                    <h5 className="bold mt-0 mb-1">1. Upload your picture</h5>
                    <p className="m-0">
                      Choose your best picture Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Neque, nulla!
                    </p>
                  </div>
                </li>
                <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                  <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users pe-3x" />
                  <div className="media-body mt-3 mt-md-0">
                    <h5 className="bold mt-0 mb-1">
                      2. Vote on other people photos
                    </h5>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet aut autem eum laudantium quas recusandae repellendus
                      voluptate.
                    </p>
                  </div>
                </li>
                <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                  <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x" />
                  <div className="media-body mt-3 mt-md-0">
                    <h5 className="bold mt-0 mb-1">3. Wait for your results</h5>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet aut autem eum laudantium quas recusandae repellendus
                      voluptate.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="bubble bubble-left center-x-md">
                <figure
                  className="rounded overflow-hidden shadow"
                  data-aos="zoom-in">
                  <img
                    src="img/screens/app/pieces/4.png"
                    className="img-responsive"
                    alt=""
                  />
                </figure>
              </div>
              <figure className="bubble bubble-right rounded overflow-hidden shadow">
                <img
                  src="img/screens/app/pieces/5.png"
                  className="img-responsive"
                  alt=""
                  data-aos="fade-left"
                />
              </figure>
              <div className="iphone light">
                <div className="screen shadow-box">
                  <img src="img/screens/app/6.png" alt="..." />
                </div>
                <div className="notch" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
