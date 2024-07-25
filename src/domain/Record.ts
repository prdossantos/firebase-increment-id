export class Record {
  public constructor(
    public id: string,
    public name: string,
    public incrementId: number,
    public createdAt: Date,
    public updatedAt: Date = new Date()
  ) {}
}
