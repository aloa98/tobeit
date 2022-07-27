import { journey, step, expect } from '@elastic/synthetics';

journey('Webpage Load', ({ page, params }) => {
  step('launch app', async () => {
    await page.goto('https://www.elpais.com');
  });
});
