import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="nav-brand">
        <h3>Web APIs with React</h3>
      </div>
      <div className="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <button>
          <label htmlFor="collapsible1">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </label>
        </button>
        <div className="collapsible-body">
          <ul className="inline">
            <li>
              <a href="https://example-react-page-visibility.sethcorker.com/">
                Page Visibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
