import KeyManager from '../lib/KeyManager.js';
import inquirer from 'inquirer';
import colors from 'colors';
import isRequired from '../utils/validation.js';
const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: colors.green("Enter API Key") + 'https://coinlayer.com',
                validate: isRequired
            }
        ]);
        const key = keyManager.setKey(input.key);
        if (key) {
            console.log(colors.blue("API Key Set"));
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log("Current API Key : ".green + key.yellow);
            return key;
        }catch(err){
            console.log(err.message.red);
        }
    },
    remove() {
          try {
            const keyManager = new KeyManager();
              keyManager.deleteKey();
              console.log("API Key Removed".blue);
        }catch(err){
            console.log(err.message.red);
        }
    }
}

export default key;