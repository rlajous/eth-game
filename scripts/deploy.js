const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Bitcoin", "Ethereum", "Shiba"],       // Names
    ["QmSkV9em5m3XtVU7rcmWjwYZkDfDbYTNBEAqFiR4B3T8Qp", // Images
    "Qmc5sFE4oP9VAaof8oioUV13jDBRRZyJ2ksjSaoHB4XjXM", 
    "QmQhdDVnUtGVpgbi2YJrsFx659ca1DUKmj5Ro3Nm5217Ln"],
    [57829, 4280, 80085],                    // HP values
    [69, 420, 404],                       // Attack damage values
    "Fiat", // Boss name
    "https://cdn.corporatefinanceinstitute.com/assets/fiat-currency.jpeg", // Boss image
    51600000, // Boss hp
    100 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();