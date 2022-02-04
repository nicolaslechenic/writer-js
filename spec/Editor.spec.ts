import * as webdriver from "selenium-webdriver"

describe('Editor', () => {
  it('return the expected placeholder after loading the writerjs library', async () => {
    let html_file = __dirname + "/ui/editor.html"
    let driver = new webdriver.Builder()
                    .forBrowser("chrome")
                    .build()

                    
    await driver.get("file:///" + html_file)
      .then(_ => driver.findElement({id: "wrapper"}))
      .then(async (wrapper: webdriver.WebElement) => {
        let placeholder = await wrapper.getAttribute("placeholder")
        expect(placeholder).toEqual("Hello world")
      })
    
    await driver.quit()
  })

}) 