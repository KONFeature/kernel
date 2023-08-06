pragma solidity ^0.8.0;

import "src/factory/KernelFactory.sol";
import "src/validator/ECDSAValidator.sol";
import "src/factory/ECDSAKernelFactory.sol";
import "src/executor/TokenActions.sol";
import "src/validator/ERC165SessionKeyValidator.sol";
import "forge-std/Script.sol";
import "forge-std/console.sol";
contract DeploySessionKey is Script {
    address internal constant DETERMINISTIC_CREATE2_FACTORY = 0x7A0D94F55792C434d74a40883C6ed8545E406D12;
    function run() public {
        uint256 key = vm.envUint("DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(key);
        bytes memory bytecode;
        bool success;
        bytes memory returnData;

        bytecode = type(TokenActions).creationCode; 
        (success, returnData) = DETERMINISTIC_CREATE2_FACTORY.call(abi.encodePacked(bytecode));
        require(success, "Failed to deploy TokenActions");
        address action = address(bytes20(returnData));
        console.log("TokenActions deployed at: %s", action);
        
        bytecode = type(ERC165SessionKeyValidator).creationCode; 
        (success, returnData) = DETERMINISTIC_CREATE2_FACTORY.call(abi.encodePacked(bytecode, abi.encode(action)));
        require(success, "Failed to deploy ERC165SessionKeyValidator");
        address validator = address(bytes20(returnData));
        console.log("ERC165SessionKeyValidator deployed at: %s", validator);
        vm.stopBroadcast();
    }
}

