export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
};

export type Account = {
  __typename: 'Account';
  ERC1155balances: Array<Erc1155Balance>;
  ERC1155operatorOperator: Array<Erc1155Operator>;
  ERC1155operatorOwner: Array<Erc1155Operator>;
  ERC1155transferFromEvent: Array<Erc1155Transfer>;
  ERC1155transferOperatorEvent: Array<Erc1155Transfer>;
  ERC1155transferToEvent: Array<Erc1155Transfer>;
  asERC1155: Maybe<Erc1155Contract>;
  events: Array<Event>;
  id: Scalars['Bytes'];
};


export type AccountErc1155balancesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Balance_Filter>;
};


export type AccountErc1155operatorOperatorArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Operator_Filter>;
};


export type AccountErc1155operatorOwnerArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Operator_Filter>;
};


export type AccountErc1155transferFromEventArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Transfer_Filter>;
};


export type AccountErc1155transferOperatorEventArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Transfer_Filter>;
};


export type AccountErc1155transferToEventArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Transfer_Filter>;
};


export type AccountEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Event_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Event_Filter>;
};

export type Account_Filter = {
  ERC1155balances_: InputMaybe<Erc1155Balance_Filter>;
  ERC1155operatorOperator_: InputMaybe<Erc1155Operator_Filter>;
  ERC1155operatorOwner_: InputMaybe<Erc1155Operator_Filter>;
  ERC1155transferFromEvent_: InputMaybe<Erc1155Transfer_Filter>;
  ERC1155transferOperatorEvent_: InputMaybe<Erc1155Transfer_Filter>;
  ERC1155transferToEvent_: InputMaybe<Erc1155Transfer_Filter>;
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  asERC1155: InputMaybe<Scalars['String']>;
  asERC1155_: InputMaybe<Erc1155Contract_Filter>;
  asERC1155_contains: InputMaybe<Scalars['String']>;
  asERC1155_contains_nocase: InputMaybe<Scalars['String']>;
  asERC1155_ends_with: InputMaybe<Scalars['String']>;
  asERC1155_ends_with_nocase: InputMaybe<Scalars['String']>;
  asERC1155_gt: InputMaybe<Scalars['String']>;
  asERC1155_gte: InputMaybe<Scalars['String']>;
  asERC1155_in: InputMaybe<Array<Scalars['String']>>;
  asERC1155_lt: InputMaybe<Scalars['String']>;
  asERC1155_lte: InputMaybe<Scalars['String']>;
  asERC1155_not: InputMaybe<Scalars['String']>;
  asERC1155_not_contains: InputMaybe<Scalars['String']>;
  asERC1155_not_contains_nocase: InputMaybe<Scalars['String']>;
  asERC1155_not_ends_with: InputMaybe<Scalars['String']>;
  asERC1155_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  asERC1155_not_in: InputMaybe<Array<Scalars['String']>>;
  asERC1155_not_starts_with: InputMaybe<Scalars['String']>;
  asERC1155_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  asERC1155_starts_with: InputMaybe<Scalars['String']>;
  asERC1155_starts_with_nocase: InputMaybe<Scalars['String']>;
  events_: InputMaybe<Event_Filter>;
  id: InputMaybe<Scalars['Bytes']>;
  id_contains: InputMaybe<Scalars['Bytes']>;
  id_gt: InputMaybe<Scalars['Bytes']>;
  id_gte: InputMaybe<Scalars['Bytes']>;
  id_in: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt: InputMaybe<Scalars['Bytes']>;
  id_lte: InputMaybe<Scalars['Bytes']>;
  id_not: InputMaybe<Scalars['Bytes']>;
  id_not_contains: InputMaybe<Scalars['Bytes']>;
  id_not_in: InputMaybe<Array<Scalars['Bytes']>>;
  or: InputMaybe<Array<InputMaybe<Account_Filter>>>;
};

export enum Account_OrderBy {
  Erc1155balances = 'ERC1155balances',
  Erc1155operatorOperator = 'ERC1155operatorOperator',
  Erc1155operatorOwner = 'ERC1155operatorOwner',
  Erc1155transferFromEvent = 'ERC1155transferFromEvent',
  Erc1155transferOperatorEvent = 'ERC1155transferOperatorEvent',
  Erc1155transferToEvent = 'ERC1155transferToEvent',
  AsErc1155 = 'asERC1155',
  AsErc1155Id = 'asERC1155__id',
  Events = 'events',
  Id = 'id'
}

export type AssetTransferDetail = {
  __typename: 'AssetTransferDetail';
  amounts: Array<Scalars['String']>;
  assetIds: Array<Scalars['String']>;
  from: Maybe<Scalars['Bytes']>;
  id: Scalars['ID'];
  operator: Maybe<Scalars['Bytes']>;
  to: Maybe<Scalars['Bytes']>;
};

export type AssetTransferDetail_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  amounts: InputMaybe<Array<Scalars['String']>>;
  amounts_contains: InputMaybe<Array<Scalars['String']>>;
  amounts_contains_nocase: InputMaybe<Array<Scalars['String']>>;
  amounts_not: InputMaybe<Array<Scalars['String']>>;
  amounts_not_contains: InputMaybe<Array<Scalars['String']>>;
  amounts_not_contains_nocase: InputMaybe<Array<Scalars['String']>>;
  and: InputMaybe<Array<InputMaybe<AssetTransferDetail_Filter>>>;
  assetIds: InputMaybe<Array<Scalars['String']>>;
  assetIds_contains: InputMaybe<Array<Scalars['String']>>;
  assetIds_contains_nocase: InputMaybe<Array<Scalars['String']>>;
  assetIds_not: InputMaybe<Array<Scalars['String']>>;
  assetIds_not_contains: InputMaybe<Array<Scalars['String']>>;
  assetIds_not_contains_nocase: InputMaybe<Array<Scalars['String']>>;
  from: InputMaybe<Scalars['Bytes']>;
  from_contains: InputMaybe<Scalars['Bytes']>;
  from_gt: InputMaybe<Scalars['Bytes']>;
  from_gte: InputMaybe<Scalars['Bytes']>;
  from_in: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt: InputMaybe<Scalars['Bytes']>;
  from_lte: InputMaybe<Scalars['Bytes']>;
  from_not: InputMaybe<Scalars['Bytes']>;
  from_not_contains: InputMaybe<Scalars['Bytes']>;
  from_not_in: InputMaybe<Array<Scalars['Bytes']>>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  operator: InputMaybe<Scalars['Bytes']>;
  operator_contains: InputMaybe<Scalars['Bytes']>;
  operator_gt: InputMaybe<Scalars['Bytes']>;
  operator_gte: InputMaybe<Scalars['Bytes']>;
  operator_in: InputMaybe<Array<Scalars['Bytes']>>;
  operator_lt: InputMaybe<Scalars['Bytes']>;
  operator_lte: InputMaybe<Scalars['Bytes']>;
  operator_not: InputMaybe<Scalars['Bytes']>;
  operator_not_contains: InputMaybe<Scalars['Bytes']>;
  operator_not_in: InputMaybe<Array<Scalars['Bytes']>>;
  or: InputMaybe<Array<InputMaybe<AssetTransferDetail_Filter>>>;
  to: InputMaybe<Scalars['Bytes']>;
  to_contains: InputMaybe<Scalars['Bytes']>;
  to_gt: InputMaybe<Scalars['Bytes']>;
  to_gte: InputMaybe<Scalars['Bytes']>;
  to_in: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt: InputMaybe<Scalars['Bytes']>;
  to_lte: InputMaybe<Scalars['Bytes']>;
  to_not: InputMaybe<Scalars['Bytes']>;
  to_not_contains: InputMaybe<Scalars['Bytes']>;
  to_not_in: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AssetTransferDetail_OrderBy {
  Amounts = 'amounts',
  AssetIds = 'assetIds',
  From = 'from',
  Id = 'id',
  Operator = 'operator',
  To = 'to'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash: InputMaybe<Scalars['Bytes']>;
  number: InputMaybe<Scalars['Int']>;
  number_gte: InputMaybe<Scalars['Int']>;
};

export type Erc1155Balance = {
  __typename: 'ERC1155Balance';
  account: Maybe<Account>;
  contract: Erc1155Contract;
  id: Scalars['ID'];
  token: Erc1155Token;
  transferFromEvent: Array<Erc1155Transfer>;
  transferToEvent: Array<Erc1155Transfer>;
  value: Scalars['BigDecimal'];
  valueExact: Scalars['BigInt'];
};


export type Erc1155BalanceTransferFromEventArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Transfer_Filter>;
};


export type Erc1155BalanceTransferToEventArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Balance_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  account: InputMaybe<Scalars['String']>;
  account_: InputMaybe<Account_Filter>;
  account_contains: InputMaybe<Scalars['String']>;
  account_contains_nocase: InputMaybe<Scalars['String']>;
  account_ends_with: InputMaybe<Scalars['String']>;
  account_ends_with_nocase: InputMaybe<Scalars['String']>;
  account_gt: InputMaybe<Scalars['String']>;
  account_gte: InputMaybe<Scalars['String']>;
  account_in: InputMaybe<Array<Scalars['String']>>;
  account_lt: InputMaybe<Scalars['String']>;
  account_lte: InputMaybe<Scalars['String']>;
  account_not: InputMaybe<Scalars['String']>;
  account_not_contains: InputMaybe<Scalars['String']>;
  account_not_contains_nocase: InputMaybe<Scalars['String']>;
  account_not_ends_with: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  account_not_in: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  account_starts_with: InputMaybe<Scalars['String']>;
  account_starts_with_nocase: InputMaybe<Scalars['String']>;
  and: InputMaybe<Array<InputMaybe<Erc1155Balance_Filter>>>;
  contract: InputMaybe<Scalars['String']>;
  contract_: InputMaybe<Erc1155Contract_Filter>;
  contract_contains: InputMaybe<Scalars['String']>;
  contract_contains_nocase: InputMaybe<Scalars['String']>;
  contract_ends_with: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_gt: InputMaybe<Scalars['String']>;
  contract_gte: InputMaybe<Scalars['String']>;
  contract_in: InputMaybe<Array<Scalars['String']>>;
  contract_lt: InputMaybe<Scalars['String']>;
  contract_lte: InputMaybe<Scalars['String']>;
  contract_not: InputMaybe<Scalars['String']>;
  contract_not_contains: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase: InputMaybe<Scalars['String']>;
  contract_not_ends_with: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_not_in: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  contract_starts_with: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  or: InputMaybe<Array<InputMaybe<Erc1155Balance_Filter>>>;
  token: InputMaybe<Scalars['String']>;
  token_: InputMaybe<Erc1155Token_Filter>;
  token_contains: InputMaybe<Scalars['String']>;
  token_contains_nocase: InputMaybe<Scalars['String']>;
  token_ends_with: InputMaybe<Scalars['String']>;
  token_ends_with_nocase: InputMaybe<Scalars['String']>;
  token_gt: InputMaybe<Scalars['String']>;
  token_gte: InputMaybe<Scalars['String']>;
  token_in: InputMaybe<Array<Scalars['String']>>;
  token_lt: InputMaybe<Scalars['String']>;
  token_lte: InputMaybe<Scalars['String']>;
  token_not: InputMaybe<Scalars['String']>;
  token_not_contains: InputMaybe<Scalars['String']>;
  token_not_contains_nocase: InputMaybe<Scalars['String']>;
  token_not_ends_with: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  token_not_in: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  token_starts_with: InputMaybe<Scalars['String']>;
  token_starts_with_nocase: InputMaybe<Scalars['String']>;
  transferFromEvent_: InputMaybe<Erc1155Transfer_Filter>;
  transferToEvent_: InputMaybe<Erc1155Transfer_Filter>;
  value: InputMaybe<Scalars['BigDecimal']>;
  valueExact: InputMaybe<Scalars['BigInt']>;
  valueExact_gt: InputMaybe<Scalars['BigInt']>;
  valueExact_gte: InputMaybe<Scalars['BigInt']>;
  valueExact_in: InputMaybe<Array<Scalars['BigInt']>>;
  valueExact_lt: InputMaybe<Scalars['BigInt']>;
  valueExact_lte: InputMaybe<Scalars['BigInt']>;
  valueExact_not: InputMaybe<Scalars['BigInt']>;
  valueExact_not_in: InputMaybe<Array<Scalars['BigInt']>>;
  value_gt: InputMaybe<Scalars['BigDecimal']>;
  value_gte: InputMaybe<Scalars['BigDecimal']>;
  value_in: InputMaybe<Array<Scalars['BigDecimal']>>;
  value_lt: InputMaybe<Scalars['BigDecimal']>;
  value_lte: InputMaybe<Scalars['BigDecimal']>;
  value_not: InputMaybe<Scalars['BigDecimal']>;
  value_not_in: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Erc1155Balance_OrderBy {
  Account = 'account',
  AccountId = 'account__id',
  Contract = 'contract',
  ContractId = 'contract__id',
  Id = 'id',
  Token = 'token',
  TokenId = 'token__id',
  TokenIdentifier = 'token__identifier',
  TokenUri = 'token__uri',
  TransferFromEvent = 'transferFromEvent',
  TransferToEvent = 'transferToEvent',
  Value = 'value',
  ValueExact = 'valueExact'
}

export type Erc1155Contract = {
  __typename: 'ERC1155Contract';
  asAccount: Account;
  balances: Array<Erc1155Balance>;
  id: Scalars['Bytes'];
  operators: Array<Erc1155Operator>;
  tokens: Array<Erc1155Token>;
  transfers: Array<Erc1155Transfer>;
};


export type Erc1155ContractBalancesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Balance_Filter>;
};


export type Erc1155ContractOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Operator_Filter>;
};


export type Erc1155ContractTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Token_Filter>;
};


export type Erc1155ContractTransfersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Erc1155Contract_Filter>>>;
  asAccount: InputMaybe<Scalars['String']>;
  asAccount_: InputMaybe<Account_Filter>;
  asAccount_contains: InputMaybe<Scalars['String']>;
  asAccount_contains_nocase: InputMaybe<Scalars['String']>;
  asAccount_ends_with: InputMaybe<Scalars['String']>;
  asAccount_ends_with_nocase: InputMaybe<Scalars['String']>;
  asAccount_gt: InputMaybe<Scalars['String']>;
  asAccount_gte: InputMaybe<Scalars['String']>;
  asAccount_in: InputMaybe<Array<Scalars['String']>>;
  asAccount_lt: InputMaybe<Scalars['String']>;
  asAccount_lte: InputMaybe<Scalars['String']>;
  asAccount_not: InputMaybe<Scalars['String']>;
  asAccount_not_contains: InputMaybe<Scalars['String']>;
  asAccount_not_contains_nocase: InputMaybe<Scalars['String']>;
  asAccount_not_ends_with: InputMaybe<Scalars['String']>;
  asAccount_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  asAccount_not_in: InputMaybe<Array<Scalars['String']>>;
  asAccount_not_starts_with: InputMaybe<Scalars['String']>;
  asAccount_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  asAccount_starts_with: InputMaybe<Scalars['String']>;
  asAccount_starts_with_nocase: InputMaybe<Scalars['String']>;
  balances_: InputMaybe<Erc1155Balance_Filter>;
  id: InputMaybe<Scalars['Bytes']>;
  id_contains: InputMaybe<Scalars['Bytes']>;
  id_gt: InputMaybe<Scalars['Bytes']>;
  id_gte: InputMaybe<Scalars['Bytes']>;
  id_in: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt: InputMaybe<Scalars['Bytes']>;
  id_lte: InputMaybe<Scalars['Bytes']>;
  id_not: InputMaybe<Scalars['Bytes']>;
  id_not_contains: InputMaybe<Scalars['Bytes']>;
  id_not_in: InputMaybe<Array<Scalars['Bytes']>>;
  operators_: InputMaybe<Erc1155Operator_Filter>;
  or: InputMaybe<Array<InputMaybe<Erc1155Contract_Filter>>>;
  tokens_: InputMaybe<Erc1155Token_Filter>;
  transfers_: InputMaybe<Erc1155Transfer_Filter>;
};

export enum Erc1155Contract_OrderBy {
  AsAccount = 'asAccount',
  AsAccountId = 'asAccount__id',
  Balances = 'balances',
  Id = 'id',
  Operators = 'operators',
  Tokens = 'tokens',
  Transfers = 'transfers'
}

export type Erc1155Operator = {
  __typename: 'ERC1155Operator';
  approved: Scalars['Boolean'];
  contract: Erc1155Contract;
  id: Scalars['ID'];
  operator: Account;
  owner: Account;
};

export type Erc1155Operator_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Erc1155Operator_Filter>>>;
  approved: InputMaybe<Scalars['Boolean']>;
  approved_in: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not: InputMaybe<Scalars['Boolean']>;
  approved_not_in: InputMaybe<Array<Scalars['Boolean']>>;
  contract: InputMaybe<Scalars['String']>;
  contract_: InputMaybe<Erc1155Contract_Filter>;
  contract_contains: InputMaybe<Scalars['String']>;
  contract_contains_nocase: InputMaybe<Scalars['String']>;
  contract_ends_with: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_gt: InputMaybe<Scalars['String']>;
  contract_gte: InputMaybe<Scalars['String']>;
  contract_in: InputMaybe<Array<Scalars['String']>>;
  contract_lt: InputMaybe<Scalars['String']>;
  contract_lte: InputMaybe<Scalars['String']>;
  contract_not: InputMaybe<Scalars['String']>;
  contract_not_contains: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase: InputMaybe<Scalars['String']>;
  contract_not_ends_with: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_not_in: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  contract_starts_with: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  operator: InputMaybe<Scalars['String']>;
  operator_: InputMaybe<Account_Filter>;
  operator_contains: InputMaybe<Scalars['String']>;
  operator_contains_nocase: InputMaybe<Scalars['String']>;
  operator_ends_with: InputMaybe<Scalars['String']>;
  operator_ends_with_nocase: InputMaybe<Scalars['String']>;
  operator_gt: InputMaybe<Scalars['String']>;
  operator_gte: InputMaybe<Scalars['String']>;
  operator_in: InputMaybe<Array<Scalars['String']>>;
  operator_lt: InputMaybe<Scalars['String']>;
  operator_lte: InputMaybe<Scalars['String']>;
  operator_not: InputMaybe<Scalars['String']>;
  operator_not_contains: InputMaybe<Scalars['String']>;
  operator_not_contains_nocase: InputMaybe<Scalars['String']>;
  operator_not_ends_with: InputMaybe<Scalars['String']>;
  operator_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  operator_not_in: InputMaybe<Array<Scalars['String']>>;
  operator_not_starts_with: InputMaybe<Scalars['String']>;
  operator_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  operator_starts_with: InputMaybe<Scalars['String']>;
  operator_starts_with_nocase: InputMaybe<Scalars['String']>;
  or: InputMaybe<Array<InputMaybe<Erc1155Operator_Filter>>>;
  owner: InputMaybe<Scalars['String']>;
  owner_: InputMaybe<Account_Filter>;
  owner_contains: InputMaybe<Scalars['String']>;
  owner_contains_nocase: InputMaybe<Scalars['String']>;
  owner_ends_with: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase: InputMaybe<Scalars['String']>;
  owner_gt: InputMaybe<Scalars['String']>;
  owner_gte: InputMaybe<Scalars['String']>;
  owner_in: InputMaybe<Array<Scalars['String']>>;
  owner_lt: InputMaybe<Scalars['String']>;
  owner_lte: InputMaybe<Scalars['String']>;
  owner_not: InputMaybe<Scalars['String']>;
  owner_not_contains: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase: InputMaybe<Scalars['String']>;
  owner_not_ends_with: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  owner_not_in: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  owner_starts_with: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase: InputMaybe<Scalars['String']>;
};

export enum Erc1155Operator_OrderBy {
  Approved = 'approved',
  Contract = 'contract',
  ContractId = 'contract__id',
  Id = 'id',
  Operator = 'operator',
  OperatorId = 'operator__id',
  Owner = 'owner',
  OwnerId = 'owner__id'
}

export type Erc1155Token = {
  __typename: 'ERC1155Token';
  balances: Array<Erc1155Balance>;
  contract: Erc1155Contract;
  id: Scalars['ID'];
  identifier: Scalars['BigInt'];
  metadata: Maybe<Erc1155TokenMetadata>;
  totalSupply: Erc1155Balance;
  transfers: Array<Erc1155Transfer>;
  uri: Maybe<Scalars['String']>;
};


export type Erc1155TokenBalancesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Balance_Filter>;
};


export type Erc1155TokenTransfersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155TokenAttribute = {
  __typename: 'ERC1155TokenAttribute';
  displayType: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  maxValue: Maybe<Scalars['BigInt']>;
  metadata: Erc1155TokenMetadata;
  traitType: Scalars['String'];
  value: Scalars['String'];
};

export type Erc1155TokenAttribute_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Erc1155TokenAttribute_Filter>>>;
  displayType: InputMaybe<Scalars['String']>;
  displayType_contains: InputMaybe<Scalars['String']>;
  displayType_contains_nocase: InputMaybe<Scalars['String']>;
  displayType_ends_with: InputMaybe<Scalars['String']>;
  displayType_ends_with_nocase: InputMaybe<Scalars['String']>;
  displayType_gt: InputMaybe<Scalars['String']>;
  displayType_gte: InputMaybe<Scalars['String']>;
  displayType_in: InputMaybe<Array<Scalars['String']>>;
  displayType_lt: InputMaybe<Scalars['String']>;
  displayType_lte: InputMaybe<Scalars['String']>;
  displayType_not: InputMaybe<Scalars['String']>;
  displayType_not_contains: InputMaybe<Scalars['String']>;
  displayType_not_contains_nocase: InputMaybe<Scalars['String']>;
  displayType_not_ends_with: InputMaybe<Scalars['String']>;
  displayType_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  displayType_not_in: InputMaybe<Array<Scalars['String']>>;
  displayType_not_starts_with: InputMaybe<Scalars['String']>;
  displayType_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  displayType_starts_with: InputMaybe<Scalars['String']>;
  displayType_starts_with_nocase: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  maxValue: InputMaybe<Scalars['BigInt']>;
  maxValue_gt: InputMaybe<Scalars['BigInt']>;
  maxValue_gte: InputMaybe<Scalars['BigInt']>;
  maxValue_in: InputMaybe<Array<Scalars['BigInt']>>;
  maxValue_lt: InputMaybe<Scalars['BigInt']>;
  maxValue_lte: InputMaybe<Scalars['BigInt']>;
  maxValue_not: InputMaybe<Scalars['BigInt']>;
  maxValue_not_in: InputMaybe<Array<Scalars['BigInt']>>;
  metadata: InputMaybe<Scalars['String']>;
  metadata_: InputMaybe<Erc1155TokenMetadata_Filter>;
  metadata_contains: InputMaybe<Scalars['String']>;
  metadata_contains_nocase: InputMaybe<Scalars['String']>;
  metadata_ends_with: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase: InputMaybe<Scalars['String']>;
  metadata_gt: InputMaybe<Scalars['String']>;
  metadata_gte: InputMaybe<Scalars['String']>;
  metadata_in: InputMaybe<Array<Scalars['String']>>;
  metadata_lt: InputMaybe<Scalars['String']>;
  metadata_lte: InputMaybe<Scalars['String']>;
  metadata_not: InputMaybe<Scalars['String']>;
  metadata_not_contains: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase: InputMaybe<Scalars['String']>;
  metadata_not_ends_with: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  metadata_not_in: InputMaybe<Array<Scalars['String']>>;
  metadata_not_starts_with: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  metadata_starts_with: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase: InputMaybe<Scalars['String']>;
  or: InputMaybe<Array<InputMaybe<Erc1155TokenAttribute_Filter>>>;
  traitType: InputMaybe<Scalars['String']>;
  traitType_contains: InputMaybe<Scalars['String']>;
  traitType_contains_nocase: InputMaybe<Scalars['String']>;
  traitType_ends_with: InputMaybe<Scalars['String']>;
  traitType_ends_with_nocase: InputMaybe<Scalars['String']>;
  traitType_gt: InputMaybe<Scalars['String']>;
  traitType_gte: InputMaybe<Scalars['String']>;
  traitType_in: InputMaybe<Array<Scalars['String']>>;
  traitType_lt: InputMaybe<Scalars['String']>;
  traitType_lte: InputMaybe<Scalars['String']>;
  traitType_not: InputMaybe<Scalars['String']>;
  traitType_not_contains: InputMaybe<Scalars['String']>;
  traitType_not_contains_nocase: InputMaybe<Scalars['String']>;
  traitType_not_ends_with: InputMaybe<Scalars['String']>;
  traitType_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  traitType_not_in: InputMaybe<Array<Scalars['String']>>;
  traitType_not_starts_with: InputMaybe<Scalars['String']>;
  traitType_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  traitType_starts_with: InputMaybe<Scalars['String']>;
  traitType_starts_with_nocase: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
  value_contains: InputMaybe<Scalars['String']>;
  value_contains_nocase: InputMaybe<Scalars['String']>;
  value_ends_with: InputMaybe<Scalars['String']>;
  value_ends_with_nocase: InputMaybe<Scalars['String']>;
  value_gt: InputMaybe<Scalars['String']>;
  value_gte: InputMaybe<Scalars['String']>;
  value_in: InputMaybe<Array<Scalars['String']>>;
  value_lt: InputMaybe<Scalars['String']>;
  value_lte: InputMaybe<Scalars['String']>;
  value_not: InputMaybe<Scalars['String']>;
  value_not_contains: InputMaybe<Scalars['String']>;
  value_not_contains_nocase: InputMaybe<Scalars['String']>;
  value_not_ends_with: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  value_not_in: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  value_starts_with: InputMaybe<Scalars['String']>;
  value_starts_with_nocase: InputMaybe<Scalars['String']>;
};

export enum Erc1155TokenAttribute_OrderBy {
  DisplayType = 'displayType',
  Id = 'id',
  MaxValue = 'maxValue',
  Metadata = 'metadata',
  MetadataDescription = 'metadata__description',
  MetadataId = 'metadata__id',
  MetadataImage = 'metadata__image',
  MetadataName = 'metadata__name',
  TraitType = 'traitType',
  Value = 'value'
}

export type Erc1155TokenMetadata = {
  __typename: 'ERC1155TokenMetadata';
  attributes: Array<Erc1155TokenAttribute>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};


export type Erc1155TokenMetadataAttributesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155TokenAttribute_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Erc1155TokenAttribute_Filter>;
};

export type Erc1155TokenMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Erc1155TokenMetadata_Filter>>>;
  attributes_: InputMaybe<Erc1155TokenAttribute_Filter>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_contains_nocase: InputMaybe<Scalars['String']>;
  description_ends_with: InputMaybe<Scalars['String']>;
  description_ends_with_nocase: InputMaybe<Scalars['String']>;
  description_gt: InputMaybe<Scalars['String']>;
  description_gte: InputMaybe<Scalars['String']>;
  description_in: InputMaybe<Array<Scalars['String']>>;
  description_lt: InputMaybe<Scalars['String']>;
  description_lte: InputMaybe<Scalars['String']>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_contains_nocase: InputMaybe<Scalars['String']>;
  description_not_ends_with: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  description_starts_with: InputMaybe<Scalars['String']>;
  description_starts_with_nocase: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  image: InputMaybe<Scalars['String']>;
  image_contains: InputMaybe<Scalars['String']>;
  image_contains_nocase: InputMaybe<Scalars['String']>;
  image_ends_with: InputMaybe<Scalars['String']>;
  image_ends_with_nocase: InputMaybe<Scalars['String']>;
  image_gt: InputMaybe<Scalars['String']>;
  image_gte: InputMaybe<Scalars['String']>;
  image_in: InputMaybe<Array<Scalars['String']>>;
  image_lt: InputMaybe<Scalars['String']>;
  image_lte: InputMaybe<Scalars['String']>;
  image_not: InputMaybe<Scalars['String']>;
  image_not_contains: InputMaybe<Scalars['String']>;
  image_not_contains_nocase: InputMaybe<Scalars['String']>;
  image_not_ends_with: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  image_not_in: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  image_starts_with: InputMaybe<Scalars['String']>;
  image_starts_with_nocase: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_contains_nocase: InputMaybe<Scalars['String']>;
  name_ends_with: InputMaybe<Scalars['String']>;
  name_ends_with_nocase: InputMaybe<Scalars['String']>;
  name_gt: InputMaybe<Scalars['String']>;
  name_gte: InputMaybe<Scalars['String']>;
  name_in: InputMaybe<Array<Scalars['String']>>;
  name_lt: InputMaybe<Scalars['String']>;
  name_lte: InputMaybe<Scalars['String']>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_contains_nocase: InputMaybe<Scalars['String']>;
  name_not_ends_with: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  name_starts_with: InputMaybe<Scalars['String']>;
  name_starts_with_nocase: InputMaybe<Scalars['String']>;
  or: InputMaybe<Array<InputMaybe<Erc1155TokenMetadata_Filter>>>;
};

export enum Erc1155TokenMetadata_OrderBy {
  Attributes = 'attributes',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Name = 'name'
}

export type Erc1155Token_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Erc1155Token_Filter>>>;
  balances_: InputMaybe<Erc1155Balance_Filter>;
  contract: InputMaybe<Scalars['String']>;
  contract_: InputMaybe<Erc1155Contract_Filter>;
  contract_contains: InputMaybe<Scalars['String']>;
  contract_contains_nocase: InputMaybe<Scalars['String']>;
  contract_ends_with: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_gt: InputMaybe<Scalars['String']>;
  contract_gte: InputMaybe<Scalars['String']>;
  contract_in: InputMaybe<Array<Scalars['String']>>;
  contract_lt: InputMaybe<Scalars['String']>;
  contract_lte: InputMaybe<Scalars['String']>;
  contract_not: InputMaybe<Scalars['String']>;
  contract_not_contains: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase: InputMaybe<Scalars['String']>;
  contract_not_ends_with: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_not_in: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  contract_starts_with: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  identifier: InputMaybe<Scalars['BigInt']>;
  identifier_gt: InputMaybe<Scalars['BigInt']>;
  identifier_gte: InputMaybe<Scalars['BigInt']>;
  identifier_in: InputMaybe<Array<Scalars['BigInt']>>;
  identifier_lt: InputMaybe<Scalars['BigInt']>;
  identifier_lte: InputMaybe<Scalars['BigInt']>;
  identifier_not: InputMaybe<Scalars['BigInt']>;
  identifier_not_in: InputMaybe<Array<Scalars['BigInt']>>;
  metadata: InputMaybe<Scalars['String']>;
  metadata_: InputMaybe<Erc1155TokenMetadata_Filter>;
  metadata_contains: InputMaybe<Scalars['String']>;
  metadata_contains_nocase: InputMaybe<Scalars['String']>;
  metadata_ends_with: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase: InputMaybe<Scalars['String']>;
  metadata_gt: InputMaybe<Scalars['String']>;
  metadata_gte: InputMaybe<Scalars['String']>;
  metadata_in: InputMaybe<Array<Scalars['String']>>;
  metadata_lt: InputMaybe<Scalars['String']>;
  metadata_lte: InputMaybe<Scalars['String']>;
  metadata_not: InputMaybe<Scalars['String']>;
  metadata_not_contains: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase: InputMaybe<Scalars['String']>;
  metadata_not_ends_with: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  metadata_not_in: InputMaybe<Array<Scalars['String']>>;
  metadata_not_starts_with: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  metadata_starts_with: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase: InputMaybe<Scalars['String']>;
  or: InputMaybe<Array<InputMaybe<Erc1155Token_Filter>>>;
  totalSupply: InputMaybe<Scalars['String']>;
  totalSupply_: InputMaybe<Erc1155Balance_Filter>;
  totalSupply_contains: InputMaybe<Scalars['String']>;
  totalSupply_contains_nocase: InputMaybe<Scalars['String']>;
  totalSupply_ends_with: InputMaybe<Scalars['String']>;
  totalSupply_ends_with_nocase: InputMaybe<Scalars['String']>;
  totalSupply_gt: InputMaybe<Scalars['String']>;
  totalSupply_gte: InputMaybe<Scalars['String']>;
  totalSupply_in: InputMaybe<Array<Scalars['String']>>;
  totalSupply_lt: InputMaybe<Scalars['String']>;
  totalSupply_lte: InputMaybe<Scalars['String']>;
  totalSupply_not: InputMaybe<Scalars['String']>;
  totalSupply_not_contains: InputMaybe<Scalars['String']>;
  totalSupply_not_contains_nocase: InputMaybe<Scalars['String']>;
  totalSupply_not_ends_with: InputMaybe<Scalars['String']>;
  totalSupply_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  totalSupply_not_in: InputMaybe<Array<Scalars['String']>>;
  totalSupply_not_starts_with: InputMaybe<Scalars['String']>;
  totalSupply_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  totalSupply_starts_with: InputMaybe<Scalars['String']>;
  totalSupply_starts_with_nocase: InputMaybe<Scalars['String']>;
  transfers_: InputMaybe<Erc1155Transfer_Filter>;
  uri: InputMaybe<Scalars['String']>;
  uri_contains: InputMaybe<Scalars['String']>;
  uri_contains_nocase: InputMaybe<Scalars['String']>;
  uri_ends_with: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase: InputMaybe<Scalars['String']>;
  uri_gt: InputMaybe<Scalars['String']>;
  uri_gte: InputMaybe<Scalars['String']>;
  uri_in: InputMaybe<Array<Scalars['String']>>;
  uri_lt: InputMaybe<Scalars['String']>;
  uri_lte: InputMaybe<Scalars['String']>;
  uri_not: InputMaybe<Scalars['String']>;
  uri_not_contains: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase: InputMaybe<Scalars['String']>;
  uri_not_ends_with: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  uri_not_in: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  uri_starts_with: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase: InputMaybe<Scalars['String']>;
};

export enum Erc1155Token_OrderBy {
  Balances = 'balances',
  Contract = 'contract',
  ContractId = 'contract__id',
  Id = 'id',
  Identifier = 'identifier',
  Metadata = 'metadata',
  MetadataDescription = 'metadata__description',
  MetadataId = 'metadata__id',
  MetadataImage = 'metadata__image',
  MetadataName = 'metadata__name',
  TotalSupply = 'totalSupply',
  TotalSupplyId = 'totalSupply__id',
  TotalSupplyValue = 'totalSupply__value',
  TotalSupplyValueExact = 'totalSupply__valueExact',
  Transfers = 'transfers',
  Uri = 'uri'
}

export type Erc1155Transfer = Event & {
  __typename: 'ERC1155Transfer';
  contract: Erc1155Contract;
  emitter: Account;
  from: Maybe<Account>;
  fromBalance: Maybe<Erc1155Balance>;
  id: Scalars['ID'];
  operator: Account;
  timestamp: Scalars['BigInt'];
  to: Maybe<Account>;
  toBalance: Maybe<Erc1155Balance>;
  token: Erc1155Token;
  transaction: Transaction;
  value: Scalars['BigDecimal'];
  valueExact: Scalars['BigInt'];
};

export type Erc1155Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Erc1155Transfer_Filter>>>;
  contract: InputMaybe<Scalars['String']>;
  contract_: InputMaybe<Erc1155Contract_Filter>;
  contract_contains: InputMaybe<Scalars['String']>;
  contract_contains_nocase: InputMaybe<Scalars['String']>;
  contract_ends_with: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_gt: InputMaybe<Scalars['String']>;
  contract_gte: InputMaybe<Scalars['String']>;
  contract_in: InputMaybe<Array<Scalars['String']>>;
  contract_lt: InputMaybe<Scalars['String']>;
  contract_lte: InputMaybe<Scalars['String']>;
  contract_not: InputMaybe<Scalars['String']>;
  contract_not_contains: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase: InputMaybe<Scalars['String']>;
  contract_not_ends_with: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  contract_not_in: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  contract_starts_with: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase: InputMaybe<Scalars['String']>;
  emitter: InputMaybe<Scalars['String']>;
  emitter_: InputMaybe<Account_Filter>;
  emitter_contains: InputMaybe<Scalars['String']>;
  emitter_contains_nocase: InputMaybe<Scalars['String']>;
  emitter_ends_with: InputMaybe<Scalars['String']>;
  emitter_ends_with_nocase: InputMaybe<Scalars['String']>;
  emitter_gt: InputMaybe<Scalars['String']>;
  emitter_gte: InputMaybe<Scalars['String']>;
  emitter_in: InputMaybe<Array<Scalars['String']>>;
  emitter_lt: InputMaybe<Scalars['String']>;
  emitter_lte: InputMaybe<Scalars['String']>;
  emitter_not: InputMaybe<Scalars['String']>;
  emitter_not_contains: InputMaybe<Scalars['String']>;
  emitter_not_contains_nocase: InputMaybe<Scalars['String']>;
  emitter_not_ends_with: InputMaybe<Scalars['String']>;
  emitter_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  emitter_not_in: InputMaybe<Array<Scalars['String']>>;
  emitter_not_starts_with: InputMaybe<Scalars['String']>;
  emitter_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  emitter_starts_with: InputMaybe<Scalars['String']>;
  emitter_starts_with_nocase: InputMaybe<Scalars['String']>;
  from: InputMaybe<Scalars['String']>;
  fromBalance: InputMaybe<Scalars['String']>;
  fromBalance_: InputMaybe<Erc1155Balance_Filter>;
  fromBalance_contains: InputMaybe<Scalars['String']>;
  fromBalance_contains_nocase: InputMaybe<Scalars['String']>;
  fromBalance_ends_with: InputMaybe<Scalars['String']>;
  fromBalance_ends_with_nocase: InputMaybe<Scalars['String']>;
  fromBalance_gt: InputMaybe<Scalars['String']>;
  fromBalance_gte: InputMaybe<Scalars['String']>;
  fromBalance_in: InputMaybe<Array<Scalars['String']>>;
  fromBalance_lt: InputMaybe<Scalars['String']>;
  fromBalance_lte: InputMaybe<Scalars['String']>;
  fromBalance_not: InputMaybe<Scalars['String']>;
  fromBalance_not_contains: InputMaybe<Scalars['String']>;
  fromBalance_not_contains_nocase: InputMaybe<Scalars['String']>;
  fromBalance_not_ends_with: InputMaybe<Scalars['String']>;
  fromBalance_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  fromBalance_not_in: InputMaybe<Array<Scalars['String']>>;
  fromBalance_not_starts_with: InputMaybe<Scalars['String']>;
  fromBalance_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  fromBalance_starts_with: InputMaybe<Scalars['String']>;
  fromBalance_starts_with_nocase: InputMaybe<Scalars['String']>;
  from_: InputMaybe<Account_Filter>;
  from_contains: InputMaybe<Scalars['String']>;
  from_contains_nocase: InputMaybe<Scalars['String']>;
  from_ends_with: InputMaybe<Scalars['String']>;
  from_ends_with_nocase: InputMaybe<Scalars['String']>;
  from_gt: InputMaybe<Scalars['String']>;
  from_gte: InputMaybe<Scalars['String']>;
  from_in: InputMaybe<Array<Scalars['String']>>;
  from_lt: InputMaybe<Scalars['String']>;
  from_lte: InputMaybe<Scalars['String']>;
  from_not: InputMaybe<Scalars['String']>;
  from_not_contains: InputMaybe<Scalars['String']>;
  from_not_contains_nocase: InputMaybe<Scalars['String']>;
  from_not_ends_with: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  from_not_in: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  from_starts_with: InputMaybe<Scalars['String']>;
  from_starts_with_nocase: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  operator: InputMaybe<Scalars['String']>;
  operator_: InputMaybe<Account_Filter>;
  operator_contains: InputMaybe<Scalars['String']>;
  operator_contains_nocase: InputMaybe<Scalars['String']>;
  operator_ends_with: InputMaybe<Scalars['String']>;
  operator_ends_with_nocase: InputMaybe<Scalars['String']>;
  operator_gt: InputMaybe<Scalars['String']>;
  operator_gte: InputMaybe<Scalars['String']>;
  operator_in: InputMaybe<Array<Scalars['String']>>;
  operator_lt: InputMaybe<Scalars['String']>;
  operator_lte: InputMaybe<Scalars['String']>;
  operator_not: InputMaybe<Scalars['String']>;
  operator_not_contains: InputMaybe<Scalars['String']>;
  operator_not_contains_nocase: InputMaybe<Scalars['String']>;
  operator_not_ends_with: InputMaybe<Scalars['String']>;
  operator_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  operator_not_in: InputMaybe<Array<Scalars['String']>>;
  operator_not_starts_with: InputMaybe<Scalars['String']>;
  operator_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  operator_starts_with: InputMaybe<Scalars['String']>;
  operator_starts_with_nocase: InputMaybe<Scalars['String']>;
  or: InputMaybe<Array<InputMaybe<Erc1155Transfer_Filter>>>;
  timestamp: InputMaybe<Scalars['BigInt']>;
  timestamp_gt: InputMaybe<Scalars['BigInt']>;
  timestamp_gte: InputMaybe<Scalars['BigInt']>;
  timestamp_in: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt: InputMaybe<Scalars['BigInt']>;
  timestamp_lte: InputMaybe<Scalars['BigInt']>;
  timestamp_not: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in: InputMaybe<Array<Scalars['BigInt']>>;
  to: InputMaybe<Scalars['String']>;
  toBalance: InputMaybe<Scalars['String']>;
  toBalance_: InputMaybe<Erc1155Balance_Filter>;
  toBalance_contains: InputMaybe<Scalars['String']>;
  toBalance_contains_nocase: InputMaybe<Scalars['String']>;
  toBalance_ends_with: InputMaybe<Scalars['String']>;
  toBalance_ends_with_nocase: InputMaybe<Scalars['String']>;
  toBalance_gt: InputMaybe<Scalars['String']>;
  toBalance_gte: InputMaybe<Scalars['String']>;
  toBalance_in: InputMaybe<Array<Scalars['String']>>;
  toBalance_lt: InputMaybe<Scalars['String']>;
  toBalance_lte: InputMaybe<Scalars['String']>;
  toBalance_not: InputMaybe<Scalars['String']>;
  toBalance_not_contains: InputMaybe<Scalars['String']>;
  toBalance_not_contains_nocase: InputMaybe<Scalars['String']>;
  toBalance_not_ends_with: InputMaybe<Scalars['String']>;
  toBalance_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  toBalance_not_in: InputMaybe<Array<Scalars['String']>>;
  toBalance_not_starts_with: InputMaybe<Scalars['String']>;
  toBalance_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  toBalance_starts_with: InputMaybe<Scalars['String']>;
  toBalance_starts_with_nocase: InputMaybe<Scalars['String']>;
  to_: InputMaybe<Account_Filter>;
  to_contains: InputMaybe<Scalars['String']>;
  to_contains_nocase: InputMaybe<Scalars['String']>;
  to_ends_with: InputMaybe<Scalars['String']>;
  to_ends_with_nocase: InputMaybe<Scalars['String']>;
  to_gt: InputMaybe<Scalars['String']>;
  to_gte: InputMaybe<Scalars['String']>;
  to_in: InputMaybe<Array<Scalars['String']>>;
  to_lt: InputMaybe<Scalars['String']>;
  to_lte: InputMaybe<Scalars['String']>;
  to_not: InputMaybe<Scalars['String']>;
  to_not_contains: InputMaybe<Scalars['String']>;
  to_not_contains_nocase: InputMaybe<Scalars['String']>;
  to_not_ends_with: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  to_not_in: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  to_starts_with: InputMaybe<Scalars['String']>;
  to_starts_with_nocase: InputMaybe<Scalars['String']>;
  token: InputMaybe<Scalars['String']>;
  token_: InputMaybe<Erc1155Token_Filter>;
  token_contains: InputMaybe<Scalars['String']>;
  token_contains_nocase: InputMaybe<Scalars['String']>;
  token_ends_with: InputMaybe<Scalars['String']>;
  token_ends_with_nocase: InputMaybe<Scalars['String']>;
  token_gt: InputMaybe<Scalars['String']>;
  token_gte: InputMaybe<Scalars['String']>;
  token_in: InputMaybe<Array<Scalars['String']>>;
  token_lt: InputMaybe<Scalars['String']>;
  token_lte: InputMaybe<Scalars['String']>;
  token_not: InputMaybe<Scalars['String']>;
  token_not_contains: InputMaybe<Scalars['String']>;
  token_not_contains_nocase: InputMaybe<Scalars['String']>;
  token_not_ends_with: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  token_not_in: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  token_starts_with: InputMaybe<Scalars['String']>;
  token_starts_with_nocase: InputMaybe<Scalars['String']>;
  transaction: InputMaybe<Scalars['String']>;
  transaction_: InputMaybe<Transaction_Filter>;
  transaction_contains: InputMaybe<Scalars['String']>;
  transaction_contains_nocase: InputMaybe<Scalars['String']>;
  transaction_ends_with: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase: InputMaybe<Scalars['String']>;
  transaction_gt: InputMaybe<Scalars['String']>;
  transaction_gte: InputMaybe<Scalars['String']>;
  transaction_in: InputMaybe<Array<Scalars['String']>>;
  transaction_lt: InputMaybe<Scalars['String']>;
  transaction_lte: InputMaybe<Scalars['String']>;
  transaction_not: InputMaybe<Scalars['String']>;
  transaction_not_contains: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase: InputMaybe<Scalars['String']>;
  transaction_not_ends_with: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  transaction_not_in: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  transaction_starts_with: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['BigDecimal']>;
  valueExact: InputMaybe<Scalars['BigInt']>;
  valueExact_gt: InputMaybe<Scalars['BigInt']>;
  valueExact_gte: InputMaybe<Scalars['BigInt']>;
  valueExact_in: InputMaybe<Array<Scalars['BigInt']>>;
  valueExact_lt: InputMaybe<Scalars['BigInt']>;
  valueExact_lte: InputMaybe<Scalars['BigInt']>;
  valueExact_not: InputMaybe<Scalars['BigInt']>;
  valueExact_not_in: InputMaybe<Array<Scalars['BigInt']>>;
  value_gt: InputMaybe<Scalars['BigDecimal']>;
  value_gte: InputMaybe<Scalars['BigDecimal']>;
  value_in: InputMaybe<Array<Scalars['BigDecimal']>>;
  value_lt: InputMaybe<Scalars['BigDecimal']>;
  value_lte: InputMaybe<Scalars['BigDecimal']>;
  value_not: InputMaybe<Scalars['BigDecimal']>;
  value_not_in: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Erc1155Transfer_OrderBy {
  Contract = 'contract',
  ContractId = 'contract__id',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  From = 'from',
  FromBalance = 'fromBalance',
  FromBalanceId = 'fromBalance__id',
  FromBalanceValue = 'fromBalance__value',
  FromBalanceValueExact = 'fromBalance__valueExact',
  FromId = 'from__id',
  Id = 'id',
  Operator = 'operator',
  OperatorId = 'operator__id',
  Timestamp = 'timestamp',
  To = 'to',
  ToBalance = 'toBalance',
  ToBalanceId = 'toBalance__id',
  ToBalanceValue = 'toBalance__value',
  ToBalanceValueExact = 'toBalance__valueExact',
  ToId = 'to__id',
  Token = 'token',
  TokenId = 'token__id',
  TokenIdentifier = 'token__identifier',
  TokenUri = 'token__uri',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  Value = 'value',
  ValueExact = 'valueExact'
}

export type Event = {
  emitter: Account;
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  transaction: Transaction;
};

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  emitter: InputMaybe<Scalars['String']>;
  emitter_: InputMaybe<Account_Filter>;
  emitter_contains: InputMaybe<Scalars['String']>;
  emitter_contains_nocase: InputMaybe<Scalars['String']>;
  emitter_ends_with: InputMaybe<Scalars['String']>;
  emitter_ends_with_nocase: InputMaybe<Scalars['String']>;
  emitter_gt: InputMaybe<Scalars['String']>;
  emitter_gte: InputMaybe<Scalars['String']>;
  emitter_in: InputMaybe<Array<Scalars['String']>>;
  emitter_lt: InputMaybe<Scalars['String']>;
  emitter_lte: InputMaybe<Scalars['String']>;
  emitter_not: InputMaybe<Scalars['String']>;
  emitter_not_contains: InputMaybe<Scalars['String']>;
  emitter_not_contains_nocase: InputMaybe<Scalars['String']>;
  emitter_not_ends_with: InputMaybe<Scalars['String']>;
  emitter_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  emitter_not_in: InputMaybe<Array<Scalars['String']>>;
  emitter_not_starts_with: InputMaybe<Scalars['String']>;
  emitter_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  emitter_starts_with: InputMaybe<Scalars['String']>;
  emitter_starts_with_nocase: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  or: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  timestamp: InputMaybe<Scalars['BigInt']>;
  timestamp_gt: InputMaybe<Scalars['BigInt']>;
  timestamp_gte: InputMaybe<Scalars['BigInt']>;
  timestamp_in: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt: InputMaybe<Scalars['BigInt']>;
  timestamp_lte: InputMaybe<Scalars['BigInt']>;
  timestamp_not: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in: InputMaybe<Array<Scalars['BigInt']>>;
  transaction: InputMaybe<Scalars['String']>;
  transaction_: InputMaybe<Transaction_Filter>;
  transaction_contains: InputMaybe<Scalars['String']>;
  transaction_contains_nocase: InputMaybe<Scalars['String']>;
  transaction_ends_with: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase: InputMaybe<Scalars['String']>;
  transaction_gt: InputMaybe<Scalars['String']>;
  transaction_gte: InputMaybe<Scalars['String']>;
  transaction_in: InputMaybe<Array<Scalars['String']>>;
  transaction_lt: InputMaybe<Scalars['String']>;
  transaction_lte: InputMaybe<Scalars['String']>;
  transaction_not: InputMaybe<Scalars['String']>;
  transaction_not_contains: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase: InputMaybe<Scalars['String']>;
  transaction_not_ends_with: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase: InputMaybe<Scalars['String']>;
  transaction_not_in: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase: InputMaybe<Scalars['String']>;
  transaction_starts_with: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase: InputMaybe<Scalars['String']>;
};

export enum Event_OrderBy {
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename: 'Query';
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>;
  account: Maybe<Account>;
  accounts: Array<Account>;
  assetTransferDetail: Maybe<AssetTransferDetail>;
  assetTransferDetails: Array<AssetTransferDetail>;
  erc1155Balance: Maybe<Erc1155Balance>;
  erc1155Balances: Array<Erc1155Balance>;
  erc1155Contract: Maybe<Erc1155Contract>;
  erc1155Contracts: Array<Erc1155Contract>;
  erc1155Operator: Maybe<Erc1155Operator>;
  erc1155Operators: Array<Erc1155Operator>;
  erc1155Token: Maybe<Erc1155Token>;
  erc1155TokenAttribute: Maybe<Erc1155TokenAttribute>;
  erc1155TokenAttributes: Array<Erc1155TokenAttribute>;
  erc1155TokenMetadata: Array<Erc1155TokenMetadata>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  event: Maybe<Event>;
  events: Array<Event>;
  transaction: Maybe<Transaction>;
  transactions: Array<Transaction>;
};


export type Query_MetaArgs = {
  block: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Account_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Account_Filter>;
};


export type QueryAssetTransferDetailArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAssetTransferDetailsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<AssetTransferDetail_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<AssetTransferDetail_Filter>;
};


export type QueryErc1155BalanceArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155BalancesArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Balance_Filter>;
};


export type QueryErc1155ContractArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155ContractsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Contract_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Contract_Filter>;
};


export type QueryErc1155OperatorArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155OperatorsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Operator_Filter>;
};


export type QueryErc1155TokenArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TokenAttributeArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TokenAttributesArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155TokenAttribute_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155TokenAttribute_Filter>;
};


export type QueryErc1155TokenMetadataArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155TokenMetadata_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155TokenMetadata_Filter>;
};


export type QueryErc1155TokensArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Token_Filter>;
};


export type QueryErc1155TransferArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TransfersArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Transfer_Filter>;
};


export type QueryEventArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Event_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Event_Filter>;
};


export type QueryTransactionArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Transaction_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Transaction_Filter>;
};

export type Subscription = {
  __typename: 'Subscription';
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>;
  account: Maybe<Account>;
  accounts: Array<Account>;
  assetTransferDetail: Maybe<AssetTransferDetail>;
  assetTransferDetails: Array<AssetTransferDetail>;
  erc1155Balance: Maybe<Erc1155Balance>;
  erc1155Balances: Array<Erc1155Balance>;
  erc1155Contract: Maybe<Erc1155Contract>;
  erc1155Contracts: Array<Erc1155Contract>;
  erc1155Operator: Maybe<Erc1155Operator>;
  erc1155Operators: Array<Erc1155Operator>;
  erc1155Token: Maybe<Erc1155Token>;
  erc1155TokenAttribute: Maybe<Erc1155TokenAttribute>;
  erc1155TokenAttributes: Array<Erc1155TokenAttribute>;
  erc1155TokenMetadata: Array<Erc1155TokenMetadata>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  event: Maybe<Event>;
  events: Array<Event>;
  transaction: Maybe<Transaction>;
  transactions: Array<Transaction>;
};


export type Subscription_MetaArgs = {
  block: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Account_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Account_Filter>;
};


export type SubscriptionAssetTransferDetailArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAssetTransferDetailsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<AssetTransferDetail_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<AssetTransferDetail_Filter>;
};


export type SubscriptionErc1155BalanceArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155BalancesArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Balance_Filter>;
};


export type SubscriptionErc1155ContractArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155ContractsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Contract_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Contract_Filter>;
};


export type SubscriptionErc1155OperatorArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155OperatorsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Operator_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Operator_Filter>;
};


export type SubscriptionErc1155TokenArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TokenAttributeArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TokenAttributesArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155TokenAttribute_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155TokenAttribute_Filter>;
};


export type SubscriptionErc1155TokenMetadataArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155TokenMetadata_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155TokenMetadata_Filter>;
};


export type SubscriptionErc1155TokensArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Token_Filter>;
};


export type SubscriptionErc1155TransferArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TransfersArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Erc1155Transfer_Filter>;
};


export type SubscriptionEventArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Event_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Event_Filter>;
};


export type SubscriptionTransactionArgs = {
  block: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionsArgs = {
  block: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Transaction_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where: InputMaybe<Transaction_Filter>;
};

export type Transaction = {
  __typename: 'Transaction';
  blockNumber: Scalars['BigInt'];
  events: Array<Event>;
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
};


export type TransactionEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Event_OrderBy>;
  orderDirection: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Event_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>;
  and: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  blockNumber: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte: InputMaybe<Scalars['BigInt']>;
  blockNumber_in: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte: InputMaybe<Scalars['BigInt']>;
  blockNumber_not: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in: InputMaybe<Array<Scalars['BigInt']>>;
  events_: InputMaybe<Event_Filter>;
  id: InputMaybe<Scalars['ID']>;
  id_gt: InputMaybe<Scalars['ID']>;
  id_gte: InputMaybe<Scalars['ID']>;
  id_in: InputMaybe<Array<Scalars['ID']>>;
  id_lt: InputMaybe<Scalars['ID']>;
  id_lte: InputMaybe<Scalars['ID']>;
  id_not: InputMaybe<Scalars['ID']>;
  id_not_in: InputMaybe<Array<Scalars['ID']>>;
  or: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  timestamp: InputMaybe<Scalars['BigInt']>;
  timestamp_gt: InputMaybe<Scalars['BigInt']>;
  timestamp_gte: InputMaybe<Scalars['BigInt']>;
  timestamp_in: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt: InputMaybe<Scalars['BigInt']>;
  timestamp_lte: InputMaybe<Scalars['BigInt']>;
  timestamp_not: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Events = 'events',
  Id = 'id',
  Timestamp = 'timestamp'
}

export type _Block_ = {
  __typename: '_Block_';
  /** The hash of the block */
  hash: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
