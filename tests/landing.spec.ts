import { test, expect } from "@playwright/test";

test("has h1 header", async ({ page }) => {

    // navigate to page url
    await page.goto("http://localhost:4200/dashboard");

    // expect url page to contain html title...
    await expect(page).toHaveTitle(/AngularSpaPractice/);

    await expect(page.getByRole("heading", { name: "Tour of Heroes"})).toBeVisible();




});

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/dashboard');
  await page.getByRole('heading', { name: 'Tour of Heroes' }).click();
  await page.getByLabel('Hero Search').click();
  await page.getByLabel('Hero Search').fill('cel');
  await page.locator('#search-component').getByRole('link', { name: 'Celeritas' }).click();
  await page.getByPlaceholder('name').click();
  await page.getByPlaceholder('name').fill('Celeritasb');
  await page.getByRole('button', { name: 'save' }).click();
  await page.getByLabel('Hero Search').click();
  await page.getByLabel('Hero Search').fill('ce');
  await page.locator('#search-component').getByRole('link', { name: 'Celeritasb' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByLabel('Hero Search').click();
  await page.getByLabel('Hero Search').fill('e');
  await page.locator('#search-component').getByRole('link', { name: 'Magneta' }).click();
  await page.getByRole('button', { name: 'go back' }).click();
  await page.getByRole('link', { name: 'Heroes' }).click();
  await page.locator('li').filter({ hasText: '16 RubberMan x' }).getByTitle('delete hero').click();
  await page.locator('li').filter({ hasText: '15 Magneta x' }).getByTitle('delete hero').click();
  await page.locator('li').filter({ hasText: '14 Celeritasb x' }).getByTitle('delete hero').click();
  await page.locator('li').filter({ hasText: '18 Dr. IQ x' }).getByTitle('delete hero').click();
  await page.locator('li').filter({ hasText: '17 Dynama x' }).getByTitle('delete hero').click();
  await page.locator('li').filter({ hasText: '13 Bombasto x' }).getByTitle('delete hero').click();
  await page.locator('li').filter({ hasText: '12 Dr. Nice x' }).getByTitle('delete hero').click();
  await page.locator('li').filter({ hasText: '20 Tornado x' }).getByTitle('delete hero').click();
  await page.getByRole('button', { name: 'x' }).click();
  await page.getByLabel('Hero name:').click();
  await page.getByLabel('Hero name:').fill('test');
  await page.getByRole('button', { name: 'Add hero' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByLabel('Hero Search').click();
  await page.getByLabel('Hero Search').fill('test');
  await page.getByRole('link', { name: 'test' }).click();
});