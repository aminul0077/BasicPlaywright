import { test, expect } from '@playwright/test';

test('Single Drop_down select', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  await page.evaluate(() => {
    window.scrollBy(0, 700);
  });

  await page.getByRole('combobox', { name: 'Country'}).selectOption({value: "canada"});
  await page.waitForTimeout(2000);

  await page.getByRole('combobox', { name: 'Country'}).selectOption({label: "Japan"});
  await page.waitForTimeout(2000);

  await page.getByRole('combobox', { name: 'Country'}).selectOption({index: 3});

  await page.waitForTimeout(2000);


  await page.pause();

});


test.only('Multi Drop_down select', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  await page.evaluate(() => {
    window.scrollBy(0, 700);
  });

  await page.selectOption('#colors', ['Red', 'Green', 'White']);


  await page.pause();

});