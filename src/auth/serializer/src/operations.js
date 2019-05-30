
// This file is merge updated from morphened's js_operation_serializer program.
/*

./js_operation_serializer |
sed 's/void/future_extensions/g'|
sed 's/morphene_protocol:://g'|
sed 's/14static_variantIJNS_12fixed_stringINSt3__14pairIyyEEEEEEE/string/g'|
sed 's/morphene_future_extensions/future_extensions/g'|
sed 's/morphene_protocol_//g' > tmp.coffee

*/
// coffee tmp.coffee # fix errors until you see: `ChainTypes is not defined`

/*

   remove these 7 lines from tmp.coffee:

static_variant [
    pow2
    equihash_pow
] = static_variant [
    pow2
    equihash_pow
]

*/

// npm i -g decaffeinate
// decaffeinate tmp.coffee

// Merge tmp.js - See "Generated code follows" below

import types from "./types"
import SerializerImpl from "./serializer"

const {
    //id_type,
    //varint32, uint8, int64, fixed_array, object_id_type, vote_id, address,
    uint16, uint32, int16, uint64,
    string, string_binary, bytes, bool, array,
    // protocol_id_type,
    static_variant, map, set,
    public_key,
    time_point_sec,
    optional,
    asset,
} = types

const future_extensions = types.void
const hardfork_version_vote = types.void
const version = types.void

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
const operation = static_variant();
module.exports.operation = operation;

// For module.exports
const Serializer=function(operation_name, serilization_types_object){
    const s = new SerializerImpl(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
}

// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer( 
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer( 
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/
let signed_transaction = new Serializer( 
    "signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
}
);

let signed_block = new Serializer( 
    "signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,
        version,
        hardfork_version_vote
    ])),
    witness_signature: bytes(65),
    transactions: array(signed_transaction)
}
);

let block_header = new Serializer( 
    "block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,
        version,
        hardfork_version_vote
    ]))
}
);

let signed_block_header = new Serializer( 
    "signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,
        version,
        hardfork_version_vote
    ])),
    witness_signature: bytes(65)
}
);

let transfer = new Serializer( 
    "transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
}
);

let transfer_to_vesting = new Serializer( 
    "transfer_to_vesting", {
    from: string,
    to: string,
    amount: asset
}
);

let withdraw_vesting = new Serializer( 
    "withdraw_vesting", {
    account: string,
    vesting_shares: asset
}
);

var authority = new Serializer( 
    "authority", {
    weight_threshold: uint32,
    account_auths: map((string), (uint16)),
    key_auths: map((public_key), (uint16))
}
);

let account_create = new Serializer( 
    "account_create", {
    fee: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
}
);

let account_update = new Serializer( 
    "account_update", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: public_key,
    json_metadata: string
}
);

let chain_properties = new Serializer( 
    "chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32
}
);

let witness_update = new Serializer( 
    "witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
}
);

let account_witness_vote = new Serializer( 
    "account_witness_vote", {
    account: string,
    witness: string,
    approve: bool
}
);

let account_witness_proxy = new Serializer( 
    "account_witness_proxy", {
    account: string,
    proxy: string
}
);

let pow = new Serializer( 
    "pow", {
    worker: public_key,
    input: bytes(32),
    signature: bytes(65),
    work: bytes(32)
}
);

let set_withdraw_vesting_route = new Serializer( 
    "set_withdraw_vesting_route", {
    from_account: string,
    to_account: string,
    percent: uint16,
    auto_vest: bool
}
);

let claim_account = new Serializer( 
    "claim_account", {
    creator: string,
    fee: asset,
    extensions: set(future_extensions)
}
);

let create_claimed_account = new Serializer( 
    "create_claimed_account", {
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string,
    extensions: set(future_extensions)
}
);

let request_account_recovery = new Serializer( 
    "request_account_recovery", {
    recovery_account: string,
    account_to_recover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
}
);

let recover_account = new Serializer(
    "recover_account", {
    account_to_recover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
}
);

let change_recovery_account = new Serializer( 
    "change_recovery_account", {
    account_to_recover: string,
    new_recovery_account: string,
    extensions: set(future_extensions)
}
);

let escrow_transfer = new Serializer( 
    "escrow_transfer", {
    from: string,
    to: string,
    morph_amount: asset,
    escrow_id: uint32,
    agent: string,
    fee: asset,
    json_meta: string,
    ratification_deadline: time_point_sec,
    escrow_expiration: time_point_sec
}
);

let escrow_dispute = new Serializer( 
    "escrow_dispute", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32
}
);

let escrow_release = new Serializer( 
    "escrow_release", {
    from: string,
    to: string,
    agent: string,
    who: string,
    receiver: string,
    escrow_id: uint32,
    morph_amount: asset
}
);

let escrow_approve = new Serializer( 
    "escrow_approve", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32,
    approve: bool
}
);

let reset_account = new Serializer( 
    "reset_account", {
    reset_account: string,
    account_to_reset: string,
    new_owner_authority: authority
}
);

let set_reset_account = new Serializer( 
    "set_reset_account", {
    account: string,
    current_reset_account: string,
    reset_account: string
}
);

let delegate_vesting_shares = new Serializer( 
    "delegate_vesting_shares", {
    delegator: string,
    delegatee: string,
    vesting_shares: asset
}
);

let account_create_with_delegation = new Serializer( 
    "account_create_with_delegation", {
    fee: asset,
    delegation: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string,
    extensions: set(future_extensions)
}
);

let witness_set_properties = new Serializer(
    "witness_set_properties", {
      owner: string,
      url: string,
      block_signing_key: public_key,
      props: chain_properties,
      fee: asset
}
);

let create_auction = new Serializer(
    "create_auction", {
      consigner: string,
      permlink: string,
      start_time: time_point_sec,
      end_time: time_point_sec,
      fee: asset
}
);

let update_auction = new Serializer(
    "update_auction", {
      consigner: string,
      permlink: string,
      start_time: time_point_sec,
      end_time: time_point_sec,
      fee: asset
}
);

let delete_auction = new Serializer(
    "delete_auction", {
      consigner: string,
      permlink: string
}
);

let place_bid = new Serializer(
    "place_bid", {
      bidder: string,
      permlink: string
}
);

let fill_vesting_withdraw = new Serializer( 
    "fill_vesting_withdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
}
);

let shutdown_witness = new Serializer( 
    "shutdown_witness",
    {owner: string}
);

let hardfork = new Serializer( 
    "hardfork",
    {hardfork_id: uint32}
);

let return_vesting_delegation = new Serializer( 
    "return_vesting_delegation", {
    account: string,
    vesting_shares: asset
}
);

operation.st_operations = [
    transfer,
    transfer_to_vesting,
    withdraw_vesting,
    account_create,
    account_update,
    witness_update,
    account_witness_vote,
    account_witness_proxy,
    pow,
    set_withdraw_vesting_route,
    claim_account,
    create_claimed_account,
    request_account_recovery,
    recover_account,
    change_recovery_account,
    escrow_transfer,
    escrow_dispute,
    escrow_release,
    escrow_approve,
    reset_account,
    set_reset_account,
    delegate_vesting_shares,
    account_create_with_delegation,
    witness_set_properties,
    create_auction,
    update_auction,
    delete_auction,
    place_bid,
    fill_vesting_withdraw,
    shutdown_witness,
    hardfork,
    return_vesting_delegation
];

let transaction = new Serializer( 
    "transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)
}
);

//# -------------------------------
//#  Generated code end  S T O P
//# -------------------------------

// Custom Types (do not over-write)

const encrypted_memo = new Serializer(
    "encrypted_memo",
    {from: public_key,
    to: public_key,
    nonce: uint64,
    check: uint32,
    encrypted: string_binary}
);
