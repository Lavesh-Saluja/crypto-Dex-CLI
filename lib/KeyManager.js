import Configstore from 'configstore';
class keyManager{
    constructor(){
        this.conf=new Configstore("cryptoterminal");
    }

    setKey(key){
        this.conf.set('apiKey',key);
        return key;
    }
    getKey() {
        const key = this.conf.get('apiKey');
        if (!key) {
            throw new Error('No API Key Found -- Get a key at https://coinlayer.com');
        }
        return key;
    }
    deleteKey(){
        const key=this.conf.get('apiKey');
        if(!key){
            throw new Error('No API Key Found -- Get a key at https://coinlayer.com');
        }
        this.conf.delete('apiKey');
        return;
    }


}

export default keyManager;