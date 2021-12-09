import { createAccessToken  } from "dbchain-js-client-sm2/src/access_token";
import{ restGet } from 'dbchain-js-client-sm2'
// 获取一个积分
async function getVerToken() {
    let accessToken = createAccessToken()
    return await restGet('/dbchain/oracle/new_app_user/' + accessToken)
  }

  export {
    getVerToken
  }