export default class Socket {
  private socs: number[];
  private count: number;
  constructor(count: number, ...subSockets: number[]) {
    this.count = count;
    if (subSockets.length !== this.count) {
      throw new Error("Invalid Socket");
    }
    this.socs = subSockets;
  }

  match(neighbourSocket: Socket): boolean {
    for (let i: number = 0; i < this.count; i++) {
      const subSocket: number = this.socs[i];
      if (subSocket !== neighbourSocket.socs[i]) {
        // this.count - i - 1
        return false;
      }
    }
    return true;
  }
}
