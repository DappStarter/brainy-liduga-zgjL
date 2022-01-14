require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name renew pitch modify guess another army genius'; 
let testAccounts = [
"0x7f94ec44825f3e332130affccacdc7b3394701e288de53c5dc2aef7c4f1c2e0e",
"0x3b88963f0bd1b5b834116502f0a145662669c8cc7600c15dc095127739b5cd25",
"0xe1562ff7768bcea013c7f95b5f86a6eba6ccb8bbdd76b8b2a4512cc4400a280e",
"0x73289537945e3419a6935fd8eba995cffb19aca804fa1bfdf7560fcb04ed7894",
"0xa992466416205c4068ebb2d4598761c68703d9760610d1bdbe6b09f4f2b38bcb",
"0xb655ea70edb2e64825da3ea61f10f2d49e5e1731facc3a2fd7d5b56cd822899e",
"0x056a51b25ed70409938a83376d16ceaa48dbdb16fb8cec7093b9855d2947114b",
"0x08106229712977a22d6e7bb57face62cef2308407e0e806c3887eed278e9edd3",
"0xdd57ab44dd25417de761ffab419461cc59b37a0616d612366aa1eb97f28dad03",
"0x0f29fe535454c277259cbbf5afa94036ee63a64adae9eafe4245fc6abd4ca1d1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

