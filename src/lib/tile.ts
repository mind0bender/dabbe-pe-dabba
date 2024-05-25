import P5 from "p5";
import Block from "./block";
import createAllBlocks from "../assets/blueprints";

export default class Tile {
  private p5: P5;
  private isCollapsed: boolean = false;
  private possibleBlocks: Block[];
  constructor(p5: P5) {
    this.p5 = p5;
    this.possibleBlocks = [p5.random(createAllBlocks(p5))];
    this.isCollapsed = true;
  }

  show(x: number, y: number, w: number): void {
    if (this.isCollapsed) {
      this.possibleBlocks[0].show(x, y, w);
    } else {
      this.p5.noFill();
      this.p5.strokeWeight(2);
      this.p5.stroke(255);
      this.p5.rect(x, y, w);
    }
  }
  getCollapsed(): Block | null {
    if (this.isCollapsed) {
      return this.possibleBlocks[0];
    }
    return null;
  }
}
