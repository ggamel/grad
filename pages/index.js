import React, { useEffect, useCallback } from "react";
import Head from "../components/head";

const IndexPage = () => {
  // empty gradient array
  const grads = [];
  // index set to 0
  let i = 0;
  // random number between min and max
  const num = (min, max) => {
    Math.floor(Math.random() * (max - min + 1) + min);
  };
  // color value between 0-255
  const color = () => {
    num(0, 255);
  };
  const angle = () => {
    num(0, 360);
  };
  // create rgb from rand number and value
  const rgb = () => {
    `rgb(${color()},${color()},${color()})`;
  };

  const grad = () => {
    `linear-gradient(${angle()}, ${rgb()} 0%, ${rgb()} 100%)`;
  };

  const apply = bg => {
    document.body.style.background = bg;
  };

  const makeGrad = () => {
    const bg = grad();
    apply(bg);
  };

  useEffect(() => {
    window.addEventListener("load", makeGrad);
    return () => window.removeEventListener("load", makeGrad);
  }, []);

  return (
    <div>
      <Head title="grad" />
    </div>
  );
};

export default IndexPage;
