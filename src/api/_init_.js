const prod_AppCode = "GGPJWXRSC6",
  test_AppCode = "GGPJWXRSC6";

const prod_BaseUrl = "https://controlpanel.dbchain.cloud/relay02",
  test_BaseUrl = "https://controlpanel.dbchain.cloud/relay02";

const prod_ChainId = "testnet02",
  test_ChainId = "testnet02";

exports.APIURL = {
  AppCode: process.env.VUE_APP_FLAG === "production" ? prod_AppCode : test_AppCode,
  BaseUrl: process.env.VUE_APP_FLAG === "production" ? prod_BaseUrl : test_BaseUrl,
  ChainId: process.env.VUE_APP_FLAG === "production" ? prod_ChainId : test_ChainId,
};
