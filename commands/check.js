import axios from 'axios';
import KeyManager from '../lib/KeyManager.js';
import CryptoApi from '../lib/CryptoApi.js';
 const check = {
     async price(cmd) {
         console.log(cmd);
         try {
             const fromatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: cmd.cur
                });
             const keyManager = new KeyManager();
             const key = keyManager.getKey();
             const api = new CryptoApi(key);
             const priceOutput = await api.getPriceData(cmd.coin + ",", cmd.cur);
             Object.keys(priceOutput).forEach((key) => {
                 console.log( key.yellow +":"+ fromatter.format(priceOutput[key]).green);
             }
             );

         }catch(err){
             console.log(err.message.red);
         }
        
         
    }
};
export default check;