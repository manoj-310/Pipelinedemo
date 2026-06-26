import {test,expect} from '@playwright/test';
test('one',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")
    await page.locator("Select#country").selectOption({label:'India'});
    await page.locator("Select#country").click()
    await page.waitForTimeout(5000)
    const mk = await  page.locator("Select#country option");
    await expect (mk).toHaveCount(10);
    const Optcount=await page.$$("//select[@id='country']/option");
    console.log('numberindropdown:',Optcount.length)
    await expect (Optcount.length).toBe(10);   
    const contentcheck =await page.locator('#country').textContent();
    await expect(content.includes('India')),toBeTruthy();
});