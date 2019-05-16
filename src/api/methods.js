export default [
    {
      "api": "database_api",
      "method": "get_block_header",
      "params": ["blockNum"]
    },
    {
      "api": "database_api",
      "method": "get_block",
      "params": ["blockNum"]
    },
    {
      "api": "database_api",
      "method": "get_ops_in_block",
      "params": ["blockNum", "onlyVirtual"]
    },
    {
      "api": "database_api",
      "method": "get_state",
      "params": ["path"]
    },
    {
      "api": "database_api",
      "method": "get_config"
    },
    {
      "api": "database_api",
      "method": "get_dynamic_global_properties"
    },
    {
      "api": "database_api",
      "method": "get_chain_properties"
    },
    {
      "api": "database_api",
      "method": "get_witness_schedule"
    },
    {
      "api": "database_api",
      "method": "get_hardfork_version"
    },
    {
      "api": "database_api",
      "method": "get_next_scheduled_hardfork"
    },
    {
      "api": "account_by_key_api",
      "method": "get_key_references",
      "params": ["key"]
    },
    {
      "api": "database_api",
      "method": "get_accounts",
      "params": ["names"]
    },
    {
      "api": "database_api",
      "method": "get_account_references",
      "params": ["accountId"]
    },
    {
      "api": "database_api",
      "method": "lookup_account_names",
      "params": ["accountNames"]
    },
    {
      "api": "database_api",
      "method": "lookup_accounts",
      "params": ["lowerBoundName", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_account_count"
    },
    {
      "api": "database_api",
      "method": "get_account_history",
      "params": ["account", "from", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_owner_history",
      "params": ["account"]
    },
    {
      "api": "database_api",
      "method": "get_recovery_request",
      "params": ["account"]
    },
    {
      "api": "database_api",
      "method": "get_escrow",
      "params": ["from", "escrowId"]
    },
    {
      "api": "database_api",
      "method": "get_withdraw_routes",
      "params": ["account", "withdrawRouteType"]
    },
    {
      "api": "database_api",
      "method": "get_transaction_hex",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "get_transaction",
      "params": ["trxId"]
    },
    {
      "api": "database_api",
      "method": "get_required_signatures",
      "params": ["trx", "availableKeys"]
    },
    {
      "api": "database_api",
      "method": "get_potential_signatures",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "verify_authority",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "verify_account_authority",
      "params": ["nameOrId", "signers"]
    },
    {
      "api": "database_api",
      "method": "get_witnesses",
      "params": ["witnessIds"]
    },
    {
      "api": "database_api",
      "method": "get_witness_by_account",
      "params": ["accountName"]
    },
    {
      "api": "database_api",
      "method": "get_witnesses_by_vote",
      "params": ["from", "limit"]
    },
    {
      "api": "database_api",
      "method": "lookup_witness_accounts",
      "params": ["lowerBoundName", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_witness_count"
    },
    {
      "api": "database_api",
      "method": "get_active_witnesses"
    },
    {
      "api": "database_api",
      "method": "get_miner_queue"
    },
    {
      "api": "database_api",
      "method": "get_vesting_delegations",
      "params": ["account", "from", "limit"]
    },
    {
      "api": "login_api",
      "method": "login",
      "params": ["username", "password"]
    },
    {
      "api": "login_api",
      "method": "get_api_by_name",
      "params": ["database_api"]
    },
    {
      "api": "login_api",
      "method": "get_version"
    },
    {
      "api": "database_api",
      "method": "broadcast_transaction",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "broadcast_transaction_synchronous",
      "params": ["trx"]
    },
    {
      "api": "network_broadcast_api",
      "method": "broadcast_block",
      "params": ["b"]
    },
    {
      "api": "network_broadcast_api",
      "method": "set_max_block_age",
      "params": ["maxBlockAge"]
    },
    {
      "api": "database_api",
      "method": "get_auction",
      "params": ["permlink"]
    },
    {
      "api": "database_api",
      "method": "get_auctions_by_status",
      "params": ["status", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_bids",
      "params": ["permlink", "limit"]
    }
];
