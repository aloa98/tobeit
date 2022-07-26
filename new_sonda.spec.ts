- type: browser
  id: sonda_zip
  name: sonda_zip
  schedule: '@every 5m'
  screenshots: "only-on-failure"
  source:
    inline:
      script: |-
        step('01. Load Site A', async () => {
          await page.goto('https://www.google.es');
        });
        step('01. Load Site B', async () => {
          await page.goto('https://es.wikipedia.org/');
        });       
