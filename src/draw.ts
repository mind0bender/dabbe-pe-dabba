import P5 from "p5";
import { world } from "./setup";

export default function draw(p5: P5): void {
  p5.background("#0b0b0b");
  world.show();
}
