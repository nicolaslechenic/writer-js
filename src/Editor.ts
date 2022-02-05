export class Editor {
  static configure(hash: {target: string, placeholder: string}): Editor {
    let editor = new Editor(hash)
    editor.call()
    
    return editor
  }

  wrapper: any
  textarea: any
  placeholder: string
  output: Object

  constructor(hash: {target: string, placeholder: string}) {
    this.wrapper = document.querySelector(hash.target);
    this.placeholder = hash.placeholder;
    this.output = {}
  }

  getJSON(): Object {
    return this.output
  }

  private call(): void {
    this.generateTextarea(this.wrapper)
    this.menu()

    this.textarea.placeholder = this.placeholder
  }

  private generateTextarea(wrapper: any): void {
    let textarea = document.createElement('textarea')
    textarea.id = "writer-js"
    textarea.addEventListener('keyup', _ => {
      this.output["content"] = this.textarea.value 
    })
    wrapper.appendChild(textarea)

    this.textarea = textarea
  }

  private menu(): void {
    let menu = document.createElement("div")
    menu.id = "menu-writer-js"

    let bold = document.createElement("button")
    bold.id = "btn-bold"
    bold.innerHTML = "<strong>B</strong>"

    bold.addEventListener('click', () => {

    })

    menu.appendChild(bold)
    this.wrapper.prepend(menu)
  }
}