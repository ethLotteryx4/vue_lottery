/* eslint-disable */
var Web3 = require('web3');
const network = "goerli";
const api_key = "d602fa919c86441581fd91bf2e84f513"; // manager
var private_key; // user
var user_acc; // user

const web3 = new Web3(new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${api_key}`));
const gas_val = 1000000;
const gp_val = "10000000000";

const lottery = new web3.eth.Contract(
    // TODO: 修改ABI
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[100]",
                    "name": "tot",
                    "type": "uint256[100]"
                }
            ],
            "name": "enter",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPlayer",
            "outputs": [
                {
                    "internalType": "address payable[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getRandomNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "lotteryy",
                    "type": "uint256"
                }
            ],
            "name": "getWinnerById",
            "outputs": [
                {
                    "internalType": "address payable[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "add",
                    "type": "address"
                }
            ],
            "name": "getWinnerMoneyByAddress",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lotteryid",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "lotteryinfo",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "own",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "peopleinfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pickWinner",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "players",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "winnerhistory",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ], "0xbA1Cca1Aa177CD849568E369eAC77D778a06be00",
    {from: user_acc, gas: gas_val, gasPrice: gp_val, value:0}
);

// buy params  ： [{"num": i, "value":document.getElementById(i).value}]
// 单位为wei
export async function buy(data, pk, acc) {
    if (pk == '' || acc == '')
        return false
    try {
        web3.eth.accounts.wallet.add(pk);
        l = data.length;
        output = Array(100).fill(0);
        val = 0;
        for (var i = 0; i < l; i++){
            output[data[i].num] = data[i].value;
            val += data[i].value;
        }
        await lottery.methods.enter(output).send({from: acc, gas: gas_val, gasPrice: gp_val, value:val});
        return true;
    }
    catch(e){
        console.log(e);
        return false;
    }
}

var chain_hist;

export async function chain_data(pk, acc) {
    web3.eth.accounts.wallet.add(pk);
    await lottery.methods.getHistory().call({from:acc}).then(function(result){chain_hist = result;})
    return chain_hist;
}

var pool_result = {"phase":0, "pool": 0}; // 单位为wei

export async function pool_data(pk, acc) {
    web3.eth.accounts.wallet.add(pk);
    await lottery.methods.getBalance().call({from:acc}).then(function(result){pool_result.pool = result;})
    await lottery.methods.getId().call({from:acc}).then(function(result){pool_result.phase = result;})
    return pool_result;
}

export function is_address(acc) {
    return web3.utils.isAddress(acc)
}