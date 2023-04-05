"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kernel__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "InvalidNonce",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSignatureLength",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "result",
                type: "bytes",
            },
        ],
        name: "QueryResult",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
            },
        ],
        name: "executeAndRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_plugin",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "queryPlugin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256",
            },
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
var _bytecode = "0x6101606040523480156200001257600080fd5b5060405162002faf38038062002faf8339818101604052810190620000389190620002e2565b806040518060400160405280600681526020017f4b65726e656c00000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a081815250506200010e818484620001e760201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505080610120818152505050505050508073ffffffffffffffffffffffffffffffffffffffff166101408173ffffffffffffffffffffffffffffffffffffffff168152505060016200019e6200022360201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000422565b60008383834630604051602001620002049594939291906200035b565b6040516020818303038152906040528051906020012090509392505050565b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c620002589190620003e7565b60001b90508091505090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002968262000269565b9050919050565b6000620002aa8262000289565b9050919050565b620002bc816200029d565b8114620002c857600080fd5b50565b600081519050620002dc81620002b1565b92915050565b600060208284031215620002fb57620002fa62000264565b5b60006200030b84828501620002cb565b91505092915050565b6000819050919050565b620003298162000314565b82525050565b6000819050919050565b62000344816200032f565b82525050565b620003558162000289565b82525050565b600060a0820190506200037260008301886200031e565b6200038160208301876200031e565b6200039060408301866200031e565b6200039f606083018562000339565b620003ae60808301846200034a565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620003f4826200032f565b915062000401836200032f565b92508282039050818111156200041c576200041b620003b8565b5b92915050565b60805160a05160c05160e051610100516101205161014051612b1d62000492600039600081816104fe0152818161066101528181610acd0152610cb401526000611442015260006114840152600061146301526000611398015260006113ee015260006114170152612b1d6000f3fe6080604052600436106100e15760003560e01c8063940d3c601161007f578063c4d66de811610059578063c4d66de8146102df578063d087d28814610308578063f23a6e6114610333578063f333df5514610370576100e8565b8063940d3c601461024e578063b0d691fe14610277578063bc197c81146102a2576100e8565b80633659cfe6116100bb5780633659cfe6146101925780633a871cdd146101bb57806354fd4d50146101f8578063893d20e814610223576100e8565b806306fdde03146100ed578063150b7a02146101185780631626ba7e14610155576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b50610102610399565b60405161010f919061168d565b60405180910390f35b34801561012457600080fd5b5061013f600480360381019061013a91906117bc565b6103d2565b60405161014c919061187f565b60405180910390f35b34801561016157600080fd5b5061017c60048036038101906101779190611a00565b6103e7565b604051610189919061187f565b60405180910390f35b34801561019e57600080fd5b506101b960048036038101906101b49190611a5c565b6104fc565b005b3480156101c757600080fd5b506101e260048036038101906101dd9190611aae565b61065d565b6040516101ef9190611b2c565b60405180910390f35b34801561020457600080fd5b5061020d610a5f565b60405161021a919061168d565b60405180910390f35b34801561022f57600080fd5b50610238610a98565b6040516102459190611b56565b60405180910390f35b34801561025a57600080fd5b5061027560048036038101906102709190611b96565b610acb565b005b34801561028357600080fd5b5061028c610cb2565b6040516102999190611c7d565b60405180910390f35b3480156102ae57600080fd5b506102c960048036038101906102c49190611cee565b610cd6565b6040516102d6919061187f565b60405180910390f35b3480156102eb57600080fd5b5061030660048036038101906103019190611a5c565b610cee565b005b34801561031457600080fd5b5061031d610dd4565b60405161032a9190611b2c565b60405180910390f35b34801561033f57600080fd5b5061035a60048036038101906103559190611dca565b610de7565b604051610367919061187f565b60405180910390f35b34801561037c57600080fd5b5061039760048036038101906103929190611e64565b610dfd565b005b6040518060400160405280600681526020017f4b65726e656c000000000000000000000000000000000000000000000000000081525081565b600063150b7a0260e01b905095945050505050565b6000806103f2610e9d565b90506103fe8484610edc565b73ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361046457631626ba7e60e01b9150506104f6565b600061046f85610f03565b9050600061047d8286610edc565b90508073ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036104e857631626ba7e60e01b93505050506104f6565b63ffffffff60e01b93505050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105ac5750610559610e9d565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6105eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e290611f36565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181558173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a25050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e490611fa2565b60405180910390fd5b6041848061014001906107009190611fd1565b905003610718576107118484610f33565b90506109dc565b60618480610140019061072b9190611fd1565b905011156109a9576000848061014001906107469190611fd1565b6000906014926107589392919061203e565b9061076391906120bd565b60601c905060008580610140019061077b9190611fd1565b601490601a9261078d9392919061203e565b906107989190612148565b60d01c90506000868061014001906107b09190611fd1565b601a906020926107c29392919061203e565b906107cd9190612148565b60d01c90506000878061014001906107e59190611fd1565b6020906061926107f79392919061203e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060008880610140019061084f9190611fd1565b60619080926108609392919061203e565b81019061086d91906121a7565b50905060006108d07f4584533bad8bbd8aa77024a548a56acb8d2807847381ce1b3364745ca396b2e387878786805190602001206040516020016108b595949392919061224f565b60405160208183030381529060405280519060200120611070565b905060006108de8285610edc565b90508073ffffffffffffffffffffffffffffffffffffffff166108ff610e9d565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461094e576001975050505050505050610a58565b600061095c888d8d8d61108a565b905060008180602001905181019061097491906122da565b90508061098d5760019950505050505050505050610a58565b61099981158989611136565b99505050505050505050506109db565b6040517f4be6321b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b6000821115610a575760003373ffffffffffffffffffffffffffffffffffffffff1683604051610a0b90612338565b60006040518083038185875af1925050503d8060008114610a48576040519150601f19603f3d011682016040523d82523d6000602084013e610a4d565b606091505b5050905050610a58565b5b9392505050565b6040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525081565b6000610aa2610e9d565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610b7b5750610b28610e9d565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610bba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb190611f36565b60405180910390fd5b60006060600180811115610bd157610bd061234d565b5b836001811115610be457610be361234d565b5b03610c4457610c378786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061116f565b8092508193505050610c9c565b610c93878787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506111a5565b80925081935050505b81610ca957805160208201fd5b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600063bc197c8160e01b905098975050505050505050565b6000610cf8610e9d565b9050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d84906123c8565b60405180910390fd5b818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000610dde610e9d565b60010154905090565b600063f23a6e6160e01b90509695505050505050565b600080610e4e8585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061116f565b915091508115610e9557806040517fa52b2169000000000000000000000000000000000000000000000000000000008152600401610e8c919061243d565b60405180910390fd5b805160208201fd5b60008060017f439ffe7df606b78489639bc0b827913bd09e1246fa6802968a5b3694c53e0dd960001c610ed0919061248e565b60001b90508091505090565b6000806000610eeb85856111dd565b91509150610ef88161122e565b819250505092915050565b600081604051602001610f16919061253a565b604051602081830303815290604052805190602001209050919050565b600080610f3f83610f03565b90506000610fa08286806101400190610f589190611fd1565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610edc565b90506000610fac610e9d565b90508173ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611011576001935050505061106a565b856020013581600101600081548092919061102b90612560565b9190505514611066576040517f756688fe00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b92915050565b600061108361107d611394565b836114ae565b9050919050565b60606000639e2045ce60e01b8585856040516024016110ab93929190612808565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600080611117888461116f565b915091508161112857805160208201fd5b809350505050949350505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b8561115e576000611161565b60015b60ff16171790509392505050565b60006060600080845160208601875af491503d604051602082018101604052818152816000602083013e80925050509250929050565b6000606060008084516020860187895af191503d604051602082018101604052818152816000602083013e8092505050935093915050565b600080604183510361121e5760008060006020860151925060408601519150606086015160001a9050611212878285856114e1565b94509450505050611227565b60006002915091505b9250929050565b600060048111156112425761124161234d565b5b8160048111156112555761125461234d565b5b0315611391576001600481111561126f5761126e61234d565b5b8160048111156112825761128161234d565b5b036112c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b990612892565b60405180910390fd5b600260048111156112d6576112d561234d565b5b8160048111156112e9576112e861234d565b5b03611329576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611320906128fe565b60405180910390fd5b6003600481111561133d5761133c61234d565b5b8160048111156113505761134f61234d565b5b03611390576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138790612990565b60405180910390fd5b5b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561141057507f000000000000000000000000000000000000000000000000000000000000000046145b1561143d577f000000000000000000000000000000000000000000000000000000000000000090506114ab565b6114a87f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006115c3565b90505b90565b600082826040516020016114c39291906129fc565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561151c5760006003915091506115ba565b6000600187878787604051600081526020016040526040516115419493929190612a4f565b6020604051602081039080840390855afa158015611563573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036115b1576000600192509250506115ba565b80600092509250505b94509492505050565b600083838346306040516020016115de959493929190612a94565b6040516020818303038152906040528051906020012090509392505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561163757808201518184015260208101905061161c565b60008484015250505050565b6000601f19601f8301169050919050565b600061165f826115fd565b6116698185611608565b9350611679818560208601611619565b61168281611643565b840191505092915050565b600060208201905081810360008301526116a78184611654565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116ee826116c3565b9050919050565b6116fe816116e3565b811461170957600080fd5b50565b60008135905061171b816116f5565b92915050565b6000819050919050565b61173481611721565b811461173f57600080fd5b50565b6000813590506117518161172b565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261177c5761177b611757565b5b8235905067ffffffffffffffff8111156117995761179861175c565b5b6020830191508360018202830111156117b5576117b4611761565b5b9250929050565b6000806000806000608086880312156117d8576117d76116b9565b5b60006117e68882890161170c565b95505060206117f78882890161170c565b945050604061180888828901611742565b935050606086013567ffffffffffffffff811115611829576118286116be565b5b61183588828901611766565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61187981611844565b82525050565b60006020820190506118946000830184611870565b92915050565b6000819050919050565b6118ad8161189a565b81146118b857600080fd5b50565b6000813590506118ca816118a4565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61190d82611643565b810181811067ffffffffffffffff8211171561192c5761192b6118d5565b5b80604052505050565b600061193f6116af565b905061194b8282611904565b919050565b600067ffffffffffffffff82111561196b5761196a6118d5565b5b61197482611643565b9050602081019050919050565b82818337600083830152505050565b60006119a361199e84611950565b611935565b9050828152602081018484840111156119bf576119be6118d0565b5b6119ca848285611981565b509392505050565b600082601f8301126119e7576119e6611757565b5b81356119f7848260208601611990565b91505092915050565b60008060408385031215611a1757611a166116b9565b5b6000611a25858286016118bb565b925050602083013567ffffffffffffffff811115611a4657611a456116be565b5b611a52858286016119d2565b9150509250929050565b600060208284031215611a7257611a716116b9565b5b6000611a808482850161170c565b91505092915050565b600080fd5b60006101608284031215611aa557611aa4611a89565b5b81905092915050565b600080600060608486031215611ac757611ac66116b9565b5b600084013567ffffffffffffffff811115611ae557611ae46116be565b5b611af186828701611a8e565b9350506020611b02868287016118bb565b9250506040611b1386828701611742565b9150509250925092565b611b2681611721565b82525050565b6000602082019050611b416000830184611b1d565b92915050565b611b50816116e3565b82525050565b6000602082019050611b6b6000830184611b47565b92915050565b60028110611b7e57600080fd5b50565b600081359050611b9081611b71565b92915050565b600080600080600060808688031215611bb257611bb16116b9565b5b6000611bc08882890161170c565b9550506020611bd188828901611742565b945050604086013567ffffffffffffffff811115611bf257611bf16116be565b5b611bfe88828901611766565b93509350506060611c1188828901611b81565b9150509295509295909350565b6000819050919050565b6000611c43611c3e611c39846116c3565b611c1e565b6116c3565b9050919050565b6000611c5582611c28565b9050919050565b6000611c6782611c4a565b9050919050565b611c7781611c5c565b82525050565b6000602082019050611c926000830184611c6e565b92915050565b60008083601f840112611cae57611cad611757565b5b8235905067ffffffffffffffff811115611ccb57611cca61175c565b5b602083019150836020820283011115611ce757611ce6611761565b5b9250929050565b60008060008060008060008060a0898b031215611d0e57611d0d6116b9565b5b6000611d1c8b828c0161170c565b9850506020611d2d8b828c0161170c565b975050604089013567ffffffffffffffff811115611d4e57611d4d6116be565b5b611d5a8b828c01611c98565b9650965050606089013567ffffffffffffffff811115611d7d57611d7c6116be565b5b611d898b828c01611c98565b9450945050608089013567ffffffffffffffff811115611dac57611dab6116be565b5b611db88b828c01611766565b92509250509295985092959890939650565b60008060008060008060a08789031215611de757611de66116b9565b5b6000611df589828a0161170c565b9650506020611e0689828a0161170c565b9550506040611e1789828a01611742565b9450506060611e2889828a01611742565b935050608087013567ffffffffffffffff811115611e4957611e486116be565b5b611e5589828a01611766565b92509250509295509295509295565b600080600060408486031215611e7d57611e7c6116b9565b5b6000611e8b8682870161170c565b935050602084013567ffffffffffffffff811115611eac57611eab6116be565b5b611eb886828701611766565b92509250509250925092565b7f6163636f756e743a206e6f742066726f6d20656e747279706f696e74206f722060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611f20602583611608565b9150611f2b82611ec4565b604082019050919050565b60006020820190508181036000830152611f4f81611f13565b9050919050565b7f6163636f756e743a206e6f742066726f6d20656e747279506f696e7400000000600082015250565b6000611f8c601c83611608565b9150611f9782611f56565b602082019050919050565b60006020820190508181036000830152611fbb81611f7f565b9050919050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112611fee57611fed611fc2565b5b80840192508235915067ffffffffffffffff8211156120105761200f611fc7565b5b60208301925060018202360383131561202c5761202b611fcc565b5b509250929050565b600080fd5b600080fd5b6000808585111561205257612051612034565b5b8386111561206357612062612039565b5b6001850283019150848603905094509492505050565b600082905092915050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b600082821b905092915050565b60006120c98383612079565b826120d48135612084565b925060148210156121145761210f7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000836014036008026120b0565b831692505b505092915050565b60007fffffffffffff000000000000000000000000000000000000000000000000000082169050919050565b60006121548383612079565b8261215f813561211c565b9250600682101561219f5761219a7fffffffffffff0000000000000000000000000000000000000000000000000000836006036008026120b0565b831692505b505092915050565b600080604083850312156121be576121bd6116b9565b5b600083013567ffffffffffffffff8111156121dc576121db6116be565b5b6121e8858286016119d2565b925050602083013567ffffffffffffffff811115612209576122086116be565b5b612215858286016119d2565b9150509250929050565b6122288161189a565b82525050565b600065ffffffffffff82169050919050565b6122498161222e565b82525050565b600060a082019050612264600083018861221f565b6122716020830187611b47565b61227e6040830186612240565b61228b6060830185612240565b612298608083018461221f565b9695505050505050565b60008115159050919050565b6122b7816122a2565b81146122c257600080fd5b50565b6000815190506122d4816122ae565b92915050565b6000602082840312156122f0576122ef6116b9565b5b60006122fe848285016122c5565b91505092915050565b600081905092915050565b50565b6000612322600083612307565b915061232d82612312565b600082019050919050565b600061234382612315565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f6163636f756e743a20616c726561647920696e697469616c697a656400000000600082015250565b60006123b2601c83611608565b91506123bd8261237c565b602082019050919050565b600060208201905081810360008301526123e1816123a5565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061240f826123e8565b61241981856123f3565b9350612429818560208601611619565b61243281611643565b840191505092915050565b600060208201905081810360008301526124578184612404565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061249982611721565b91506124a483611721565b92508282039050818111156124bc576124bb61245f565b5b92915050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000612503601c836124c2565b915061250e826124cd565b601c82019050919050565b6000819050919050565b61253461252f8261189a565b612519565b82525050565b6000612545826124f6565b91506125518284612523565b60208201915081905092915050565b600061256b82611721565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361259d5761259c61245f565b5b600182019050919050565b60006125b7602084018461170c565b905092915050565b6125c8816116e3565b82525050565b60006125dd6020840184611742565b905092915050565b6125ee81611721565b82525050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126126205761261f6125fe565b5b83810192508235915060208301925067ffffffffffffffff821115612648576126476125f4565b5b60018202360383131561265e5761265d6125f9565b5b509250929050565b600082825260208201905092915050565b60006126838385612666565b9350612690838584611981565b61269983611643565b840190509392505050565b600061016083016126b860008401846125a8565b6126c560008601826125bf565b506126d360208401846125ce565b6126e060208601826125e5565b506126ee6040840184612603565b8583036040870152612701838284612677565b925050506127126060840184612603565b8583036060870152612725838284612677565b9250505061273660808401846125ce565b61274360808601826125e5565b5061275160a08401846125ce565b61275e60a08601826125e5565b5061276c60c08401846125ce565b61277960c08601826125e5565b5061278760e08401846125ce565b61279460e08601826125e5565b506127a36101008401846125ce565b6127b16101008601826125e5565b506127c0610120840184612603565b8583036101208701526127d4838284612677565b925050506127e6610140840184612603565b8583036101408701526127fa838284612677565b925050508091505092915050565b6000606082019050818103600083015261282281866126a4565b9050612831602083018561221f565b61283e6040830184611b1d565b949350505050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061287c601883611608565b915061288782612846565b602082019050919050565b600060208201905081810360008301526128ab8161286f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006128e8601f83611608565b91506128f3826128b2565b602082019050919050565b60006020820190508181036000830152612917816128db565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061297a602283611608565b91506129858261291e565b604082019050919050565b600060208201905081810360008301526129a98161296d565b9050919050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b60006129e66002836124c2565b91506129f1826129b0565b600282019050919050565b6000612a07826129d9565b9150612a138285612523565b602082019150612a238284612523565b6020820191508190509392505050565b600060ff82169050919050565b612a4981612a33565b82525050565b6000608082019050612a64600083018761221f565b612a716020830186612a40565b612a7e604083018561221f565b612a8b606083018461221f565b95945050505050565b600060a082019050612aa9600083018861221f565b612ab6602083018761221f565b612ac3604083018661221f565b612ad06060830185611b1d565b612add6080830184611b47565b969550505050505056fea2646970667358221220d0bbe1548d31ca1124ee1aeac7fbb595a91c3ff61ff64f2212427c83354bc52564736f6c63430008120033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Kernel__factory = exports.Kernel__factory = /** @class */ (function (_super) {
    __extends(Kernel__factory, _super);
    function Kernel__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    Kernel__factory.prototype.deploy = function (_entryPoint, overrides) {
        return _super.prototype.deploy.call(this, _entryPoint, overrides || {});
    };
    Kernel__factory.prototype.getDeployTransaction = function (_entryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _entryPoint, overrides || {});
    };
    Kernel__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Kernel__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Kernel__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Kernel__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Kernel__factory.bytecode = _bytecode;
    Kernel__factory.abi = _abi;
    return Kernel__factory;
}(ethers_1.ContractFactory));
