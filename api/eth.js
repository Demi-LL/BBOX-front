export const askWalletPermissionAndReturnAccounts = async (eth) => {
  return await eth.request({
    method: "eth_requestAccounts",
  });
};
