import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    GetUsers: 'GetUsers' as const,
    GetUser: 'GetUser' as const,
    getClaimedTokenAmounts: 'getClaimedTokenAmounts' as const,
    getClaimedToken: 'getClaimedToken' as const
  },
  Mutation: {
    insertTransactionLog: 'insertTransactionLog' as const,
    updateSqsMessageId: 'updateSqsMessageId' as const,
    UpsertWeb3User: 'UpsertWeb3User' as const,
    updateUserToken: 'updateUserToken' as const,
    createUser: 'createUser' as const,
    claimToken: 'claimToken' as const
  },
  Fragment: {
    UserFields: 'UserFields' as const
  }
}
export type claimed_tokensKeySpecifier = ('amounts' | 'contract_address' | 'nft_type' | 'token' | 'token_id' | 'transactions' | 'transactions_aggregate' | 'user_address' | claimed_tokensKeySpecifier)[];
export type claimed_tokensFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_aggregateKeySpecifier = ('aggregate' | 'nodes' | claimed_tokens_aggregateKeySpecifier)[];
export type claimed_tokens_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | claimed_tokens_aggregate_fieldsKeySpecifier)[];
export type claimed_tokens_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_avg_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_avg_fieldsKeySpecifier)[];
export type claimed_tokens_avg_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_max_fieldsKeySpecifier = ('amounts' | 'contract_address' | 'nft_type' | 'token_id' | 'user_address' | claimed_tokens_max_fieldsKeySpecifier)[];
export type claimed_tokens_max_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_min_fieldsKeySpecifier = ('amounts' | 'contract_address' | 'nft_type' | 'token_id' | 'user_address' | claimed_tokens_min_fieldsKeySpecifier)[];
export type claimed_tokens_min_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | claimed_tokens_mutation_responseKeySpecifier)[];
export type claimed_tokens_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_stddev_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_stddev_fieldsKeySpecifier)[];
export type claimed_tokens_stddev_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_stddev_pop_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_stddev_pop_fieldsKeySpecifier)[];
export type claimed_tokens_stddev_pop_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_stddev_samp_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_stddev_samp_fieldsKeySpecifier)[];
export type claimed_tokens_stddev_samp_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_sum_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_sum_fieldsKeySpecifier)[];
export type claimed_tokens_sum_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_var_pop_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_var_pop_fieldsKeySpecifier)[];
export type claimed_tokens_var_pop_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_var_samp_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_var_samp_fieldsKeySpecifier)[];
export type claimed_tokens_var_samp_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type claimed_tokens_variance_fieldsKeySpecifier = ('amounts' | 'token_id' | claimed_tokens_variance_fieldsKeySpecifier)[];
export type claimed_tokens_variance_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_claimed_tokens' | 'delete_claimed_tokens_by_pk' | 'delete_tokens' | 'delete_tokens_by_pk' | 'delete_transactions' | 'delete_transactions_by_pk' | 'delete_users' | 'delete_users_by_pk' | 'insert_claimed_tokens' | 'insert_claimed_tokens_one' | 'insert_tokens' | 'insert_tokens_one' | 'insert_transactions' | 'insert_transactions_one' | 'insert_users' | 'insert_users_one' | 'update_claimed_tokens' | 'update_claimed_tokens_by_pk' | 'update_claimed_tokens_many' | 'update_tokens' | 'update_tokens_by_pk' | 'update_tokens_many' | 'update_transactions' | 'update_transactions_by_pk' | 'update_transactions_many' | 'update_users' | 'update_users_by_pk' | 'update_users_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_claimed_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_claimed_tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_transactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_users?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_claimed_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_claimed_tokens_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_tokens_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_transactions_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_users?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_users_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_claimed_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	update_claimed_tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_claimed_tokens_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	update_tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_tokens_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	update_transactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_transactions_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('claimed_tokens' | 'claimed_tokens_aggregate' | 'claimed_tokens_by_pk' | 'tokens' | 'tokens_aggregate' | 'tokens_by_pk' | 'transactions' | 'transactions_aggregate' | 'transactions_by_pk' | 'users' | 'users_aggregate' | 'users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	claimed_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	claimed_tokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	claimed_tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('claimed_tokens' | 'claimed_tokens_aggregate' | 'claimed_tokens_by_pk' | 'claimed_tokens_stream' | 'tokens' | 'tokens_aggregate' | 'tokens_by_pk' | 'tokens_stream' | 'transactions' | 'transactions_aggregate' | 'transactions_by_pk' | 'transactions_stream' | 'users' | 'users_aggregate' | 'users_by_pk' | 'users_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	claimed_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	claimed_tokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	claimed_tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	claimed_tokens_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokensKeySpecifier = ('claimed_tokens' | 'claimed_tokens_aggregate' | 'contract_address' | 'description' | 'json_cid' | 'name' | 'nft_type' | 'price' | 'supply' | 'token_id' | tokensKeySpecifier)[];
export type tokensFieldPolicy = {
	claimed_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	claimed_tokens_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	json_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_aggregateKeySpecifier = ('aggregate' | 'nodes' | tokens_aggregateKeySpecifier)[];
export type tokens_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | tokens_aggregate_fieldsKeySpecifier)[];
export type tokens_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_avg_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_avg_fieldsKeySpecifier)[];
export type tokens_avg_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_max_fieldsKeySpecifier = ('contract_address' | 'description' | 'json_cid' | 'name' | 'nft_type' | 'price' | 'supply' | 'token_id' | tokens_max_fieldsKeySpecifier)[];
export type tokens_max_fieldsFieldPolicy = {
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	json_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_min_fieldsKeySpecifier = ('contract_address' | 'description' | 'json_cid' | 'name' | 'nft_type' | 'price' | 'supply' | 'token_id' | tokens_min_fieldsKeySpecifier)[];
export type tokens_min_fieldsFieldPolicy = {
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	json_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | tokens_mutation_responseKeySpecifier)[];
export type tokens_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_stddev_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_stddev_fieldsKeySpecifier)[];
export type tokens_stddev_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_stddev_pop_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_stddev_pop_fieldsKeySpecifier)[];
export type tokens_stddev_pop_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_stddev_samp_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_stddev_samp_fieldsKeySpecifier)[];
export type tokens_stddev_samp_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_sum_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_sum_fieldsKeySpecifier)[];
export type tokens_sum_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_var_pop_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_var_pop_fieldsKeySpecifier)[];
export type tokens_var_pop_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_var_samp_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_var_samp_fieldsKeySpecifier)[];
export type tokens_var_samp_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokens_variance_fieldsKeySpecifier = ('price' | 'supply' | 'token_id' | tokens_variance_fieldsKeySpecifier)[];
export type tokens_variance_fieldsFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactionsKeySpecifier = ('amounts' | 'buyer_address' | 'claimed_token' | 'contract_address' | 'created_at' | 'crypto_type' | 'nft_type' | 'payment_gateway_id' | 'payment_type' | 'sqs_message_id' | 'status' | 'token_id' | 'tx_hash' | 'updated_at' | 'uuid' | transactionsKeySpecifier)[];
export type transactionsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	buyer_address?: FieldPolicy<any> | FieldReadFunction<any>,
	claimed_token?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crypto_type?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_gateway_id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sqs_message_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	uuid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_aggregateKeySpecifier = ('aggregate' | 'nodes' | transactions_aggregateKeySpecifier)[];
export type transactions_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | transactions_aggregate_fieldsKeySpecifier)[];
export type transactions_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_avg_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_avg_fieldsKeySpecifier)[];
export type transactions_avg_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_max_fieldsKeySpecifier = ('amounts' | 'buyer_address' | 'contract_address' | 'created_at' | 'crypto_type' | 'nft_type' | 'payment_gateway_id' | 'payment_type' | 'sqs_message_id' | 'status' | 'token_id' | 'tx_hash' | 'updated_at' | 'uuid' | transactions_max_fieldsKeySpecifier)[];
export type transactions_max_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	buyer_address?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crypto_type?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_gateway_id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sqs_message_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	uuid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_min_fieldsKeySpecifier = ('amounts' | 'buyer_address' | 'contract_address' | 'created_at' | 'crypto_type' | 'nft_type' | 'payment_gateway_id' | 'payment_type' | 'sqs_message_id' | 'status' | 'token_id' | 'tx_hash' | 'updated_at' | 'uuid' | transactions_min_fieldsKeySpecifier)[];
export type transactions_min_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	buyer_address?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	crypto_type?: FieldPolicy<any> | FieldReadFunction<any>,
	nft_type?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_gateway_id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sqs_message_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	uuid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | transactions_mutation_responseKeySpecifier)[];
export type transactions_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_stddev_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_stddev_fieldsKeySpecifier)[];
export type transactions_stddev_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_stddev_pop_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_stddev_pop_fieldsKeySpecifier)[];
export type transactions_stddev_pop_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_stddev_samp_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_stddev_samp_fieldsKeySpecifier)[];
export type transactions_stddev_samp_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_sum_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_sum_fieldsKeySpecifier)[];
export type transactions_sum_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_var_pop_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_var_pop_fieldsKeySpecifier)[];
export type transactions_var_pop_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_var_samp_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_var_samp_fieldsKeySpecifier)[];
export type transactions_var_samp_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type transactions_variance_fieldsKeySpecifier = ('amounts' | 'token_id' | transactions_variance_fieldsKeySpecifier)[];
export type transactions_variance_fieldsFieldPolicy = {
	amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type usersKeySpecifier = ('city' | 'country' | 'dob' | 'email' | 'first_name' | 'last_name' | 'mobile' | 'user_address' | usersKeySpecifier)[];
export type usersFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	mobile?: FieldPolicy<any> | FieldReadFunction<any>,
	user_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_aggregateKeySpecifier = ('aggregate' | 'nodes' | users_aggregateKeySpecifier)[];
export type users_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | users_aggregate_fieldsKeySpecifier)[];
export type users_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_max_fieldsKeySpecifier = ('city' | 'country' | 'dob' | 'email' | 'first_name' | 'last_name' | 'mobile' | 'user_address' | users_max_fieldsKeySpecifier)[];
export type users_max_fieldsFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	mobile?: FieldPolicy<any> | FieldReadFunction<any>,
	user_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_min_fieldsKeySpecifier = ('city' | 'country' | 'dob' | 'email' | 'first_name' | 'last_name' | 'mobile' | 'user_address' | users_min_fieldsKeySpecifier)[];
export type users_min_fieldsFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	dob?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	mobile?: FieldPolicy<any> | FieldReadFunction<any>,
	user_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | users_mutation_responseKeySpecifier)[];
export type users_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	claimed_tokens: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokensKeySpecifier | (() => undefined | claimed_tokensKeySpecifier),
		fields?: claimed_tokensFieldPolicy,
	},
	claimed_tokens_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_aggregateKeySpecifier | (() => undefined | claimed_tokens_aggregateKeySpecifier),
		fields?: claimed_tokens_aggregateFieldPolicy,
	},
	claimed_tokens_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_aggregate_fieldsKeySpecifier | (() => undefined | claimed_tokens_aggregate_fieldsKeySpecifier),
		fields?: claimed_tokens_aggregate_fieldsFieldPolicy,
	},
	claimed_tokens_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_avg_fieldsKeySpecifier | (() => undefined | claimed_tokens_avg_fieldsKeySpecifier),
		fields?: claimed_tokens_avg_fieldsFieldPolicy,
	},
	claimed_tokens_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_max_fieldsKeySpecifier | (() => undefined | claimed_tokens_max_fieldsKeySpecifier),
		fields?: claimed_tokens_max_fieldsFieldPolicy,
	},
	claimed_tokens_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_min_fieldsKeySpecifier | (() => undefined | claimed_tokens_min_fieldsKeySpecifier),
		fields?: claimed_tokens_min_fieldsFieldPolicy,
	},
	claimed_tokens_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_mutation_responseKeySpecifier | (() => undefined | claimed_tokens_mutation_responseKeySpecifier),
		fields?: claimed_tokens_mutation_responseFieldPolicy,
	},
	claimed_tokens_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_stddev_fieldsKeySpecifier | (() => undefined | claimed_tokens_stddev_fieldsKeySpecifier),
		fields?: claimed_tokens_stddev_fieldsFieldPolicy,
	},
	claimed_tokens_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_stddev_pop_fieldsKeySpecifier | (() => undefined | claimed_tokens_stddev_pop_fieldsKeySpecifier),
		fields?: claimed_tokens_stddev_pop_fieldsFieldPolicy,
	},
	claimed_tokens_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_stddev_samp_fieldsKeySpecifier | (() => undefined | claimed_tokens_stddev_samp_fieldsKeySpecifier),
		fields?: claimed_tokens_stddev_samp_fieldsFieldPolicy,
	},
	claimed_tokens_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_sum_fieldsKeySpecifier | (() => undefined | claimed_tokens_sum_fieldsKeySpecifier),
		fields?: claimed_tokens_sum_fieldsFieldPolicy,
	},
	claimed_tokens_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_var_pop_fieldsKeySpecifier | (() => undefined | claimed_tokens_var_pop_fieldsKeySpecifier),
		fields?: claimed_tokens_var_pop_fieldsFieldPolicy,
	},
	claimed_tokens_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_var_samp_fieldsKeySpecifier | (() => undefined | claimed_tokens_var_samp_fieldsKeySpecifier),
		fields?: claimed_tokens_var_samp_fieldsFieldPolicy,
	},
	claimed_tokens_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | claimed_tokens_variance_fieldsKeySpecifier | (() => undefined | claimed_tokens_variance_fieldsKeySpecifier),
		fields?: claimed_tokens_variance_fieldsFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	tokens: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokensKeySpecifier | (() => undefined | tokensKeySpecifier),
		fields?: tokensFieldPolicy,
	},
	tokens_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_aggregateKeySpecifier | (() => undefined | tokens_aggregateKeySpecifier),
		fields?: tokens_aggregateFieldPolicy,
	},
	tokens_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_aggregate_fieldsKeySpecifier | (() => undefined | tokens_aggregate_fieldsKeySpecifier),
		fields?: tokens_aggregate_fieldsFieldPolicy,
	},
	tokens_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_avg_fieldsKeySpecifier | (() => undefined | tokens_avg_fieldsKeySpecifier),
		fields?: tokens_avg_fieldsFieldPolicy,
	},
	tokens_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_max_fieldsKeySpecifier | (() => undefined | tokens_max_fieldsKeySpecifier),
		fields?: tokens_max_fieldsFieldPolicy,
	},
	tokens_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_min_fieldsKeySpecifier | (() => undefined | tokens_min_fieldsKeySpecifier),
		fields?: tokens_min_fieldsFieldPolicy,
	},
	tokens_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_mutation_responseKeySpecifier | (() => undefined | tokens_mutation_responseKeySpecifier),
		fields?: tokens_mutation_responseFieldPolicy,
	},
	tokens_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_stddev_fieldsKeySpecifier | (() => undefined | tokens_stddev_fieldsKeySpecifier),
		fields?: tokens_stddev_fieldsFieldPolicy,
	},
	tokens_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_stddev_pop_fieldsKeySpecifier | (() => undefined | tokens_stddev_pop_fieldsKeySpecifier),
		fields?: tokens_stddev_pop_fieldsFieldPolicy,
	},
	tokens_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_stddev_samp_fieldsKeySpecifier | (() => undefined | tokens_stddev_samp_fieldsKeySpecifier),
		fields?: tokens_stddev_samp_fieldsFieldPolicy,
	},
	tokens_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_sum_fieldsKeySpecifier | (() => undefined | tokens_sum_fieldsKeySpecifier),
		fields?: tokens_sum_fieldsFieldPolicy,
	},
	tokens_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_var_pop_fieldsKeySpecifier | (() => undefined | tokens_var_pop_fieldsKeySpecifier),
		fields?: tokens_var_pop_fieldsFieldPolicy,
	},
	tokens_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_var_samp_fieldsKeySpecifier | (() => undefined | tokens_var_samp_fieldsKeySpecifier),
		fields?: tokens_var_samp_fieldsFieldPolicy,
	},
	tokens_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokens_variance_fieldsKeySpecifier | (() => undefined | tokens_variance_fieldsKeySpecifier),
		fields?: tokens_variance_fieldsFieldPolicy,
	},
	transactions: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactionsKeySpecifier | (() => undefined | transactionsKeySpecifier),
		fields?: transactionsFieldPolicy,
	},
	transactions_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_aggregateKeySpecifier | (() => undefined | transactions_aggregateKeySpecifier),
		fields?: transactions_aggregateFieldPolicy,
	},
	transactions_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_aggregate_fieldsKeySpecifier | (() => undefined | transactions_aggregate_fieldsKeySpecifier),
		fields?: transactions_aggregate_fieldsFieldPolicy,
	},
	transactions_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_avg_fieldsKeySpecifier | (() => undefined | transactions_avg_fieldsKeySpecifier),
		fields?: transactions_avg_fieldsFieldPolicy,
	},
	transactions_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_max_fieldsKeySpecifier | (() => undefined | transactions_max_fieldsKeySpecifier),
		fields?: transactions_max_fieldsFieldPolicy,
	},
	transactions_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_min_fieldsKeySpecifier | (() => undefined | transactions_min_fieldsKeySpecifier),
		fields?: transactions_min_fieldsFieldPolicy,
	},
	transactions_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_mutation_responseKeySpecifier | (() => undefined | transactions_mutation_responseKeySpecifier),
		fields?: transactions_mutation_responseFieldPolicy,
	},
	transactions_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_stddev_fieldsKeySpecifier | (() => undefined | transactions_stddev_fieldsKeySpecifier),
		fields?: transactions_stddev_fieldsFieldPolicy,
	},
	transactions_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_stddev_pop_fieldsKeySpecifier | (() => undefined | transactions_stddev_pop_fieldsKeySpecifier),
		fields?: transactions_stddev_pop_fieldsFieldPolicy,
	},
	transactions_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_stddev_samp_fieldsKeySpecifier | (() => undefined | transactions_stddev_samp_fieldsKeySpecifier),
		fields?: transactions_stddev_samp_fieldsFieldPolicy,
	},
	transactions_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_sum_fieldsKeySpecifier | (() => undefined | transactions_sum_fieldsKeySpecifier),
		fields?: transactions_sum_fieldsFieldPolicy,
	},
	transactions_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_var_pop_fieldsKeySpecifier | (() => undefined | transactions_var_pop_fieldsKeySpecifier),
		fields?: transactions_var_pop_fieldsFieldPolicy,
	},
	transactions_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_var_samp_fieldsKeySpecifier | (() => undefined | transactions_var_samp_fieldsKeySpecifier),
		fields?: transactions_var_samp_fieldsFieldPolicy,
	},
	transactions_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | transactions_variance_fieldsKeySpecifier | (() => undefined | transactions_variance_fieldsKeySpecifier),
		fields?: transactions_variance_fieldsFieldPolicy,
	},
	users: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | usersKeySpecifier | (() => undefined | usersKeySpecifier),
		fields?: usersFieldPolicy,
	},
	users_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | users_aggregateKeySpecifier | (() => undefined | users_aggregateKeySpecifier),
		fields?: users_aggregateFieldPolicy,
	},
	users_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | users_aggregate_fieldsKeySpecifier | (() => undefined | users_aggregate_fieldsKeySpecifier),
		fields?: users_aggregate_fieldsFieldPolicy,
	},
	users_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | users_max_fieldsKeySpecifier | (() => undefined | users_max_fieldsKeySpecifier),
		fields?: users_max_fieldsFieldPolicy,
	},
	users_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | users_min_fieldsKeySpecifier | (() => undefined | users_min_fieldsKeySpecifier),
		fields?: users_min_fieldsFieldPolicy,
	},
	users_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | users_mutation_responseKeySpecifier | (() => undefined | users_mutation_responseKeySpecifier),
		fields?: users_mutation_responseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    