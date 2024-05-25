import P5 from "p5";
import Block from "../lib/block";
import Socket from "../lib/socket";

export function blankShow(
  p5: P5,
  x: number,
  y: number,
  w: number,
  weight: number
): void {
  p5.strokeWeight(weight);
  p5.point((2 * x + w) / 2, (2 * y + w) / 2);
}
export function upShow(
  p5: P5,
  x: number,
  y: number,
  w: number,
  weight: number
): void {
  p5.strokeWeight(weight);
  p5.line((2 * x + w) / 2, (2 * y + w) / 2, (2 * x + w) / 2, y);
  p5.line(x / 2, (2 * y + w) / 2, x + w, (2 * y + w) / 2);
}
export function rightShow(
  p5: P5,
  x: number,
  y: number,
  w: number,
  weight: number
): void {
  p5.strokeWeight(weight);
  p5.line((2 * x + w) / 2, (2 * y + w) / 2, x + w, (2 * y + w) / 2);
  p5.line((2 * x + w) / 2, y, (2 * x + w) / 2, y + w);
}
export function leftShow(
  p5: P5,
  x: number,
  y: number,
  w: number,
  weight: number
): void {
  p5.strokeWeight(weight);
  p5.line((2 * x + w) / 2, (2 * y + w) / 2, x, (2 * y + w) / 2);
  p5.line((2 * x + w) / 2, y, (2 * x + w) / 2, y + w);
}
export function downShow(
  p5: P5,
  x: number,
  y: number,
  w: number,
  weight: number
): void {
  p5.strokeWeight(weight);
  p5.line(x / 2, (2 * y + w) / 2, x + w, (2 * y + w) / 2);
  p5.line((2 * x + w) / 2, (2 * y + w) / 2, (2 * x + w) / 2, y + w);
}

export const BLANK_SOC = new Socket(3, 0, 0, 0);
export const MID_SOC = new Socket(3, 0, 1, 0);

export default function createAllBlocks(p5: P5): Block[] {
  const allBlocks: Block[] = [
    new Block(p5, blankShow, [BLANK_SOC, BLANK_SOC, BLANK_SOC, BLANK_SOC]),
    new Block(p5, upShow, [MID_SOC, MID_SOC, MID_SOC, BLANK_SOC]),
    new Block(p5, rightShow, [MID_SOC, MID_SOC, BLANK_SOC, MID_SOC]),
    new Block(p5, leftShow, [MID_SOC, BLANK_SOC, MID_SOC, MID_SOC]),
    new Block(p5, downShow, [BLANK_SOC, MID_SOC, MID_SOC, MID_SOC]),
  ];

  return allBlocks;
}
