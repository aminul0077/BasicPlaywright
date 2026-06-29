import { test, expect } from '@playwright/test';

test('Single Element Locator', async ({ page }) => {
  await page.goto('opencart/index.php?route=account/register');

  const firstNameText = page.locator('#input-firstname');
  const lastNameText = page.locator('#input-lastname');
  const email = page.locator('input[name="email"]');
  const telephone = page.locator('#input-telephone');
  const password = page.locator('#input-password');
  const confirmPassword = page.locator('#input-confirm');

    await firstNameText.fill('Aminul');
    await lastNameText.fill('Ehsan');
    await email.fill(' aminulahasun@gmail.com');
    await telephone.fill('1234567890');
    await password.fill('aminul@123');
    await confirmPassword.fill('aminul@123');

    await page.pause();

});

test('Multiple Element Locator', async ({ page }) => {
  await page.goto('opencart/index.php?route=account/register');

  const formControls = page.locator('.form-control');
  console.log(await formControls.count());

  await formControls.first().fill('Hi');
  
  await formControls.nth(1).fill('Aminul');
  await formControls.nth(2).fill('Ehsan');
  await formControls.nth(3).fill('aminulahasun@gmail.com');
  await formControls.nth(4).fill('1234567890');
  await formControls.nth(5).fill('aminul@123');
  await formControls.last().fill('aminul@123');

  await page.pause();

});