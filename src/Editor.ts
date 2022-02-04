export class Editor {
  static configure(hash: {target: string, placeholder: string}): void {
    new Editor(hash).call()
  }

  target: string
  placeholder: string

  constructor(hash: {target: string, placeholder: string}) {
    this.target = hash.target;
    this.placeholder = hash.placeholder;
  }

  private call() {
    document.querySelector<HTMLTextAreaElement>(this.target).placeholder = this.placeholder
  }
}