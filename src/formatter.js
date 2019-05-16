import get from "lodash/get";
import { key_utils } from "./auth/ecc";

module.exports = steemAPI => {
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function vestingSteem(account, gprops) {
    const vests = parseFloat(account.vesting_shares.split(" ")[0]);
    const total_vests = parseFloat(gprops.total_vesting_shares.split(" ")[0]);
    const total_vest_steem = parseFloat(
      gprops.total_vesting_fund_steem.split(" ")[0]
    );
    const vesting_steemf = total_vest_steem * (vests / total_vests);
    return vesting_steemf;
  }

  function estimateAccountValue(
    account,
    { gprops, vesting_steem } = {}
  ) {
    const promises = [];
    const username = account.name;
    const assetPrecision = 1000;

    if (!vesting_steem) {
      if (!gprops ) {
        promises.push(
          steemAPI.getStateAsync(`/@${username}`).then(data => {
            gprops = data.props;
            vesting_steem = vestingSteem(account, gprops);
          })
        );
      } else {
        vesting_steem = vestingSteem(account, gprops);
      }
    }

    return Promise.all(promises).then(() => {
      const balance_steem = parseFloat(account.balance.split(" ")[0]);
      const total_steem = vesting_steem + balance_steem;

      return (total_steem).toFixed(2);
    });
  }

  function createSuggestedPassword() {
    const PASSWORD_LENGTH = 32;
    const privateKey = key_utils.get_random_key();
    return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
  }

  return {
    vestToSteem: function(
      vestingShares,
      totalVestingShares,
      totalVestingFundSteem
    ) {
      return (
        parseFloat(totalVestingFundSteem) *
        (parseFloat(vestingShares) / parseFloat(totalVestingShares))
      );
    },

    amount: function(amount, asset) {
      return amount.toFixed(3) + " " + asset;
    },
    numberWithCommas,
    vestingSteem,
    estimateAccountValue,
    createSuggestedPassword
  };
};
