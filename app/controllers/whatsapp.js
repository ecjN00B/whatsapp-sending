module.exports = {
    login: async function(page, res){
        const WhatsUrl = 'https://web.whatsapp.com/';
        login = false;
        do {
            console.log(await getQrCode(page, WhatsUrl));
            await page.waitFor(10000);
        } while(login == false);
        res.send('logged');
    }
}

async function getQrCode(page, WhatsUrl){
    await page.goto(WhatsUrl);

    try{
        await page.waitFor('//*[@id="app"]/div/div/div[2]/div/div[2]/div/img');
    }catch(e){     
        try{
            await page.waitFor('//*[@id="app"]/div/div/div[3]');
            return login = true;
        }catch(e){
            console.log('Tentando Conectar ao Celular');
            return login = false
        }    
    }   

    let qrcode = await page.evaluate(async () => {
        try {
            var qrcode = document.querySelectorAll('#app > div > div > div._2NbD3 > div > div.XSdna > div')[0].innerHTML;
            return qrcode;
        } catch (error) {
            return 'ERROR';
        }
    });

    var res = await qrcode.match(/<img[^>]*>/g);
    
    return res[0];
}