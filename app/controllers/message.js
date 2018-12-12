module.exports = {
    firstSend: async (page, res) => {
        const WhatsUrl = 'https://web.whatsapp.com/',
              number = 5511963294540,
              message = 'envio do golpe';

        await page.goto(WhatsUrl + 'send?phone=' + number + '&text=' + message);
        await page.waitForSelector('#main > footer > div._3pkkz.copyable-area > div:nth-child(3) > button > span');
        await page.waitFor(3000); //WhatsApp Loading
        await page.click('#main > footer > div._3pkkz.copyable-area > div:nth-child(3) > button > span');

        res.send('Primeiro envio realizado');
    }
}