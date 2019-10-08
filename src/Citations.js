import React from "react";

export default function Citations() {
  return (
    <footer className="paper">
      <h4 className="margin-top-small margin-bottom-small">Like the CSS?</h4>
      It's{" "}
      <a
        href="https://www.getpapercss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        PaperCSS
      </a>{" "}
      by{" "}
      <a
        href="https://www.vlaservich.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rhyne
      </a>
      <h4 className="margin-bottom-small">
        More from <a href="https://twitter.com/Darth_Knoppix">Seth Corker</a>
      </h4>
      <ul>
        <li>
          Read the blog post, "
          <a href="https://blog.sethcorker.com/fullscreen-api/">
            Using the Fullscreen API with React
          </a>
          "
        </li>
        <li>
          Find <a href="https://dev.to/darthknoppix">me on dev.to</a>
        </li>
        <li>
          Support me as a reader of{" "}
          <a href="https://medium.com/front-end-field-guide">
            Benevolent Bytes on Medium
          </a>
        </li>
      </ul>
    </footer>
  );
}
