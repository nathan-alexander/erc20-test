//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint256 constant _initialSupply = 100 * (10**18);

    constructor() ERC20("TOKEN", "TOKEN") {
        _mint(msg.sender, _initialSupply);
    }
}
