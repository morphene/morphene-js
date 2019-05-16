var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations= {
    transfer: 0,
    transfer_to_vesting: 1,
    withdraw_vesting: 2,

    account_create: 3,
    account_update: 4,

    witness_update: 5,
    account_witness_vote: 6,
    account_witness_proxy: 7,

    custom: 8,
    custom_json: 9,
    custom_binary: 10,

    pow: 11,

    set_withdraw_vesting_route: 12,
    claim_account: 13,
    create_claimed_account: 14,
    request_account_recovery: 15,
    recover_account: 16,
    change_recovery_account: 17,
    escrow_transfer: 18,
    escrow_dispute: 19,
    escrow_release: 20,
    escrow_approve: 21,
    reset_account: 22,
    set_reset_account: 23,
    delegate_vesting_shares: 24,
    account_create_with_delegation: 25,
    witness_set_properties: 26,

    create_auction: 27,
    update_auction: 28,
    delete_auction: 29,
    place_bid: 30,

    fill_vesting_withdraw: 31,
    shutdown_witness: 32,
    hardfork: 33,
    return_vesting_delegation: 34,
    producer_reward: 35,
    clear_null_account_balance: 36,
    auction_payout: 37
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1,
};
