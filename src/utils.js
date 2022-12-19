var Web3 = require('web3');
const network = "goerli";
const api_key = "d602fa919c86441581fd91bf2e84f513"; // manager
var user_acc; // user
var lottery = {};
const web3 = new Web3(new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${api_key}`));
const gas_val = 3000000;
const gp_val = "10000000000";
const metaMaskAddress = "0x29140dee78f11c73A1453eD008CCB65ceCC3c0A9";
const ABI = [
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

export async function getWallet() {
    if (typeof window.ethereum === "undefined") {
        //没安装MetaMask钱包进行弹框提示
        Message.warning("请安装MetaMask")
        alert("请先安装MetaMask,再访问次网站!")
        return false;
    } else {
        //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
        await ethereum.enable()
            .catch(function(reason) {
                //如果用户拒绝了登录请求
                if (reason === "User rejected provider access") {
                    // 用户拒绝登录后执行语句；
                } else {
                    // 本不该执行到这里，但是真到这里了，说明发生了意外
                    Message.warning("There was a problem signing you in");
                }
                return false;
            }).then(function(accounts) {
                // 判断是否连接以太
                // if (ethereum.networkVersion !== desiredNetwork) {}
                let currentProvider = web3.currentProvider;
                web3.setProvider(currentProvider);
                //如果用户同意了登录请求，你就可以拿到用户的账号
                web3.eth.defaultAccount = accounts[0];

                lottery = new web3.eth.Contract(ABI, metaMaskAddress);
                user_acc = accounts[0]
                return true;
                //这里返回用户钱包地址
                // callback(accounts[0]);
            });
        return user_acc != null;
    }
}

export async function login(pk, acc) {
    if (!is_address(acc))
        return false;
    try
    {
        lottery = await new web3.eth.Contract(
            ABI, metaMaskAddress, // TODO: change addr
            {from: acc, gas: gas_val, gasPrice: gp_val, value:0}
        );
        return true;
    }
    catch(e)
    {
        lottery = {};
        web3.eth.accounts.wallet.clear();
        console.log(e);
        return false;
    }
}

// buy params : [{"num": i, "value":document.getElementById(i).value}]
// 单位为wei
export async function buy(data) {
    try 
    {
        console.log(data)
        var l = data.length;
        var output = Array(100).fill(0);
        var val = 0;
        for (var i = 0; i < l; i++){
            output[data[i].num - 1] = data[i].value;
            val += data[i].value;
        }
        console.log(val)
        console.log(output)
        await lottery.methods.enter(output).send({from: user_acc, gas: gas_val, gasPrice: gp_val, value:val});
        return true;
    }
    catch(e){
        console.log(e);
        return false;
    }
}

var chain_hist = [];

function get_chain_hist(data) {
    console.log(data);
    var len = parseInt(data[0]);
    console.log(len);
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
    console.log(output);
    return output;
}

export async function chain_data() {
    await lottery.methods.getHistory().call({from:user_acc}).then(function(result){chain_hist = get_chain_hist(result);});
    console.log(chain_hist);
    return chain_hist;
}

var pool_result = {phase:0, pool: 0}; // 单位为wei

export async function pool_data() {
    await lottery.methods.getBalance().call({from:user_acc}).then(function(result){pool_result.pool = result;});
    await lottery.methods.getId().call({from:user_acc}).then(function(result){pool_result.phase = result;});
    return pool_result;
}

export function is_address(acc) {
    return web3.utils.isAddress(acc)
}

export function logged() {
    return Object.keys(lottery).length != 0
}