import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    getAsset: 'getAsset' as const
  }
}
export type assetsKeySpecifier = ('assetId' | 'assetName' | 'assetType' | 'assetValue' | 'availableSupply' | 'buyPrice' | 'couponRate' | 'currency' | 'id' | 'maturity' | 'paymentDate' | 'payments' | 'periodicity' | 'sellprice' | 'tokenized' | assetsKeySpecifier)[];
export type assetsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	assetName?: FieldPolicy<any> | FieldReadFunction<any>,
	assetType?: FieldPolicy<any> | FieldReadFunction<any>,
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	buyPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	couponRate?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maturity?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentDate?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	periodicity?: FieldPolicy<any> | FieldReadFunction<any>,
	sellprice?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenized?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_aggregateKeySpecifier = ('aggregate' | 'nodes' | assets_aggregateKeySpecifier)[];
export type assets_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | assets_aggregate_fieldsKeySpecifier)[];
export type assets_aggregate_fieldsFieldPolicy = {
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
export type assets_avg_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_avg_fieldsKeySpecifier)[];
export type assets_avg_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_max_fieldsKeySpecifier = ('assetId' | 'assetName' | 'assetType' | 'assetValue' | 'availableSupply' | 'buyPrice' | 'couponRate' | 'currency' | 'id' | 'maturity' | 'paymentDate' | 'payments' | 'periodicity' | 'sellprice' | assets_max_fieldsKeySpecifier)[];
export type assets_max_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	assetName?: FieldPolicy<any> | FieldReadFunction<any>,
	assetType?: FieldPolicy<any> | FieldReadFunction<any>,
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	buyPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	couponRate?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maturity?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentDate?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	periodicity?: FieldPolicy<any> | FieldReadFunction<any>,
	sellprice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_min_fieldsKeySpecifier = ('assetId' | 'assetName' | 'assetType' | 'assetValue' | 'availableSupply' | 'buyPrice' | 'couponRate' | 'currency' | 'id' | 'maturity' | 'paymentDate' | 'payments' | 'periodicity' | 'sellprice' | assets_min_fieldsKeySpecifier)[];
export type assets_min_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	assetName?: FieldPolicy<any> | FieldReadFunction<any>,
	assetType?: FieldPolicy<any> | FieldReadFunction<any>,
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	buyPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	couponRate?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maturity?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentDate?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	periodicity?: FieldPolicy<any> | FieldReadFunction<any>,
	sellprice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | assets_mutation_responseKeySpecifier)[];
export type assets_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_stddev_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_stddev_fieldsKeySpecifier)[];
export type assets_stddev_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_stddev_pop_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_stddev_pop_fieldsKeySpecifier)[];
export type assets_stddev_pop_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_stddev_samp_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_stddev_samp_fieldsKeySpecifier)[];
export type assets_stddev_samp_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_sum_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_sum_fieldsKeySpecifier)[];
export type assets_sum_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_var_pop_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_var_pop_fieldsKeySpecifier)[];
export type assets_var_pop_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_var_samp_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_var_samp_fieldsKeySpecifier)[];
export type assets_var_samp_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type assets_variance_fieldsKeySpecifier = ('assetValue' | 'availableSupply' | assets_variance_fieldsKeySpecifier)[];
export type assets_variance_fieldsFieldPolicy = {
	assetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mintedKeySpecifier = ('activeSupply' | 'assetId' | 'burned' | 'name' | 'owner' | mintedKeySpecifier)[];
export type mintedFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_aggregateKeySpecifier = ('aggregate' | 'nodes' | minted_aggregateKeySpecifier)[];
export type minted_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | minted_aggregate_fieldsKeySpecifier)[];
export type minted_aggregate_fieldsFieldPolicy = {
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
export type minted_avg_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_avg_fieldsKeySpecifier)[];
export type minted_avg_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_max_fieldsKeySpecifier = ('activeSupply' | 'assetId' | 'burned' | 'name' | 'owner' | minted_max_fieldsKeySpecifier)[];
export type minted_max_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_min_fieldsKeySpecifier = ('activeSupply' | 'assetId' | 'burned' | 'name' | 'owner' | minted_min_fieldsKeySpecifier)[];
export type minted_min_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | minted_mutation_responseKeySpecifier)[];
export type minted_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_stddev_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_stddev_fieldsKeySpecifier)[];
export type minted_stddev_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_stddev_pop_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_stddev_pop_fieldsKeySpecifier)[];
export type minted_stddev_pop_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_stddev_samp_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_stddev_samp_fieldsKeySpecifier)[];
export type minted_stddev_samp_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_sum_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_sum_fieldsKeySpecifier)[];
export type minted_sum_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_var_pop_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_var_pop_fieldsKeySpecifier)[];
export type minted_var_pop_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_var_samp_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_var_samp_fieldsKeySpecifier)[];
export type minted_var_samp_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type minted_variance_fieldsKeySpecifier = ('activeSupply' | 'burned' | minted_variance_fieldsKeySpecifier)[];
export type minted_variance_fieldsFieldPolicy = {
	activeSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	burned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_assets' | 'delete_assets_by_pk' | 'delete_minted' | 'delete_minted_by_pk' | 'delete_token' | 'delete_token_by_pk' | 'delete_user_setting' | 'delete_user_setting_by_pk' | 'delete_users' | 'delete_users_by_pk' | 'insert_assets' | 'insert_assets_one' | 'insert_minted' | 'insert_minted_one' | 'insert_token' | 'insert_token_one' | 'insert_user_setting' | 'insert_user_setting_one' | 'insert_users' | 'insert_users_one' | 'update_assets' | 'update_assets_by_pk' | 'update_assets_many' | 'update_minted' | 'update_minted_by_pk' | 'update_minted_many' | 'update_token' | 'update_token_by_pk' | 'update_token_many' | 'update_user_setting' | 'update_user_setting_by_pk' | 'update_user_setting_many' | 'update_users' | 'update_users_by_pk' | 'update_users_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_minted?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_minted_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_token?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_users?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_assets_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_minted?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_minted_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_token?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_token_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_setting_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_users?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_users_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_assets?: FieldPolicy<any> | FieldReadFunction<any>,
	update_assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_assets_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_minted?: FieldPolicy<any> | FieldReadFunction<any>,
	update_minted_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_minted_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_token?: FieldPolicy<any> | FieldReadFunction<any>,
	update_token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_token_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_setting_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_users_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('assets' | 'assets_aggregate' | 'assets_by_pk' | 'minted' | 'minted_aggregate' | 'minted_by_pk' | 'token' | 'token_aggregate' | 'token_by_pk' | 'user_setting' | 'user_setting_aggregate' | 'user_setting_by_pk' | 'users' | 'users_aggregate' | 'users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	assets_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	minted?: FieldPolicy<any> | FieldReadFunction<any>,
	minted_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	minted_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	token_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('assets' | 'assets_aggregate' | 'assets_by_pk' | 'assets_stream' | 'minted' | 'minted_aggregate' | 'minted_by_pk' | 'minted_stream' | 'token' | 'token_aggregate' | 'token_by_pk' | 'token_stream' | 'user_setting' | 'user_setting_aggregate' | 'user_setting_by_pk' | 'user_setting_stream' | 'users' | 'users_aggregate' | 'users_by_pk' | 'users_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	assets_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	assets_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	assets_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	minted?: FieldPolicy<any> | FieldReadFunction<any>,
	minted_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	minted_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	minted_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	token_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	token_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	token_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_setting_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tokenKeySpecifier = ('assetId' | 'faceValue' | 'id' | 'maturityStamp' | 'minted' | 'name' | 'supply' | 'totalSupply' | tokenKeySpecifier)[];
export type tokenFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	faceValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	minted?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_aggregateKeySpecifier = ('aggregate' | 'nodes' | token_aggregateKeySpecifier)[];
export type token_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | token_aggregate_fieldsKeySpecifier)[];
export type token_aggregate_fieldsFieldPolicy = {
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
export type token_avg_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_avg_fieldsKeySpecifier)[];
export type token_avg_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_max_fieldsKeySpecifier = ('assetId' | 'faceValue' | 'id' | 'maturityStamp' | 'name' | 'supply' | 'totalSupply' | token_max_fieldsKeySpecifier)[];
export type token_max_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	faceValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_min_fieldsKeySpecifier = ('assetId' | 'faceValue' | 'id' | 'maturityStamp' | 'name' | 'supply' | 'totalSupply' | token_min_fieldsKeySpecifier)[];
export type token_min_fieldsFieldPolicy = {
	assetId?: FieldPolicy<any> | FieldReadFunction<any>,
	faceValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | token_mutation_responseKeySpecifier)[];
export type token_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_stddev_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_stddev_fieldsKeySpecifier)[];
export type token_stddev_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_stddev_pop_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_stddev_pop_fieldsKeySpecifier)[];
export type token_stddev_pop_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_stddev_samp_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_stddev_samp_fieldsKeySpecifier)[];
export type token_stddev_samp_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_sum_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_sum_fieldsKeySpecifier)[];
export type token_sum_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_var_pop_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_var_pop_fieldsKeySpecifier)[];
export type token_var_pop_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_var_samp_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_var_samp_fieldsKeySpecifier)[];
export type token_var_samp_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type token_variance_fieldsKeySpecifier = ('maturityStamp' | 'supply' | 'totalSupply' | token_variance_fieldsKeySpecifier)[];
export type token_variance_fieldsFieldPolicy = {
	maturityStamp?: FieldPolicy<any> | FieldReadFunction<any>,
	supply?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_settingKeySpecifier = ('cid' | 'companyName' | 'id' | user_settingKeySpecifier)[];
export type user_settingFieldPolicy = {
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_aggregateKeySpecifier = ('aggregate' | 'nodes' | user_setting_aggregateKeySpecifier)[];
export type user_setting_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | user_setting_aggregate_fieldsKeySpecifier)[];
export type user_setting_aggregate_fieldsFieldPolicy = {
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
export type user_setting_avg_fieldsKeySpecifier = ('id' | user_setting_avg_fieldsKeySpecifier)[];
export type user_setting_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_max_fieldsKeySpecifier = ('cid' | 'companyName' | 'id' | user_setting_max_fieldsKeySpecifier)[];
export type user_setting_max_fieldsFieldPolicy = {
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_min_fieldsKeySpecifier = ('cid' | 'companyName' | 'id' | user_setting_min_fieldsKeySpecifier)[];
export type user_setting_min_fieldsFieldPolicy = {
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | user_setting_mutation_responseKeySpecifier)[];
export type user_setting_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_stddev_fieldsKeySpecifier = ('id' | user_setting_stddev_fieldsKeySpecifier)[];
export type user_setting_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_stddev_pop_fieldsKeySpecifier = ('id' | user_setting_stddev_pop_fieldsKeySpecifier)[];
export type user_setting_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_stddev_samp_fieldsKeySpecifier = ('id' | user_setting_stddev_samp_fieldsKeySpecifier)[];
export type user_setting_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_sum_fieldsKeySpecifier = ('id' | user_setting_sum_fieldsKeySpecifier)[];
export type user_setting_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_var_pop_fieldsKeySpecifier = ('id' | user_setting_var_pop_fieldsKeySpecifier)[];
export type user_setting_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_var_samp_fieldsKeySpecifier = ('id' | user_setting_var_samp_fieldsKeySpecifier)[];
export type user_setting_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_setting_variance_fieldsKeySpecifier = ('id' | user_setting_variance_fieldsKeySpecifier)[];
export type user_setting_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type usersKeySpecifier = ('address' | 'casa' | 'cif' | 'email' | 'id' | 'password' | 'pvtkey' | 'role' | 'segment' | 'username' | usersKeySpecifier)[];
export type usersFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	casa?: FieldPolicy<any> | FieldReadFunction<any>,
	cif?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtkey?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	segment?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
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
export type users_max_fieldsKeySpecifier = ('address' | 'casa' | 'cif' | 'email' | 'id' | 'password' | 'pvtkey' | 'role' | 'segment' | 'username' | users_max_fieldsKeySpecifier)[];
export type users_max_fieldsFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	casa?: FieldPolicy<any> | FieldReadFunction<any>,
	cif?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtkey?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	segment?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_min_fieldsKeySpecifier = ('address' | 'casa' | 'cif' | 'email' | 'id' | 'password' | 'pvtkey' | 'role' | 'segment' | 'username' | users_min_fieldsKeySpecifier)[];
export type users_min_fieldsFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	casa?: FieldPolicy<any> | FieldReadFunction<any>,
	cif?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	pvtkey?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	segment?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type users_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | users_mutation_responseKeySpecifier)[];
export type users_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	assets: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assetsKeySpecifier | (() => undefined | assetsKeySpecifier),
		fields?: assetsFieldPolicy,
	},
	assets_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_aggregateKeySpecifier | (() => undefined | assets_aggregateKeySpecifier),
		fields?: assets_aggregateFieldPolicy,
	},
	assets_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_aggregate_fieldsKeySpecifier | (() => undefined | assets_aggregate_fieldsKeySpecifier),
		fields?: assets_aggregate_fieldsFieldPolicy,
	},
	assets_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_avg_fieldsKeySpecifier | (() => undefined | assets_avg_fieldsKeySpecifier),
		fields?: assets_avg_fieldsFieldPolicy,
	},
	assets_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_max_fieldsKeySpecifier | (() => undefined | assets_max_fieldsKeySpecifier),
		fields?: assets_max_fieldsFieldPolicy,
	},
	assets_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_min_fieldsKeySpecifier | (() => undefined | assets_min_fieldsKeySpecifier),
		fields?: assets_min_fieldsFieldPolicy,
	},
	assets_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_mutation_responseKeySpecifier | (() => undefined | assets_mutation_responseKeySpecifier),
		fields?: assets_mutation_responseFieldPolicy,
	},
	assets_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_stddev_fieldsKeySpecifier | (() => undefined | assets_stddev_fieldsKeySpecifier),
		fields?: assets_stddev_fieldsFieldPolicy,
	},
	assets_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_stddev_pop_fieldsKeySpecifier | (() => undefined | assets_stddev_pop_fieldsKeySpecifier),
		fields?: assets_stddev_pop_fieldsFieldPolicy,
	},
	assets_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_stddev_samp_fieldsKeySpecifier | (() => undefined | assets_stddev_samp_fieldsKeySpecifier),
		fields?: assets_stddev_samp_fieldsFieldPolicy,
	},
	assets_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_sum_fieldsKeySpecifier | (() => undefined | assets_sum_fieldsKeySpecifier),
		fields?: assets_sum_fieldsFieldPolicy,
	},
	assets_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_var_pop_fieldsKeySpecifier | (() => undefined | assets_var_pop_fieldsKeySpecifier),
		fields?: assets_var_pop_fieldsFieldPolicy,
	},
	assets_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_var_samp_fieldsKeySpecifier | (() => undefined | assets_var_samp_fieldsKeySpecifier),
		fields?: assets_var_samp_fieldsFieldPolicy,
	},
	assets_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | assets_variance_fieldsKeySpecifier | (() => undefined | assets_variance_fieldsKeySpecifier),
		fields?: assets_variance_fieldsFieldPolicy,
	},
	minted: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | mintedKeySpecifier | (() => undefined | mintedKeySpecifier),
		fields?: mintedFieldPolicy,
	},
	minted_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_aggregateKeySpecifier | (() => undefined | minted_aggregateKeySpecifier),
		fields?: minted_aggregateFieldPolicy,
	},
	minted_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_aggregate_fieldsKeySpecifier | (() => undefined | minted_aggregate_fieldsKeySpecifier),
		fields?: minted_aggregate_fieldsFieldPolicy,
	},
	minted_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_avg_fieldsKeySpecifier | (() => undefined | minted_avg_fieldsKeySpecifier),
		fields?: minted_avg_fieldsFieldPolicy,
	},
	minted_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_max_fieldsKeySpecifier | (() => undefined | minted_max_fieldsKeySpecifier),
		fields?: minted_max_fieldsFieldPolicy,
	},
	minted_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_min_fieldsKeySpecifier | (() => undefined | minted_min_fieldsKeySpecifier),
		fields?: minted_min_fieldsFieldPolicy,
	},
	minted_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_mutation_responseKeySpecifier | (() => undefined | minted_mutation_responseKeySpecifier),
		fields?: minted_mutation_responseFieldPolicy,
	},
	minted_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_stddev_fieldsKeySpecifier | (() => undefined | minted_stddev_fieldsKeySpecifier),
		fields?: minted_stddev_fieldsFieldPolicy,
	},
	minted_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_stddev_pop_fieldsKeySpecifier | (() => undefined | minted_stddev_pop_fieldsKeySpecifier),
		fields?: minted_stddev_pop_fieldsFieldPolicy,
	},
	minted_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_stddev_samp_fieldsKeySpecifier | (() => undefined | minted_stddev_samp_fieldsKeySpecifier),
		fields?: minted_stddev_samp_fieldsFieldPolicy,
	},
	minted_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_sum_fieldsKeySpecifier | (() => undefined | minted_sum_fieldsKeySpecifier),
		fields?: minted_sum_fieldsFieldPolicy,
	},
	minted_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_var_pop_fieldsKeySpecifier | (() => undefined | minted_var_pop_fieldsKeySpecifier),
		fields?: minted_var_pop_fieldsFieldPolicy,
	},
	minted_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_var_samp_fieldsKeySpecifier | (() => undefined | minted_var_samp_fieldsKeySpecifier),
		fields?: minted_var_samp_fieldsFieldPolicy,
	},
	minted_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | minted_variance_fieldsKeySpecifier | (() => undefined | minted_variance_fieldsKeySpecifier),
		fields?: minted_variance_fieldsFieldPolicy,
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
	token: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | tokenKeySpecifier | (() => undefined | tokenKeySpecifier),
		fields?: tokenFieldPolicy,
	},
	token_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_aggregateKeySpecifier | (() => undefined | token_aggregateKeySpecifier),
		fields?: token_aggregateFieldPolicy,
	},
	token_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_aggregate_fieldsKeySpecifier | (() => undefined | token_aggregate_fieldsKeySpecifier),
		fields?: token_aggregate_fieldsFieldPolicy,
	},
	token_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_avg_fieldsKeySpecifier | (() => undefined | token_avg_fieldsKeySpecifier),
		fields?: token_avg_fieldsFieldPolicy,
	},
	token_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_max_fieldsKeySpecifier | (() => undefined | token_max_fieldsKeySpecifier),
		fields?: token_max_fieldsFieldPolicy,
	},
	token_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_min_fieldsKeySpecifier | (() => undefined | token_min_fieldsKeySpecifier),
		fields?: token_min_fieldsFieldPolicy,
	},
	token_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_mutation_responseKeySpecifier | (() => undefined | token_mutation_responseKeySpecifier),
		fields?: token_mutation_responseFieldPolicy,
	},
	token_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_stddev_fieldsKeySpecifier | (() => undefined | token_stddev_fieldsKeySpecifier),
		fields?: token_stddev_fieldsFieldPolicy,
	},
	token_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_stddev_pop_fieldsKeySpecifier | (() => undefined | token_stddev_pop_fieldsKeySpecifier),
		fields?: token_stddev_pop_fieldsFieldPolicy,
	},
	token_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_stddev_samp_fieldsKeySpecifier | (() => undefined | token_stddev_samp_fieldsKeySpecifier),
		fields?: token_stddev_samp_fieldsFieldPolicy,
	},
	token_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_sum_fieldsKeySpecifier | (() => undefined | token_sum_fieldsKeySpecifier),
		fields?: token_sum_fieldsFieldPolicy,
	},
	token_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_var_pop_fieldsKeySpecifier | (() => undefined | token_var_pop_fieldsKeySpecifier),
		fields?: token_var_pop_fieldsFieldPolicy,
	},
	token_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_var_samp_fieldsKeySpecifier | (() => undefined | token_var_samp_fieldsKeySpecifier),
		fields?: token_var_samp_fieldsFieldPolicy,
	},
	token_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | token_variance_fieldsKeySpecifier | (() => undefined | token_variance_fieldsKeySpecifier),
		fields?: token_variance_fieldsFieldPolicy,
	},
	user_setting: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_settingKeySpecifier | (() => undefined | user_settingKeySpecifier),
		fields?: user_settingFieldPolicy,
	},
	user_setting_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_aggregateKeySpecifier | (() => undefined | user_setting_aggregateKeySpecifier),
		fields?: user_setting_aggregateFieldPolicy,
	},
	user_setting_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_aggregate_fieldsKeySpecifier | (() => undefined | user_setting_aggregate_fieldsKeySpecifier),
		fields?: user_setting_aggregate_fieldsFieldPolicy,
	},
	user_setting_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_avg_fieldsKeySpecifier | (() => undefined | user_setting_avg_fieldsKeySpecifier),
		fields?: user_setting_avg_fieldsFieldPolicy,
	},
	user_setting_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_max_fieldsKeySpecifier | (() => undefined | user_setting_max_fieldsKeySpecifier),
		fields?: user_setting_max_fieldsFieldPolicy,
	},
	user_setting_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_min_fieldsKeySpecifier | (() => undefined | user_setting_min_fieldsKeySpecifier),
		fields?: user_setting_min_fieldsFieldPolicy,
	},
	user_setting_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_mutation_responseKeySpecifier | (() => undefined | user_setting_mutation_responseKeySpecifier),
		fields?: user_setting_mutation_responseFieldPolicy,
	},
	user_setting_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_stddev_fieldsKeySpecifier | (() => undefined | user_setting_stddev_fieldsKeySpecifier),
		fields?: user_setting_stddev_fieldsFieldPolicy,
	},
	user_setting_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_stddev_pop_fieldsKeySpecifier | (() => undefined | user_setting_stddev_pop_fieldsKeySpecifier),
		fields?: user_setting_stddev_pop_fieldsFieldPolicy,
	},
	user_setting_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_stddev_samp_fieldsKeySpecifier | (() => undefined | user_setting_stddev_samp_fieldsKeySpecifier),
		fields?: user_setting_stddev_samp_fieldsFieldPolicy,
	},
	user_setting_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_sum_fieldsKeySpecifier | (() => undefined | user_setting_sum_fieldsKeySpecifier),
		fields?: user_setting_sum_fieldsFieldPolicy,
	},
	user_setting_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_var_pop_fieldsKeySpecifier | (() => undefined | user_setting_var_pop_fieldsKeySpecifier),
		fields?: user_setting_var_pop_fieldsFieldPolicy,
	},
	user_setting_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_var_samp_fieldsKeySpecifier | (() => undefined | user_setting_var_samp_fieldsKeySpecifier),
		fields?: user_setting_var_samp_fieldsFieldPolicy,
	},
	user_setting_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | user_setting_variance_fieldsKeySpecifier | (() => undefined | user_setting_variance_fieldsKeySpecifier),
		fields?: user_setting_variance_fieldsFieldPolicy,
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
    