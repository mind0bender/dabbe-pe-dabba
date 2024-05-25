import P5 from "p5";
import Socket from "./socket";
import { POS } from "../helpers/constants";

export default class Block {
  private p5: P5;
  private showFn: (
    p5: P5,
    x: number,
    y: number,
    w: number,
    weight: number
  ) => void;
  private sockets: Socket[];
  constructor(
    p5: P5,
    showFn: (p5: P5, x: number, y: number, w: number, weight: number) => void,
    sockets: Socket[]
  ) {
    this.p5 = p5;
    this.showFn = showFn;
    this.sockets = sockets;
  }
  public show(x: number, y: number, w: number, weight: number = 2): void {
    this.p5.strokeWeight(0);
    this.p5.rect(x, y, w);
    this.p5.fill(0);
    this.p5.stroke("#2fa");
    this.showFn(this.p5, x, y, w, weight);
  }
  public match(block: Block, pos: POS): boolean {
    console.table(this.sockets[pos]);
    console.table(block.sockets);
    console.log(pos, Socket.getNeighbourPos(pos));
    return this.sockets[pos].match(block.sockets[Socket.getNeighbourPos(pos)]);
  }
}
