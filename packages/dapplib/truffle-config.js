require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note outside coast grace loan flush gate'; 
let testAccounts = [
"0x3e9d1a4076bbfc76ce454867113bf2e3f98950ff9c81123274fca107c6d8825c",
"0xa0095090ecf026b3b6ddc25103e4e5af21bdb9d2ffd69e474fd9cf0a792c423d",
"0xd9cbcb4c5a09bf06820386f504e1893b9fea6c482cad02e0361842cef8eada86",
"0xe4f8b980acb67a353793e7e363454a452684b4d587eaa161dd3370c47485a3d3",
"0xc9ec6f7f8aaf65a4ff43d7197d006df9a68980cdf361317088bcecdac0c7470b",
"0xc8812fc6509fb1fa940dee67b3869bd44c3be1d60ca51f6ff86269c9198f9c76",
"0x16568676a99760681bf2455d89f7a630a65e1d9a070c53c715ac10680766779a",
"0xd4bec44ebb91b865309a2e6e8a2d7cf105c67ea89ba26a356df82105665c0461",
"0xc8b27f97e7ed01a0e85aa3e4a4dbd2111f9ec412a1503fbfcf31d48014f384a0",
"0xfeefbd5cfe12eda9ad54af9461beb6544183d90db86dfcd3512d8b7e83ee7d5c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


