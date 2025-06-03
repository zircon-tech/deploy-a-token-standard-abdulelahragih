import hre from "hardhat";
import { AbToken__factory } from "../typechain-types/factories/contracts/AbToken__factory";

async function main() {
  const tokenAddress = "0xAc77184d1Ee3b4D22f4BcF4490856905c397D1F8";
  // TODO: Change the recipient address
  const recipient = undefined;
  if (!recipient) {
    throw new Error("Recipient address is not set");
  }
  const amount = hre.ethers.parseUnits("1000", 18);

  const [deployer] = await hre.ethers.getSigners();
  const abToken = AbToken__factory.connect(tokenAddress, deployer);

  const tx = await abToken.transfer(recipient, amount);
  await tx.wait();

  console.log(`Sent 1000 ABT to ${recipient}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
