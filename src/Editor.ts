import { EditorSerializer } from "./EditorSerializer"

export class Editor {
  static configure(hash: {target: string, placeholder: string}): Editor {
    let editor = new Editor(hash)
    editor.call()
    
    return editor
  }

  private wrapper: HTMLElement
  private textarea: { 
    placeholder: string, 
    selectionStart: number, 
    selectionEnd: number,
    value: string 
  }
  private placeholder: string
  private events: { actions: Array<Object> }
  private serializer: EditorSerializer

  private constructor(hash: {target: string, placeholder: string}) {
    this.wrapper = document.querySelector(hash.target);
    this.placeholder = hash.placeholder;
    this.events = {actions: []}
    this.serializer = new EditorSerializer(this.events)
  }

  eventsData(): string {
    this.serializer.update(this.events)
    return this.serializer.stringifiedEvents()
  }

  private call(): void {
    this.generateTextarea(this.wrapper)
    this.menu()

    this.textarea.placeholder = this.placeholder
  }

  private generateTextarea(wrapper: HTMLElement): void {
    let textarea = document.createElement('textarea')
    textarea.id = "writer-js"
    textarea.addEventListener('keypress', event => {
      let fromIndex = this.textarea.selectionStart;
      let toIndex = this.textarea.selectionEnd;

      this.events.actions.push({type: "key", content: this.keyPressed(event), from: fromIndex, to: toIndex})
    })
    wrapper.appendChild(textarea)

    this.textarea = textarea
  }

  private keyPressed(e: {keyCode: number, which: number}): string{
    let keynum;
  
    if(window.event) {               
      keynum = e.keyCode;
    } else if(e.which){              
      keynum = e.which;
    } else {
      throw new Error("Unsupported browser");
    }
  
    return String.fromCharCode(keynum);
  }

  private menu(): void {
    let menu = document.createElement("div")
    menu.id = "menu-writer-js"

    let bold = document.createElement("button")
    bold.id = "btn-bold"
    bold.innerHTML = "<strong>B</strong>"

    bold.addEventListener('click', () => {
        let from = this.textarea.selectionStart;
        let to = this.textarea.selectionEnd - 1;
        let substr = this.textarea.value.substr(from, to)
        
        this.events.actions.push({type: "bold", from: from, to: to, content: substr})
    })

    menu.appendChild(bold)
    this.wrapper.prepend(menu)
  }
}