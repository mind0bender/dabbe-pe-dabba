import "./style.css";

import P5 from "p5";

import draw from "./draw";
import setup from "./setup";

new P5((p5: P5): void => {
  p5.setup = (): void => setup(p5);
  p5.draw = (): void => draw(p5);
});
