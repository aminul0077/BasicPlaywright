import { test, expect } from '@playwright/test';

test('Single Element Locator', async ({ page }) => {
  await page.goto('opencart/index.php?route=account/register');

  await page.getByRole("textbox", { name: "* First Name" }).fill('Aminul');
  await page.getByRole("textbox", { name: "* Last Name" }).fill('Ehsan');
  await page.getByRole("textbox", { name: "* E-Mail" }).fill('aminulahasun@gmail.com');
  await page.getByRole("textbox", { name: "* Telephone" }).fill('1234567890');
//   await page.getByRole("textbox", { name: "* Password" }).fill('aminul@123');
//   await page.getByRole("textbox", { name: "* Password Confirm" }).fill('aminul@123');


  await page.pause();

});
