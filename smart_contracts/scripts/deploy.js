const hre = require("hardhat");

async function main() {
    // Obtén el contrato
    const BrainerNFT = await hre.ethers.getContractFactory("BrainerNFT");
    
    // Despliega el contrato
    const brainerNFT = await BrainerNFT.deploy();
    
    // Espera a que el contrato esté desplegado
    await brainerNFT.deployed();

    console.log("BrainerNFT deployed to:", brainerNFT.address);
}

// Llama a la función principal y maneja errores
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
