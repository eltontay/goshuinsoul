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
  numeric: number;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']>;
  _gt: InputMaybe<Scalars['Boolean']>;
  _gte: InputMaybe<Scalars['Boolean']>;
  _in: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Boolean']>;
  _lte: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Scalars['Boolean']>;
  _nin: InputMaybe<Array<Scalars['Boolean']>>;
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

/** columns and relationships of "assets" */
export type Assets = {
  __typename: 'assets';
  assetId: Maybe<Scalars['String']>;
  assetName: Scalars['String'];
  assetType: Scalars['String'];
  assetValue: Scalars['numeric'];
  availableSupply: Scalars['Int'];
  buyPrice: Maybe<Scalars['String']>;
  couponRate: Maybe<Scalars['String']>;
  currency: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  maturity: Maybe<Scalars['String']>;
  paymentDate: Maybe<Scalars['String']>;
  payments: Maybe<Scalars['String']>;
  periodicity: Maybe<Scalars['String']>;
  sellprice: Maybe<Scalars['String']>;
  tokenized: Scalars['Boolean'];
};

/** aggregated selection of "assets" */
export type Assets_Aggregate = {
  __typename: 'assets_aggregate';
  aggregate: Maybe<Assets_Aggregate_Fields>;
  nodes: Array<Assets>;
};

/** aggregate fields of "assets" */
export type Assets_Aggregate_Fields = {
  __typename: 'assets_aggregate_fields';
  avg: Maybe<Assets_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Assets_Max_Fields>;
  min: Maybe<Assets_Min_Fields>;
  stddev: Maybe<Assets_Stddev_Fields>;
  stddev_pop: Maybe<Assets_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Assets_Stddev_Samp_Fields>;
  sum: Maybe<Assets_Sum_Fields>;
  var_pop: Maybe<Assets_Var_Pop_Fields>;
  var_samp: Maybe<Assets_Var_Samp_Fields>;
  variance: Maybe<Assets_Variance_Fields>;
};


/** aggregate fields of "assets" */
export type Assets_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Assets_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Assets_Avg_Fields = {
  __typename: 'assets_avg_fields';
  assetValue: Maybe<Scalars['Float']>;
  availableSupply: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type Assets_Bool_Exp = {
  _and: InputMaybe<Array<Assets_Bool_Exp>>;
  _not: InputMaybe<Assets_Bool_Exp>;
  _or: InputMaybe<Array<Assets_Bool_Exp>>;
  assetId: InputMaybe<String_Comparison_Exp>;
  assetName: InputMaybe<String_Comparison_Exp>;
  assetType: InputMaybe<String_Comparison_Exp>;
  assetValue: InputMaybe<Numeric_Comparison_Exp>;
  availableSupply: InputMaybe<Int_Comparison_Exp>;
  buyPrice: InputMaybe<String_Comparison_Exp>;
  couponRate: InputMaybe<String_Comparison_Exp>;
  currency: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  maturity: InputMaybe<String_Comparison_Exp>;
  paymentDate: InputMaybe<String_Comparison_Exp>;
  payments: InputMaybe<String_Comparison_Exp>;
  periodicity: InputMaybe<String_Comparison_Exp>;
  sellprice: InputMaybe<String_Comparison_Exp>;
  tokenized: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "assets" */
export enum Assets_Constraint {
  /** unique or primary key constraint on columns "assetName", "assetType" */
  AssetsPkey = 'assets_pkey'
}

/** input type for incrementing numeric columns in table "assets" */
export type Assets_Inc_Input = {
  assetValue: InputMaybe<Scalars['numeric']>;
  availableSupply: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "assets" */
export type Assets_Insert_Input = {
  assetId: InputMaybe<Scalars['String']>;
  assetName: InputMaybe<Scalars['String']>;
  assetType: InputMaybe<Scalars['String']>;
  assetValue: InputMaybe<Scalars['numeric']>;
  availableSupply: InputMaybe<Scalars['Int']>;
  buyPrice: InputMaybe<Scalars['String']>;
  couponRate: InputMaybe<Scalars['String']>;
  currency: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  maturity: InputMaybe<Scalars['String']>;
  paymentDate: InputMaybe<Scalars['String']>;
  payments: InputMaybe<Scalars['String']>;
  periodicity: InputMaybe<Scalars['String']>;
  sellprice: InputMaybe<Scalars['String']>;
  tokenized: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Assets_Max_Fields = {
  __typename: 'assets_max_fields';
  assetId: Maybe<Scalars['String']>;
  assetName: Maybe<Scalars['String']>;
  assetType: Maybe<Scalars['String']>;
  assetValue: Maybe<Scalars['numeric']>;
  availableSupply: Maybe<Scalars['Int']>;
  buyPrice: Maybe<Scalars['String']>;
  couponRate: Maybe<Scalars['String']>;
  currency: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  maturity: Maybe<Scalars['String']>;
  paymentDate: Maybe<Scalars['String']>;
  payments: Maybe<Scalars['String']>;
  periodicity: Maybe<Scalars['String']>;
  sellprice: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Assets_Min_Fields = {
  __typename: 'assets_min_fields';
  assetId: Maybe<Scalars['String']>;
  assetName: Maybe<Scalars['String']>;
  assetType: Maybe<Scalars['String']>;
  assetValue: Maybe<Scalars['numeric']>;
  availableSupply: Maybe<Scalars['Int']>;
  buyPrice: Maybe<Scalars['String']>;
  couponRate: Maybe<Scalars['String']>;
  currency: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  maturity: Maybe<Scalars['String']>;
  paymentDate: Maybe<Scalars['String']>;
  payments: Maybe<Scalars['String']>;
  periodicity: Maybe<Scalars['String']>;
  sellprice: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "assets" */
export type Assets_Mutation_Response = {
  __typename: 'assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assets>;
};

/** on_conflict condition type for table "assets" */
export type Assets_On_Conflict = {
  constraint: Assets_Constraint;
  update_columns: Array<Assets_Update_Column>;
  where: InputMaybe<Assets_Bool_Exp>;
};

/** Ordering options when selecting data from "assets". */
export type Assets_Order_By = {
  assetId: InputMaybe<Order_By>;
  assetName: InputMaybe<Order_By>;
  assetType: InputMaybe<Order_By>;
  assetValue: InputMaybe<Order_By>;
  availableSupply: InputMaybe<Order_By>;
  buyPrice: InputMaybe<Order_By>;
  couponRate: InputMaybe<Order_By>;
  currency: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  maturity: InputMaybe<Order_By>;
  paymentDate: InputMaybe<Order_By>;
  payments: InputMaybe<Order_By>;
  periodicity: InputMaybe<Order_By>;
  sellprice: InputMaybe<Order_By>;
  tokenized: InputMaybe<Order_By>;
};

/** primary key columns input for table: assets */
export type Assets_Pk_Columns_Input = {
  assetName: Scalars['String'];
  assetType: Scalars['String'];
};

/** select columns of table "assets" */
export enum Assets_Select_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  AssetName = 'assetName',
  /** column name */
  AssetType = 'assetType',
  /** column name */
  AssetValue = 'assetValue',
  /** column name */
  AvailableSupply = 'availableSupply',
  /** column name */
  BuyPrice = 'buyPrice',
  /** column name */
  CouponRate = 'couponRate',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Maturity = 'maturity',
  /** column name */
  PaymentDate = 'paymentDate',
  /** column name */
  Payments = 'payments',
  /** column name */
  Periodicity = 'periodicity',
  /** column name */
  Sellprice = 'sellprice',
  /** column name */
  Tokenized = 'tokenized'
}

/** input type for updating data in table "assets" */
export type Assets_Set_Input = {
  assetId: InputMaybe<Scalars['String']>;
  assetName: InputMaybe<Scalars['String']>;
  assetType: InputMaybe<Scalars['String']>;
  assetValue: InputMaybe<Scalars['numeric']>;
  availableSupply: InputMaybe<Scalars['Int']>;
  buyPrice: InputMaybe<Scalars['String']>;
  couponRate: InputMaybe<Scalars['String']>;
  currency: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  maturity: InputMaybe<Scalars['String']>;
  paymentDate: InputMaybe<Scalars['String']>;
  payments: InputMaybe<Scalars['String']>;
  periodicity: InputMaybe<Scalars['String']>;
  sellprice: InputMaybe<Scalars['String']>;
  tokenized: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Assets_Stddev_Fields = {
  __typename: 'assets_stddev_fields';
  assetValue: Maybe<Scalars['Float']>;
  availableSupply: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Assets_Stddev_Pop_Fields = {
  __typename: 'assets_stddev_pop_fields';
  assetValue: Maybe<Scalars['Float']>;
  availableSupply: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Assets_Stddev_Samp_Fields = {
  __typename: 'assets_stddev_samp_fields';
  assetValue: Maybe<Scalars['Float']>;
  availableSupply: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "assets" */
export type Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assets_Stream_Cursor_Value_Input = {
  assetId: InputMaybe<Scalars['String']>;
  assetName: InputMaybe<Scalars['String']>;
  assetType: InputMaybe<Scalars['String']>;
  assetValue: InputMaybe<Scalars['numeric']>;
  availableSupply: InputMaybe<Scalars['Int']>;
  buyPrice: InputMaybe<Scalars['String']>;
  couponRate: InputMaybe<Scalars['String']>;
  currency: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  maturity: InputMaybe<Scalars['String']>;
  paymentDate: InputMaybe<Scalars['String']>;
  payments: InputMaybe<Scalars['String']>;
  periodicity: InputMaybe<Scalars['String']>;
  sellprice: InputMaybe<Scalars['String']>;
  tokenized: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Assets_Sum_Fields = {
  __typename: 'assets_sum_fields';
  assetValue: Maybe<Scalars['numeric']>;
  availableSupply: Maybe<Scalars['Int']>;
};

/** update columns of table "assets" */
export enum Assets_Update_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  AssetName = 'assetName',
  /** column name */
  AssetType = 'assetType',
  /** column name */
  AssetValue = 'assetValue',
  /** column name */
  AvailableSupply = 'availableSupply',
  /** column name */
  BuyPrice = 'buyPrice',
  /** column name */
  CouponRate = 'couponRate',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Maturity = 'maturity',
  /** column name */
  PaymentDate = 'paymentDate',
  /** column name */
  Payments = 'payments',
  /** column name */
  Periodicity = 'periodicity',
  /** column name */
  Sellprice = 'sellprice',
  /** column name */
  Tokenized = 'tokenized'
}

export type Assets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Assets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Assets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Assets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Assets_Var_Pop_Fields = {
  __typename: 'assets_var_pop_fields';
  assetValue: Maybe<Scalars['Float']>;
  availableSupply: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Assets_Var_Samp_Fields = {
  __typename: 'assets_var_samp_fields';
  assetValue: Maybe<Scalars['Float']>;
  availableSupply: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Assets_Variance_Fields = {
  __typename: 'assets_variance_fields';
  assetValue: Maybe<Scalars['Float']>;
  availableSupply: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "minted" */
export type Minted = {
  __typename: 'minted';
  activeSupply: Scalars['numeric'];
  assetId: Scalars['String'];
  burned: Maybe<Scalars['numeric']>;
  name: Scalars['String'];
  owner: Maybe<Scalars['String']>;
};

/** aggregated selection of "minted" */
export type Minted_Aggregate = {
  __typename: 'minted_aggregate';
  aggregate: Maybe<Minted_Aggregate_Fields>;
  nodes: Array<Minted>;
};

/** aggregate fields of "minted" */
export type Minted_Aggregate_Fields = {
  __typename: 'minted_aggregate_fields';
  avg: Maybe<Minted_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Minted_Max_Fields>;
  min: Maybe<Minted_Min_Fields>;
  stddev: Maybe<Minted_Stddev_Fields>;
  stddev_pop: Maybe<Minted_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Minted_Stddev_Samp_Fields>;
  sum: Maybe<Minted_Sum_Fields>;
  var_pop: Maybe<Minted_Var_Pop_Fields>;
  var_samp: Maybe<Minted_Var_Samp_Fields>;
  variance: Maybe<Minted_Variance_Fields>;
};


/** aggregate fields of "minted" */
export type Minted_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Minted_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Minted_Avg_Fields = {
  __typename: 'minted_avg_fields';
  activeSupply: Maybe<Scalars['Float']>;
  burned: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "minted". All fields are combined with a logical 'AND'. */
export type Minted_Bool_Exp = {
  _and: InputMaybe<Array<Minted_Bool_Exp>>;
  _not: InputMaybe<Minted_Bool_Exp>;
  _or: InputMaybe<Array<Minted_Bool_Exp>>;
  activeSupply: InputMaybe<Numeric_Comparison_Exp>;
  assetId: InputMaybe<String_Comparison_Exp>;
  burned: InputMaybe<Numeric_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  owner: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "minted" */
export enum Minted_Constraint {
  /** unique or primary key constraint on columns "name", "assetId" */
  MintedPkey = 'minted_pkey'
}

/** input type for incrementing numeric columns in table "minted" */
export type Minted_Inc_Input = {
  activeSupply: InputMaybe<Scalars['numeric']>;
  burned: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "minted" */
export type Minted_Insert_Input = {
  activeSupply: InputMaybe<Scalars['numeric']>;
  assetId: InputMaybe<Scalars['String']>;
  burned: InputMaybe<Scalars['numeric']>;
  name: InputMaybe<Scalars['String']>;
  owner: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Minted_Max_Fields = {
  __typename: 'minted_max_fields';
  activeSupply: Maybe<Scalars['numeric']>;
  assetId: Maybe<Scalars['String']>;
  burned: Maybe<Scalars['numeric']>;
  name: Maybe<Scalars['String']>;
  owner: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Minted_Min_Fields = {
  __typename: 'minted_min_fields';
  activeSupply: Maybe<Scalars['numeric']>;
  assetId: Maybe<Scalars['String']>;
  burned: Maybe<Scalars['numeric']>;
  name: Maybe<Scalars['String']>;
  owner: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "minted" */
export type Minted_Mutation_Response = {
  __typename: 'minted_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Minted>;
};

/** on_conflict condition type for table "minted" */
export type Minted_On_Conflict = {
  constraint: Minted_Constraint;
  update_columns: Array<Minted_Update_Column>;
  where: InputMaybe<Minted_Bool_Exp>;
};

/** Ordering options when selecting data from "minted". */
export type Minted_Order_By = {
  activeSupply: InputMaybe<Order_By>;
  assetId: InputMaybe<Order_By>;
  burned: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  owner: InputMaybe<Order_By>;
};

/** primary key columns input for table: minted */
export type Minted_Pk_Columns_Input = {
  assetId: Scalars['String'];
  name: Scalars['String'];
};

/** select columns of table "minted" */
export enum Minted_Select_Column {
  /** column name */
  ActiveSupply = 'activeSupply',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  Burned = 'burned',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner'
}

/** input type for updating data in table "minted" */
export type Minted_Set_Input = {
  activeSupply: InputMaybe<Scalars['numeric']>;
  assetId: InputMaybe<Scalars['String']>;
  burned: InputMaybe<Scalars['numeric']>;
  name: InputMaybe<Scalars['String']>;
  owner: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Minted_Stddev_Fields = {
  __typename: 'minted_stddev_fields';
  activeSupply: Maybe<Scalars['Float']>;
  burned: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Minted_Stddev_Pop_Fields = {
  __typename: 'minted_stddev_pop_fields';
  activeSupply: Maybe<Scalars['Float']>;
  burned: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Minted_Stddev_Samp_Fields = {
  __typename: 'minted_stddev_samp_fields';
  activeSupply: Maybe<Scalars['Float']>;
  burned: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "minted" */
export type Minted_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Minted_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Minted_Stream_Cursor_Value_Input = {
  activeSupply: InputMaybe<Scalars['numeric']>;
  assetId: InputMaybe<Scalars['String']>;
  burned: InputMaybe<Scalars['numeric']>;
  name: InputMaybe<Scalars['String']>;
  owner: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Minted_Sum_Fields = {
  __typename: 'minted_sum_fields';
  activeSupply: Maybe<Scalars['numeric']>;
  burned: Maybe<Scalars['numeric']>;
};

/** update columns of table "minted" */
export enum Minted_Update_Column {
  /** column name */
  ActiveSupply = 'activeSupply',
  /** column name */
  AssetId = 'assetId',
  /** column name */
  Burned = 'burned',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner'
}

export type Minted_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Minted_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Minted_Set_Input>;
  /** filter the rows which have to be updated */
  where: Minted_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Minted_Var_Pop_Fields = {
  __typename: 'minted_var_pop_fields';
  activeSupply: Maybe<Scalars['Float']>;
  burned: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Minted_Var_Samp_Fields = {
  __typename: 'minted_var_samp_fields';
  activeSupply: Maybe<Scalars['Float']>;
  burned: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Minted_Variance_Fields = {
  __typename: 'minted_variance_fields';
  activeSupply: Maybe<Scalars['Float']>;
  burned: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "assets" */
  delete_assets: Maybe<Assets_Mutation_Response>;
  /** delete single row from the table: "assets" */
  delete_assets_by_pk: Maybe<Assets>;
  /** delete data from the table: "minted" */
  delete_minted: Maybe<Minted_Mutation_Response>;
  /** delete single row from the table: "minted" */
  delete_minted_by_pk: Maybe<Minted>;
  /** delete data from the table: "token" */
  delete_token: Maybe<Token_Mutation_Response>;
  /** delete single row from the table: "token" */
  delete_token_by_pk: Maybe<Token>;
  /** delete data from the table: "user_setting" */
  delete_user_setting: Maybe<User_Setting_Mutation_Response>;
  /** delete single row from the table: "user_setting" */
  delete_user_setting_by_pk: Maybe<User_Setting>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "assets" */
  insert_assets: Maybe<Assets_Mutation_Response>;
  /** insert a single row into the table: "assets" */
  insert_assets_one: Maybe<Assets>;
  /** insert data into the table: "minted" */
  insert_minted: Maybe<Minted_Mutation_Response>;
  /** insert a single row into the table: "minted" */
  insert_minted_one: Maybe<Minted>;
  /** insert data into the table: "token" */
  insert_token: Maybe<Token_Mutation_Response>;
  /** insert a single row into the table: "token" */
  insert_token_one: Maybe<Token>;
  /** insert data into the table: "user_setting" */
  insert_user_setting: Maybe<User_Setting_Mutation_Response>;
  /** insert a single row into the table: "user_setting" */
  insert_user_setting_one: Maybe<User_Setting>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** update data of the table: "assets" */
  update_assets: Maybe<Assets_Mutation_Response>;
  /** update single row of the table: "assets" */
  update_assets_by_pk: Maybe<Assets>;
  /** update multiples rows of table: "assets" */
  update_assets_many: Maybe<Array<Maybe<Assets_Mutation_Response>>>;
  /** update data of the table: "minted" */
  update_minted: Maybe<Minted_Mutation_Response>;
  /** update single row of the table: "minted" */
  update_minted_by_pk: Maybe<Minted>;
  /** update multiples rows of table: "minted" */
  update_minted_many: Maybe<Array<Maybe<Minted_Mutation_Response>>>;
  /** update data of the table: "token" */
  update_token: Maybe<Token_Mutation_Response>;
  /** update single row of the table: "token" */
  update_token_by_pk: Maybe<Token>;
  /** update multiples rows of table: "token" */
  update_token_many: Maybe<Array<Maybe<Token_Mutation_Response>>>;
  /** update data of the table: "user_setting" */
  update_user_setting: Maybe<User_Setting_Mutation_Response>;
  /** update single row of the table: "user_setting" */
  update_user_setting_by_pk: Maybe<User_Setting>;
  /** update multiples rows of table: "user_setting" */
  update_user_setting_many: Maybe<Array<Maybe<User_Setting_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AssetsArgs = {
  where: Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assets_By_PkArgs = {
  assetName: Scalars['String'];
  assetType: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MintedArgs = {
  where: Minted_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Minted_By_PkArgs = {
  assetId: Scalars['String'];
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TokenArgs = {
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_SettingArgs = {
  where: User_Setting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Setting_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AssetsArgs = {
  objects: Array<Assets_Insert_Input>;
  on_conflict: InputMaybe<Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assets_OneArgs = {
  object: Assets_Insert_Input;
  on_conflict: InputMaybe<Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MintedArgs = {
  objects: Array<Minted_Insert_Input>;
  on_conflict: InputMaybe<Minted_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Minted_OneArgs = {
  object: Minted_Insert_Input;
  on_conflict: InputMaybe<Minted_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokenArgs = {
  objects: Array<Token_Insert_Input>;
  on_conflict: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_OneArgs = {
  object: Token_Insert_Input;
  on_conflict: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SettingArgs = {
  objects: Array<User_Setting_Insert_Input>;
  on_conflict: InputMaybe<User_Setting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Setting_OneArgs = {
  object: User_Setting_Insert_Input;
  on_conflict: InputMaybe<User_Setting_On_Conflict>;
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
export type Mutation_RootUpdate_AssetsArgs = {
  _inc: InputMaybe<Assets_Inc_Input>;
  _set: InputMaybe<Assets_Set_Input>;
  where: Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assets_By_PkArgs = {
  _inc: InputMaybe<Assets_Inc_Input>;
  _set: InputMaybe<Assets_Set_Input>;
  pk_columns: Assets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assets_ManyArgs = {
  updates: Array<Assets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MintedArgs = {
  _inc: InputMaybe<Minted_Inc_Input>;
  _set: InputMaybe<Minted_Set_Input>;
  where: Minted_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Minted_By_PkArgs = {
  _inc: InputMaybe<Minted_Inc_Input>;
  _set: InputMaybe<Minted_Set_Input>;
  pk_columns: Minted_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Minted_ManyArgs = {
  updates: Array<Minted_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TokenArgs = {
  _inc: InputMaybe<Token_Inc_Input>;
  _set: InputMaybe<Token_Set_Input>;
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_By_PkArgs = {
  _inc: InputMaybe<Token_Inc_Input>;
  _set: InputMaybe<Token_Set_Input>;
  pk_columns: Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_ManyArgs = {
  updates: Array<Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SettingArgs = {
  _inc: InputMaybe<User_Setting_Inc_Input>;
  _set: InputMaybe<User_Setting_Set_Input>;
  where: User_Setting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Setting_By_PkArgs = {
  _inc: InputMaybe<User_Setting_Inc_Input>;
  _set: InputMaybe<User_Setting_Set_Input>;
  pk_columns: User_Setting_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Setting_ManyArgs = {
  updates: Array<User_Setting_Updates>;
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
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch aggregated fields from the table: "assets" */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk: Maybe<Assets>;
  /** fetch data from the table: "minted" */
  minted: Array<Minted>;
  /** fetch aggregated fields from the table: "minted" */
  minted_aggregate: Minted_Aggregate;
  /** fetch data from the table: "minted" using primary key columns */
  minted_by_pk: Maybe<Minted>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk: Maybe<Token>;
  /** fetch data from the table: "user_setting" */
  user_setting: Array<User_Setting>;
  /** fetch aggregated fields from the table: "user_setting" */
  user_setting_aggregate: User_Setting_Aggregate;
  /** fetch data from the table: "user_setting" using primary key columns */
  user_setting_by_pk: Maybe<User_Setting>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Query_RootAssetsArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Query_RootAssets_AggregateArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Query_RootAssets_By_PkArgs = {
  assetName: Scalars['String'];
  assetType: Scalars['String'];
};


export type Query_RootMintedArgs = {
  distinct_on: InputMaybe<Array<Minted_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Minted_Order_By>>;
  where: InputMaybe<Minted_Bool_Exp>;
};


export type Query_RootMinted_AggregateArgs = {
  distinct_on: InputMaybe<Array<Minted_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Minted_Order_By>>;
  where: InputMaybe<Minted_Bool_Exp>;
};


export type Query_RootMinted_By_PkArgs = {
  assetId: Scalars['String'];
  name: Scalars['String'];
};


export type Query_RootTokenArgs = {
  distinct_on: InputMaybe<Array<Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Token_Order_By>>;
  where: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on: InputMaybe<Array<Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Token_Order_By>>;
  where: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_SettingArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Query_RootUser_Setting_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Query_RootUser_Setting_By_PkArgs = {
  id: Scalars['Int'];
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
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename: 'subscription_root';
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch aggregated fields from the table: "assets" */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk: Maybe<Assets>;
  /** fetch data from the table in a streaming manner: "assets" */
  assets_stream: Array<Assets>;
  /** fetch data from the table: "minted" */
  minted: Array<Minted>;
  /** fetch aggregated fields from the table: "minted" */
  minted_aggregate: Minted_Aggregate;
  /** fetch data from the table: "minted" using primary key columns */
  minted_by_pk: Maybe<Minted>;
  /** fetch data from the table in a streaming manner: "minted" */
  minted_stream: Array<Minted>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk: Maybe<Token>;
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>;
  /** fetch data from the table: "user_setting" */
  user_setting: Array<User_Setting>;
  /** fetch aggregated fields from the table: "user_setting" */
  user_setting_aggregate: User_Setting_Aggregate;
  /** fetch data from the table: "user_setting" using primary key columns */
  user_setting_by_pk: Maybe<User_Setting>;
  /** fetch data from the table in a streaming manner: "user_setting" */
  user_setting_stream: Array<User_Setting>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAssetsArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootAssets_AggregateArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootAssets_By_PkArgs = {
  assetName: Scalars['String'];
  assetType: Scalars['String'];
};


export type Subscription_RootAssets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Assets_Stream_Cursor_Input>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootMintedArgs = {
  distinct_on: InputMaybe<Array<Minted_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Minted_Order_By>>;
  where: InputMaybe<Minted_Bool_Exp>;
};


export type Subscription_RootMinted_AggregateArgs = {
  distinct_on: InputMaybe<Array<Minted_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Minted_Order_By>>;
  where: InputMaybe<Minted_Bool_Exp>;
};


export type Subscription_RootMinted_By_PkArgs = {
  assetId: Scalars['String'];
  name: Scalars['String'];
};


export type Subscription_RootMinted_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Minted_Stream_Cursor_Input>>;
  where: InputMaybe<Minted_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on: InputMaybe<Array<Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Token_Order_By>>;
  where: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on: InputMaybe<Array<Token_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Token_Order_By>>;
  where: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>;
  where: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootUser_SettingArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Subscription_RootUser_Setting_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Setting_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Setting_Order_By>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};


export type Subscription_RootUser_Setting_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Setting_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Setting_Stream_Cursor_Input>>;
  where: InputMaybe<User_Setting_Bool_Exp>;
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
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename: 'token';
  assetId: Scalars['String'];
  faceValue: Scalars['String'];
  id: Scalars['uuid'];
  maturityStamp: Maybe<Scalars['numeric']>;
  minted: Scalars['Boolean'];
  name: Scalars['String'];
  supply: Scalars['Int'];
  totalSupply: Scalars['Int'];
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename: 'token_aggregate';
  aggregate: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename: 'token_aggregate_fields';
  avg: Maybe<Token_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Token_Max_Fields>;
  min: Maybe<Token_Min_Fields>;
  stddev: Maybe<Token_Stddev_Fields>;
  stddev_pop: Maybe<Token_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Token_Stddev_Samp_Fields>;
  sum: Maybe<Token_Sum_Fields>;
  var_pop: Maybe<Token_Var_Pop_Fields>;
  var_samp: Maybe<Token_Var_Samp_Fields>;
  variance: Maybe<Token_Variance_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Token_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Avg_Fields = {
  __typename: 'token_avg_fields';
  maturityStamp: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  totalSupply: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and: InputMaybe<Array<Token_Bool_Exp>>;
  _not: InputMaybe<Token_Bool_Exp>;
  _or: InputMaybe<Array<Token_Bool_Exp>>;
  assetId: InputMaybe<String_Comparison_Exp>;
  faceValue: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  maturityStamp: InputMaybe<Numeric_Comparison_Exp>;
  minted: InputMaybe<Boolean_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  supply: InputMaybe<Int_Comparison_Exp>;
  totalSupply: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "token" */
export enum Token_Constraint {
  /** unique or primary key constraint on columns "assetId" */
  TokenAssetIdKey = 'token_assetId_key',
  /** unique or primary key constraint on columns "id" */
  TokenPkey = 'token_pkey'
}

/** input type for incrementing numeric columns in table "token" */
export type Token_Inc_Input = {
  maturityStamp: InputMaybe<Scalars['numeric']>;
  supply: InputMaybe<Scalars['Int']>;
  totalSupply: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "token" */
export type Token_Insert_Input = {
  assetId: InputMaybe<Scalars['String']>;
  faceValue: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  maturityStamp: InputMaybe<Scalars['numeric']>;
  minted: InputMaybe<Scalars['Boolean']>;
  name: InputMaybe<Scalars['String']>;
  supply: InputMaybe<Scalars['Int']>;
  totalSupply: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename: 'token_max_fields';
  assetId: Maybe<Scalars['String']>;
  faceValue: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  maturityStamp: Maybe<Scalars['numeric']>;
  name: Maybe<Scalars['String']>;
  supply: Maybe<Scalars['Int']>;
  totalSupply: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename: 'token_min_fields';
  assetId: Maybe<Scalars['String']>;
  faceValue: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  maturityStamp: Maybe<Scalars['numeric']>;
  name: Maybe<Scalars['String']>;
  supply: Maybe<Scalars['Int']>;
  totalSupply: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "token" */
export type Token_Mutation_Response = {
  __typename: 'token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token>;
};

/** on_conflict condition type for table "token" */
export type Token_On_Conflict = {
  constraint: Token_Constraint;
  update_columns: Array<Token_Update_Column>;
  where: InputMaybe<Token_Bool_Exp>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  assetId: InputMaybe<Order_By>;
  faceValue: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  maturityStamp: InputMaybe<Order_By>;
  minted: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  supply: InputMaybe<Order_By>;
  totalSupply: InputMaybe<Order_By>;
};

/** primary key columns input for table: token */
export type Token_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  FaceValue = 'faceValue',
  /** column name */
  Id = 'id',
  /** column name */
  MaturityStamp = 'maturityStamp',
  /** column name */
  Minted = 'minted',
  /** column name */
  Name = 'name',
  /** column name */
  Supply = 'supply',
  /** column name */
  TotalSupply = 'totalSupply'
}

/** input type for updating data in table "token" */
export type Token_Set_Input = {
  assetId: InputMaybe<Scalars['String']>;
  faceValue: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  maturityStamp: InputMaybe<Scalars['numeric']>;
  minted: InputMaybe<Scalars['Boolean']>;
  name: InputMaybe<Scalars['String']>;
  supply: InputMaybe<Scalars['Int']>;
  totalSupply: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Token_Stddev_Fields = {
  __typename: 'token_stddev_fields';
  maturityStamp: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  totalSupply: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Stddev_Pop_Fields = {
  __typename: 'token_stddev_pop_fields';
  maturityStamp: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  totalSupply: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Stddev_Samp_Fields = {
  __typename: 'token_stddev_samp_fields';
  maturityStamp: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  totalSupply: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  assetId: InputMaybe<Scalars['String']>;
  faceValue: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  maturityStamp: InputMaybe<Scalars['numeric']>;
  minted: InputMaybe<Scalars['Boolean']>;
  name: InputMaybe<Scalars['String']>;
  supply: InputMaybe<Scalars['Int']>;
  totalSupply: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Token_Sum_Fields = {
  __typename: 'token_sum_fields';
  maturityStamp: Maybe<Scalars['numeric']>;
  supply: Maybe<Scalars['Int']>;
  totalSupply: Maybe<Scalars['Int']>;
};

/** update columns of table "token" */
export enum Token_Update_Column {
  /** column name */
  AssetId = 'assetId',
  /** column name */
  FaceValue = 'faceValue',
  /** column name */
  Id = 'id',
  /** column name */
  MaturityStamp = 'maturityStamp',
  /** column name */
  Minted = 'minted',
  /** column name */
  Name = 'name',
  /** column name */
  Supply = 'supply',
  /** column name */
  TotalSupply = 'totalSupply'
}

export type Token_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Token_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Token_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Var_Pop_Fields = {
  __typename: 'token_var_pop_fields';
  maturityStamp: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  totalSupply: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Var_Samp_Fields = {
  __typename: 'token_var_samp_fields';
  maturityStamp: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  totalSupply: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Variance_Fields = {
  __typename: 'token_variance_fields';
  maturityStamp: Maybe<Scalars['Float']>;
  supply: Maybe<Scalars['Float']>;
  totalSupply: Maybe<Scalars['Float']>;
};

/** To dynamically change the logo and company name */
export type User_Setting = {
  __typename: 'user_setting';
  cid: Scalars['String'];
  companyName: Scalars['String'];
  id: Scalars['Int'];
};

/** aggregated selection of "user_setting" */
export type User_Setting_Aggregate = {
  __typename: 'user_setting_aggregate';
  aggregate: Maybe<User_Setting_Aggregate_Fields>;
  nodes: Array<User_Setting>;
};

/** aggregate fields of "user_setting" */
export type User_Setting_Aggregate_Fields = {
  __typename: 'user_setting_aggregate_fields';
  avg: Maybe<User_Setting_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<User_Setting_Max_Fields>;
  min: Maybe<User_Setting_Min_Fields>;
  stddev: Maybe<User_Setting_Stddev_Fields>;
  stddev_pop: Maybe<User_Setting_Stddev_Pop_Fields>;
  stddev_samp: Maybe<User_Setting_Stddev_Samp_Fields>;
  sum: Maybe<User_Setting_Sum_Fields>;
  var_pop: Maybe<User_Setting_Var_Pop_Fields>;
  var_samp: Maybe<User_Setting_Var_Samp_Fields>;
  variance: Maybe<User_Setting_Variance_Fields>;
};


/** aggregate fields of "user_setting" */
export type User_Setting_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<User_Setting_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Setting_Avg_Fields = {
  __typename: 'user_setting_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_setting". All fields are combined with a logical 'AND'. */
export type User_Setting_Bool_Exp = {
  _and: InputMaybe<Array<User_Setting_Bool_Exp>>;
  _not: InputMaybe<User_Setting_Bool_Exp>;
  _or: InputMaybe<Array<User_Setting_Bool_Exp>>;
  cid: InputMaybe<String_Comparison_Exp>;
  companyName: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_setting" */
export enum User_Setting_Constraint {
  /** unique or primary key constraint on columns "cid" */
  UserSettingCidKey = 'user_setting_cid_key',
  /** unique or primary key constraint on columns "id" */
  UserSettingPkey = 'user_setting_pkey'
}

/** input type for incrementing numeric columns in table "user_setting" */
export type User_Setting_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_setting" */
export type User_Setting_Insert_Input = {
  cid: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Setting_Max_Fields = {
  __typename: 'user_setting_max_fields';
  cid: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type User_Setting_Min_Fields = {
  __typename: 'user_setting_min_fields';
  cid: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user_setting" */
export type User_Setting_Mutation_Response = {
  __typename: 'user_setting_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Setting>;
};

/** on_conflict condition type for table "user_setting" */
export type User_Setting_On_Conflict = {
  constraint: User_Setting_Constraint;
  update_columns: Array<User_Setting_Update_Column>;
  where: InputMaybe<User_Setting_Bool_Exp>;
};

/** Ordering options when selecting data from "user_setting". */
export type User_Setting_Order_By = {
  cid: InputMaybe<Order_By>;
  companyName: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_setting */
export type User_Setting_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_setting" */
export enum User_Setting_Select_Column {
  /** column name */
  Cid = 'cid',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "user_setting" */
export type User_Setting_Set_Input = {
  cid: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Setting_Stddev_Fields = {
  __typename: 'user_setting_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Setting_Stddev_Pop_Fields = {
  __typename: 'user_setting_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Setting_Stddev_Samp_Fields = {
  __typename: 'user_setting_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user_setting" */
export type User_Setting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Setting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Setting_Stream_Cursor_Value_Input = {
  cid: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type User_Setting_Sum_Fields = {
  __typename: 'user_setting_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "user_setting" */
export enum User_Setting_Update_Column {
  /** column name */
  Cid = 'cid',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  Id = 'id'
}

export type User_Setting_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<User_Setting_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<User_Setting_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Setting_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Setting_Var_Pop_Fields = {
  __typename: 'user_setting_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Setting_Var_Samp_Fields = {
  __typename: 'user_setting_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Setting_Variance_Fields = {
  __typename: 'user_setting_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename: 'users';
  address: Scalars['String'];
  casa: Maybe<Scalars['String']>;
  cif: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  pvtkey: Scalars['String'];
  role: Maybe<Scalars['String']>;
  segment: Maybe<Scalars['String']>;
  username: Scalars['String'];
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
  address: InputMaybe<String_Comparison_Exp>;
  casa: InputMaybe<String_Comparison_Exp>;
  cif: InputMaybe<String_Comparison_Exp>;
  email: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  password: InputMaybe<String_Comparison_Exp>;
  pvtkey: InputMaybe<String_Comparison_Exp>;
  role: InputMaybe<String_Comparison_Exp>;
  segment: InputMaybe<String_Comparison_Exp>;
  username: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "address" */
  UsersAddressKey = 'users_address_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "pvtkey" */
  UsersPvtkeyKey = 'users_pvtkey_key',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address: InputMaybe<Scalars['String']>;
  casa: InputMaybe<Scalars['String']>;
  cif: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  password: InputMaybe<Scalars['String']>;
  pvtkey: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['String']>;
  segment: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename: 'users_max_fields';
  address: Maybe<Scalars['String']>;
  casa: Maybe<Scalars['String']>;
  cif: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  password: Maybe<Scalars['String']>;
  pvtkey: Maybe<Scalars['String']>;
  role: Maybe<Scalars['String']>;
  segment: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename: 'users_min_fields';
  address: Maybe<Scalars['String']>;
  casa: Maybe<Scalars['String']>;
  cif: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  password: Maybe<Scalars['String']>;
  pvtkey: Maybe<Scalars['String']>;
  role: Maybe<Scalars['String']>;
  segment: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
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
  address: InputMaybe<Order_By>;
  casa: InputMaybe<Order_By>;
  cif: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  password: InputMaybe<Order_By>;
  pvtkey: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  segment: InputMaybe<Order_By>;
  username: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Casa = 'casa',
  /** column name */
  Cif = 'cif',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Pvtkey = 'pvtkey',
  /** column name */
  Role = 'role',
  /** column name */
  Segment = 'segment',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address: InputMaybe<Scalars['String']>;
  casa: InputMaybe<Scalars['String']>;
  cif: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  password: InputMaybe<Scalars['String']>;
  pvtkey: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['String']>;
  segment: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
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
  address: InputMaybe<Scalars['String']>;
  casa: InputMaybe<Scalars['String']>;
  cif: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  password: InputMaybe<Scalars['String']>;
  pvtkey: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['String']>;
  segment: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Casa = 'casa',
  /** column name */
  Cif = 'cif',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Pvtkey = 'pvtkey',
  /** column name */
  Role = 'role',
  /** column name */
  Segment = 'segment',
  /** column name */
  Username = 'username'
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
