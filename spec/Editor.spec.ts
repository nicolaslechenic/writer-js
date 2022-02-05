import * as webdriver from "selenium-webdriver"
import { text } from "stream/consumers"

describe('Editor', () => {
  it('return the expected placeholder after loading the writerjs library', async () => {
    let html_file = __dirname + "/ui/editor.html"
    let driver = new webdriver.Builder()
                    .forBrowser("chrome")
                    .build()

                    
    await driver.get("file:///" + html_file)
      .then(_ => driver.findElement({id: "writer-js"}))
      .then(async (textarea: webdriver.WebElement) => {
        let placeholder = await textarea.getAttribute("placeholder")
        expect(placeholder).toEqual("Hello world")
      })
    
    await driver.quit()
  })


  it('return bold button', async () => {
    let html_file = __dirname + "/ui/editor.html"
    let driver = new webdriver.Builder()
                    .forBrowser("chrome")
                    .build()

                    
    await driver.get("file:///" + html_file)
      .then(_ => driver.findElement({id: "btn-bold"}))
      .then(async (bold: webdriver.WebElement) => {
        let id = await bold.getText()
        expect(id).toEqual("B")
      })
    
    await driver.quit()
  })

  it('return expected json after typing content', async () => {
    let html_file = __dirname + "/ui/editor.html"
    let driver = new webdriver.Builder()
                    .forBrowser("chrome")
                    .build()

                    
    await driver.get("file:///" + html_file)
      .then(_ => driver.findElement({id: "writer-js"}))
      .then(async (textarea: webdriver.WebElement) => {
        textarea.clear()
        textarea.sendKeys("foo bar")
        let code = await driver.findElement({id: "code"}).getText()

        expect(code).toEqual('{"content":"foo bar"}')
      })
    
    await driver.quit()
  })
}) 