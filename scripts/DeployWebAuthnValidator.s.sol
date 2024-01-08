pragma solidity ^0.8.0;

import "src/factory/KernelFactory.sol";
import "src/validator/WebAuthnValidator.sol";
import "forge-std/Script.sol";
import "forge-std/console.sol";
contract DeployWebAuthnValidator is Script {
    
    function run() public {
        uint256 key = vm.envUint("DEPLOYER_PRIVATE_KEY");
        vm.startBroadcast(key);
        
        WebAuthnValidator validator = new WebAuthnValidator{salt:0}();
        console.log("validator address: %s", address(validator));
            
        vm.stopBroadcast();
    }
}

