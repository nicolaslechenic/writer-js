import * as webdriver from "selenium-webdriver"

describe('Editor',() => {
  it('return the expected placeholder after loading the writerjs library',async () => {
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

  it('return expected bold button',async () => {
    let html_file = __dirname + "/ui/editor.html"
    let driver = new webdriver.Builder()
                    .forBrowser("chrome")
                    .build()

                    
    await driver.get("file:///" + html_file)
      .then(_ => driver.findElement({id: "btn-bold"}))
      .then(async (bold: webdriver.WebElement) => {
        let boldText = await bold.getText()
        expect(boldText).toEqual("B")
      })
    
    await driver.quit()
  })

  it('return expected eventsData() after typing content',async () => {
    let html_file = __dirname + "/ui/editor.html"
    let driver = new webdriver.Builder()
                    .forBrowser("chrome")
                    .build()

                    
    await driver.get("file:///" + html_file)
      .then(_ => driver.findElement({id: "writer-js"}))
      .then(async (textarea: webdriver.WebElement) => {
        await textarea.clear()
        await textarea.sendKeys("f")
        await textarea.sendKeys("o")
        await textarea.sendKeys("o")
        await textarea.sendKeys(" ")
        await textarea.sendKeys("b")
        await textarea.sendKeys("a")
        await textarea.sendKeys("r")

        let code = await driver.findElement({id: "code"}).getText()

        expect(code).toEqual('{"actions":[{"type":"key","content":"f","from":0,"to":0},{"type":"key","content":"o","from":1,"to":1},{"type":"key","content":"o","from":2,"to":2},{"type":"key","content":" ","from":3,"to":3},{"type":"key","content":"b","from":4,"to":4},{"type":"key","content":"a","from":5,"to":5},{"type":"key","content":"r","from":6,"to":6}]}')
      })
    
    await driver.quit()
  })
}) 

