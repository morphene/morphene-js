# Documentation

- [Install](#install)
- [Browser](#browser)
- [JSON-RPC](#jsonrpc)
- [Database API](#api)
    - [Blocks and transactions](#blocks-and-transactions)
    - [Globals](#globals)
    - [Keys](#keys)
    - [Accounts](#accounts)
    - [Authority / validation](#authority--validation)
    - [Witnesses](#witnesses)
- [Login API](#login)
- [Broadcast API](#broadcast-api)
- [Broadcast](#broadcast)
- [Auth](#auth)
- [Formatter](#formatter)

# Install
```
$ npm install @boone-development/morphene-js --save
```

# Browser 
```html 
<script src="./morphene-js.min.js"></script>
<script>
morpheneJS.api.getAccounts(['initwitness'], function(err, response){
    console.log(err, response);
});
</script>
```

## JSON-RPC
Here is how to activate JSON-RPC transport:
```js
morpheneJS.api.setOptions({ url: 'https://morphene.io/rpc' });
```

# API

## Blocks and transactions

### Get Block Header
```
morpheneJS.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Block
```
morpheneJS.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get State
```
morpheneJS.api.getState(path, function(err, result) {
  console.log(err, result);
});
```

## Globals

### Get Config
```
morpheneJS.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```
morpheneJS.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```
morpheneJS.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Version
```
morpheneJS.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Next Scheduled Hardfork
```
morpheneJS.api.getNextScheduledHardfork(function(err, result) {
  console.log(err, result);
});
```
### Get Vesting Delegations
```
morpheneJS.api.getVestingDelegations(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

## Keys

### Get Key References
```
morpheneJS.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```

## Accounts

### Get Accounts
```
morpheneJS.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```
### Get Account References
```
morpheneJS.api.getAccountReferences(accountId, function(err, result) {
  console.log(err, result);
});
```
### Lookup Account Names
```
morpheneJS.api.lookupAccountNames(accountNames, function(err, result) {
  console.log(err, result);
});
```
### Lookup Accounts
```
morpheneJS.api.lookupAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Account Count
```
morpheneJS.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```
### Get Account History
```
morpheneJS.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Owner History
```
morpheneJS.api.getOwnerHistory(account, function(err, result) {
  console.log(err, result);
});
```
### Get Recovery Request
```
morpheneJS.api.getRecoveryRequest(account, function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```
morpheneJS.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```
morpheneJS.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```
morpheneJS.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Get Potential Signatures
```
morpheneJS.api.getPotentialSignatures(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```
morpheneJS.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```
morpheneJS.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {
  console.log(err, result);
});
```

## Witnesses


### Get Witnesses
```
morpheneJS.api.getWitnesses(witnessIds, function(err, result) {
  console.log(err, result);
});
```
### Get Witness By Account
```
morpheneJS.api.getWitnessByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Witnesses By Vote
```
morpheneJS.api.getWitnessesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```
### Lookup Witness Accounts
```
morpheneJS.api.lookupWitnessAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Count
```
morpheneJS.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Witnesses
```
morpheneJS.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```
### Get Miner Queue
```
morpheneJS.api.getMinerQueue(function(err, result) {
  console.log(err, result);
});
```

## Login API

### Login

/!\ It's **not safe** to use this method with your username and password. This method always return `true` and is only used in intern with empty values to enable broadcast.

```
morpheneJS.api.login('', '', function(err, result) {
  console.log(err, result);
});
```

### Get Api By Name
```
morpheneJS.api.getApiByName(apiName, function(err, result) {
  console.log(err, result);
});
```

## Broadcast API

### Broadcast Transaction Synchronous
```
morpheneJS.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```
morpheneJS.api.broadcastBlock(b, function(err, result) {
  console.log(err, result);
});
```

# Broadcast

### Account Create
```
morpheneJS.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Create With Delegation
```
morpheneJS.broadcast.accountCreateWithDelegation(wif, fee, delegation, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, extensions, function(err, result) {
  console.log(err, result);
});
```
### Delegate Vesting Shares
```
morpheneJS.broadcast.delegateVestingShares(wif, delegator, delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
```
### Account Update
```
morpheneJS.broadcast.accountUpdate(wif, account, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Proxy
```
morpheneJS.broadcast.accountWitnessProxy(wif, account, proxy, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Vote
```
morpheneJS.broadcast.accountWitnessVote(wif, account, witness, approve, function(err, result) {
  console.log(err, result);
});
```
### Change Recovery Account
```
morpheneJS.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```
```
### Escrow Dispute
```
morpheneJS.broadcast.escrowDispute(wif, from, to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```
### Escrow Release
```
morpheneJS.broadcast.escrowRelease(wif, from, to, agent, who, receiver, escrowId, morphAmount, function(err, result) {
  console.log(err, result);
});
```
### Escrow Transfer
```
morpheneJS.broadcast.escrowTransfer(wif, from, to, agent, escrowId, morphAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
morpheneJS.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Pow
```
morpheneJS.broadcast.pow(wif, worker, input, signature, work, function(err, result) {
  console.log(err, result);
});
```
### Recover Account
```
morpheneJS.broadcast.recoverAccount(wif, accountToRecover, newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Request Account Recovery
```
morpheneJS.broadcast.requestAccountRecovery(wif, recoveryAccount, accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Escrow Approve
```
morpheneJS.broadcast.escrowApprove(wif, from, to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```
### Set Withdraw Vesting Route
```
morpheneJS.broadcast.setWithdrawVestingRoute(wif, fromAccount, toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```
morpheneJS.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Vesting
```
morpheneJS.broadcast.transferToVesting(wif, from, to, amount, function(err, result) {
  console.log(err, result);
});
```
### Withdraw Vesting
```
morpheneJS.broadcast.withdrawVesting(wif, account, vestingShares, function(err, result) {
  console.log(err, result);
});
```
### Witness Update
```
morpheneJS.broadcast.witnessUpdate(wif, owner, url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
morpheneJS.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```

### Multisig
You can use multisignature to broadcast an operation.
```
morpheneJS.broadcast.send({
  extensions: [],
  operations: [
    ['transfer', {
      to: "initwitness",
      from: "initwitness",
      amount: "1.000 MORPH",
      memo: "multisig example"
    }]
  ]}, [privPostingWif1, privPostingWif2], (err, result) => {
  console.log(err, result);
});
```

# Auth

### Verify
```
morpheneJS.auth.verify(name, password, auths);
```

### Generate Keys
```
morpheneJS.auth.generateKeys(name, password, roles);
```

### Get Private Keys
```
morpheneJS.auth.getPrivateKeys(name, password, roles);
```

### Is Wif
```
morpheneJS.auth.isWif(privWif);
```

### To Wif
```
morpheneJS.auth.toWif(name, password, role);
```

### Wif Is Valid
```
morpheneJS.auth.wifIsValid(privWif, pubWif);
```

### Wif To Public
```
morpheneJS.auth.wifToPublic(privWif);
```

### Sign Transaction
```
morpheneJS.auth.signTransaction(trx, keys);
```

# Formatter

### Create Suggested Password
```
var password = morpheneJS.formatter.createSuggestedPassword();
console.log(password);
// => 'GAz3GYFvvQvgm7t2fQmwMDuXEzDqTzn9'
```

# Utils

### Validate Username
```
var isValidUsername = morpheneJS.utils.validateAccountName('test1234');
console.log(isValidUsername);
// => 'null'

var isValidUsername = morpheneJS.utils.validateAccountName('a1');
console.log(isValidUsername);
// => 'Account name should be longer.'
```
