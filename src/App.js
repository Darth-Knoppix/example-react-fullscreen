import React from "react";

import Info from "./Info";
import Citations from "./Citations";
import Nav from "./Nav";
import Resources from "./Resources";
import MaximizableView from "./MaximizableView";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="row">
        <div className="lg-5 col">
          <div className="paper">
            <Info />
          </div>
          <Resources />
          <Citations />
        </div>
        <div className="lg-7 col">
          <div className="paper">
            <div className="row">
              <div className="col-fill col">
                <MaximizableView backgroundColor="#efefef">
                  <img
                    src="https://blog.sethcorker.com/content/images/size/w2000/2019/08/Artboard-Copy-3.png"
                    alt="Title card for The reason developers avoid CSS article"
                  />
                  <div className="h1 padding-top">
                    The reason developers avoid CSS
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blog.sethcorker.com/the-reason-developers-avoid-css/"
                  >
                    Read the article
                  </a>
                </MaximizableView>
              </div>
              <div className="col-fill col">
                <MaximizableView backgroundColor="#efefef">
                  <img
                    src="https://blog.sethcorker.com/content/images/size/w2000/2019/10/Medium.png"
                    alt="Title card for Harnessing the Page Visibility API with React article"
                  />
                  <div className="h1 padding-top">
                    Harnessing the Page Visibility API with React
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blog.sethcorker.com/harnessing-the-page-visibility-api-with-react/"
                  >
                    Read the article
                  </a>
                </MaximizableView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
