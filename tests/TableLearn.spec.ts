import { test, expect } from '@playwright/test';

test('Table Local', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  await page.evaluate(() => {
    window.scrollBy(0, 1700);
  });

  await page.locator("tbody tr").first().waitFor({ timeout: 10000 });

  const firstRow = await page.locator("tbody tr").first();
  const firstCell = firstRow.locator("th").first();
  console.log(await firstCell.textContent());
  expect(await firstCell.textContent()).toBe("BookName");


  await page.pause();

});



test.only('nTh Table Local', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  await page.evaluate(() => {
    window.scrollBy(0, 1700);
  });

//   await page.locator("tbody tr").first().waitFor({ timeout: 10000 });

  const thirdRow = page.locator("tbody tr").nth(2);
  const secondCell = thirdRow.locator("td").nth(1);
  console.log(await secondCell.textContent());
  expect(await secondCell.textContent()).toBe("Mukesh");


  await page.pause();

});