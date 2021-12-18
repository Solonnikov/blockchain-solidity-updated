const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
    'cluster outdoor tray lend leave goddess ocean suffer six pluck harsh chronic',
    'https://rinkeby.infura.io/v3/7310c969ad8e4c4a85fb117ee3ce5ad0'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to =>', result.options.address);
    provider.engine.stop();
};
deploy();
