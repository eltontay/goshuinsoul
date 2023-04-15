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
  date: string;
  numeric: number;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Int']>;
  _gt: InputMaybe<Scalars['Int']>;
  _gte: InputMaybe<Scalars['Int']>;
  _in: InputMaybe<Array<Scalars['Int']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Int']>;
  _lte: InputMaybe<Scalars['Int']>;
  _neq: InputMaybe<Scalars['Int']>;
  _nin: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "claimed_tokens" */
export type Claimed_Tokens = {
  __typename: 'claimed_tokens';
  amounts: Scalars['numeric'];
  contract_address: Maybe<Scalars['String']>;
  nft_type: Scalars['String'];
  /** An object relationship */
  token: Maybe<Tokens>;
  token_id: Scalars['numeric'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  user_address: Scalars['String'];
};


/** columns and relationships of "claimed_tokens" */
export type Claimed_TokensTransactionsArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "claimed_tokens" */
export type Claimed_TokensTransactions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "claimed_tokens" */
export type Claimed_Tokens_Aggregate = {
  __typename: 'claimed_tokens_aggregate';
  aggregate: Maybe<Claimed_Tokens_Aggregate_Fields>;
  nodes: Array<Claimed_Tokens>;
};

export type Claimed_Tokens_Aggregate_Bool_Exp = {
  count: InputMaybe<Claimed_Tokens_Aggregate_Bool_Exp_Count>;
};

export type Claimed_Tokens_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Claimed_Tokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "claimed_tokens" */
export type Claimed_Tokens_Aggregate_Fields = {
  __typename: 'claimed_tokens_aggregate_fields';
  avg: Maybe<Claimed_Tokens_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Claimed_Tokens_Max_Fields>;
  min: Maybe<Claimed_Tokens_Min_Fields>;
  stddev: Maybe<Claimed_Tokens_Stddev_Fields>;
  stddev_pop: Maybe<Claimed_Tokens_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Claimed_Tokens_Stddev_Samp_Fields>;
  sum: Maybe<Claimed_Tokens_Sum_Fields>;
  var_pop: Maybe<Claimed_Tokens_Var_Pop_Fields>;
  var_samp: Maybe<Claimed_Tokens_Var_Samp_Fields>;
  variance: Maybe<Claimed_Tokens_Variance_Fields>;
};


/** aggregate fields of "claimed_tokens" */
export type Claimed_Tokens_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "claimed_tokens" */
export type Claimed_Tokens_Aggregate_Order_By = {
  avg: InputMaybe<Claimed_Tokens_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Claimed_Tokens_Max_Order_By>;
  min: InputMaybe<Claimed_Tokens_Min_Order_By>;
  stddev: InputMaybe<Claimed_Tokens_Stddev_Order_By>;
  stddev_pop: InputMaybe<Claimed_Tokens_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Claimed_Tokens_Stddev_Samp_Order_By>;
  sum: InputMaybe<Claimed_Tokens_Sum_Order_By>;
  var_pop: InputMaybe<Claimed_Tokens_Var_Pop_Order_By>;
  var_samp: InputMaybe<Claimed_Tokens_Var_Samp_Order_By>;
  variance: InputMaybe<Claimed_Tokens_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "claimed_tokens" */
export type Claimed_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Claimed_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Claimed_Tokens_On_Conflict>;
};

/** aggregate avg on columns */
export type Claimed_Tokens_Avg_Fields = {
  __typename: 'claimed_tokens_avg_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Avg_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "claimed_tokens". All fields are combined with a logical 'AND'. */
export type Claimed_Tokens_Bool_Exp = {
  _and: InputMaybe<Array<Claimed_Tokens_Bool_Exp>>;
  _not: InputMaybe<Claimed_Tokens_Bool_Exp>;
  _or: InputMaybe<Array<Claimed_Tokens_Bool_Exp>>;
  amounts: InputMaybe<Numeric_Comparison_Exp>;
  contract_address: InputMaybe<String_Comparison_Exp>;
  nft_type: InputMaybe<String_Comparison_Exp>;
  token: InputMaybe<Tokens_Bool_Exp>;
  token_id: InputMaybe<Numeric_Comparison_Exp>;
  transactions: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  user_address: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "claimed_tokens" */
export enum Claimed_Tokens_Constraint {
  /** unique or primary key constraint on columns "user_address", "token_id", "nft_type" */
  ClaimedTokensPkey = 'claimed_tokens_pkey'
}

/** input type for incrementing numeric columns in table "claimed_tokens" */
export type Claimed_Tokens_Inc_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  token_id: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "claimed_tokens" */
export type Claimed_Tokens_Insert_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  contract_address: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  token: InputMaybe<Tokens_Obj_Rel_Insert_Input>;
  token_id: InputMaybe<Scalars['numeric']>;
  transactions: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  user_address: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Claimed_Tokens_Max_Fields = {
  __typename: 'claimed_tokens_max_fields';
  amounts: Maybe<Scalars['numeric']>;
  contract_address: Maybe<Scalars['String']>;
  nft_type: Maybe<Scalars['String']>;
  token_id: Maybe<Scalars['numeric']>;
  user_address: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Max_Order_By = {
  amounts: InputMaybe<Order_By>;
  contract_address: InputMaybe<Order_By>;
  nft_type: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
  user_address: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Claimed_Tokens_Min_Fields = {
  __typename: 'claimed_tokens_min_fields';
  amounts: Maybe<Scalars['numeric']>;
  contract_address: Maybe<Scalars['String']>;
  nft_type: Maybe<Scalars['String']>;
  token_id: Maybe<Scalars['numeric']>;
  user_address: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Min_Order_By = {
  amounts: InputMaybe<Order_By>;
  contract_address: InputMaybe<Order_By>;
  nft_type: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
  user_address: InputMaybe<Order_By>;
};

/** response of any mutation on the table "claimed_tokens" */
export type Claimed_Tokens_Mutation_Response = {
  __typename: 'claimed_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Claimed_Tokens>;
};

/** input type for inserting object relation for remote table "claimed_tokens" */
export type Claimed_Tokens_Obj_Rel_Insert_Input = {
  data: Claimed_Tokens_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Claimed_Tokens_On_Conflict>;
};

/** on_conflict condition type for table "claimed_tokens" */
export type Claimed_Tokens_On_Conflict = {
  constraint: Claimed_Tokens_Constraint;
  update_columns: Array<Claimed_Tokens_Update_Column>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "claimed_tokens". */
export type Claimed_Tokens_Order_By = {
  amounts: InputMaybe<Order_By>;
  contract_address: InputMaybe<Order_By>;
  nft_type: InputMaybe<Order_By>;
  token: InputMaybe<Tokens_Order_By>;
  token_id: InputMaybe<Order_By>;
  transactions_aggregate: InputMaybe<Transactions_Aggregate_Order_By>;
  user_address: InputMaybe<Order_By>;
};

/** primary key columns input for table: claimed_tokens */
export type Claimed_Tokens_Pk_Columns_Input = {
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
  user_address: Scalars['String'];
};

/** select columns of table "claimed_tokens" */
export enum Claimed_Tokens_Select_Column {
  /** column name */
  Amounts = 'amounts',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UserAddress = 'user_address'
}

/** input type for updating data in table "claimed_tokens" */
export type Claimed_Tokens_Set_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  contract_address: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  token_id: InputMaybe<Scalars['numeric']>;
  user_address: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Claimed_Tokens_Stddev_Fields = {
  __typename: 'claimed_tokens_stddev_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Stddev_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Claimed_Tokens_Stddev_Pop_Fields = {
  __typename: 'claimed_tokens_stddev_pop_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Stddev_Pop_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Claimed_Tokens_Stddev_Samp_Fields = {
  __typename: 'claimed_tokens_stddev_samp_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Stddev_Samp_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "claimed_tokens" */
export type Claimed_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Claimed_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Claimed_Tokens_Stream_Cursor_Value_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  contract_address: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  token_id: InputMaybe<Scalars['numeric']>;
  user_address: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Claimed_Tokens_Sum_Fields = {
  __typename: 'claimed_tokens_sum_fields';
  amounts: Maybe<Scalars['numeric']>;
  token_id: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Sum_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** update columns of table "claimed_tokens" */
export enum Claimed_Tokens_Update_Column {
  /** column name */
  Amounts = 'amounts',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UserAddress = 'user_address'
}

export type Claimed_Tokens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Claimed_Tokens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Claimed_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Claimed_Tokens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Claimed_Tokens_Var_Pop_Fields = {
  __typename: 'claimed_tokens_var_pop_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Var_Pop_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Claimed_Tokens_Var_Samp_Fields = {
  __typename: 'claimed_tokens_var_samp_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Var_Samp_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Claimed_Tokens_Variance_Fields = {
  __typename: 'claimed_tokens_variance_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "claimed_tokens" */
export type Claimed_Tokens_Variance_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq: InputMaybe<Scalars['date']>;
  _gt: InputMaybe<Scalars['date']>;
  _gte: InputMaybe<Scalars['date']>;
  _in: InputMaybe<Array<Scalars['date']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['date']>;
  _lte: InputMaybe<Scalars['date']>;
  _neq: InputMaybe<Scalars['date']>;
  _nin: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "claimed_tokens" */
  delete_claimed_tokens: Maybe<Claimed_Tokens_Mutation_Response>;
  /** delete single row from the table: "claimed_tokens" */
  delete_claimed_tokens_by_pk: Maybe<Claimed_Tokens>;
  /** delete data from the table: "tokens" */
  delete_tokens: Maybe<Tokens_Mutation_Response>;
  /** delete single row from the table: "tokens" */
  delete_tokens_by_pk: Maybe<Tokens>;
  /** delete data from the table: "transactions" */
  delete_transactions: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk: Maybe<Transactions>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "claimed_tokens" */
  insert_claimed_tokens: Maybe<Claimed_Tokens_Mutation_Response>;
  /** insert a single row into the table: "claimed_tokens" */
  insert_claimed_tokens_one: Maybe<Claimed_Tokens>;
  /** insert data into the table: "tokens" */
  insert_tokens: Maybe<Tokens_Mutation_Response>;
  /** insert a single row into the table: "tokens" */
  insert_tokens_one: Maybe<Tokens>;
  /** insert data into the table: "transactions" */
  insert_transactions: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one: Maybe<Transactions>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** update data of the table: "claimed_tokens" */
  update_claimed_tokens: Maybe<Claimed_Tokens_Mutation_Response>;
  /** update single row of the table: "claimed_tokens" */
  update_claimed_tokens_by_pk: Maybe<Claimed_Tokens>;
  /** update multiples rows of table: "claimed_tokens" */
  update_claimed_tokens_many: Maybe<Array<Maybe<Claimed_Tokens_Mutation_Response>>>;
  /** update data of the table: "tokens" */
  update_tokens: Maybe<Tokens_Mutation_Response>;
  /** update single row of the table: "tokens" */
  update_tokens_by_pk: Maybe<Tokens>;
  /** update multiples rows of table: "tokens" */
  update_tokens_many: Maybe<Array<Maybe<Tokens_Mutation_Response>>>;
  /** update data of the table: "transactions" */
  update_transactions: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk: Maybe<Transactions>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many: Maybe<Array<Maybe<Transactions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Claimed_TokensArgs = {
  where: Claimed_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Claimed_Tokens_By_PkArgs = {
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
  user_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TokensArgs = {
  where: Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tokens_By_PkArgs = {
  contract_address: Scalars['String'];
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Claimed_TokensArgs = {
  objects: Array<Claimed_Tokens_Insert_Input>;
  on_conflict: InputMaybe<Claimed_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Claimed_Tokens_OneArgs = {
  object: Claimed_Tokens_Insert_Input;
  on_conflict: InputMaybe<Claimed_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokensArgs = {
  objects: Array<Tokens_Insert_Input>;
  on_conflict: InputMaybe<Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tokens_OneArgs = {
  object: Tokens_Insert_Input;
  on_conflict: InputMaybe<Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Claimed_TokensArgs = {
  _inc: InputMaybe<Claimed_Tokens_Inc_Input>;
  _set: InputMaybe<Claimed_Tokens_Set_Input>;
  where: Claimed_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Claimed_Tokens_By_PkArgs = {
  _inc: InputMaybe<Claimed_Tokens_Inc_Input>;
  _set: InputMaybe<Claimed_Tokens_Set_Input>;
  pk_columns: Claimed_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Claimed_Tokens_ManyArgs = {
  updates: Array<Claimed_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TokensArgs = {
  _inc: InputMaybe<Tokens_Inc_Input>;
  _set: InputMaybe<Tokens_Set_Input>;
  where: Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tokens_By_PkArgs = {
  _inc: InputMaybe<Tokens_Inc_Input>;
  _set: InputMaybe<Tokens_Set_Input>;
  pk_columns: Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tokens_ManyArgs = {
  updates: Array<Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc: InputMaybe<Transactions_Inc_Input>;
  _set: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc: InputMaybe<Transactions_Inc_Input>;
  _set: InputMaybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_ManyArgs = {
  updates: Array<Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq: InputMaybe<Scalars['numeric']>;
  _gt: InputMaybe<Scalars['numeric']>;
  _gte: InputMaybe<Scalars['numeric']>;
  _in: InputMaybe<Array<Scalars['numeric']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['numeric']>;
  _lte: InputMaybe<Scalars['numeric']>;
  _neq: InputMaybe<Scalars['numeric']>;
  _nin: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename: 'query_root';
  /** An array relationship */
  claimed_tokens: Array<Claimed_Tokens>;
  /** An aggregate relationship */
  claimed_tokens_aggregate: Claimed_Tokens_Aggregate;
  /** fetch data from the table: "claimed_tokens" using primary key columns */
  claimed_tokens_by_pk: Maybe<Claimed_Tokens>;
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>;
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk: Maybe<Tokens>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Query_RootClaimed_TokensArgs = {
  distinct_on: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Claimed_Tokens_Order_By>>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};


export type Query_RootClaimed_Tokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Claimed_Tokens_Order_By>>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};


export type Query_RootClaimed_Tokens_By_PkArgs = {
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
  user_address: Scalars['String'];
};


export type Query_RootTokensArgs = {
  distinct_on: InputMaybe<Array<Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Tokens_Order_By>>;
  where: InputMaybe<Tokens_Bool_Exp>;
};


export type Query_RootTokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Tokens_Order_By>>;
  where: InputMaybe<Tokens_Bool_Exp>;
};


export type Query_RootTokens_By_PkArgs = {
  contract_address: Scalars['String'];
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
};


export type Query_RootTransactionsArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  user_address: Scalars['String'];
};

export type Subscription_Root = {
  __typename: 'subscription_root';
  /** An array relationship */
  claimed_tokens: Array<Claimed_Tokens>;
  /** An aggregate relationship */
  claimed_tokens_aggregate: Claimed_Tokens_Aggregate;
  /** fetch data from the table: "claimed_tokens" using primary key columns */
  claimed_tokens_by_pk: Maybe<Claimed_Tokens>;
  /** fetch data from the table in a streaming manner: "claimed_tokens" */
  claimed_tokens_stream: Array<Claimed_Tokens>;
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>;
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk: Maybe<Tokens>;
  /** fetch data from the table in a streaming manner: "tokens" */
  tokens_stream: Array<Tokens>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream: Array<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootClaimed_TokensArgs = {
  distinct_on: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Claimed_Tokens_Order_By>>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};


export type Subscription_RootClaimed_Tokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Claimed_Tokens_Order_By>>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};


export type Subscription_RootClaimed_Tokens_By_PkArgs = {
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
  user_address: Scalars['String'];
};


export type Subscription_RootClaimed_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Claimed_Tokens_Stream_Cursor_Input>>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};


export type Subscription_RootTokensArgs = {
  distinct_on: InputMaybe<Array<Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Tokens_Order_By>>;
  where: InputMaybe<Tokens_Bool_Exp>;
};


export type Subscription_RootTokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Tokens_Order_By>>;
  where: InputMaybe<Tokens_Bool_Exp>;
};


export type Subscription_RootTokens_By_PkArgs = {
  contract_address: Scalars['String'];
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
};


export type Subscription_RootTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tokens_Stream_Cursor_Input>>;
  where: InputMaybe<Tokens_Bool_Exp>;
};


export type Subscription_RootTransactionsArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  user_address: Scalars['String'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']>;
  _gt: InputMaybe<Scalars['timestamptz']>;
  _gte: InputMaybe<Scalars['timestamptz']>;
  _in: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamptz']>;
  _lte: InputMaybe<Scalars['timestamptz']>;
  _neq: InputMaybe<Scalars['timestamptz']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tokens" */
export type Tokens = {
  __typename: 'tokens';
  /** An array relationship */
  claimed_tokens: Array<Claimed_Tokens>;
  /** An aggregate relationship */
  claimed_tokens_aggregate: Claimed_Tokens_Aggregate;
  contract_address: Scalars['String'];
  description: Scalars['String'];
  json_cid: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nft_type: Scalars['String'];
  price: Scalars['numeric'];
  supply: Scalars['numeric'];
  token_id: Scalars['numeric'];
};


/** columns and relationships of "tokens" */
export type TokensClaimed_TokensArgs = {
  distinct_on: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Claimed_Tokens_Order_By>>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};


/** columns and relationships of "tokens" */
export type TokensClaimed_Tokens_AggregateArgs = {
  distinct_on: InputMaybe<Array<Claimed_Tokens_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Claimed_Tokens_Order_By>>;
  where: InputMaybe<Claimed_Tokens_Bool_Exp>;
};

/** aggregated selection of "tokens" */
export type Tokens_Aggregate = {
  __typename: 'tokens_aggregate';
  aggregate: Maybe<Tokens_Aggregate_Fields>;
  nodes: Array<Tokens>;
};

/** aggregate fields of "tokens" */
export type Tokens_Aggregate_Fields = {
  __typename: 'tokens_aggregate_fields';
  avg: Maybe<Tokens_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Tokens_Max_Fields>;
  min: Maybe<Tokens_Min_Fields>;
  stddev: Maybe<Tokens_Stddev_Fields>;
  stddev_pop: Maybe<Tokens_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Tokens_Stddev_Samp_Fields>;
  sum: Maybe<Tokens_Sum_Fields>;
  var_pop: Maybe<Tokens_Var_Pop_Fields>;
  var_samp: Maybe<Tokens_Var_Samp_Fields>;
  variance: Maybe<Tokens_Variance_Fields>;
};


/** aggregate fields of "tokens" */
export type Tokens_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Tokens_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tokens_Avg_Fields = {
  __typename: 'tokens_avg_fields';
  price: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tokens". All fields are combined with a logical 'AND'. */
export type Tokens_Bool_Exp = {
  _and: InputMaybe<Array<Tokens_Bool_Exp>>;
  _not: InputMaybe<Tokens_Bool_Exp>;
  _or: InputMaybe<Array<Tokens_Bool_Exp>>;
  claimed_tokens: InputMaybe<Claimed_Tokens_Bool_Exp>;
  claimed_tokens_aggregate: InputMaybe<Claimed_Tokens_Aggregate_Bool_Exp>;
  contract_address: InputMaybe<String_Comparison_Exp>;
  description: InputMaybe<String_Comparison_Exp>;
  json_cid: InputMaybe<String_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  nft_type: InputMaybe<String_Comparison_Exp>;
  price: InputMaybe<Numeric_Comparison_Exp>;
  supply: InputMaybe<Numeric_Comparison_Exp>;
  token_id: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "tokens" */
export enum Tokens_Constraint {
  /** unique or primary key constraint on columns "token_id", "nft_type", "contract_address" */
  TokensPkey = 'tokens_pkey'
}

/** input type for incrementing numeric columns in table "tokens" */
export type Tokens_Inc_Input = {
  price: InputMaybe<Scalars['numeric']>;
  supply: InputMaybe<Scalars['numeric']>;
  token_id: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "tokens" */
export type Tokens_Insert_Input = {
  claimed_tokens: InputMaybe<Claimed_Tokens_Arr_Rel_Insert_Input>;
  contract_address: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  json_cid: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['numeric']>;
  supply: InputMaybe<Scalars['numeric']>;
  token_id: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Tokens_Max_Fields = {
  __typename: 'tokens_max_fields';
  contract_address: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  json_cid: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  nft_type: Maybe<Scalars['String']>;
  price: Maybe<Scalars['numeric']>;
  supply: Maybe<Scalars['numeric']>;
  token_id: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Tokens_Min_Fields = {
  __typename: 'tokens_min_fields';
  contract_address: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  json_cid: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  nft_type: Maybe<Scalars['String']>;
  price: Maybe<Scalars['numeric']>;
  supply: Maybe<Scalars['numeric']>;
  token_id: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "tokens" */
export type Tokens_Mutation_Response = {
  __typename: 'tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tokens>;
};

/** input type for inserting object relation for remote table "tokens" */
export type Tokens_Obj_Rel_Insert_Input = {
  data: Tokens_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Tokens_On_Conflict>;
};

/** on_conflict condition type for table "tokens" */
export type Tokens_On_Conflict = {
  constraint: Tokens_Constraint;
  update_columns: Array<Tokens_Update_Column>;
  where: InputMaybe<Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "tokens". */
export type Tokens_Order_By = {
  claimed_tokens_aggregate: InputMaybe<Claimed_Tokens_Aggregate_Order_By>;
  contract_address: InputMaybe<Order_By>;
  description: InputMaybe<Order_By>;
  json_cid: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  nft_type: InputMaybe<Order_By>;
  price: InputMaybe<Order_By>;
  supply: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: tokens */
export type Tokens_Pk_Columns_Input = {
  contract_address: Scalars['String'];
  nft_type: Scalars['String'];
  token_id: Scalars['numeric'];
};

/** select columns of table "tokens" */
export enum Tokens_Select_Column {
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Description = 'description',
  /** column name */
  JsonCid = 'json_cid',
  /** column name */
  Name = 'name',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  Price = 'price',
  /** column name */
  Supply = 'supply',
  /** column name */
  TokenId = 'token_id'
}

/** input type for updating data in table "tokens" */
export type Tokens_Set_Input = {
  contract_address: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  json_cid: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['numeric']>;
  supply: InputMaybe<Scalars['numeric']>;
  token_id: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Tokens_Stddev_Fields = {
  __typename: 'tokens_stddev_fields';
  price: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tokens_Stddev_Pop_Fields = {
  __typename: 'tokens_stddev_pop_fields';
  price: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tokens_Stddev_Samp_Fields = {
  __typename: 'tokens_stddev_samp_fields';
  price: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "tokens" */
export type Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tokens_Stream_Cursor_Value_Input = {
  contract_address: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  json_cid: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['numeric']>;
  supply: InputMaybe<Scalars['numeric']>;
  token_id: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Tokens_Sum_Fields = {
  __typename: 'tokens_sum_fields';
  price: Maybe<Scalars['numeric']>;
  supply: Maybe<Scalars['numeric']>;
  token_id: Maybe<Scalars['numeric']>;
};

/** update columns of table "tokens" */
export enum Tokens_Update_Column {
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Description = 'description',
  /** column name */
  JsonCid = 'json_cid',
  /** column name */
  Name = 'name',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  Price = 'price',
  /** column name */
  Supply = 'supply',
  /** column name */
  TokenId = 'token_id'
}

export type Tokens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Tokens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tokens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tokens_Var_Pop_Fields = {
  __typename: 'tokens_var_pop_fields';
  price: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tokens_Var_Samp_Fields = {
  __typename: 'tokens_var_samp_fields';
  price: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tokens_Variance_Fields = {
  __typename: 'tokens_variance_fields';
  price: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename: 'transactions';
  amounts: Scalars['numeric'];
  buyer_address: Scalars['String'];
  /** An object relationship */
  claimed_token: Maybe<Claimed_Tokens>;
  contract_address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  crypto_type: Maybe<Scalars['String']>;
  nft_type: Scalars['String'];
  payment_gateway_id: Scalars['String'];
  payment_type: Scalars['String'];
  sqs_message_id: Maybe<Scalars['String']>;
  status: Scalars['String'];
  token_id: Scalars['numeric'];
  tx_hash: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename: 'transactions_aggregate';
  aggregate: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

export type Transactions_Aggregate_Bool_Exp = {
  count: InputMaybe<Transactions_Aggregate_Bool_Exp_Count>;
};

export type Transactions_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Transactions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename: 'transactions_aggregate_fields';
  avg: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Transactions_Max_Fields>;
  min: Maybe<Transactions_Min_Fields>;
  stddev: Maybe<Transactions_Stddev_Fields>;
  stddev_pop: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Transactions_Stddev_Samp_Fields>;
  sum: Maybe<Transactions_Sum_Fields>;
  var_pop: Maybe<Transactions_Var_Pop_Fields>;
  var_samp: Maybe<Transactions_Var_Samp_Fields>;
  variance: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Transactions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg: InputMaybe<Transactions_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Transactions_Max_Order_By>;
  min: InputMaybe<Transactions_Min_Order_By>;
  stddev: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum: InputMaybe<Transactions_Sum_Order_By>;
  var_pop: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance: InputMaybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename: 'transactions_avg_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not: InputMaybe<Transactions_Bool_Exp>;
  _or: InputMaybe<Array<Transactions_Bool_Exp>>;
  amounts: InputMaybe<Numeric_Comparison_Exp>;
  buyer_address: InputMaybe<String_Comparison_Exp>;
  claimed_token: InputMaybe<Claimed_Tokens_Bool_Exp>;
  contract_address: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  crypto_type: InputMaybe<String_Comparison_Exp>;
  nft_type: InputMaybe<String_Comparison_Exp>;
  payment_gateway_id: InputMaybe<String_Comparison_Exp>;
  payment_type: InputMaybe<String_Comparison_Exp>;
  sqs_message_id: InputMaybe<String_Comparison_Exp>;
  status: InputMaybe<String_Comparison_Exp>;
  token_id: InputMaybe<Numeric_Comparison_Exp>;
  tx_hash: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  token_id: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  buyer_address: InputMaybe<Scalars['String']>;
  claimed_token: InputMaybe<Claimed_Tokens_Obj_Rel_Insert_Input>;
  contract_address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  crypto_type: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  payment_gateway_id: InputMaybe<Scalars['String']>;
  payment_type: InputMaybe<Scalars['String']>;
  sqs_message_id: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  token_id: InputMaybe<Scalars['numeric']>;
  tx_hash: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  uuid: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename: 'transactions_max_fields';
  amounts: Maybe<Scalars['numeric']>;
  buyer_address: Maybe<Scalars['String']>;
  contract_address: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  crypto_type: Maybe<Scalars['String']>;
  nft_type: Maybe<Scalars['String']>;
  payment_gateway_id: Maybe<Scalars['String']>;
  payment_type: Maybe<Scalars['String']>;
  sqs_message_id: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  token_id: Maybe<Scalars['numeric']>;
  tx_hash: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  uuid: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  amounts: InputMaybe<Order_By>;
  buyer_address: InputMaybe<Order_By>;
  contract_address: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  crypto_type: InputMaybe<Order_By>;
  nft_type: InputMaybe<Order_By>;
  payment_gateway_id: InputMaybe<Order_By>;
  payment_type: InputMaybe<Order_By>;
  sqs_message_id: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  uuid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename: 'transactions_min_fields';
  amounts: Maybe<Scalars['numeric']>;
  buyer_address: Maybe<Scalars['String']>;
  contract_address: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  crypto_type: Maybe<Scalars['String']>;
  nft_type: Maybe<Scalars['String']>;
  payment_gateway_id: Maybe<Scalars['String']>;
  payment_type: Maybe<Scalars['String']>;
  sqs_message_id: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  token_id: Maybe<Scalars['numeric']>;
  tx_hash: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  uuid: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  amounts: InputMaybe<Order_By>;
  buyer_address: InputMaybe<Order_By>;
  contract_address: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  crypto_type: InputMaybe<Order_By>;
  nft_type: InputMaybe<Order_By>;
  payment_gateway_id: InputMaybe<Order_By>;
  payment_type: InputMaybe<Order_By>;
  sqs_message_id: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  uuid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** on_conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns: Array<Transactions_Update_Column>;
  where: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  amounts: InputMaybe<Order_By>;
  buyer_address: InputMaybe<Order_By>;
  claimed_token: InputMaybe<Claimed_Tokens_Order_By>;
  contract_address: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  crypto_type: InputMaybe<Order_By>;
  nft_type: InputMaybe<Order_By>;
  payment_gateway_id: InputMaybe<Order_By>;
  payment_type: InputMaybe<Order_By>;
  sqs_message_id: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  uuid: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  Amounts = 'amounts',
  /** column name */
  BuyerAddress = 'buyer_address',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CryptoType = 'crypto_type',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  PaymentGatewayId = 'payment_gateway_id',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  SqsMessageId = 'sqs_message_id',
  /** column name */
  Status = 'status',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  buyer_address: InputMaybe<Scalars['String']>;
  contract_address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  crypto_type: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  payment_gateway_id: InputMaybe<Scalars['String']>;
  payment_type: InputMaybe<Scalars['String']>;
  sqs_message_id: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  token_id: InputMaybe<Scalars['numeric']>;
  tx_hash: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  uuid: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename: 'transactions_stddev_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename: 'transactions_stddev_pop_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename: 'transactions_stddev_samp_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
  amounts: InputMaybe<Scalars['numeric']>;
  buyer_address: InputMaybe<Scalars['String']>;
  contract_address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  crypto_type: InputMaybe<Scalars['String']>;
  nft_type: InputMaybe<Scalars['String']>;
  payment_gateway_id: InputMaybe<Scalars['String']>;
  payment_type: InputMaybe<Scalars['String']>;
  sqs_message_id: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  token_id: InputMaybe<Scalars['numeric']>;
  tx_hash: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  uuid: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename: 'transactions_sum_fields';
  amounts: Maybe<Scalars['numeric']>;
  token_id: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  Amounts = 'amounts',
  /** column name */
  BuyerAddress = 'buyer_address',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CryptoType = 'crypto_type',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  PaymentGatewayId = 'payment_gateway_id',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  SqsMessageId = 'sqs_message_id',
  /** column name */
  Status = 'status',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

export type Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename: 'transactions_var_pop_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename: 'transactions_var_samp_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename: 'transactions_variance_fields';
  amounts: Maybe<Scalars['Float']>;
  token_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  amounts: InputMaybe<Order_By>;
  token_id: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename: 'users';
  city: Scalars['String'];
  country: Scalars['String'];
  dob: Scalars['date'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  mobile: Scalars['String'];
  user_address: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename: 'users_aggregate';
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename: 'users_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and: InputMaybe<Array<Users_Bool_Exp>>;
  _not: InputMaybe<Users_Bool_Exp>;
  _or: InputMaybe<Array<Users_Bool_Exp>>;
  city: InputMaybe<String_Comparison_Exp>;
  country: InputMaybe<String_Comparison_Exp>;
  dob: InputMaybe<Date_Comparison_Exp>;
  email: InputMaybe<String_Comparison_Exp>;
  first_name: InputMaybe<String_Comparison_Exp>;
  last_name: InputMaybe<String_Comparison_Exp>;
  mobile: InputMaybe<String_Comparison_Exp>;
  user_address: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "user_address" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  city: InputMaybe<Scalars['String']>;
  country: InputMaybe<Scalars['String']>;
  dob: InputMaybe<Scalars['date']>;
  email: InputMaybe<Scalars['String']>;
  first_name: InputMaybe<Scalars['String']>;
  last_name: InputMaybe<Scalars['String']>;
  mobile: InputMaybe<Scalars['String']>;
  user_address: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename: 'users_max_fields';
  city: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  dob: Maybe<Scalars['date']>;
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  mobile: Maybe<Scalars['String']>;
  user_address: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename: 'users_min_fields';
  city: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  dob: Maybe<Scalars['date']>;
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  mobile: Maybe<Scalars['String']>;
  user_address: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  city: InputMaybe<Order_By>;
  country: InputMaybe<Order_By>;
  dob: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  first_name: InputMaybe<Order_By>;
  last_name: InputMaybe<Order_By>;
  mobile: InputMaybe<Order_By>;
  user_address: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  user_address: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Dob = 'dob',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  UserAddress = 'user_address'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  city: InputMaybe<Scalars['String']>;
  country: InputMaybe<Scalars['String']>;
  dob: InputMaybe<Scalars['date']>;
  email: InputMaybe<Scalars['String']>;
  first_name: InputMaybe<Scalars['String']>;
  last_name: InputMaybe<Scalars['String']>;
  mobile: InputMaybe<Scalars['String']>;
  user_address: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  city: InputMaybe<Scalars['String']>;
  country: InputMaybe<Scalars['String']>;
  dob: InputMaybe<Scalars['date']>;
  email: InputMaybe<Scalars['String']>;
  first_name: InputMaybe<Scalars['String']>;
  last_name: InputMaybe<Scalars['String']>;
  mobile: InputMaybe<Scalars['String']>;
  user_address: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Dob = 'dob',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  UserAddress = 'user_address'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']>;
  _gt: InputMaybe<Scalars['uuid']>;
  _gte: InputMaybe<Scalars['uuid']>;
  _in: InputMaybe<Array<Scalars['uuid']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['uuid']>;
  _lte: InputMaybe<Scalars['uuid']>;
  _neq: InputMaybe<Scalars['uuid']>;
  _nin: InputMaybe<Array<Scalars['uuid']>>;
};
