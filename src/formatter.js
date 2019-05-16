import get from "lodash/get";
import { key_utils } from "./auth/ecc";

module.exports = morpheneAPI => {
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function vestingMorph(account, gprops) {
    const vests = parseFloat(account.vesting_shares.split(" ")[0]);
    const total_vests = parseFloat(gprops.total_vesting_shares.split(" ")[0]);
    const total_vest_morph = parseFloat(
      gprops.total_vesting_fund_morph.split(" ")[0]
    );
    const vesting_morphf = total_vest_morph * (vests / total_vests);
    return vesting_morphf;
  }

  function estimateAccountValue(
    account,
    { gprops, vesting_morph } = {}
  ) {
    const promises = [];
    const username = account.name;
    const assetPrecision = 1000;

    if (!vesting_morph) {
      if (!gprops ) {
        promises.push(
          morpheneAPI.getStateAsync(`/@${username}`).then(data => {
            gprops = data.props;
            vesting_morph = vestingMorph(account, gprops);
          })
        );
      } else {
        vesting_morph = vestingMorph(account, gprops);
      }
    }

    return Promise.all(promises).then(() => {
      const balance_morph = parseFloat(account.balance.split(" ")[0]);
      const total_morph = vesting_morph + balance_morph;

      return (total_morph).toFixed(2);
    });
  }

  function createSuggestedPassword() {
    const PASSWORD_LENGTH = 32;
    const privateKey = key_utils.get_random_key();
    return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
  }

  return {
    vestToMorph: function(
      vestingShares,
      totalVestingShares,
      totalVestingFundMorph
    ) {
      return (
        parseFloat(totalVestingFundMorph) *
        (parseFloat(vestingShares) / parseFloat(totalVestingShares))
      );
    },

    amount: function(amount, asset) {
      return amount.toFixed(3) + " " + asset;
    },
    numberWithCommas,
    vestingMorph,
    estimateAccountValue,
    createSuggestedPassword
  };
};
