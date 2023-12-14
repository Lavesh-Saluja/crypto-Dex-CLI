import {program} from 'commander';
import check from '../commands/check.js';
program.command('price')
    .description('Check Price Of Coins')
    .option(
        '--coin <type>',
        'Add Specific Coin Types In CSV Format',
        'BTC,ETH,XRP'
    )
    .option(
        '--cur <currency>',
        'Change The Currency',
        'USD'
    )
    .action(cmd => check.price(cmd))
program.parse(process.argv)