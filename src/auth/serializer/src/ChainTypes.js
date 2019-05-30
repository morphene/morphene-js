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

    pow: 8,

    set_withdraw_vesting_route: 9,
    claim_account: 10,
    create_claimed_account: 11,
    request_account_recovery: 12,
    recover_account: 13,
    change_recovery_account: 14,
    escrow_transfer: 15,
    escrow_dispute: 16,
    escrow_release: 17,
    escrow_approve: 18,
    reset_account: 19,
    set_reset_account: 20,
    delegate_vesting_shares: 21,
    account_create_with_delegation: 22,
    witness_set_properties: 23,

    create_auction: 24,
    update_auction: 25,
    delete_auction: 26,
    place_bid: 27,

    fill_vesting_withdraw: 28,
    shutdown_witness: 29,
    hardfork: 30,
    return_vesting_delegation: 31,
    producer_reward: 32,
    clear_null_account_balance: 33,
    auction_payout: 34
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1,
};
