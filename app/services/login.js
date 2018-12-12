module.exports = {
    login: async function(page, WhatsUrl){
        await page.goto(WhatsUrl);
        isLogged = await this.isLogged(page); 
        return isLogged;
    },    
    isLogged: async function(page){
        try{
            await page.waitFor('//*[@id="app"]/div/div/div[2]/div/div[2]/div/img');
        }catch(e){     
            try{
                await page.waitFor('//*[@id="app"]/div/div/div[3]');
                return true;
            }catch(e){
                await this.getQrcode(page);
                return false;
            }    
        } 
    },    
    getQrcode: async function(page){
        let qrcode = await page.evaluate(async () => {
            try {
                var qrcode = document.querySelectorAll('#app > div > div > div._2NbD3 > div > div.XSdna > div')[0].innerHTML;
                return qrcode;
            } catch (error) {
                return 'ERROR';
            }
        });
    
        var res = await qrcode.match(/<img[^>]*>/g);
        
        console.log(res[0]);

        return res[0];
    }
}