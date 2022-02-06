export class EditorSerializer {
  private events: { actions: Array<Object> }

  public constructor(events: {actions: Array<Object>}) {
    this.events = events
  }

  public update(events: {actions: Array<Object>}): void {
    this.events = events
  }

  public stringifiedEvents(): string {
    return JSON.stringify(this.events)
  }
}