// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

library LendingHelpers {
    //test nums
    uint256 public constant testNum = 0;

    // Bond Maturity
    uint256 public constant SIX_MONTHS = 15778458;
    uint256 public constant ONE_YEAR = 31556926;
    uint256 public constant TWO_YEAR = 63113852;

    uint256 public constant USABLE_RATE = 80;

    // Should return 80% of total amount of collateral deposited
    function usableCollateralAmount(uint256 _amountOfCollateral) public view returns (uint256) {
        return (_amountOfCollateral / 100) * 80;
    }

    function simplefunc() public view returns(uint256) {
        return testNum;
    }

    // type of interest depending on token(sol, crv, etc.)
    // will use chainlink to measure
    // Will also depend on maturity
    // function bondInterest(uint256 maturity, string tokenType) {
        // Should take in tokenType and check it's current price
        // Check it's previous price and compare, whether or not it's volatile
    // }
}