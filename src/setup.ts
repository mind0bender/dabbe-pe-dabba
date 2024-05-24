import P5 from "p5";
import Block from "./lib/block";
import createAllBlocks, { BLANK_SOC, MID_SOC } from "./assets/blueprints";
import World from "./lib/world";

let allBlocks: Block[];
export let world: World;

export default function setup(p5: P5): void {
  const size: number = [innerWidth, innerHeight].sort(
    (a: number, b: number): number => a - b
  )[0];
  p5.createCanvas(size, size);
  allBlocks = createAllBlocks(p5);

  console.log(BLANK_SOC.match(MID_SOC));

  world = new World(p5, 4);
}
