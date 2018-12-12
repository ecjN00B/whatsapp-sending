module.exports = {
    login: async(application, page, res) => {
        const WhatsUrl = 'https://web.whatsapp.com/';
        do {
            login = await application.app.services.login.login(page, WhatsUrl);
            await page.waitFor(10000);
        } while(login == false);
        res.send('logged');
    }
}