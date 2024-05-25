import P5 from "p5";
import Tile from "./tile";

export default class World {
  private p5: P5;
  private dim: number;
  private tiles: Tile[][];
  private tileSize: number;

  constructor(p5: P5, dim: number) {
    this.p5 = p5;
    this.dim = dim;
    this.tileSize = this.p5.width / dim;
    this.tiles = [];
    for (let j: number = 0; j < dim; j++) {
      const row: Tile[] = [];
      for (let i: number = 0; i < dim; i++) {
        row.push(new Tile(p5));
      }
      this.tiles.push(row);
    }
  }
  public show(): void {
    for (let j: number = 0; j < this.dim; j++) {
      const row: Tile[] = this.tiles[j];
      for (let i: number = 0; i < this.dim; i++) {
        const tile: Tile = row[i];
        tile.show(i * this.tileSize, j * this.tileSize, this.tileSize);
      }
    }
  }
}
