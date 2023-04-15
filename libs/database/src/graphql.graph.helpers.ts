import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    getBalance: 'getBalance' as const,
    getTransaction: 'getTransaction' as const,
    getToken1155: 'getToken1155' as const,
    getTokenBalance: 'getTokenBalance' as const
  }
}
export type AccountKeySpecifier = ('ERC1155balances' | 'ERC1155operatorOperator' | 'ERC1155operatorOwner' | 'ERC1155transferFromEvent' | 'ERC1155transferOperatorEvent' | 'ERC1155transferToEvent' | 'asERC1155' | 'events' | 'id' | AccountKeySpecifier)[];
export type AccountFieldPolicy = {
	ERC1155balances?: FieldPolicy<any> | FieldReadFunction<any>,
	ERC1155operatorOperator?: FieldPolicy<any> | FieldReadFunction<any>,
	ERC1155operatorOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	ERC1155transferFromEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	ERC1155transferOperatorEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	ERC1155transferToEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	asERC1155?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetTransferDetailKeySpecifier = ('amounts' | 'assetIds' | 'from' | 'id' | 'operator' | 'to' | AssetTransferDetailKeySpecifier)[];
export type AssetTransferDetailFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	assetIds?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operator?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC1155BalanceKeySpecifier = ('account' | 'contract' | 'id' | 'token' | 'transferFromEvent' | 'transferToEvent' | 'value' | 'valueExact' | ERC1155BalanceKeySpecifier)[];
export type ERC1155BalanceFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	contract?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	transferFromEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	transferToEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	valueExact?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC1155ContractKeySpecifier = ('asAccount' | 'balances' | 'id' | 'operators' | 'tokens' | 'transfers' | ERC1155ContractKeySpecifier)[];
export type ERC1155ContractFieldPolicy = {
	asAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	balances?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operators?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	transfers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC1155OperatorKeySpecifier = ('approved' | 'contract' | 'id' | 'operator' | 'owner' | ERC1155OperatorKeySpecifier)[];
export type ERC1155OperatorFieldPolicy = {
	approved?: FieldPolicy<any> | FieldReadFunction<any>,
	contract?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operator?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC1155TokenKeySpecifier = ('balances' | 'contract' | 'id' | 'identifier' | 'metadata' | 'totalSupply' | 'transfers' | 'uri' | ERC1155TokenKeySpecifier)[];
export type ERC1155TokenFieldPolicy = {
	balances?: FieldPolicy<any> | FieldReadFunction<any>,
	contract?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	transfers?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC1155TokenAttributeKeySpecifier = ('displayType' | 'id' | 'maxValue' | 'metadata' | 'traitType' | 'value' | ERC1155TokenAttributeKeySpecifier)[];
export type ERC1155TokenAttributeFieldPolicy = {
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maxValue?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	traitType?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC1155TokenMetadataKeySpecifier = ('attributes' | 'description' | 'id' | 'image' | 'name' | ERC1155TokenMetadataKeySpecifier)[];
export type ERC1155TokenMetadataFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC1155TransferKeySpecifier = ('contract' | 'emitter' | 'from' | 'fromBalance' | 'id' | 'operator' | 'timestamp' | 'to' | 'toBalance' | 'token' | 'transaction' | 'value' | 'valueExact' | ERC1155TransferKeySpecifier)[];
export type ERC1155TransferFieldPolicy = {
	contract?: FieldPolicy<any> | FieldReadFunction<any>,
	emitter?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	fromBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operator?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>,
	toBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	valueExact?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('emitter' | 'id' | 'timestamp' | 'transaction' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	emitter?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_meta' | 'account' | 'accounts' | 'assetTransferDetail' | 'assetTransferDetails' | 'erc1155Balance' | 'erc1155Balances' | 'erc1155Contract' | 'erc1155Contracts' | 'erc1155Operator' | 'erc1155Operators' | 'erc1155Token' | 'erc1155TokenAttribute' | 'erc1155TokenAttributes' | 'erc1155TokenMetadata' | 'erc1155Tokens' | 'erc1155Transfer' | 'erc1155Transfers' | 'event' | 'events' | 'transaction' | 'transactions' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_meta?: FieldPolicy<any> | FieldReadFunction<any>,
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	assetTransferDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	assetTransferDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Balance?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Balances?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Contract?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Contracts?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Operator?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Operators?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Token?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155TokenAttribute?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155TokenAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155TokenMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Transfer?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Transfers?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('_meta' | 'account' | 'accounts' | 'assetTransferDetail' | 'assetTransferDetails' | 'erc1155Balance' | 'erc1155Balances' | 'erc1155Contract' | 'erc1155Contracts' | 'erc1155Operator' | 'erc1155Operators' | 'erc1155Token' | 'erc1155TokenAttribute' | 'erc1155TokenAttributes' | 'erc1155TokenMetadata' | 'erc1155Tokens' | 'erc1155Transfer' | 'erc1155Transfers' | 'event' | 'events' | 'transaction' | 'transactions' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	_meta?: FieldPolicy<any> | FieldReadFunction<any>,
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	assetTransferDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	assetTransferDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Balance?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Balances?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Contract?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Contracts?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Operator?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Operators?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Token?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155TokenAttribute?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155TokenAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155TokenMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Transfer?: FieldPolicy<any> | FieldReadFunction<any>,
	erc1155Transfers?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('blockNumber' | 'events' | 'id' | 'timestamp' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	blockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _Block_KeySpecifier = ('hash' | 'number' | 'timestamp' | _Block_KeySpecifier)[];
export type _Block_FieldPolicy = {
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _Meta_KeySpecifier = ('block' | 'deployment' | 'hasIndexingErrors' | _Meta_KeySpecifier)[];
export type _Meta_FieldPolicy = {
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	deployment?: FieldPolicy<any> | FieldReadFunction<any>,
	hasIndexingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Account: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | AccountKeySpecifier | (() => undefined | AccountKeySpecifier),
		fields?: AccountFieldPolicy,
	},
	AssetTransferDetail: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | AssetTransferDetailKeySpecifier | (() => undefined | AssetTransferDetailKeySpecifier),
		fields?: AssetTransferDetailFieldPolicy,
	},
	ERC1155Balance: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ERC1155BalanceKeySpecifier | (() => undefined | ERC1155BalanceKeySpecifier),
		fields?: ERC1155BalanceFieldPolicy,
	},
	ERC1155Contract: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ERC1155ContractKeySpecifier | (() => undefined | ERC1155ContractKeySpecifier),
		fields?: ERC1155ContractFieldPolicy,
	},
	ERC1155Operator: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ERC1155OperatorKeySpecifier | (() => undefined | ERC1155OperatorKeySpecifier),
		fields?: ERC1155OperatorFieldPolicy,
	},
	ERC1155Token: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ERC1155TokenKeySpecifier | (() => undefined | ERC1155TokenKeySpecifier),
		fields?: ERC1155TokenFieldPolicy,
	},
	ERC1155TokenAttribute: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ERC1155TokenAttributeKeySpecifier | (() => undefined | ERC1155TokenAttributeKeySpecifier),
		fields?: ERC1155TokenAttributeFieldPolicy,
	},
	ERC1155TokenMetadata: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ERC1155TokenMetadataKeySpecifier | (() => undefined | ERC1155TokenMetadataKeySpecifier),
		fields?: ERC1155TokenMetadataFieldPolicy,
	},
	ERC1155Transfer: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ERC1155TransferKeySpecifier | (() => undefined | ERC1155TransferKeySpecifier),
		fields?: ERC1155TransferFieldPolicy,
	},
	Event: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Transaction: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	_Block_: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | _Block_KeySpecifier | (() => undefined | _Block_KeySpecifier),
		fields?: _Block_FieldPolicy,
	},
	_Meta_: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | _Meta_KeySpecifier | (() => undefined | _Meta_KeySpecifier),
		fields?: _Meta_FieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Event": [
      "ERC1155Transfer"
    ]
  }
};
      export default result;
    