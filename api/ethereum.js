export const askWalletPermissionAndReturnAccounts = async () => {
  return await window.ethereum.request({
    method: "eth_requestAccounts",
  });
};
