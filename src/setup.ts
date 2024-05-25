import P5 from "p5";
import World from "./lib/world";
import Block from "./lib/block";
import createAllBlocks from "./assets/blueprints";

let allBlocks: Block[];
export let world: World;

export default function setup(p5: P5): void {
  const size: number = [innerWidth, innerHeight].sort(
    (a: number, b: number): number => a - b
  )[0];
  p5.createCanvas(size, size);
  allBlocks = createAllBlocks(p5);

  world = new World(p5, 4);
}
