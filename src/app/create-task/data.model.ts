export class tasks {
    static nextId: number = 1; // Static variable for auto-incremental id

  public id: number;

  constructor(
    public nameTask: string,
    public description: string,
    public dates: Date[] | any
  ) {
    // We assign a unique id to the task (auto-incremental)
    this.id = tasks.nextId++;
  }
}