var MyToken = artifacts.require("./MyToken.sol");

const { assert } = require("chai");

contract("MyToken", (accounts /*[owner,cliente1...]*/) => {
  let myToken;
  const creator = accounts[0];
  const cliente1 = accounts[1];
  const cliente2 = accounts[2];

  before(async () => {
    myToken = await MyToken.new("5000");
  });

  describe("Supply", async () => {
    it("Get Supply", async () => {
      const totalSupply = await myToken.totalSupply();
      assert.equal("5000", totalSupply.toString());
    });
    it("Owner Supply", async () => {
        const ownerSupply = await myToken.balanceOf(creator);
        assert.equal("5000", ownerSupply.toString());
      });
  });
});
