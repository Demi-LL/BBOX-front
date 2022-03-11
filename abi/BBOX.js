// ethers.js 版
// export const getMaxSupply = async (contract) => await contract.MAX_SUPPLY();

// export const getTotalSupply = async (contract) => await contract.totalSupply();

// export const getBalanceOf = async (contract, { owner }) =>
//   await contract.balanceOf(owner);

// export const mintNFT = async (contract) => await contract.mintNFT();

// web3.js 版
export const getMaxSupply = async (contract) =>
  await contract.methods.MAX_SUPPLY().call();

export const getTotalSupply = async (contract) =>
  await contract.methods.totalSupply().call();

export const getBalanceOf = async (contract, { owner }) =>
  await contract.methods.balanceOf(owner).call();

export const mintNFT = async (contract, { owner }) =>
  await contract.methods.mintNFT().send({ from: owner });
