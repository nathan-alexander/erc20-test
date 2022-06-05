const { network, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const token = await deploy("Token", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockCOnfirmatsion || 1,
    })
    console.log(`Token address: ${token.address}`)
}

module.exports.tags = ["all", "token"]
