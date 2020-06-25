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
  ad?: Maybe<Ad>;
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


export type QueryAdArgs = {
  where: AdWhereUniqueInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
  bookings: Array<Booking>;
  ad?: Maybe<Ad>;
  token?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['ID'];
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  totalPaid: Scalars['Float'];
  pax: Scalars['Int'];
  client: User;
  ad: Ad;
  createdAt: Scalars['DateTime'];
};


export type Ad = {
  __typename?: 'Ad';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  ranking: Scalars['Float'];
  host: User;
  bookings: Array<Booking>;
  blockedDays: Array<BlockedDay>;
  createdAt: Scalars['DateTime'];
};

export type BlockedDay = {
  __typename?: 'BlockedDay';
  id: Scalars['ID'];
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  byBooking?: Maybe<Scalars['Boolean']>;
  ad: Ad;
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
  bookings_every?: Maybe<BookingWhereInput>;
  bookings_some?: Maybe<BookingWhereInput>;
  bookings_none?: Maybe<BookingWhereInput>;
  blockedDays_every?: Maybe<BlockedDayWhereInput>;
  blockedDays_some?: Maybe<BlockedDayWhereInput>;
  blockedDays_none?: Maybe<BlockedDayWhereInput>;
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
  bookings_every?: Maybe<BookingWhereInput>;
  bookings_some?: Maybe<BookingWhereInput>;
  bookings_none?: Maybe<BookingWhereInput>;
  ad?: Maybe<AdWhereInput>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type BookingWhereInput = {
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
  checkin?: Maybe<Scalars['DateTime']>;
  checkin_not?: Maybe<Scalars['DateTime']>;
  checkin_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_lt?: Maybe<Scalars['DateTime']>;
  checkin_lte?: Maybe<Scalars['DateTime']>;
  checkin_gt?: Maybe<Scalars['DateTime']>;
  checkin_gte?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  checkout_not?: Maybe<Scalars['DateTime']>;
  checkout_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_lt?: Maybe<Scalars['DateTime']>;
  checkout_lte?: Maybe<Scalars['DateTime']>;
  checkout_gt?: Maybe<Scalars['DateTime']>;
  checkout_gte?: Maybe<Scalars['DateTime']>;
  totalPaid?: Maybe<Scalars['Float']>;
  totalPaid_not?: Maybe<Scalars['Float']>;
  totalPaid_in?: Maybe<Array<Scalars['Float']>>;
  totalPaid_not_in?: Maybe<Array<Scalars['Float']>>;
  totalPaid_lt?: Maybe<Scalars['Float']>;
  totalPaid_lte?: Maybe<Scalars['Float']>;
  totalPaid_gt?: Maybe<Scalars['Float']>;
  totalPaid_gte?: Maybe<Scalars['Float']>;
  pax?: Maybe<Scalars['Int']>;
  pax_not?: Maybe<Scalars['Int']>;
  pax_in?: Maybe<Array<Scalars['Int']>>;
  pax_not_in?: Maybe<Array<Scalars['Int']>>;
  pax_lt?: Maybe<Scalars['Int']>;
  pax_lte?: Maybe<Scalars['Int']>;
  pax_gt?: Maybe<Scalars['Int']>;
  pax_gte?: Maybe<Scalars['Int']>;
  client?: Maybe<UserWhereInput>;
  ad?: Maybe<AdWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<BookingWhereInput>>;
  OR?: Maybe<Array<BookingWhereInput>>;
  NOT?: Maybe<Array<BookingWhereInput>>;
};

export type BlockedDayWhereInput = {
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
  checkin?: Maybe<Scalars['DateTime']>;
  checkin_not?: Maybe<Scalars['DateTime']>;
  checkin_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_lt?: Maybe<Scalars['DateTime']>;
  checkin_lte?: Maybe<Scalars['DateTime']>;
  checkin_gt?: Maybe<Scalars['DateTime']>;
  checkin_gte?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  checkout_not?: Maybe<Scalars['DateTime']>;
  checkout_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_lt?: Maybe<Scalars['DateTime']>;
  checkout_lte?: Maybe<Scalars['DateTime']>;
  checkout_gt?: Maybe<Scalars['DateTime']>;
  checkout_gte?: Maybe<Scalars['DateTime']>;
  byBooking?: Maybe<Scalars['Boolean']>;
  byBooking_not?: Maybe<Scalars['Boolean']>;
  ad?: Maybe<AdWhereInput>;
  AND?: Maybe<Array<BlockedDayWhereInput>>;
  OR?: Maybe<Array<BlockedDayWhereInput>>;
  NOT?: Maybe<Array<BlockedDayWhereInput>>;
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

export type AdWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signIn?: Maybe<User>;
  signUp?: Maybe<User>;
  createBooking: Booking;
  updateBlockedDay?: Maybe<BlockedDay>;
  deleteBlockedDay?: Maybe<BlockedDay>;
  updateAvailability: Scalars['Boolean'];
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationSignUpArgs = {
  data: SignUpInput;
};


export type MutationCreateBookingArgs = {
  data: BookingInput;
};


export type MutationUpdateBlockedDayArgs = {
  data: BlockedDayUpdateInput;
  where: BlockedDayWhereUniqueInput;
};


export type MutationDeleteBlockedDayArgs = {
  where: BlockedDayWhereUniqueInput;
};


export type MutationUpdateAvailabilityArgs = {
  data: UpdateAvailableInput;
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

export type BookingInput = {
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  clientId: Scalars['String'];
  pax: Scalars['Int'];
  adId: Scalars['String'];
};

export type BlockedDayUpdateInput = {
  checkin?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  byBooking?: Maybe<Scalars['Boolean']>;
  ad?: Maybe<AdUpdateOneRequiredWithoutBlockedDaysInput>;
};

export type AdUpdateOneRequiredWithoutBlockedDaysInput = {
  create?: Maybe<AdCreateWithoutBlockedDaysInput>;
  update?: Maybe<AdUpdateWithoutBlockedDaysDataInput>;
  upsert?: Maybe<AdUpsertWithoutBlockedDaysInput>;
  connect?: Maybe<AdWhereUniqueInput>;
};

export type AdCreateWithoutBlockedDaysInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  ranking: Scalars['Float'];
  host: UserCreateOneWithoutAdInput;
  bookings?: Maybe<BookingCreateManyWithoutAdInput>;
};

export type UserCreateOneWithoutAdInput = {
  create?: Maybe<UserCreateWithoutAdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutAdInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
  bookings?: Maybe<BookingCreateManyWithoutClientInput>;
  token?: Maybe<Scalars['String']>;
};

export type BookingCreateManyWithoutClientInput = {
  create?: Maybe<Array<BookingCreateWithoutClientInput>>;
  connect?: Maybe<Array<BookingWhereUniqueInput>>;
};

export type BookingCreateWithoutClientInput = {
  id?: Maybe<Scalars['ID']>;
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  totalPaid: Scalars['Float'];
  pax: Scalars['Int'];
  ad: AdCreateOneWithoutBookingsInput;
};

export type AdCreateOneWithoutBookingsInput = {
  create?: Maybe<AdCreateWithoutBookingsInput>;
  connect?: Maybe<AdWhereUniqueInput>;
};

export type AdCreateWithoutBookingsInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  ranking: Scalars['Float'];
  host: UserCreateOneWithoutAdInput;
  blockedDays?: Maybe<BlockedDayCreateManyWithoutAdInput>;
};

export type BlockedDayCreateManyWithoutAdInput = {
  create?: Maybe<Array<BlockedDayCreateWithoutAdInput>>;
  connect?: Maybe<Array<BlockedDayWhereUniqueInput>>;
};

export type BlockedDayCreateWithoutAdInput = {
  id?: Maybe<Scalars['ID']>;
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  byBooking?: Maybe<Scalars['Boolean']>;
};

export type BlockedDayWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BookingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type BookingCreateManyWithoutAdInput = {
  create?: Maybe<Array<BookingCreateWithoutAdInput>>;
  connect?: Maybe<Array<BookingWhereUniqueInput>>;
};

export type BookingCreateWithoutAdInput = {
  id?: Maybe<Scalars['ID']>;
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  totalPaid: Scalars['Float'];
  pax: Scalars['Int'];
  client: UserCreateOneWithoutBookingsInput;
};

export type UserCreateOneWithoutBookingsInput = {
  create?: Maybe<UserCreateWithoutBookingsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutBookingsInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
  ad?: Maybe<AdCreateOneWithoutHostInput>;
  token?: Maybe<Scalars['String']>;
};

export type AdCreateOneWithoutHostInput = {
  create?: Maybe<AdCreateWithoutHostInput>;
  connect?: Maybe<AdWhereUniqueInput>;
};

export type AdCreateWithoutHostInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  ranking: Scalars['Float'];
  bookings?: Maybe<BookingCreateManyWithoutAdInput>;
  blockedDays?: Maybe<BlockedDayCreateManyWithoutAdInput>;
};

export type AdUpdateWithoutBlockedDaysDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  ranking?: Maybe<Scalars['Float']>;
  host?: Maybe<UserUpdateOneRequiredWithoutAdInput>;
  bookings?: Maybe<BookingUpdateManyWithoutAdInput>;
};

export type UserUpdateOneRequiredWithoutAdInput = {
  create?: Maybe<UserCreateWithoutAdInput>;
  update?: Maybe<UserUpdateWithoutAdDataInput>;
  upsert?: Maybe<UserUpsertWithoutAdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutAdDataInput = {
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  bookings?: Maybe<BookingUpdateManyWithoutClientInput>;
  token?: Maybe<Scalars['String']>;
};

export type BookingUpdateManyWithoutClientInput = {
  create?: Maybe<Array<BookingCreateWithoutClientInput>>;
  delete?: Maybe<Array<BookingWhereUniqueInput>>;
  connect?: Maybe<Array<BookingWhereUniqueInput>>;
  set?: Maybe<Array<BookingWhereUniqueInput>>;
  disconnect?: Maybe<Array<BookingWhereUniqueInput>>;
  update?: Maybe<Array<BookingUpdateWithWhereUniqueWithoutClientInput>>;
  upsert?: Maybe<Array<BookingUpsertWithWhereUniqueWithoutClientInput>>;
  deleteMany?: Maybe<Array<BookingScalarWhereInput>>;
  updateMany?: Maybe<Array<BookingUpdateManyWithWhereNestedInput>>;
};

export type BookingUpdateWithWhereUniqueWithoutClientInput = {
  where: BookingWhereUniqueInput;
  data: BookingUpdateWithoutClientDataInput;
};

export type BookingUpdateWithoutClientDataInput = {
  checkin?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  totalPaid?: Maybe<Scalars['Float']>;
  pax?: Maybe<Scalars['Int']>;
  ad?: Maybe<AdUpdateOneRequiredWithoutBookingsInput>;
};

export type AdUpdateOneRequiredWithoutBookingsInput = {
  create?: Maybe<AdCreateWithoutBookingsInput>;
  update?: Maybe<AdUpdateWithoutBookingsDataInput>;
  upsert?: Maybe<AdUpsertWithoutBookingsInput>;
  connect?: Maybe<AdWhereUniqueInput>;
};

export type AdUpdateWithoutBookingsDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  ranking?: Maybe<Scalars['Float']>;
  host?: Maybe<UserUpdateOneRequiredWithoutAdInput>;
  blockedDays?: Maybe<BlockedDayUpdateManyWithoutAdInput>;
};

export type BlockedDayUpdateManyWithoutAdInput = {
  create?: Maybe<Array<BlockedDayCreateWithoutAdInput>>;
  delete?: Maybe<Array<BlockedDayWhereUniqueInput>>;
  connect?: Maybe<Array<BlockedDayWhereUniqueInput>>;
  set?: Maybe<Array<BlockedDayWhereUniqueInput>>;
  disconnect?: Maybe<Array<BlockedDayWhereUniqueInput>>;
  update?: Maybe<Array<BlockedDayUpdateWithWhereUniqueWithoutAdInput>>;
  upsert?: Maybe<Array<BlockedDayUpsertWithWhereUniqueWithoutAdInput>>;
  deleteMany?: Maybe<Array<BlockedDayScalarWhereInput>>;
  updateMany?: Maybe<Array<BlockedDayUpdateManyWithWhereNestedInput>>;
};

export type BlockedDayUpdateWithWhereUniqueWithoutAdInput = {
  where: BlockedDayWhereUniqueInput;
  data: BlockedDayUpdateWithoutAdDataInput;
};

export type BlockedDayUpdateWithoutAdDataInput = {
  checkin?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  byBooking?: Maybe<Scalars['Boolean']>;
};

export type BlockedDayUpsertWithWhereUniqueWithoutAdInput = {
  where: BlockedDayWhereUniqueInput;
  update: BlockedDayUpdateWithoutAdDataInput;
  create: BlockedDayCreateWithoutAdInput;
};

export type BlockedDayScalarWhereInput = {
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
  checkin?: Maybe<Scalars['DateTime']>;
  checkin_not?: Maybe<Scalars['DateTime']>;
  checkin_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_lt?: Maybe<Scalars['DateTime']>;
  checkin_lte?: Maybe<Scalars['DateTime']>;
  checkin_gt?: Maybe<Scalars['DateTime']>;
  checkin_gte?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  checkout_not?: Maybe<Scalars['DateTime']>;
  checkout_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_lt?: Maybe<Scalars['DateTime']>;
  checkout_lte?: Maybe<Scalars['DateTime']>;
  checkout_gt?: Maybe<Scalars['DateTime']>;
  checkout_gte?: Maybe<Scalars['DateTime']>;
  byBooking?: Maybe<Scalars['Boolean']>;
  byBooking_not?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<BlockedDayScalarWhereInput>>;
  OR?: Maybe<Array<BlockedDayScalarWhereInput>>;
  NOT?: Maybe<Array<BlockedDayScalarWhereInput>>;
};

export type BlockedDayUpdateManyWithWhereNestedInput = {
  where: BlockedDayScalarWhereInput;
  data: BlockedDayUpdateManyDataInput;
};

export type BlockedDayUpdateManyDataInput = {
  checkin?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  byBooking?: Maybe<Scalars['Boolean']>;
};

export type AdUpsertWithoutBookingsInput = {
  update: AdUpdateWithoutBookingsDataInput;
  create: AdCreateWithoutBookingsInput;
};

export type BookingUpsertWithWhereUniqueWithoutClientInput = {
  where: BookingWhereUniqueInput;
  update: BookingUpdateWithoutClientDataInput;
  create: BookingCreateWithoutClientInput;
};

export type BookingScalarWhereInput = {
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
  checkin?: Maybe<Scalars['DateTime']>;
  checkin_not?: Maybe<Scalars['DateTime']>;
  checkin_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkin_lt?: Maybe<Scalars['DateTime']>;
  checkin_lte?: Maybe<Scalars['DateTime']>;
  checkin_gt?: Maybe<Scalars['DateTime']>;
  checkin_gte?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  checkout_not?: Maybe<Scalars['DateTime']>;
  checkout_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_not_in?: Maybe<Array<Scalars['DateTime']>>;
  checkout_lt?: Maybe<Scalars['DateTime']>;
  checkout_lte?: Maybe<Scalars['DateTime']>;
  checkout_gt?: Maybe<Scalars['DateTime']>;
  checkout_gte?: Maybe<Scalars['DateTime']>;
  totalPaid?: Maybe<Scalars['Float']>;
  totalPaid_not?: Maybe<Scalars['Float']>;
  totalPaid_in?: Maybe<Array<Scalars['Float']>>;
  totalPaid_not_in?: Maybe<Array<Scalars['Float']>>;
  totalPaid_lt?: Maybe<Scalars['Float']>;
  totalPaid_lte?: Maybe<Scalars['Float']>;
  totalPaid_gt?: Maybe<Scalars['Float']>;
  totalPaid_gte?: Maybe<Scalars['Float']>;
  pax?: Maybe<Scalars['Int']>;
  pax_not?: Maybe<Scalars['Int']>;
  pax_in?: Maybe<Array<Scalars['Int']>>;
  pax_not_in?: Maybe<Array<Scalars['Int']>>;
  pax_lt?: Maybe<Scalars['Int']>;
  pax_lte?: Maybe<Scalars['Int']>;
  pax_gt?: Maybe<Scalars['Int']>;
  pax_gte?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<BookingScalarWhereInput>>;
  OR?: Maybe<Array<BookingScalarWhereInput>>;
  NOT?: Maybe<Array<BookingScalarWhereInput>>;
};

export type BookingUpdateManyWithWhereNestedInput = {
  where: BookingScalarWhereInput;
  data: BookingUpdateManyDataInput;
};

export type BookingUpdateManyDataInput = {
  checkin?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  totalPaid?: Maybe<Scalars['Float']>;
  pax?: Maybe<Scalars['Int']>;
};

export type UserUpsertWithoutAdInput = {
  update: UserUpdateWithoutAdDataInput;
  create: UserCreateWithoutAdInput;
};

export type BookingUpdateManyWithoutAdInput = {
  create?: Maybe<Array<BookingCreateWithoutAdInput>>;
  delete?: Maybe<Array<BookingWhereUniqueInput>>;
  connect?: Maybe<Array<BookingWhereUniqueInput>>;
  set?: Maybe<Array<BookingWhereUniqueInput>>;
  disconnect?: Maybe<Array<BookingWhereUniqueInput>>;
  update?: Maybe<Array<BookingUpdateWithWhereUniqueWithoutAdInput>>;
  upsert?: Maybe<Array<BookingUpsertWithWhereUniqueWithoutAdInput>>;
  deleteMany?: Maybe<Array<BookingScalarWhereInput>>;
  updateMany?: Maybe<Array<BookingUpdateManyWithWhereNestedInput>>;
};

export type BookingUpdateWithWhereUniqueWithoutAdInput = {
  where: BookingWhereUniqueInput;
  data: BookingUpdateWithoutAdDataInput;
};

export type BookingUpdateWithoutAdDataInput = {
  checkin?: Maybe<Scalars['DateTime']>;
  checkout?: Maybe<Scalars['DateTime']>;
  totalPaid?: Maybe<Scalars['Float']>;
  pax?: Maybe<Scalars['Int']>;
  client?: Maybe<UserUpdateOneRequiredWithoutBookingsInput>;
};

export type UserUpdateOneRequiredWithoutBookingsInput = {
  create?: Maybe<UserCreateWithoutBookingsInput>;
  update?: Maybe<UserUpdateWithoutBookingsDataInput>;
  upsert?: Maybe<UserUpsertWithoutBookingsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutBookingsDataInput = {
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  ad?: Maybe<AdUpdateOneWithoutHostInput>;
  token?: Maybe<Scalars['String']>;
};

export type AdUpdateOneWithoutHostInput = {
  create?: Maybe<AdCreateWithoutHostInput>;
  update?: Maybe<AdUpdateWithoutHostDataInput>;
  upsert?: Maybe<AdUpsertWithoutHostInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<AdWhereUniqueInput>;
};

export type AdUpdateWithoutHostDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  ranking?: Maybe<Scalars['Float']>;
  bookings?: Maybe<BookingUpdateManyWithoutAdInput>;
  blockedDays?: Maybe<BlockedDayUpdateManyWithoutAdInput>;
};

export type AdUpsertWithoutHostInput = {
  update: AdUpdateWithoutHostDataInput;
  create: AdCreateWithoutHostInput;
};

export type UserUpsertWithoutBookingsInput = {
  update: UserUpdateWithoutBookingsDataInput;
  create: UserCreateWithoutBookingsInput;
};

export type BookingUpsertWithWhereUniqueWithoutAdInput = {
  where: BookingWhereUniqueInput;
  update: BookingUpdateWithoutAdDataInput;
  create: BookingCreateWithoutAdInput;
};

export type AdUpsertWithoutBlockedDaysInput = {
  update: AdUpdateWithoutBlockedDaysDataInput;
  create: AdCreateWithoutBlockedDaysInput;
};

export type UpdateAvailableInput = {
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  ops: OpsEnum;
  adId: Scalars['String'];
};

export enum OpsEnum {
  Blocked = 'BLOCKED',
  Available = 'AVAILABLE'
}

export type UpdateAvailabilityMutationVariables = Exact<{
  data: UpdateAvailableInput;
}>;


export type UpdateAvailabilityMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateAvailability'>
);

export type CreateBookingMutationVariables = Exact<{
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  clientId: Scalars['String'];
  pax: Scalars['Int'];
  adId: Scalars['String'];
}>;


export type CreateBookingMutation = (
  { __typename?: 'Mutation' }
  & { createBooking: (
    { __typename?: 'Booking' }
    & Pick<Booking, 'id' | 'checkin' | 'checkout' | 'totalPaid' | 'createdAt'>
  ) }
);

export type ListAdsQueryVariables = Exact<{
  orderBy?: Maybe<AdOrderByInput>;
  first?: Maybe<Scalars['Int']>;
}>;


export type ListAdsQuery = (
  { __typename?: 'Query' }
  & { ads: Array<Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'description' | 'image' | 'price' | 'ranking' | 'createdAt'>
    & { host: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName'>
    ) }
  )>> }
);

export type SelectAdByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SelectAdByIdQuery = (
  { __typename?: 'Query' }
  & { ad?: Maybe<(
    { __typename?: 'Ad' }
    & Pick<Ad, 'id' | 'title' | 'description' | 'image' | 'price' | 'ranking'>
    & { blockedDays: Array<(
      { __typename?: 'BlockedDay' }
      & Pick<BlockedDay, 'id' | 'checkin' | 'checkout' | 'byBooking'>
    )> }
  )> }
);

export type CurrentAvailabilityQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAvailabilityQuery = (
  { __typename?: 'Query' }
  & { currentAvailability?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { ad?: Maybe<(
      { __typename?: 'Ad' }
      & Pick<Ad, 'id' | 'title' | 'ranking'>
      & { blockedDays: Array<(
        { __typename?: 'BlockedDay' }
        & Pick<BlockedDay, 'id' | 'checkin' | 'checkout' | 'byBooking'>
      )> }
    )> }
  )> }
);

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

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'fullName' | 'password' | 'createdAt' | 'role' | 'phone' | 'token'>
    & { bookings: Array<(
      { __typename?: 'Booking' }
      & Pick<Booking, 'id'>
    )> }
  )> }
);

export type CurrentUserBookingsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserBookingsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'fullName' | 'createdAt' | 'role' | 'phone' | 'token'>
    & { bookings: Array<(
      { __typename?: 'Booking' }
      & Pick<Booking, 'id' | 'checkin' | 'checkout' | 'totalPaid' | 'createdAt'>
      & { client: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email' | 'fullName' | 'role'>
      ), ad: (
        { __typename?: 'Ad' }
        & Pick<Ad, 'id' | 'title' | 'description' | 'image' | 'createdAt'>
        & { host: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email' | 'fullName'>
        ) }
      ) }
    )> }
  )> }
);


export const UpdateAvailabilityDocument = gql`
    mutation updateAvailability($data: UpdateAvailableInput!) {
  updateAvailability(data: $data)
}
    `;
export type UpdateAvailabilityMutationFn = ApolloReactCommon.MutationFunction<UpdateAvailabilityMutation, UpdateAvailabilityMutationVariables>;

/**
 * __useUpdateAvailabilityMutation__
 *
 * To run a mutation, you first call `useUpdateAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvailabilityMutation, { data, loading, error }] = useUpdateAvailabilityMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAvailabilityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAvailabilityMutation, UpdateAvailabilityMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAvailabilityMutation, UpdateAvailabilityMutationVariables>(UpdateAvailabilityDocument, baseOptions);
      }
export type UpdateAvailabilityMutationHookResult = ReturnType<typeof useUpdateAvailabilityMutation>;
export type UpdateAvailabilityMutationResult = ApolloReactCommon.MutationResult<UpdateAvailabilityMutation>;
export type UpdateAvailabilityMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAvailabilityMutation, UpdateAvailabilityMutationVariables>;
export const CreateBookingDocument = gql`
    mutation CreateBooking($checkin: DateTime!, $checkout: DateTime!, $clientId: String!, $pax: Int!, $adId: String!) {
  createBooking(data: {checkin: $checkin, checkout: $checkout, clientId: $clientId, pax: $pax, adId: $adId}) {
    id
    checkin
    checkout
    totalPaid
    createdAt
  }
}
    `;
export type CreateBookingMutationFn = ApolloReactCommon.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      checkin: // value for 'checkin'
 *      checkout: // value for 'checkout'
 *      clientId: // value for 'clientId'
 *      pax: // value for 'pax'
 *      adId: // value for 'adId'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, baseOptions);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = ApolloReactCommon.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const ListAdsDocument = gql`
    query listAds($orderBy: AdOrderByInput, $first: Int) {
  ads(orderBy: $orderBy, first: $first) {
    id
    title
    description
    image
    price
    ranking
    host {
      id
      fullName
    }
    createdAt
  }
}
    `;

/**
 * __useListAdsQuery__
 *
 * To run a query within a React component, call `useListAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useListAdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListAdsQuery, ListAdsQueryVariables>) {
        return ApolloReactHooks.useQuery<ListAdsQuery, ListAdsQueryVariables>(ListAdsDocument, baseOptions);
      }
export function useListAdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAdsQuery, ListAdsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListAdsQuery, ListAdsQueryVariables>(ListAdsDocument, baseOptions);
        }
export type ListAdsQueryHookResult = ReturnType<typeof useListAdsQuery>;
export type ListAdsLazyQueryHookResult = ReturnType<typeof useListAdsLazyQuery>;
export type ListAdsQueryResult = ApolloReactCommon.QueryResult<ListAdsQuery, ListAdsQueryVariables>;
export const SelectAdByIdDocument = gql`
    query selectAdById($id: ID!) {
  ad(where: {id: $id}) {
    id
    title
    description
    image
    price
    ranking
    blockedDays {
      id
      checkin
      checkout
      byBooking
    }
  }
}
    `;

/**
 * __useSelectAdByIdQuery__
 *
 * To run a query within a React component, call `useSelectAdByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectAdByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectAdByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSelectAdByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectAdByIdQuery, SelectAdByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<SelectAdByIdQuery, SelectAdByIdQueryVariables>(SelectAdByIdDocument, baseOptions);
      }
export function useSelectAdByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectAdByIdQuery, SelectAdByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SelectAdByIdQuery, SelectAdByIdQueryVariables>(SelectAdByIdDocument, baseOptions);
        }
export type SelectAdByIdQueryHookResult = ReturnType<typeof useSelectAdByIdQuery>;
export type SelectAdByIdLazyQueryHookResult = ReturnType<typeof useSelectAdByIdLazyQuery>;
export type SelectAdByIdQueryResult = ApolloReactCommon.QueryResult<SelectAdByIdQuery, SelectAdByIdQueryVariables>;
export const CurrentAvailabilityDocument = gql`
    query currentAvailability {
  currentAvailability: currentUser {
    id
    ad {
      id
      title
      ranking
      blockedDays {
        id
        checkin
        checkout
        byBooking
      }
    }
  }
}
    `;

/**
 * __useCurrentAvailabilityQuery__
 *
 * To run a query within a React component, call `useCurrentAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentAvailabilityQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentAvailabilityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentAvailabilityQuery, CurrentAvailabilityQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentAvailabilityQuery, CurrentAvailabilityQueryVariables>(CurrentAvailabilityDocument, baseOptions);
      }
export function useCurrentAvailabilityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentAvailabilityQuery, CurrentAvailabilityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentAvailabilityQuery, CurrentAvailabilityQueryVariables>(CurrentAvailabilityDocument, baseOptions);
        }
export type CurrentAvailabilityQueryHookResult = ReturnType<typeof useCurrentAvailabilityQuery>;
export type CurrentAvailabilityLazyQueryHookResult = ReturnType<typeof useCurrentAvailabilityLazyQuery>;
export type CurrentAvailabilityQueryResult = ApolloReactCommon.QueryResult<CurrentAvailabilityQuery, CurrentAvailabilityQueryVariables>;
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
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    email
    fullName
    password
    createdAt
    role
    phone
    token
    bookings {
      id
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const CurrentUserBookingsDocument = gql`
    query currentUserBookings {
  currentUser {
    id
    email
    fullName
    createdAt
    role
    phone
    token
    bookings {
      id
      checkin
      checkout
      totalPaid
      createdAt
      client {
        id
        email
        fullName
        role
      }
      ad {
        id
        title
        description
        image
        createdAt
        host {
          id
          email
          fullName
        }
      }
    }
  }
}
    `;

/**
 * __useCurrentUserBookingsQuery__
 *
 * To run a query within a React component, call `useCurrentUserBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserBookingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserBookingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserBookingsQuery, CurrentUserBookingsQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserBookingsQuery, CurrentUserBookingsQueryVariables>(CurrentUserBookingsDocument, baseOptions);
      }
export function useCurrentUserBookingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserBookingsQuery, CurrentUserBookingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserBookingsQuery, CurrentUserBookingsQueryVariables>(CurrentUserBookingsDocument, baseOptions);
        }
export type CurrentUserBookingsQueryHookResult = ReturnType<typeof useCurrentUserBookingsQuery>;
export type CurrentUserBookingsLazyQueryHookResult = ReturnType<typeof useCurrentUserBookingsLazyQuery>;
export type CurrentUserBookingsQueryResult = ApolloReactCommon.QueryResult<CurrentUserBookingsQuery, CurrentUserBookingsQueryVariables>;

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
    