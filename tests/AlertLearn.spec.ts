import { test, expect } from '@playwright/test';

test('Alert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');



  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.locator("#alertBtn").click();


  await page.pause();

});


test('Confirm Alert_Ok', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');



  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
  });

  await page.locator("#confirmBtn").click();


  await page.pause();

});


test('Confirm Alert_Cancel', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');



  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.dismiss();
  });

  await page.locator("#confirmBtn").click();


  await page.pause();

});


test('Confirm Alert_Prompt', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');



  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    await dialog.accept('Aminul');
  });

  await page.locator("#promptBtn").click();


  await page.pause();

});


test.only('Confirm Alert_Prompt_cancel', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');



  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    await dialog.dismiss();
  });

  await page.locator("#promptBtn").click();


  await page.pause();

});