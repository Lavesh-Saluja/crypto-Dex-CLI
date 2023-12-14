import axios from 'axios';
import colors from 'colors';

class CryptoApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'http://api.coinlayer.com/live?access_key='+this.apiKey;
    }
    async getPriceData(coinOption, curOption) {
        try {
            const res = await axios.get(`${this.baseUrl}&symbols=${coinOption}&target=${curOption}`);
            const data = res.data;
            console.log(typeof(data.success));
            if (data.success===false && data.error.code===101)
                throw new Error(data.error);
            return data.rates;
        } catch (err) {
            console.log('------------------------------------');
            console.log("Your API Key is Invalid - Go to https://coinlayer.com".red);
            console.log('------------------------------------');
            handleAPIError(err);
        }
    }
}

function handleAPIError(err) {
    if (err.code === 101) {
        throw new Error("Your API Key is Invalid - Go to https://coinlayer.com");
    } else if (err.code === 404) {
        throw new Error("Your API is not responding - Try again later");
    } else {
        throw new Error("Something is not working");
    }
}
export default CryptoApi;