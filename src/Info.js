import React from "react";

export default function Info() {
  return (
    <header>
      <h1 className="title">Fullscreen API with React</h1>
      <p>See some ways to use the Fullscreen API using React JS.</p>
      <p>
        The Fullscreen API allows you to make an element fullscreen and detect
        if any element is currently fullscreen.
      </p>
      <h4>How is the API being used in this example?</h4>
      <p>
        There are two elements below which represent blog posts. They each have
        a "fullscreen" button. Clicking the button will ask the browser to set
        the blog post to fullscreen. Using a custom hook, we can determine if an
        element is in fullscreen mode and change the button to "Exit Fullscreen"
      </p>
    </header>
  );
}
