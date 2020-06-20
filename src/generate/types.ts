import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  ads: Array<Maybe<Ad>>;
};


export type QueryAdsArgs = {
  where?: Maybe<AdWhereInput>;
  orderBy?: Maybe<AdOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
  createdAt: Scalars['DateTime'];
  token?: Maybe<Scalars['String']>;
};


export type AdWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Scalars['String']>>;
  image_not_in?: Maybe<Array<Scalars['String']>>;
  image_lt?: Maybe<Scalars['String']>;
  image_lte?: Maybe<Scalars['String']>;
  image_gt?: Maybe<Scalars['String']>;
  image_gte?: Maybe<Scalars['String']>;
  image_contains?: Maybe<Scalars['String']>;
  image_not_contains?: Maybe<Scalars['String']>;
  image_starts_with?: Maybe<Scalars['String']>;
  image_not_starts_with?: Maybe<Scalars['String']>;
  image_ends_with?: Maybe<Scalars['String']>;
  image_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  price_not?: Maybe<Scalars['Int']>;
  price_in?: Maybe<Array<Scalars['Int']>>;
  price_not_in?: Maybe<Array<Scalars['Int']>>;
  price_lt?: Maybe<Scalars['Int']>;
  price_lte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  price_gte?: Maybe<Scalars['Int']>;
  ranking?: Maybe<Scalars['Float']>;
  ranking_not?: Maybe<Scalars['Float']>;
  ranking_in?: Maybe<Array<Scalars['Float']>>;
  ranking_not_in?: Maybe<Array<Scalars['Float']>>;
  ranking_lt?: Maybe<Scalars['Float']>;
  ranking_lte?: Maybe<Scalars['Float']>;
  ranking_gt?: Maybe<Scalars['Float']>;
  ranking_gte?: Maybe<Scalars['Float']>;
  host?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<AdWhereInput>>;
  OR?: Maybe<Array<AdWhereInput>>;
  NOT?: Maybe<Array<AdWhereInput>>;
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  fullName_not?: Maybe<Scalars['String']>;
  fullName_in?: Maybe<Array<Scalars['String']>>;
  fullName_not_in?: Maybe<Array<Scalars['String']>>;
  fullName_lt?: Maybe<Scalars['String']>;
  fullName_lte?: Maybe<Scalars['String']>;
  fullName_gt?: Maybe<Scalars['String']>;
  fullName_gte?: Maybe<Scalars['String']>;
  fullName_contains?: Maybe<Scalars['String']>;
  fullName_not_contains?: Maybe<Scalars['String']>;
  fullName_starts_with?: Maybe<Scalars['String']>;
  fullName_not_starts_with?: Maybe<Scalars['String']>;
  fullName_ends_with?: Maybe<Scalars['String']>;
  fullName_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_lt?: Maybe<Scalars['String']>;
  password_lte?: Maybe<Scalars['String']>;
  password_gt?: Maybe<Scalars['String']>;
  password_gte?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Scalars['String']>>;
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  phone_lt?: Maybe<Scalars['String']>;
  phone_lte?: Maybe<Scalars['String']>;
  phone_gt?: Maybe<Scalars['String']>;
  phone_gte?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  role_not?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Scalars['String']>>;
  role_not_in?: Maybe<Array<Scalars['String']>>;
  role_lt?: Maybe<Scalars['String']>;
  role_lte?: Maybe<Scalars['String']>;
  role_gt?: Maybe<Scalars['String']>;
  role_gte?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_not_contains?: Maybe<Scalars['String']>;
  role_starts_with?: Maybe<Scalars['String']>;
  role_not_starts_with?: Maybe<Scalars['String']>;
  role_ends_with?: Maybe<Scalars['String']>;
  role_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_lt?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export enum AdOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  RankingAsc = 'ranking_ASC',
  RankingDesc = 'ranking_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type Ad = {
  __typename?: 'Ad';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  ranking: Scalars['Float'];
  host: User;
  createdAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signIn?: Maybe<User>;
  signUp?: Maybe<User>;
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationSignUpArgs = {
  data: SignUpInput;
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'password' | 'role' | 'createdAt' | 'token'>
  )> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'fullName' | 'createdAt' | 'role' | 'token'>
  )> }
);


export const SignUpDocument = gql`
    mutation signUp($email: String!, $fullName: String!, $password: String!, $phone: String!) {
  signUp(data: {email: $email, fullName: $fullName, password: $password, phone: $phone}) {
    id
    email
    password
    role
    createdAt
    token
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      fullName: // value for 'fullName'
 *      password: // value for 'password'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation signIn($email: String!, $password: String!) {
  signIn(data: {email: $email, password: $password}) {
    id
    email
    fullName
    createdAt
    role
    token
  }
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    