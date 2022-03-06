export const getMaxSupply = async (contract) => await contract.MAX_SUPPLY();

export const getTotalSupply = async (contract) => await contract.totalSupply();

export const getBalanceOf = async (contract, { owner }) =>
  await contract.balanceOf(owner);

export const mintNFT = async (contract) => await contract.mintNFT();
