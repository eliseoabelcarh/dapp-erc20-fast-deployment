var MyToken = artifacts.require("./MyToken.sol");


//
module.exports = async function (deployer, network, accounts) {
   const initialSupply = (200 * 10 ** 18).toString();
   await deployer.deploy(MyToken, initialSupply);
   const myToken = await MyToken.deployed();
   
}