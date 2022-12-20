import { off } from 'node-notifier';

const ethers = require('Ethers')
var Web3 = require('web3');
const network = "goerli";
const api_key = "d602fa919c86441581fd91bf2e84f513"; // manager
var user_acc = ""; // user
var lottery = {};
// const web3 = new Web3(new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${api_key}`));
const web3 = new Web3(new Web3.providers.HttpProvider("https://convincing-little-rain.ethereum-goerli.discover.quiknode.pro/bdd296e11ef9077b6b9c1425610d917c817f0776/"))
const gas_val = "3000000";
const gp_val = "1000000";
var metaMaskAddress = "0x507A4d2E61739C8294C621ff13bBF7CbFeCD2173";
var ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
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
		"inputs": [
			{
				"internalType": "address payable",
				"name": "i",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "m",
				"type": "uint256"
			}
		],
		"name": "pay",
		"outputs": [],
		"stateMutability": "payable",
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
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
		"name": "getHistory",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
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
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winnum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
var inter_addr = "0xC9e367d940A4ED9FF0D983069666D44acdFD3480"
var dummy_pk = "0a54f5857e24a3ee454fcfe80b8f0a587317367b6ac5fc6716d358e41d1a0e06"
var agent = new Web3(new Web3.providers.HttpProvider("https://convincing-little-rain.ethereum-goerli.discover.quiknode.pro/bdd296e11ef9077b6b9c1425610d917c817f0776/"))
agent.eth.defaultAccount = inter_addr;
var official_contract;
agent.eth.accounts.wallet.add(dummy_pk);

export async function getWallet() {
    if (typeof window.ethereum === "undefined") {
        //没安装MetaMask钱包进行弹框提示
        Message.warning("请安装MetaMask")
        alert("请先安装MetaMask, 再访问此网站!")
        Window.location.href = "https://metamask.io/";
        return false;
    } else {
        //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
        var accounts = await ethereum.enable()
            .catch(function(reason) {
                //如果用户拒绝了登录请求
                if (reason === "User rejected provider access") {
                    // 用户拒绝登录后执行语句；
                    console.log("拒绝登录！")
                } else {
                    // 本不该执行到这里，但是真到这里了，说明发生了意外
                    alert("There was a problem signing you in")
                }
                return false;});
            // 判断是否连接以太
            // if (ethereum.networkVersion !== desiredNetwork) {}
            //如果用户同意了登录请求，你就可以拿到用户的账号
            web3.eth.defaultAccount = accounts[0];

            lottery = await new web3.eth.Contract(ABI, metaMaskAddress, {
				from: web3.eth.defaultAccount,
				gas: gas_val,
				gasPrice: gp_val,
				value: 0
			});
			official_contract = await new agent.eth.Contract(ABI, metaMaskAddress, {
				from: inter_addr,
				gas: gas_val,
				gasPrice: gp_val,
				value: 0
			});
            user_acc = accounts[0]
            return true;
            
    }
}

// buy params : [{"num": i, "value":document.getElementById(i).value}]
// 单位为wei
export async function buy(data) {
	console.log(data)
	var l = data.length;
	var output = Array(100).fill(0);
	var val = 0;
	for (var i = 0; i < l; i++){
		output[data[i].num - 1] = data[i].value;
		val += data[i].value;
	}
	const params = [{
		from: web3.eth.defaultAccount,
		to: inter_addr,
		data: "1",
		value: web3.utils.toHex(val),
 	 }];
	 console.log(params)
	await ethereum.request(
		{
			method: "eth_sendTransaction",
			params: params,
		}
   ).then(async function() {
	agent.eth.getTransactionCount(agent.eth.defaultAccount).then(async function(nonce) {
		console.log(nonce)
		await official_contract.methods.enter(output).send({from:inter_addr, gas: gas_val, gasPrice: gp_val, value:val}).catch(e => {console.log(e)})
		console.log('bought')
		// console.log(agent.eth.defaultAccount)
	})
   });
	// await lottery.methods.enter(output).send({from:user_acc, gasLimit:web3.utils.toHex(gas_val), value:web3.utils.toHex(0), nonce:await web3.eth.getTransactionCount(web3.eth.defaultAccount)});
	// await lottery.methods.enter(output).send({from:user_acc, gasLimit:web3.utils.toHex(gas_val), value:"1", nonce:await web3.eth.getTransactionCount(web3.eth.defaultAccount)});
}

var chain_hist = [];

function get_chain_hist(data) {
    var len = parseInt(data[0]);
    var output = Array(len);
    var begin = 0;
    for (var i = 0; i < len; i++)
    {
        output[i] = {phase: i, number: data[2][i], phase_data: Array()}
        for (var j = 0; j < parseInt(data[1][i]); j++)
        {
            var obj = {id: data[3][begin + j], money: data[4][begin + j]};
            output[i].phase_data.push(obj);
        }
        begin += parseInt(data[1][i]);
    }
    return output;
}

export async function chain_data() {
    await lottery.methods.getHistory().call({from:user_acc}).then(function(result){chain_hist = get_chain_hist(result);});
    return chain_hist;
}

var pool_result = {phase:0, pool: 0}; // 单位为wei

export async function pool_data() {
    await lottery.methods.getBalance().call({from:user_acc}).then(function(result){pool_result.pool = result;});
    await lottery.methods.getId().call({from:user_acc}).then(function(result){pool_result.phase = result;});
    return pool_result;
}

export function is_address(acc) {
    return web3.utils.isAddress(acc);
}

export function logged() {
    return Object.keys(lottery).length != 0;
}