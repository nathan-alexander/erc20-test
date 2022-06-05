const { assert, expect } = require("chai")
const { providers } = require("ethers")
const { getNamedAccounts, deployments, ethers, network } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Token", function () {
          let token, deployer
          const chainId = network.config.chainId
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["all"])
              token = await ethers.getContract("Token", deployer)
          })
          describe("constructor", function () {
              it("creates the token, sets the name and symbol", async function () {
                  const tokenName = await token.name()
                  const tokenSymbol = await token.symbol()
                  assert.equal(tokenName.toString(), "TOKEN")
                  assert.equal(tokenSymbol.toString(), "TOKEN")
              })
              it("transfers the token balance to the owner", async function () {
                  const accounts = await ethers.getSigners()
                  const deployerBalance = await accounts[0].getBalance()
                  const contractBalance = await token.balanceOf(token.address)
                  assert(deployerBalance > 0)
                  assert(contractBalance == 0)
              })
          })
      })
