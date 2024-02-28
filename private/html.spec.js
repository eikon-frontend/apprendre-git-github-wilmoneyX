// @ts-check
const { test, expect } = require("@playwright/test");
import path from "path";

test.beforeEach(async ({ page }) => {
  const currentPath = path.join(process.cwd(), "index.html");
  const url = `file://${currentPath}`;
  await page.goto(url);
});

test("La page existe", async ({ page }) => {
  await expect(page.locator("html")).toBeVisible();
});

test("La page affiche le bon titre", async ({ page }) => {
  await expect(page).toHaveTitle(/Apprendre Git/);
});

test("La langue a été correctement paramétrée (fr)", async ({ page }) => {
  const html = page.locator("html");
  await expect(html).toHaveAttribute("lang", "fr");
});

test("La page contient un h1", async ({ page }) => {
  await expect(page.locator("h1")).toBeVisible();
});

test("La page contient une image", async ({ page }) => {
  await expect(page.locator("img")).toBeVisible();
});

test("Les CSS sont bien ajoutés à la page", async ({ page }) => {
  const css = page.locator("link[rel=stylesheet]");
  await expect(css).toBeAttached();
});
