
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Installer
 * 
 */
export type Installer = $Result.DefaultSelection<Prisma.$InstallerPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Installation
 * 
 */
export type Installation = $Result.DefaultSelection<Prisma.$InstallationPayload>
/**
 * Model SubscriptionApplication
 * 
 */
export type SubscriptionApplication = $Result.DefaultSelection<Prisma.$SubscriptionApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InstallationStatus: {
  DETAILS_COMPLETED: 'DETAILS_COMPLETED',
  SIGNATURE_NEEDED: 'SIGNATURE_NEEDED',
  CONTRACT_SIGNED: 'CONTRACT_SIGNED'
};

export type InstallationStatus = (typeof InstallationStatus)[keyof typeof InstallationStatus]

}

export type InstallationStatus = $Enums.InstallationStatus

export const InstallationStatus: typeof $Enums.InstallationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.installer`: Exposes CRUD operations for the **Installer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Installers
    * const installers = await prisma.installer.findMany()
    * ```
    */
  get installer(): Prisma.InstallerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.installation`: Exposes CRUD operations for the **Installation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Installations
    * const installations = await prisma.installation.findMany()
    * ```
    */
  get installation(): Prisma.InstallationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionApplication`: Exposes CRUD operations for the **SubscriptionApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionApplications
    * const subscriptionApplications = await prisma.subscriptionApplication.findMany()
    * ```
    */
  get subscriptionApplication(): Prisma.SubscriptionApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Blog: 'Blog',
    Installer: 'Installer',
    Subscription: 'Subscription',
    Customer: 'Customer',
    Address: 'Address',
    Installation: 'Installation',
    SubscriptionApplication: 'SubscriptionApplication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "blog" | "installer" | "subscription" | "customer" | "address" | "installation" | "subscriptionApplication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Installer: {
        payload: Prisma.$InstallerPayload<ExtArgs>
        fields: Prisma.InstallerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstallerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstallerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>
          }
          findFirst: {
            args: Prisma.InstallerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstallerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>
          }
          findMany: {
            args: Prisma.InstallerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>[]
          }
          create: {
            args: Prisma.InstallerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>
          }
          createMany: {
            args: Prisma.InstallerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstallerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>[]
          }
          delete: {
            args: Prisma.InstallerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>
          }
          update: {
            args: Prisma.InstallerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>
          }
          deleteMany: {
            args: Prisma.InstallerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstallerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstallerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>[]
          }
          upsert: {
            args: Prisma.InstallerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallerPayload>
          }
          aggregate: {
            args: Prisma.InstallerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstaller>
          }
          groupBy: {
            args: Prisma.InstallerGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstallerGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstallerCountArgs<ExtArgs>
            result: $Utils.Optional<InstallerCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Installation: {
        payload: Prisma.$InstallationPayload<ExtArgs>
        fields: Prisma.InstallationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstallationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstallationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          findFirst: {
            args: Prisma.InstallationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstallationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          findMany: {
            args: Prisma.InstallationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>[]
          }
          create: {
            args: Prisma.InstallationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          createMany: {
            args: Prisma.InstallationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstallationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>[]
          }
          delete: {
            args: Prisma.InstallationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          update: {
            args: Prisma.InstallationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          deleteMany: {
            args: Prisma.InstallationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstallationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstallationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>[]
          }
          upsert: {
            args: Prisma.InstallationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          aggregate: {
            args: Prisma.InstallationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstallation>
          }
          groupBy: {
            args: Prisma.InstallationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstallationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstallationCountArgs<ExtArgs>
            result: $Utils.Optional<InstallationCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionApplication: {
        payload: Prisma.$SubscriptionApplicationPayload<ExtArgs>
        fields: Prisma.SubscriptionApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>
          }
          findMany: {
            args: Prisma.SubscriptionApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>[]
          }
          create: {
            args: Prisma.SubscriptionApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>
          }
          createMany: {
            args: Prisma.SubscriptionApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>
          }
          update: {
            args: Prisma.SubscriptionApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionApplicationPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionApplication>
          }
          groupBy: {
            args: Prisma.SubscriptionApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    blog?: BlogOmit
    installer?: InstallerOmit
    subscription?: SubscriptionOmit
    customer?: CustomerOmit
    address?: AddressOmit
    installation?: InstallationOmit
    subscriptionApplication?: SubscriptionApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    blogs: number
    accounts: number
    sessions: number
    subscriptionApplications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    subscriptionApplications?: boolean | UserCountOutputTypeCountSubscriptionApplicationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionApplicationWhereInput
  }


  /**
   * Count Type InstallerCountOutputType
   */

  export type InstallerCountOutputType = {
    customers: number
    installations: number
  }

  export type InstallerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | InstallerCountOutputTypeCountCustomersArgs
    installations?: boolean | InstallerCountOutputTypeCountInstallationsArgs
  }

  // Custom InputTypes
  /**
   * InstallerCountOutputType without action
   */
  export type InstallerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallerCountOutputType
     */
    select?: InstallerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstallerCountOutputType without action
   */
  export type InstallerCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * InstallerCountOutputType without action
   */
  export type InstallerCountOutputTypeCountInstallationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallationWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    addresses: number
    installations: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | CustomerCountOutputTypeCountAddressesArgs
    installations?: boolean | CustomerCountOutputTypeCountInstallationsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInstallationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallationWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    installations: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installations?: boolean | AddressCountOutputTypeCountInstallationsArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountInstallationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    mobile: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    mobile: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    mobile: number
    password: number
    firstName: number
    lastName: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    emailVerified: number
    image: number
    isAdmin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    mobile?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    mobile?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    mobile?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string | null
    mobile: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date
    updatedAt: Date
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    isAdmin?: boolean
    blogs?: boolean | User$blogsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    installer?: boolean | User$installerArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    subscriptionApplications?: boolean | User$subscriptionApplicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    mobile?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    isAdmin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "mobile" | "password" | "firstName" | "lastName" | "createdAt" | "updatedAt" | "name" | "email" | "emailVerified" | "image" | "isAdmin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | User$blogsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    installer?: boolean | User$installerArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    subscriptionApplications?: boolean | User$subscriptionApplicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      installer: Prisma.$InstallerPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      subscriptionApplications: Prisma.$SubscriptionApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      mobile: string | null
      password: string | null
      firstName: string | null
      lastName: string | null
      createdAt: Date
      updatedAt: Date
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    installer<T extends User$installerArgs<ExtArgs> = {}>(args?: Subset<T, User$installerArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptionApplications<T extends User$subscriptionApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.installer
   */
  export type User$installerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    where?: InstallerWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.subscriptionApplications
   */
  export type User$subscriptionApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    where?: SubscriptionApplicationWhereInput
    orderBy?: SubscriptionApplicationOrderByWithRelationInput | SubscriptionApplicationOrderByWithRelationInput[]
    cursor?: SubscriptionApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionApplicationScalarFieldEnum | SubscriptionApplicationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    readTime: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    readTime: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    authorId: string | null
    excerpt: string | null
    featured: boolean | null
    imagePath: string | null
    published: boolean | null
    readTime: number | null
    tags: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    authorId: string | null
    excerpt: string | null
    featured: boolean | null
    imagePath: string | null
    published: boolean | null
    readTime: number | null
    tags: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    content: number
    authorId: number
    excerpt: number
    featured: number
    imagePath: number
    published: number
    readTime: number
    tags: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    readTime?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    readTime?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    authorId?: true
    excerpt?: true
    featured?: true
    imagePath?: true
    published?: true
    readTime?: true
    tags?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    authorId?: true
    excerpt?: true
    featured?: true
    imagePath?: true
    published?: true
    readTime?: true
    tags?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    authorId?: true
    excerpt?: true
    featured?: true
    imagePath?: true
    published?: true
    readTime?: true
    tags?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    content: string | null
    authorId: string
    excerpt: string | null
    featured: boolean
    imagePath: string | null
    published: boolean
    readTime: number | null
    tags: string | null
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    excerpt?: boolean
    featured?: boolean
    imagePath?: boolean
    published?: boolean
    readTime?: boolean
    tags?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    excerpt?: boolean
    featured?: boolean
    imagePath?: boolean
    published?: boolean
    readTime?: boolean
    tags?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    excerpt?: boolean
    featured?: boolean
    imagePath?: boolean
    published?: boolean
    readTime?: boolean
    tags?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    excerpt?: boolean
    featured?: boolean
    imagePath?: boolean
    published?: boolean
    readTime?: boolean
    tags?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "content" | "authorId" | "excerpt" | "featured" | "imagePath" | "published" | "readTime" | "tags", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      content: string | null
      authorId: string
      excerpt: string | null
      featured: boolean
      imagePath: string | null
      published: boolean
      readTime: number | null
      tags: string | null
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly authorId: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly featured: FieldRef<"Blog", 'Boolean'>
    readonly imagePath: FieldRef<"Blog", 'String'>
    readonly published: FieldRef<"Blog", 'Boolean'>
    readonly readTime: FieldRef<"Blog", 'Int'>
    readonly tags: FieldRef<"Blog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Installer
   */

  export type AggregateInstaller = {
    _count: InstallerCountAggregateOutputType | null
    _avg: InstallerAvgAggregateOutputType | null
    _sum: InstallerSumAggregateOutputType | null
    _min: InstallerMinAggregateOutputType | null
    _max: InstallerMaxAggregateOutputType | null
  }

  export type InstallerAvgAggregateOutputType = {
    id: number | null
  }

  export type InstallerSumAggregateOutputType = {
    id: number | null
  }

  export type InstallerMinAggregateOutputType = {
    id: number | null
    userId: string | null
    brandPhotoPath: string | null
    isActive: boolean | null
  }

  export type InstallerMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    brandPhotoPath: string | null
    isActive: boolean | null
  }

  export type InstallerCountAggregateOutputType = {
    id: number
    userId: number
    brandPhotoPath: number
    isActive: number
    _all: number
  }


  export type InstallerAvgAggregateInputType = {
    id?: true
  }

  export type InstallerSumAggregateInputType = {
    id?: true
  }

  export type InstallerMinAggregateInputType = {
    id?: true
    userId?: true
    brandPhotoPath?: true
    isActive?: true
  }

  export type InstallerMaxAggregateInputType = {
    id?: true
    userId?: true
    brandPhotoPath?: true
    isActive?: true
  }

  export type InstallerCountAggregateInputType = {
    id?: true
    userId?: true
    brandPhotoPath?: true
    isActive?: true
    _all?: true
  }

  export type InstallerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installer to aggregate.
     */
    where?: InstallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installers to fetch.
     */
    orderBy?: InstallerOrderByWithRelationInput | InstallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Installers
    **/
    _count?: true | InstallerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstallerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstallerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallerMaxAggregateInputType
  }

  export type GetInstallerAggregateType<T extends InstallerAggregateArgs> = {
        [P in keyof T & keyof AggregateInstaller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstaller[P]>
      : GetScalarType<T[P], AggregateInstaller[P]>
  }




  export type InstallerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallerWhereInput
    orderBy?: InstallerOrderByWithAggregationInput | InstallerOrderByWithAggregationInput[]
    by: InstallerScalarFieldEnum[] | InstallerScalarFieldEnum
    having?: InstallerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallerCountAggregateInputType | true
    _avg?: InstallerAvgAggregateInputType
    _sum?: InstallerSumAggregateInputType
    _min?: InstallerMinAggregateInputType
    _max?: InstallerMaxAggregateInputType
  }

  export type InstallerGroupByOutputType = {
    id: number
    userId: string
    brandPhotoPath: string | null
    isActive: boolean
    _count: InstallerCountAggregateOutputType | null
    _avg: InstallerAvgAggregateOutputType | null
    _sum: InstallerSumAggregateOutputType | null
    _min: InstallerMinAggregateOutputType | null
    _max: InstallerMaxAggregateOutputType | null
  }

  type GetInstallerGroupByPayload<T extends InstallerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstallerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallerGroupByOutputType[P]>
            : GetScalarType<T[P], InstallerGroupByOutputType[P]>
        }
      >
    >


  export type InstallerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandPhotoPath?: boolean
    isActive?: boolean
    customers?: boolean | Installer$customersArgs<ExtArgs>
    installations?: boolean | Installer$installationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Installer$subscriptionArgs<ExtArgs>
    _count?: boolean | InstallerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installer"]>

  export type InstallerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandPhotoPath?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installer"]>

  export type InstallerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandPhotoPath?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installer"]>

  export type InstallerSelectScalar = {
    id?: boolean
    userId?: boolean
    brandPhotoPath?: boolean
    isActive?: boolean
  }

  export type InstallerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "brandPhotoPath" | "isActive", ExtArgs["result"]["installer"]>
  export type InstallerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Installer$customersArgs<ExtArgs>
    installations?: boolean | Installer$installationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | Installer$subscriptionArgs<ExtArgs>
    _count?: boolean | InstallerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstallerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstallerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstallerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Installer"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      installations: Prisma.$InstallationPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      brandPhotoPath: string | null
      isActive: boolean
    }, ExtArgs["result"]["installer"]>
    composites: {}
  }

  type InstallerGetPayload<S extends boolean | null | undefined | InstallerDefaultArgs> = $Result.GetResult<Prisma.$InstallerPayload, S>

  type InstallerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstallerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstallerCountAggregateInputType | true
    }

  export interface InstallerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Installer'], meta: { name: 'Installer' } }
    /**
     * Find zero or one Installer that matches the filter.
     * @param {InstallerFindUniqueArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstallerFindUniqueArgs>(args: SelectSubset<T, InstallerFindUniqueArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Installer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstallerFindUniqueOrThrowArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstallerFindUniqueOrThrowArgs>(args: SelectSubset<T, InstallerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerFindFirstArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstallerFindFirstArgs>(args?: SelectSubset<T, InstallerFindFirstArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerFindFirstOrThrowArgs} args - Arguments to find a Installer
     * @example
     * // Get one Installer
     * const installer = await prisma.installer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstallerFindFirstOrThrowArgs>(args?: SelectSubset<T, InstallerFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Installers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Installers
     * const installers = await prisma.installer.findMany()
     * 
     * // Get first 10 Installers
     * const installers = await prisma.installer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installerWithIdOnly = await prisma.installer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstallerFindManyArgs>(args?: SelectSubset<T, InstallerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Installer.
     * @param {InstallerCreateArgs} args - Arguments to create a Installer.
     * @example
     * // Create one Installer
     * const Installer = await prisma.installer.create({
     *   data: {
     *     // ... data to create a Installer
     *   }
     * })
     * 
     */
    create<T extends InstallerCreateArgs>(args: SelectSubset<T, InstallerCreateArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Installers.
     * @param {InstallerCreateManyArgs} args - Arguments to create many Installers.
     * @example
     * // Create many Installers
     * const installer = await prisma.installer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstallerCreateManyArgs>(args?: SelectSubset<T, InstallerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Installers and returns the data saved in the database.
     * @param {InstallerCreateManyAndReturnArgs} args - Arguments to create many Installers.
     * @example
     * // Create many Installers
     * const installer = await prisma.installer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Installers and only return the `id`
     * const installerWithIdOnly = await prisma.installer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstallerCreateManyAndReturnArgs>(args?: SelectSubset<T, InstallerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Installer.
     * @param {InstallerDeleteArgs} args - Arguments to delete one Installer.
     * @example
     * // Delete one Installer
     * const Installer = await prisma.installer.delete({
     *   where: {
     *     // ... filter to delete one Installer
     *   }
     * })
     * 
     */
    delete<T extends InstallerDeleteArgs>(args: SelectSubset<T, InstallerDeleteArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Installer.
     * @param {InstallerUpdateArgs} args - Arguments to update one Installer.
     * @example
     * // Update one Installer
     * const installer = await prisma.installer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstallerUpdateArgs>(args: SelectSubset<T, InstallerUpdateArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Installers.
     * @param {InstallerDeleteManyArgs} args - Arguments to filter Installers to delete.
     * @example
     * // Delete a few Installers
     * const { count } = await prisma.installer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstallerDeleteManyArgs>(args?: SelectSubset<T, InstallerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Installers
     * const installer = await prisma.installer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstallerUpdateManyArgs>(args: SelectSubset<T, InstallerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installers and returns the data updated in the database.
     * @param {InstallerUpdateManyAndReturnArgs} args - Arguments to update many Installers.
     * @example
     * // Update many Installers
     * const installer = await prisma.installer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Installers and only return the `id`
     * const installerWithIdOnly = await prisma.installer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstallerUpdateManyAndReturnArgs>(args: SelectSubset<T, InstallerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Installer.
     * @param {InstallerUpsertArgs} args - Arguments to update or create a Installer.
     * @example
     * // Update or create a Installer
     * const installer = await prisma.installer.upsert({
     *   create: {
     *     // ... data to create a Installer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Installer we want to update
     *   }
     * })
     */
    upsert<T extends InstallerUpsertArgs>(args: SelectSubset<T, InstallerUpsertArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Installers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerCountArgs} args - Arguments to filter Installers to count.
     * @example
     * // Count the number of Installers
     * const count = await prisma.installer.count({
     *   where: {
     *     // ... the filter for the Installers we want to count
     *   }
     * })
    **/
    count<T extends InstallerCountArgs>(
      args?: Subset<T, InstallerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Installer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstallerAggregateArgs>(args: Subset<T, InstallerAggregateArgs>): Prisma.PrismaPromise<GetInstallerAggregateType<T>>

    /**
     * Group by Installer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstallerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallerGroupByArgs['orderBy'] }
        : { orderBy?: InstallerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstallerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Installer model
   */
  readonly fields: InstallerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Installer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstallerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Installer$customersArgs<ExtArgs> = {}>(args?: Subset<T, Installer$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    installations<T extends Installer$installationsArgs<ExtArgs> = {}>(args?: Subset<T, Installer$installationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends Installer$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Installer$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Installer model
   */
  interface InstallerFieldRefs {
    readonly id: FieldRef<"Installer", 'Int'>
    readonly userId: FieldRef<"Installer", 'String'>
    readonly brandPhotoPath: FieldRef<"Installer", 'String'>
    readonly isActive: FieldRef<"Installer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Installer findUnique
   */
  export type InstallerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * Filter, which Installer to fetch.
     */
    where: InstallerWhereUniqueInput
  }

  /**
   * Installer findUniqueOrThrow
   */
  export type InstallerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * Filter, which Installer to fetch.
     */
    where: InstallerWhereUniqueInput
  }

  /**
   * Installer findFirst
   */
  export type InstallerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * Filter, which Installer to fetch.
     */
    where?: InstallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installers to fetch.
     */
    orderBy?: InstallerOrderByWithRelationInput | InstallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installers.
     */
    cursor?: InstallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installers.
     */
    distinct?: InstallerScalarFieldEnum | InstallerScalarFieldEnum[]
  }

  /**
   * Installer findFirstOrThrow
   */
  export type InstallerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * Filter, which Installer to fetch.
     */
    where?: InstallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installers to fetch.
     */
    orderBy?: InstallerOrderByWithRelationInput | InstallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installers.
     */
    cursor?: InstallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installers.
     */
    distinct?: InstallerScalarFieldEnum | InstallerScalarFieldEnum[]
  }

  /**
   * Installer findMany
   */
  export type InstallerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * Filter, which Installers to fetch.
     */
    where?: InstallerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installers to fetch.
     */
    orderBy?: InstallerOrderByWithRelationInput | InstallerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Installers.
     */
    cursor?: InstallerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installers.
     */
    skip?: number
    distinct?: InstallerScalarFieldEnum | InstallerScalarFieldEnum[]
  }

  /**
   * Installer create
   */
  export type InstallerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * The data needed to create a Installer.
     */
    data: XOR<InstallerCreateInput, InstallerUncheckedCreateInput>
  }

  /**
   * Installer createMany
   */
  export type InstallerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Installers.
     */
    data: InstallerCreateManyInput | InstallerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Installer createManyAndReturn
   */
  export type InstallerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * The data used to create many Installers.
     */
    data: InstallerCreateManyInput | InstallerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installer update
   */
  export type InstallerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * The data needed to update a Installer.
     */
    data: XOR<InstallerUpdateInput, InstallerUncheckedUpdateInput>
    /**
     * Choose, which Installer to update.
     */
    where: InstallerWhereUniqueInput
  }

  /**
   * Installer updateMany
   */
  export type InstallerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Installers.
     */
    data: XOR<InstallerUpdateManyMutationInput, InstallerUncheckedUpdateManyInput>
    /**
     * Filter which Installers to update
     */
    where?: InstallerWhereInput
    /**
     * Limit how many Installers to update.
     */
    limit?: number
  }

  /**
   * Installer updateManyAndReturn
   */
  export type InstallerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * The data used to update Installers.
     */
    data: XOR<InstallerUpdateManyMutationInput, InstallerUncheckedUpdateManyInput>
    /**
     * Filter which Installers to update
     */
    where?: InstallerWhereInput
    /**
     * Limit how many Installers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installer upsert
   */
  export type InstallerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * The filter to search for the Installer to update in case it exists.
     */
    where: InstallerWhereUniqueInput
    /**
     * In case the Installer found by the `where` argument doesn't exist, create a new Installer with this data.
     */
    create: XOR<InstallerCreateInput, InstallerUncheckedCreateInput>
    /**
     * In case the Installer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstallerUpdateInput, InstallerUncheckedUpdateInput>
  }

  /**
   * Installer delete
   */
  export type InstallerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
    /**
     * Filter which Installer to delete.
     */
    where: InstallerWhereUniqueInput
  }

  /**
   * Installer deleteMany
   */
  export type InstallerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installers to delete
     */
    where?: InstallerWhereInput
    /**
     * Limit how many Installers to delete.
     */
    limit?: number
  }

  /**
   * Installer.customers
   */
  export type Installer$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Installer.installations
   */
  export type Installer$installationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    where?: InstallationWhereInput
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    cursor?: InstallationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Installer.subscription
   */
  export type Installer$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Installer without action
   */
  export type InstallerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installer
     */
    select?: InstallerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installer
     */
    omit?: InstallerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallerInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    installerId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    installerId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    installerId: number | null
    startDate: Date | null
    endDate: Date | null
    expiryDate: Date | null
    plan: string | null
    type: string | null
    isActive: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    installerId: number | null
    startDate: Date | null
    endDate: Date | null
    expiryDate: Date | null
    plan: string | null
    type: string | null
    isActive: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    installerId: number
    startDate: number
    endDate: number
    expiryDate: number
    plan: number
    type: number
    isActive: number
    createdDate: number
    updatedDate: number
    createdByUserId: number
    updatedByUserId: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    installerId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    installerId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    installerId?: true
    startDate?: true
    endDate?: true
    expiryDate?: true
    plan?: true
    type?: true
    isActive?: true
    createdDate?: true
    updatedDate?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    installerId?: true
    startDate?: true
    endDate?: true
    expiryDate?: true
    plan?: true
    type?: true
    isActive?: true
    createdDate?: true
    updatedDate?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    installerId?: true
    startDate?: true
    endDate?: true
    expiryDate?: true
    plan?: true
    type?: true
    isActive?: true
    createdDate?: true
    updatedDate?: true
    createdByUserId?: true
    updatedByUserId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    installerId: number
    startDate: Date
    endDate: Date
    expiryDate: Date
    plan: string
    type: string
    isActive: boolean
    createdDate: Date
    updatedDate: Date
    createdByUserId: string | null
    updatedByUserId: string | null
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    startDate?: boolean
    endDate?: boolean
    expiryDate?: boolean
    plan?: boolean
    type?: boolean
    isActive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    startDate?: boolean
    endDate?: boolean
    expiryDate?: boolean
    plan?: boolean
    type?: boolean
    isActive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    startDate?: boolean
    endDate?: boolean
    expiryDate?: boolean
    plan?: boolean
    type?: boolean
    isActive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    installerId?: boolean
    startDate?: boolean
    endDate?: boolean
    expiryDate?: boolean
    plan?: boolean
    type?: boolean
    isActive?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "installerId" | "startDate" | "endDate" | "expiryDate" | "plan" | "type" | "isActive" | "createdDate" | "updatedDate" | "createdByUserId" | "updatedByUserId", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      installer: Prisma.$InstallerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      installerId: number
      startDate: Date
      endDate: Date
      expiryDate: Date
      plan: string
      type: string
      isActive: boolean
      createdDate: Date
      updatedDate: Date
      createdByUserId: string | null
      updatedByUserId: string | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    installer<T extends InstallerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstallerDefaultArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly installerId: FieldRef<"Subscription", 'Int'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly expiryDate: FieldRef<"Subscription", 'DateTime'>
    readonly plan: FieldRef<"Subscription", 'String'>
    readonly type: FieldRef<"Subscription", 'String'>
    readonly isActive: FieldRef<"Subscription", 'Boolean'>
    readonly createdDate: FieldRef<"Subscription", 'DateTime'>
    readonly updatedDate: FieldRef<"Subscription", 'DateTime'>
    readonly createdByUserId: FieldRef<"Subscription", 'String'>
    readonly updatedByUserId: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    installerId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    installerId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    installerId: number | null
    firstName: string | null
    lastName: string | null
    mobile: string | null
    email: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    installerId: number | null
    firstName: string | null
    lastName: string | null
    mobile: string | null
    email: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    installerId: number
    firstName: number
    lastName: number
    mobile: number
    email: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    installerId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    installerId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    installerId?: true
    firstName?: true
    lastName?: true
    mobile?: true
    email?: true
    createdDate?: true
    updatedDate?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    installerId?: true
    firstName?: true
    lastName?: true
    mobile?: true
    email?: true
    createdDate?: true
    updatedDate?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    installerId?: true
    firstName?: true
    lastName?: true
    mobile?: true
    email?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    installerId: number
    firstName: string
    lastName: string
    mobile: string | null
    email: string | null
    createdDate: Date
    updatedDate: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
    installations?: boolean | Customer$installationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    installerId?: boolean
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "installerId" | "firstName" | "lastName" | "mobile" | "email" | "createdDate" | "updatedDate", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
    installations?: boolean | Customer$installationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      installer: Prisma.$InstallerPayload<ExtArgs>
      installations: Prisma.$InstallationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      installerId: number
      firstName: string
      lastName: string
      mobile: string | null
      email: string | null
      createdDate: Date
      updatedDate: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Customer$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    installer<T extends InstallerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstallerDefaultArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installations<T extends Customer$installationsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$installationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly installerId: FieldRef<"Customer", 'Int'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdDate: FieldRef<"Customer", 'DateTime'>
    readonly updatedDate: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.addresses
   */
  export type Customer$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Customer.installations
   */
  export type Customer$installationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    where?: InstallationWhereInput
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    cursor?: InstallationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    referenceId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    referenceId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    referenceId: number | null
    referenceType: string | null
    postcode: string | null
    street: string | null
    city: string | null
    telephone: string | null
    latitude: number | null
    longitude: number | null
    propertyCreateDate: Date | null
    buildingUse: string | null
    propertyType: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    referenceId: number | null
    referenceType: string | null
    postcode: string | null
    street: string | null
    city: string | null
    telephone: string | null
    latitude: number | null
    longitude: number | null
    propertyCreateDate: Date | null
    buildingUse: string | null
    propertyType: string | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    referenceId: number
    referenceType: number
    postcode: number
    street: number
    city: number
    telephone: number
    latitude: number
    longitude: number
    propertyCreateDate: number
    buildingUse: number
    propertyType: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    referenceId?: true
    latitude?: true
    longitude?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    referenceId?: true
    latitude?: true
    longitude?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    referenceId?: true
    referenceType?: true
    postcode?: true
    street?: true
    city?: true
    telephone?: true
    latitude?: true
    longitude?: true
    propertyCreateDate?: true
    buildingUse?: true
    propertyType?: true
    createdDate?: true
    updatedDate?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    referenceId?: true
    referenceType?: true
    postcode?: true
    street?: true
    city?: true
    telephone?: true
    latitude?: true
    longitude?: true
    propertyCreateDate?: true
    buildingUse?: true
    propertyType?: true
    createdDate?: true
    updatedDate?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    referenceId?: true
    referenceType?: true
    postcode?: true
    street?: true
    city?: true
    telephone?: true
    latitude?: true
    longitude?: true
    propertyCreateDate?: true
    buildingUse?: true
    propertyType?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    referenceId: number
    referenceType: string
    postcode: string
    street: string | null
    city: string | null
    telephone: string | null
    latitude: number | null
    longitude: number | null
    propertyCreateDate: Date | null
    buildingUse: string | null
    propertyType: string | null
    createdDate: Date
    updatedDate: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceId?: boolean
    referenceType?: boolean
    postcode?: boolean
    street?: boolean
    city?: boolean
    telephone?: boolean
    latitude?: boolean
    longitude?: boolean
    propertyCreateDate?: boolean
    buildingUse?: boolean
    propertyType?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installations?: boolean | Address$installationsArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceId?: boolean
    referenceType?: boolean
    postcode?: boolean
    street?: boolean
    city?: boolean
    telephone?: boolean
    latitude?: boolean
    longitude?: boolean
    propertyCreateDate?: boolean
    buildingUse?: boolean
    propertyType?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceId?: boolean
    referenceType?: boolean
    postcode?: boolean
    street?: boolean
    city?: boolean
    telephone?: boolean
    latitude?: boolean
    longitude?: boolean
    propertyCreateDate?: boolean
    buildingUse?: boolean
    propertyType?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    referenceId?: boolean
    referenceType?: boolean
    postcode?: boolean
    street?: boolean
    city?: boolean
    telephone?: boolean
    latitude?: boolean
    longitude?: boolean
    propertyCreateDate?: boolean
    buildingUse?: boolean
    propertyType?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceId" | "referenceType" | "postcode" | "street" | "city" | "telephone" | "latitude" | "longitude" | "propertyCreateDate" | "buildingUse" | "propertyType" | "createdDate" | "updatedDate", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installations?: boolean | Address$installationsArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      installations: Prisma.$InstallationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      referenceId: number
      referenceType: string
      postcode: string
      street: string | null
      city: string | null
      telephone: string | null
      latitude: number | null
      longitude: number | null
      propertyCreateDate: Date | null
      buildingUse: string | null
      propertyType: string | null
      createdDate: Date
      updatedDate: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installations<T extends Address$installationsArgs<ExtArgs> = {}>(args?: Subset<T, Address$installationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly referenceId: FieldRef<"Address", 'Int'>
    readonly referenceType: FieldRef<"Address", 'String'>
    readonly postcode: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly telephone: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'Float'>
    readonly longitude: FieldRef<"Address", 'Float'>
    readonly propertyCreateDate: FieldRef<"Address", 'DateTime'>
    readonly buildingUse: FieldRef<"Address", 'String'>
    readonly propertyType: FieldRef<"Address", 'String'>
    readonly createdDate: FieldRef<"Address", 'DateTime'>
    readonly updatedDate: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.installations
   */
  export type Address$installationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    where?: InstallationWhereInput
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    cursor?: InstallationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Installation
   */

  export type AggregateInstallation = {
    _count: InstallationCountAggregateOutputType | null
    _avg: InstallationAvgAggregateOutputType | null
    _sum: InstallationSumAggregateOutputType | null
    _min: InstallationMinAggregateOutputType | null
    _max: InstallationMaxAggregateOutputType | null
  }

  export type InstallationAvgAggregateOutputType = {
    id: number | null
    installerId: number | null
    customerId: number | null
    addressId: number | null
    totalPVOutput: number | null
    annualACOutput: number | null
  }

  export type InstallationSumAggregateOutputType = {
    id: number | null
    installerId: number | null
    customerId: number | null
    addressId: number | null
    totalPVOutput: number | null
    annualACOutput: number | null
  }

  export type InstallationMinAggregateOutputType = {
    id: number | null
    installerId: number | null
    customerId: number | null
    addressId: number | null
    postcode: string | null
    zone: string | null
    totalPVOutput: number | null
    annualACOutput: number | null
    pdfPath: string | null
    status: $Enums.InstallationStatus | null
    isLocked: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type InstallationMaxAggregateOutputType = {
    id: number | null
    installerId: number | null
    customerId: number | null
    addressId: number | null
    postcode: string | null
    zone: string | null
    totalPVOutput: number | null
    annualACOutput: number | null
    pdfPath: string | null
    status: $Enums.InstallationStatus | null
    isLocked: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type InstallationCountAggregateOutputType = {
    id: number
    installerId: number
    customerId: number
    addressId: number
    postcode: number
    zone: number
    totalPVOutput: number
    annualACOutput: number
    roofDetails: number
    shadeFactors: number
    orientations: number
    roofSlopes: number
    roofTypes: number
    results: number
    pdfPath: number
    status: number
    signatureInfo: number
    isLocked: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type InstallationAvgAggregateInputType = {
    id?: true
    installerId?: true
    customerId?: true
    addressId?: true
    totalPVOutput?: true
    annualACOutput?: true
  }

  export type InstallationSumAggregateInputType = {
    id?: true
    installerId?: true
    customerId?: true
    addressId?: true
    totalPVOutput?: true
    annualACOutput?: true
  }

  export type InstallationMinAggregateInputType = {
    id?: true
    installerId?: true
    customerId?: true
    addressId?: true
    postcode?: true
    zone?: true
    totalPVOutput?: true
    annualACOutput?: true
    pdfPath?: true
    status?: true
    isLocked?: true
    createdDate?: true
    updatedDate?: true
  }

  export type InstallationMaxAggregateInputType = {
    id?: true
    installerId?: true
    customerId?: true
    addressId?: true
    postcode?: true
    zone?: true
    totalPVOutput?: true
    annualACOutput?: true
    pdfPath?: true
    status?: true
    isLocked?: true
    createdDate?: true
    updatedDate?: true
  }

  export type InstallationCountAggregateInputType = {
    id?: true
    installerId?: true
    customerId?: true
    addressId?: true
    postcode?: true
    zone?: true
    totalPVOutput?: true
    annualACOutput?: true
    roofDetails?: true
    shadeFactors?: true
    orientations?: true
    roofSlopes?: true
    roofTypes?: true
    results?: true
    pdfPath?: true
    status?: true
    signatureInfo?: true
    isLocked?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type InstallationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installation to aggregate.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Installations
    **/
    _count?: true | InstallationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstallationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstallationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallationMaxAggregateInputType
  }

  export type GetInstallationAggregateType<T extends InstallationAggregateArgs> = {
        [P in keyof T & keyof AggregateInstallation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallation[P]>
      : GetScalarType<T[P], AggregateInstallation[P]>
  }




  export type InstallationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallationWhereInput
    orderBy?: InstallationOrderByWithAggregationInput | InstallationOrderByWithAggregationInput[]
    by: InstallationScalarFieldEnum[] | InstallationScalarFieldEnum
    having?: InstallationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallationCountAggregateInputType | true
    _avg?: InstallationAvgAggregateInputType
    _sum?: InstallationSumAggregateInputType
    _min?: InstallationMinAggregateInputType
    _max?: InstallationMaxAggregateInputType
  }

  export type InstallationGroupByOutputType = {
    id: number
    installerId: number
    customerId: number
    addressId: number
    postcode: string
    zone: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails: JsonValue | null
    shadeFactors: JsonValue | null
    orientations: JsonValue | null
    roofSlopes: JsonValue | null
    roofTypes: JsonValue | null
    results: JsonValue | null
    pdfPath: string | null
    status: $Enums.InstallationStatus
    signatureInfo: JsonValue | null
    isLocked: boolean
    createdDate: Date
    updatedDate: Date
    _count: InstallationCountAggregateOutputType | null
    _avg: InstallationAvgAggregateOutputType | null
    _sum: InstallationSumAggregateOutputType | null
    _min: InstallationMinAggregateOutputType | null
    _max: InstallationMaxAggregateOutputType | null
  }

  type GetInstallationGroupByPayload<T extends InstallationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstallationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallationGroupByOutputType[P]>
            : GetScalarType<T[P], InstallationGroupByOutputType[P]>
        }
      >
    >


  export type InstallationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    customerId?: boolean
    addressId?: boolean
    postcode?: boolean
    zone?: boolean
    totalPVOutput?: boolean
    annualACOutput?: boolean
    roofDetails?: boolean
    shadeFactors?: boolean
    orientations?: boolean
    roofSlopes?: boolean
    roofTypes?: boolean
    results?: boolean
    pdfPath?: boolean
    status?: boolean
    signatureInfo?: boolean
    isLocked?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installation"]>

  export type InstallationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    customerId?: boolean
    addressId?: boolean
    postcode?: boolean
    zone?: boolean
    totalPVOutput?: boolean
    annualACOutput?: boolean
    roofDetails?: boolean
    shadeFactors?: boolean
    orientations?: boolean
    roofSlopes?: boolean
    roofTypes?: boolean
    results?: boolean
    pdfPath?: boolean
    status?: boolean
    signatureInfo?: boolean
    isLocked?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installation"]>

  export type InstallationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    installerId?: boolean
    customerId?: boolean
    addressId?: boolean
    postcode?: boolean
    zone?: boolean
    totalPVOutput?: boolean
    annualACOutput?: boolean
    roofDetails?: boolean
    shadeFactors?: boolean
    orientations?: boolean
    roofSlopes?: boolean
    roofTypes?: boolean
    results?: boolean
    pdfPath?: boolean
    status?: boolean
    signatureInfo?: boolean
    isLocked?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installation"]>

  export type InstallationSelectScalar = {
    id?: boolean
    installerId?: boolean
    customerId?: boolean
    addressId?: boolean
    postcode?: boolean
    zone?: boolean
    totalPVOutput?: boolean
    annualACOutput?: boolean
    roofDetails?: boolean
    shadeFactors?: boolean
    orientations?: boolean
    roofSlopes?: boolean
    roofTypes?: boolean
    results?: boolean
    pdfPath?: boolean
    status?: boolean
    signatureInfo?: boolean
    isLocked?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type InstallationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "installerId" | "customerId" | "addressId" | "postcode" | "zone" | "totalPVOutput" | "annualACOutput" | "roofDetails" | "shadeFactors" | "orientations" | "roofSlopes" | "roofTypes" | "results" | "pdfPath" | "status" | "signatureInfo" | "isLocked" | "createdDate" | "updatedDate", ExtArgs["result"]["installation"]>
  export type InstallationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }
  export type InstallationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }
  export type InstallationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    installer?: boolean | InstallerDefaultArgs<ExtArgs>
  }

  export type $InstallationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Installation"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      installer: Prisma.$InstallerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      installerId: number
      customerId: number
      addressId: number
      postcode: string
      zone: string | null
      totalPVOutput: number
      annualACOutput: number
      roofDetails: Prisma.JsonValue | null
      shadeFactors: Prisma.JsonValue | null
      orientations: Prisma.JsonValue | null
      roofSlopes: Prisma.JsonValue | null
      roofTypes: Prisma.JsonValue | null
      results: Prisma.JsonValue | null
      pdfPath: string | null
      status: $Enums.InstallationStatus
      signatureInfo: Prisma.JsonValue | null
      isLocked: boolean
      createdDate: Date
      updatedDate: Date
    }, ExtArgs["result"]["installation"]>
    composites: {}
  }

  type InstallationGetPayload<S extends boolean | null | undefined | InstallationDefaultArgs> = $Result.GetResult<Prisma.$InstallationPayload, S>

  type InstallationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstallationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstallationCountAggregateInputType | true
    }

  export interface InstallationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Installation'], meta: { name: 'Installation' } }
    /**
     * Find zero or one Installation that matches the filter.
     * @param {InstallationFindUniqueArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstallationFindUniqueArgs>(args: SelectSubset<T, InstallationFindUniqueArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Installation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstallationFindUniqueOrThrowArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstallationFindUniqueOrThrowArgs>(args: SelectSubset<T, InstallationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationFindFirstArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstallationFindFirstArgs>(args?: SelectSubset<T, InstallationFindFirstArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationFindFirstOrThrowArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstallationFindFirstOrThrowArgs>(args?: SelectSubset<T, InstallationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Installations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Installations
     * const installations = await prisma.installation.findMany()
     * 
     * // Get first 10 Installations
     * const installations = await prisma.installation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installationWithIdOnly = await prisma.installation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstallationFindManyArgs>(args?: SelectSubset<T, InstallationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Installation.
     * @param {InstallationCreateArgs} args - Arguments to create a Installation.
     * @example
     * // Create one Installation
     * const Installation = await prisma.installation.create({
     *   data: {
     *     // ... data to create a Installation
     *   }
     * })
     * 
     */
    create<T extends InstallationCreateArgs>(args: SelectSubset<T, InstallationCreateArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Installations.
     * @param {InstallationCreateManyArgs} args - Arguments to create many Installations.
     * @example
     * // Create many Installations
     * const installation = await prisma.installation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstallationCreateManyArgs>(args?: SelectSubset<T, InstallationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Installations and returns the data saved in the database.
     * @param {InstallationCreateManyAndReturnArgs} args - Arguments to create many Installations.
     * @example
     * // Create many Installations
     * const installation = await prisma.installation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Installations and only return the `id`
     * const installationWithIdOnly = await prisma.installation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstallationCreateManyAndReturnArgs>(args?: SelectSubset<T, InstallationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Installation.
     * @param {InstallationDeleteArgs} args - Arguments to delete one Installation.
     * @example
     * // Delete one Installation
     * const Installation = await prisma.installation.delete({
     *   where: {
     *     // ... filter to delete one Installation
     *   }
     * })
     * 
     */
    delete<T extends InstallationDeleteArgs>(args: SelectSubset<T, InstallationDeleteArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Installation.
     * @param {InstallationUpdateArgs} args - Arguments to update one Installation.
     * @example
     * // Update one Installation
     * const installation = await prisma.installation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstallationUpdateArgs>(args: SelectSubset<T, InstallationUpdateArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Installations.
     * @param {InstallationDeleteManyArgs} args - Arguments to filter Installations to delete.
     * @example
     * // Delete a few Installations
     * const { count } = await prisma.installation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstallationDeleteManyArgs>(args?: SelectSubset<T, InstallationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Installations
     * const installation = await prisma.installation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstallationUpdateManyArgs>(args: SelectSubset<T, InstallationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installations and returns the data updated in the database.
     * @param {InstallationUpdateManyAndReturnArgs} args - Arguments to update many Installations.
     * @example
     * // Update many Installations
     * const installation = await prisma.installation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Installations and only return the `id`
     * const installationWithIdOnly = await prisma.installation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstallationUpdateManyAndReturnArgs>(args: SelectSubset<T, InstallationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Installation.
     * @param {InstallationUpsertArgs} args - Arguments to update or create a Installation.
     * @example
     * // Update or create a Installation
     * const installation = await prisma.installation.upsert({
     *   create: {
     *     // ... data to create a Installation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Installation we want to update
     *   }
     * })
     */
    upsert<T extends InstallationUpsertArgs>(args: SelectSubset<T, InstallationUpsertArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationCountArgs} args - Arguments to filter Installations to count.
     * @example
     * // Count the number of Installations
     * const count = await prisma.installation.count({
     *   where: {
     *     // ... the filter for the Installations we want to count
     *   }
     * })
    **/
    count<T extends InstallationCountArgs>(
      args?: Subset<T, InstallationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstallationAggregateArgs>(args: Subset<T, InstallationAggregateArgs>): Prisma.PrismaPromise<GetInstallationAggregateType<T>>

    /**
     * Group by Installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstallationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallationGroupByArgs['orderBy'] }
        : { orderBy?: InstallationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstallationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Installation model
   */
  readonly fields: InstallationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Installation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstallationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installer<T extends InstallerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstallerDefaultArgs<ExtArgs>>): Prisma__InstallerClient<$Result.GetResult<Prisma.$InstallerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Installation model
   */
  interface InstallationFieldRefs {
    readonly id: FieldRef<"Installation", 'Int'>
    readonly installerId: FieldRef<"Installation", 'Int'>
    readonly customerId: FieldRef<"Installation", 'Int'>
    readonly addressId: FieldRef<"Installation", 'Int'>
    readonly postcode: FieldRef<"Installation", 'String'>
    readonly zone: FieldRef<"Installation", 'String'>
    readonly totalPVOutput: FieldRef<"Installation", 'Float'>
    readonly annualACOutput: FieldRef<"Installation", 'Float'>
    readonly roofDetails: FieldRef<"Installation", 'Json'>
    readonly shadeFactors: FieldRef<"Installation", 'Json'>
    readonly orientations: FieldRef<"Installation", 'Json'>
    readonly roofSlopes: FieldRef<"Installation", 'Json'>
    readonly roofTypes: FieldRef<"Installation", 'Json'>
    readonly results: FieldRef<"Installation", 'Json'>
    readonly pdfPath: FieldRef<"Installation", 'String'>
    readonly status: FieldRef<"Installation", 'InstallationStatus'>
    readonly signatureInfo: FieldRef<"Installation", 'Json'>
    readonly isLocked: FieldRef<"Installation", 'Boolean'>
    readonly createdDate: FieldRef<"Installation", 'DateTime'>
    readonly updatedDate: FieldRef<"Installation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Installation findUnique
   */
  export type InstallationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation findUniqueOrThrow
   */
  export type InstallationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation findFirst
   */
  export type InstallationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installations.
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installations.
     */
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Installation findFirstOrThrow
   */
  export type InstallationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installations.
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installations.
     */
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Installation findMany
   */
  export type InstallationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installations to fetch.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Installations.
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Installation create
   */
  export type InstallationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * The data needed to create a Installation.
     */
    data: XOR<InstallationCreateInput, InstallationUncheckedCreateInput>
  }

  /**
   * Installation createMany
   */
  export type InstallationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Installations.
     */
    data: InstallationCreateManyInput | InstallationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Installation createManyAndReturn
   */
  export type InstallationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * The data used to create many Installations.
     */
    data: InstallationCreateManyInput | InstallationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installation update
   */
  export type InstallationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * The data needed to update a Installation.
     */
    data: XOR<InstallationUpdateInput, InstallationUncheckedUpdateInput>
    /**
     * Choose, which Installation to update.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation updateMany
   */
  export type InstallationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Installations.
     */
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyInput>
    /**
     * Filter which Installations to update
     */
    where?: InstallationWhereInput
    /**
     * Limit how many Installations to update.
     */
    limit?: number
  }

  /**
   * Installation updateManyAndReturn
   */
  export type InstallationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * The data used to update Installations.
     */
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyInput>
    /**
     * Filter which Installations to update
     */
    where?: InstallationWhereInput
    /**
     * Limit how many Installations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installation upsert
   */
  export type InstallationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * The filter to search for the Installation to update in case it exists.
     */
    where: InstallationWhereUniqueInput
    /**
     * In case the Installation found by the `where` argument doesn't exist, create a new Installation with this data.
     */
    create: XOR<InstallationCreateInput, InstallationUncheckedCreateInput>
    /**
     * In case the Installation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstallationUpdateInput, InstallationUncheckedUpdateInput>
  }

  /**
   * Installation delete
   */
  export type InstallationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter which Installation to delete.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation deleteMany
   */
  export type InstallationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installations to delete
     */
    where?: InstallationWhereInput
    /**
     * Limit how many Installations to delete.
     */
    limit?: number
  }

  /**
   * Installation without action
   */
  export type InstallationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionApplication
   */

  export type AggregateSubscriptionApplication = {
    _count: SubscriptionApplicationCountAggregateOutputType | null
    _avg: SubscriptionApplicationAvgAggregateOutputType | null
    _sum: SubscriptionApplicationSumAggregateOutputType | null
    _min: SubscriptionApplicationMinAggregateOutputType | null
    _max: SubscriptionApplicationMaxAggregateOutputType | null
  }

  export type SubscriptionApplicationAvgAggregateOutputType = {
    id: number | null
  }

  export type SubscriptionApplicationSumAggregateOutputType = {
    id: number | null
  }

  export type SubscriptionApplicationMinAggregateOutputType = {
    id: number | null
    userId: string | null
    subscriptionType: string | null
    receiptCode: string | null
    receiptPhotoPath: string | null
    brandPhotoPath: string | null
    notes: string | null
    status: string | null
    createdDate: Date | null
    updatedDate: Date | null
    reviewedByUserId: string | null
    reviewNotes: string | null
  }

  export type SubscriptionApplicationMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    subscriptionType: string | null
    receiptCode: string | null
    receiptPhotoPath: string | null
    brandPhotoPath: string | null
    notes: string | null
    status: string | null
    createdDate: Date | null
    updatedDate: Date | null
    reviewedByUserId: string | null
    reviewNotes: string | null
  }

  export type SubscriptionApplicationCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionType: number
    receiptCode: number
    receiptPhotoPath: number
    brandPhotoPath: number
    notes: number
    status: number
    createdDate: number
    updatedDate: number
    reviewedByUserId: number
    reviewNotes: number
    _all: number
  }


  export type SubscriptionApplicationAvgAggregateInputType = {
    id?: true
  }

  export type SubscriptionApplicationSumAggregateInputType = {
    id?: true
  }

  export type SubscriptionApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionType?: true
    receiptCode?: true
    receiptPhotoPath?: true
    brandPhotoPath?: true
    notes?: true
    status?: true
    createdDate?: true
    updatedDate?: true
    reviewedByUserId?: true
    reviewNotes?: true
  }

  export type SubscriptionApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionType?: true
    receiptCode?: true
    receiptPhotoPath?: true
    brandPhotoPath?: true
    notes?: true
    status?: true
    createdDate?: true
    updatedDate?: true
    reviewedByUserId?: true
    reviewNotes?: true
  }

  export type SubscriptionApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionType?: true
    receiptCode?: true
    receiptPhotoPath?: true
    brandPhotoPath?: true
    notes?: true
    status?: true
    createdDate?: true
    updatedDate?: true
    reviewedByUserId?: true
    reviewNotes?: true
    _all?: true
  }

  export type SubscriptionApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionApplication to aggregate.
     */
    where?: SubscriptionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionApplications to fetch.
     */
    orderBy?: SubscriptionApplicationOrderByWithRelationInput | SubscriptionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionApplications
    **/
    _count?: true | SubscriptionApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionApplicationMaxAggregateInputType
  }

  export type GetSubscriptionApplicationAggregateType<T extends SubscriptionApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionApplication[P]>
      : GetScalarType<T[P], AggregateSubscriptionApplication[P]>
  }




  export type SubscriptionApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionApplicationWhereInput
    orderBy?: SubscriptionApplicationOrderByWithAggregationInput | SubscriptionApplicationOrderByWithAggregationInput[]
    by: SubscriptionApplicationScalarFieldEnum[] | SubscriptionApplicationScalarFieldEnum
    having?: SubscriptionApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionApplicationCountAggregateInputType | true
    _avg?: SubscriptionApplicationAvgAggregateInputType
    _sum?: SubscriptionApplicationSumAggregateInputType
    _min?: SubscriptionApplicationMinAggregateInputType
    _max?: SubscriptionApplicationMaxAggregateInputType
  }

  export type SubscriptionApplicationGroupByOutputType = {
    id: number
    userId: string
    subscriptionType: string
    receiptCode: string
    receiptPhotoPath: string
    brandPhotoPath: string | null
    notes: string | null
    status: string
    createdDate: Date
    updatedDate: Date
    reviewedByUserId: string | null
    reviewNotes: string | null
    _count: SubscriptionApplicationCountAggregateOutputType | null
    _avg: SubscriptionApplicationAvgAggregateOutputType | null
    _sum: SubscriptionApplicationSumAggregateOutputType | null
    _min: SubscriptionApplicationMinAggregateOutputType | null
    _max: SubscriptionApplicationMaxAggregateOutputType | null
  }

  type GetSubscriptionApplicationGroupByPayload<T extends SubscriptionApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionApplicationGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionType?: boolean
    receiptCode?: boolean
    receiptPhotoPath?: boolean
    brandPhotoPath?: boolean
    notes?: boolean
    status?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    reviewedByUserId?: boolean
    reviewNotes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionApplication"]>

  export type SubscriptionApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionType?: boolean
    receiptCode?: boolean
    receiptPhotoPath?: boolean
    brandPhotoPath?: boolean
    notes?: boolean
    status?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    reviewedByUserId?: boolean
    reviewNotes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionApplication"]>

  export type SubscriptionApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionType?: boolean
    receiptCode?: boolean
    receiptPhotoPath?: boolean
    brandPhotoPath?: boolean
    notes?: boolean
    status?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    reviewedByUserId?: boolean
    reviewNotes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionApplication"]>

  export type SubscriptionApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionType?: boolean
    receiptCode?: boolean
    receiptPhotoPath?: boolean
    brandPhotoPath?: boolean
    notes?: boolean
    status?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    reviewedByUserId?: boolean
    reviewNotes?: boolean
  }

  export type SubscriptionApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subscriptionType" | "receiptCode" | "receiptPhotoPath" | "brandPhotoPath" | "notes" | "status" | "createdDate" | "updatedDate" | "reviewedByUserId" | "reviewNotes", ExtArgs["result"]["subscriptionApplication"]>
  export type SubscriptionApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      subscriptionType: string
      receiptCode: string
      receiptPhotoPath: string
      brandPhotoPath: string | null
      notes: string | null
      status: string
      createdDate: Date
      updatedDate: Date
      reviewedByUserId: string | null
      reviewNotes: string | null
    }, ExtArgs["result"]["subscriptionApplication"]>
    composites: {}
  }

  type SubscriptionApplicationGetPayload<S extends boolean | null | undefined | SubscriptionApplicationDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionApplicationPayload, S>

  type SubscriptionApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionApplicationCountAggregateInputType | true
    }

  export interface SubscriptionApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionApplication'], meta: { name: 'SubscriptionApplication' } }
    /**
     * Find zero or one SubscriptionApplication that matches the filter.
     * @param {SubscriptionApplicationFindUniqueArgs} args - Arguments to find a SubscriptionApplication
     * @example
     * // Get one SubscriptionApplication
     * const subscriptionApplication = await prisma.subscriptionApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionApplicationFindUniqueArgs>(args: SelectSubset<T, SubscriptionApplicationFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionApplicationFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionApplication
     * @example
     * // Get one SubscriptionApplication
     * const subscriptionApplication = await prisma.subscriptionApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionApplicationFindFirstArgs} args - Arguments to find a SubscriptionApplication
     * @example
     * // Get one SubscriptionApplication
     * const subscriptionApplication = await prisma.subscriptionApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionApplicationFindFirstArgs>(args?: SelectSubset<T, SubscriptionApplicationFindFirstArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionApplicationFindFirstOrThrowArgs} args - Arguments to find a SubscriptionApplication
     * @example
     * // Get one SubscriptionApplication
     * const subscriptionApplication = await prisma.subscriptionApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionApplications
     * const subscriptionApplications = await prisma.subscriptionApplication.findMany()
     * 
     * // Get first 10 SubscriptionApplications
     * const subscriptionApplications = await prisma.subscriptionApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionApplicationWithIdOnly = await prisma.subscriptionApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionApplicationFindManyArgs>(args?: SelectSubset<T, SubscriptionApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionApplication.
     * @param {SubscriptionApplicationCreateArgs} args - Arguments to create a SubscriptionApplication.
     * @example
     * // Create one SubscriptionApplication
     * const SubscriptionApplication = await prisma.subscriptionApplication.create({
     *   data: {
     *     // ... data to create a SubscriptionApplication
     *   }
     * })
     * 
     */
    create<T extends SubscriptionApplicationCreateArgs>(args: SelectSubset<T, SubscriptionApplicationCreateArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionApplications.
     * @param {SubscriptionApplicationCreateManyArgs} args - Arguments to create many SubscriptionApplications.
     * @example
     * // Create many SubscriptionApplications
     * const subscriptionApplication = await prisma.subscriptionApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionApplicationCreateManyArgs>(args?: SelectSubset<T, SubscriptionApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionApplications and returns the data saved in the database.
     * @param {SubscriptionApplicationCreateManyAndReturnArgs} args - Arguments to create many SubscriptionApplications.
     * @example
     * // Create many SubscriptionApplications
     * const subscriptionApplication = await prisma.subscriptionApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionApplications and only return the `id`
     * const subscriptionApplicationWithIdOnly = await prisma.subscriptionApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionApplication.
     * @param {SubscriptionApplicationDeleteArgs} args - Arguments to delete one SubscriptionApplication.
     * @example
     * // Delete one SubscriptionApplication
     * const SubscriptionApplication = await prisma.subscriptionApplication.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionApplication
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionApplicationDeleteArgs>(args: SelectSubset<T, SubscriptionApplicationDeleteArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionApplication.
     * @param {SubscriptionApplicationUpdateArgs} args - Arguments to update one SubscriptionApplication.
     * @example
     * // Update one SubscriptionApplication
     * const subscriptionApplication = await prisma.subscriptionApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionApplicationUpdateArgs>(args: SelectSubset<T, SubscriptionApplicationUpdateArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionApplications.
     * @param {SubscriptionApplicationDeleteManyArgs} args - Arguments to filter SubscriptionApplications to delete.
     * @example
     * // Delete a few SubscriptionApplications
     * const { count } = await prisma.subscriptionApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionApplicationDeleteManyArgs>(args?: SelectSubset<T, SubscriptionApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionApplications
     * const subscriptionApplication = await prisma.subscriptionApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionApplicationUpdateManyArgs>(args: SelectSubset<T, SubscriptionApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionApplications and returns the data updated in the database.
     * @param {SubscriptionApplicationUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionApplications.
     * @example
     * // Update many SubscriptionApplications
     * const subscriptionApplication = await prisma.subscriptionApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionApplications and only return the `id`
     * const subscriptionApplicationWithIdOnly = await prisma.subscriptionApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionApplication.
     * @param {SubscriptionApplicationUpsertArgs} args - Arguments to update or create a SubscriptionApplication.
     * @example
     * // Update or create a SubscriptionApplication
     * const subscriptionApplication = await prisma.subscriptionApplication.upsert({
     *   create: {
     *     // ... data to create a SubscriptionApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionApplication we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionApplicationUpsertArgs>(args: SelectSubset<T, SubscriptionApplicationUpsertArgs<ExtArgs>>): Prisma__SubscriptionApplicationClient<$Result.GetResult<Prisma.$SubscriptionApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionApplicationCountArgs} args - Arguments to filter SubscriptionApplications to count.
     * @example
     * // Count the number of SubscriptionApplications
     * const count = await prisma.subscriptionApplication.count({
     *   where: {
     *     // ... the filter for the SubscriptionApplications we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionApplicationCountArgs>(
      args?: Subset<T, SubscriptionApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionApplicationAggregateArgs>(args: Subset<T, SubscriptionApplicationAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionApplicationAggregateType<T>>

    /**
     * Group by SubscriptionApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionApplicationGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionApplication model
   */
  readonly fields: SubscriptionApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionApplication model
   */
  interface SubscriptionApplicationFieldRefs {
    readonly id: FieldRef<"SubscriptionApplication", 'Int'>
    readonly userId: FieldRef<"SubscriptionApplication", 'String'>
    readonly subscriptionType: FieldRef<"SubscriptionApplication", 'String'>
    readonly receiptCode: FieldRef<"SubscriptionApplication", 'String'>
    readonly receiptPhotoPath: FieldRef<"SubscriptionApplication", 'String'>
    readonly brandPhotoPath: FieldRef<"SubscriptionApplication", 'String'>
    readonly notes: FieldRef<"SubscriptionApplication", 'String'>
    readonly status: FieldRef<"SubscriptionApplication", 'String'>
    readonly createdDate: FieldRef<"SubscriptionApplication", 'DateTime'>
    readonly updatedDate: FieldRef<"SubscriptionApplication", 'DateTime'>
    readonly reviewedByUserId: FieldRef<"SubscriptionApplication", 'String'>
    readonly reviewNotes: FieldRef<"SubscriptionApplication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionApplication findUnique
   */
  export type SubscriptionApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionApplication to fetch.
     */
    where: SubscriptionApplicationWhereUniqueInput
  }

  /**
   * SubscriptionApplication findUniqueOrThrow
   */
  export type SubscriptionApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionApplication to fetch.
     */
    where: SubscriptionApplicationWhereUniqueInput
  }

  /**
   * SubscriptionApplication findFirst
   */
  export type SubscriptionApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionApplication to fetch.
     */
    where?: SubscriptionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionApplications to fetch.
     */
    orderBy?: SubscriptionApplicationOrderByWithRelationInput | SubscriptionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionApplications.
     */
    cursor?: SubscriptionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionApplications.
     */
    distinct?: SubscriptionApplicationScalarFieldEnum | SubscriptionApplicationScalarFieldEnum[]
  }

  /**
   * SubscriptionApplication findFirstOrThrow
   */
  export type SubscriptionApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionApplication to fetch.
     */
    where?: SubscriptionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionApplications to fetch.
     */
    orderBy?: SubscriptionApplicationOrderByWithRelationInput | SubscriptionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionApplications.
     */
    cursor?: SubscriptionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionApplications.
     */
    distinct?: SubscriptionApplicationScalarFieldEnum | SubscriptionApplicationScalarFieldEnum[]
  }

  /**
   * SubscriptionApplication findMany
   */
  export type SubscriptionApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionApplications to fetch.
     */
    where?: SubscriptionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionApplications to fetch.
     */
    orderBy?: SubscriptionApplicationOrderByWithRelationInput | SubscriptionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionApplications.
     */
    cursor?: SubscriptionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionApplications.
     */
    skip?: number
    distinct?: SubscriptionApplicationScalarFieldEnum | SubscriptionApplicationScalarFieldEnum[]
  }

  /**
   * SubscriptionApplication create
   */
  export type SubscriptionApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionApplication.
     */
    data: XOR<SubscriptionApplicationCreateInput, SubscriptionApplicationUncheckedCreateInput>
  }

  /**
   * SubscriptionApplication createMany
   */
  export type SubscriptionApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionApplications.
     */
    data: SubscriptionApplicationCreateManyInput | SubscriptionApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionApplication createManyAndReturn
   */
  export type SubscriptionApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionApplications.
     */
    data: SubscriptionApplicationCreateManyInput | SubscriptionApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionApplication update
   */
  export type SubscriptionApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionApplication.
     */
    data: XOR<SubscriptionApplicationUpdateInput, SubscriptionApplicationUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionApplication to update.
     */
    where: SubscriptionApplicationWhereUniqueInput
  }

  /**
   * SubscriptionApplication updateMany
   */
  export type SubscriptionApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionApplications.
     */
    data: XOR<SubscriptionApplicationUpdateManyMutationInput, SubscriptionApplicationUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionApplications to update
     */
    where?: SubscriptionApplicationWhereInput
    /**
     * Limit how many SubscriptionApplications to update.
     */
    limit?: number
  }

  /**
   * SubscriptionApplication updateManyAndReturn
   */
  export type SubscriptionApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionApplications.
     */
    data: XOR<SubscriptionApplicationUpdateManyMutationInput, SubscriptionApplicationUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionApplications to update
     */
    where?: SubscriptionApplicationWhereInput
    /**
     * Limit how many SubscriptionApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionApplication upsert
   */
  export type SubscriptionApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionApplication to update in case it exists.
     */
    where: SubscriptionApplicationWhereUniqueInput
    /**
     * In case the SubscriptionApplication found by the `where` argument doesn't exist, create a new SubscriptionApplication with this data.
     */
    create: XOR<SubscriptionApplicationCreateInput, SubscriptionApplicationUncheckedCreateInput>
    /**
     * In case the SubscriptionApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionApplicationUpdateInput, SubscriptionApplicationUncheckedUpdateInput>
  }

  /**
   * SubscriptionApplication delete
   */
  export type SubscriptionApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionApplication to delete.
     */
    where: SubscriptionApplicationWhereUniqueInput
  }

  /**
   * SubscriptionApplication deleteMany
   */
  export type SubscriptionApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionApplications to delete
     */
    where?: SubscriptionApplicationWhereInput
    /**
     * Limit how many SubscriptionApplications to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionApplication without action
   */
  export type SubscriptionApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionApplication
     */
    select?: SubscriptionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionApplication
     */
    omit?: SubscriptionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    mobile: 'mobile',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    excerpt: 'excerpt',
    featured: 'featured',
    imagePath: 'imagePath',
    published: 'published',
    readTime: 'readTime',
    tags: 'tags'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const InstallerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    brandPhotoPath: 'brandPhotoPath',
    isActive: 'isActive'
  };

  export type InstallerScalarFieldEnum = (typeof InstallerScalarFieldEnum)[keyof typeof InstallerScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    installerId: 'installerId',
    startDate: 'startDate',
    endDate: 'endDate',
    expiryDate: 'expiryDate',
    plan: 'plan',
    type: 'type',
    isActive: 'isActive',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate',
    createdByUserId: 'createdByUserId',
    updatedByUserId: 'updatedByUserId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    installerId: 'installerId',
    firstName: 'firstName',
    lastName: 'lastName',
    mobile: 'mobile',
    email: 'email',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    referenceId: 'referenceId',
    referenceType: 'referenceType',
    postcode: 'postcode',
    street: 'street',
    city: 'city',
    telephone: 'telephone',
    latitude: 'latitude',
    longitude: 'longitude',
    propertyCreateDate: 'propertyCreateDate',
    buildingUse: 'buildingUse',
    propertyType: 'propertyType',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const InstallationScalarFieldEnum: {
    id: 'id',
    installerId: 'installerId',
    customerId: 'customerId',
    addressId: 'addressId',
    postcode: 'postcode',
    zone: 'zone',
    totalPVOutput: 'totalPVOutput',
    annualACOutput: 'annualACOutput',
    roofDetails: 'roofDetails',
    shadeFactors: 'shadeFactors',
    orientations: 'orientations',
    roofSlopes: 'roofSlopes',
    roofTypes: 'roofTypes',
    results: 'results',
    pdfPath: 'pdfPath',
    status: 'status',
    signatureInfo: 'signatureInfo',
    isLocked: 'isLocked',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type InstallationScalarFieldEnum = (typeof InstallationScalarFieldEnum)[keyof typeof InstallationScalarFieldEnum]


  export const SubscriptionApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionType: 'subscriptionType',
    receiptCode: 'receiptCode',
    receiptPhotoPath: 'receiptPhotoPath',
    brandPhotoPath: 'brandPhotoPath',
    notes: 'notes',
    status: 'status',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate',
    reviewedByUserId: 'reviewedByUserId',
    reviewNotes: 'reviewNotes'
  };

  export type SubscriptionApplicationScalarFieldEnum = (typeof SubscriptionApplicationScalarFieldEnum)[keyof typeof SubscriptionApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    mobile: 'mobile',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const BlogOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    excerpt: 'excerpt',
    imagePath: 'imagePath',
    tags: 'tags'
  };

  export type BlogOrderByRelevanceFieldEnum = (typeof BlogOrderByRelevanceFieldEnum)[keyof typeof BlogOrderByRelevanceFieldEnum]


  export const InstallerOrderByRelevanceFieldEnum: {
    userId: 'userId',
    brandPhotoPath: 'brandPhotoPath'
  };

  export type InstallerOrderByRelevanceFieldEnum = (typeof InstallerOrderByRelevanceFieldEnum)[keyof typeof InstallerOrderByRelevanceFieldEnum]


  export const SubscriptionOrderByRelevanceFieldEnum: {
    plan: 'plan',
    type: 'type',
    createdByUserId: 'createdByUserId',
    updatedByUserId: 'updatedByUserId'
  };

  export type SubscriptionOrderByRelevanceFieldEnum = (typeof SubscriptionOrderByRelevanceFieldEnum)[keyof typeof SubscriptionOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    mobile: 'mobile',
    email: 'email'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const AddressOrderByRelevanceFieldEnum: {
    referenceType: 'referenceType',
    postcode: 'postcode',
    street: 'street',
    city: 'city',
    telephone: 'telephone',
    buildingUse: 'buildingUse',
    propertyType: 'propertyType'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const InstallationOrderByRelevanceFieldEnum: {
    postcode: 'postcode',
    zone: 'zone',
    pdfPath: 'pdfPath'
  };

  export type InstallationOrderByRelevanceFieldEnum = (typeof InstallationOrderByRelevanceFieldEnum)[keyof typeof InstallationOrderByRelevanceFieldEnum]


  export const SubscriptionApplicationOrderByRelevanceFieldEnum: {
    userId: 'userId',
    subscriptionType: 'subscriptionType',
    receiptCode: 'receiptCode',
    receiptPhotoPath: 'receiptPhotoPath',
    brandPhotoPath: 'brandPhotoPath',
    notes: 'notes',
    status: 'status',
    reviewedByUserId: 'reviewedByUserId',
    reviewNotes: 'reviewNotes'
  };

  export type SubscriptionApplicationOrderByRelevanceFieldEnum = (typeof SubscriptionApplicationOrderByRelevanceFieldEnum)[keyof typeof SubscriptionApplicationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'InstallationStatus'
   */
  export type EnumInstallationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstallationStatus'>
    


  /**
   * Reference to a field of type 'InstallationStatus[]'
   */
  export type ListEnumInstallationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstallationStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    blogs?: BlogListRelationFilter
    accounts?: AccountListRelationFilter
    installer?: XOR<InstallerNullableScalarRelationFilter, InstallerWhereInput> | null
    sessions?: SessionListRelationFilter
    subscriptionApplications?: SubscriptionApplicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    blogs?: BlogOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    installer?: InstallerOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    subscriptionApplications?: SubscriptionApplicationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    mobile?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    blogs?: BlogListRelationFilter
    accounts?: AccountListRelationFilter
    installer?: XOR<InstallerNullableScalarRelationFilter, InstallerWhereInput> | null
    sessions?: SessionListRelationFilter
    subscriptionApplications?: SubscriptionApplicationListRelationFilter
  }, "id" | "username" | "mobile" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    title?: StringFilter<"Blog"> | string
    content?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    featured?: BoolFilter<"Blog"> | boolean
    imagePath?: StringNullableFilter<"Blog"> | string | null
    published?: BoolFilter<"Blog"> | boolean
    readTime?: IntNullableFilter<"Blog"> | number | null
    tags?: StringNullableFilter<"Blog"> | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    authorId?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    featured?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    published?: SortOrder
    readTime?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    _relevance?: BlogOrderByRelevanceInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    title?: StringFilter<"Blog"> | string
    content?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    featured?: BoolFilter<"Blog"> | boolean
    imagePath?: StringNullableFilter<"Blog"> | string | null
    published?: BoolFilter<"Blog"> | boolean
    readTime?: IntNullableFilter<"Blog"> | number | null
    tags?: StringNullableFilter<"Blog"> | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    authorId?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    featured?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    published?: SortOrder
    readTime?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    authorId?: StringWithAggregatesFilter<"Blog"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    featured?: BoolWithAggregatesFilter<"Blog"> | boolean
    imagePath?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    published?: BoolWithAggregatesFilter<"Blog"> | boolean
    readTime?: IntNullableWithAggregatesFilter<"Blog"> | number | null
    tags?: StringNullableWithAggregatesFilter<"Blog"> | string | null
  }

  export type InstallerWhereInput = {
    AND?: InstallerWhereInput | InstallerWhereInput[]
    OR?: InstallerWhereInput[]
    NOT?: InstallerWhereInput | InstallerWhereInput[]
    id?: IntFilter<"Installer"> | number
    userId?: StringFilter<"Installer"> | string
    brandPhotoPath?: StringNullableFilter<"Installer"> | string | null
    isActive?: BoolFilter<"Installer"> | boolean
    customers?: CustomerListRelationFilter
    installations?: InstallationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type InstallerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandPhotoPath?: SortOrderInput | SortOrder
    isActive?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    installations?: InstallationOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    _relevance?: InstallerOrderByRelevanceInput
  }

  export type InstallerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: InstallerWhereInput | InstallerWhereInput[]
    OR?: InstallerWhereInput[]
    NOT?: InstallerWhereInput | InstallerWhereInput[]
    brandPhotoPath?: StringNullableFilter<"Installer"> | string | null
    isActive?: BoolFilter<"Installer"> | boolean
    customers?: CustomerListRelationFilter
    installations?: InstallationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "userId">

  export type InstallerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandPhotoPath?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: InstallerCountOrderByAggregateInput
    _avg?: InstallerAvgOrderByAggregateInput
    _max?: InstallerMaxOrderByAggregateInput
    _min?: InstallerMinOrderByAggregateInput
    _sum?: InstallerSumOrderByAggregateInput
  }

  export type InstallerScalarWhereWithAggregatesInput = {
    AND?: InstallerScalarWhereWithAggregatesInput | InstallerScalarWhereWithAggregatesInput[]
    OR?: InstallerScalarWhereWithAggregatesInput[]
    NOT?: InstallerScalarWhereWithAggregatesInput | InstallerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Installer"> | number
    userId?: StringWithAggregatesFilter<"Installer"> | string
    brandPhotoPath?: StringNullableWithAggregatesFilter<"Installer"> | string | null
    isActive?: BoolWithAggregatesFilter<"Installer"> | boolean
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    installerId?: IntFilter<"Subscription"> | number
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    expiryDate?: DateTimeFilter<"Subscription"> | Date | string
    plan?: StringFilter<"Subscription"> | string
    type?: StringFilter<"Subscription"> | string
    isActive?: BoolFilter<"Subscription"> | boolean
    createdDate?: DateTimeFilter<"Subscription"> | Date | string
    updatedDate?: DateTimeFilter<"Subscription"> | Date | string
    createdByUserId?: StringNullableFilter<"Subscription"> | string | null
    updatedByUserId?: StringNullableFilter<"Subscription"> | string | null
    installer?: XOR<InstallerScalarRelationFilter, InstallerWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    installerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expiryDate?: SortOrder
    plan?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    updatedByUserId?: SortOrderInput | SortOrder
    installer?: InstallerOrderByWithRelationInput
    _relevance?: SubscriptionOrderByRelevanceInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    installerId?: number
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    expiryDate?: DateTimeFilter<"Subscription"> | Date | string
    plan?: StringFilter<"Subscription"> | string
    type?: StringFilter<"Subscription"> | string
    isActive?: BoolFilter<"Subscription"> | boolean
    createdDate?: DateTimeFilter<"Subscription"> | Date | string
    updatedDate?: DateTimeFilter<"Subscription"> | Date | string
    createdByUserId?: StringNullableFilter<"Subscription"> | string | null
    updatedByUserId?: StringNullableFilter<"Subscription"> | string | null
    installer?: XOR<InstallerScalarRelationFilter, InstallerWhereInput>
  }, "id" | "installerId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    installerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expiryDate?: SortOrder
    plan?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    updatedByUserId?: SortOrderInput | SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    installerId?: IntWithAggregatesFilter<"Subscription"> | number
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    plan?: StringWithAggregatesFilter<"Subscription"> | string
    type?: StringWithAggregatesFilter<"Subscription"> | string
    isActive?: BoolWithAggregatesFilter<"Subscription"> | boolean
    createdDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    createdByUserId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    updatedByUserId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    installerId?: IntFilter<"Customer"> | number
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    mobile?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    createdDate?: DateTimeFilter<"Customer"> | Date | string
    updatedDate?: DateTimeFilter<"Customer"> | Date | string
    addresses?: AddressListRelationFilter
    installer?: XOR<InstallerScalarRelationFilter, InstallerWhereInput>
    installations?: InstallationListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    installerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    installer?: InstallerOrderByWithRelationInput
    installations?: InstallationOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    installerId?: IntFilter<"Customer"> | number
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    mobile?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    createdDate?: DateTimeFilter<"Customer"> | Date | string
    updatedDate?: DateTimeFilter<"Customer"> | Date | string
    addresses?: AddressListRelationFilter
    installer?: XOR<InstallerScalarRelationFilter, InstallerWhereInput>
    installations?: InstallationListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    installerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    installerId?: IntWithAggregatesFilter<"Customer"> | number
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    mobile?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdDate?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedDate?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    referenceId?: IntFilter<"Address"> | number
    referenceType?: StringFilter<"Address"> | string
    postcode?: StringFilter<"Address"> | string
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    telephone?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    propertyCreateDate?: DateTimeNullableFilter<"Address"> | Date | string | null
    buildingUse?: StringNullableFilter<"Address"> | string | null
    propertyType?: StringNullableFilter<"Address"> | string | null
    createdDate?: DateTimeFilter<"Address"> | Date | string
    updatedDate?: DateTimeFilter<"Address"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    installations?: InstallationListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    postcode?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    propertyCreateDate?: SortOrderInput | SortOrder
    buildingUse?: SortOrderInput | SortOrder
    propertyType?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    installations?: InstallationOrderByRelationAggregateInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    referenceId?: IntFilter<"Address"> | number
    referenceType?: StringFilter<"Address"> | string
    postcode?: StringFilter<"Address"> | string
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    telephone?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    propertyCreateDate?: DateTimeNullableFilter<"Address"> | Date | string | null
    buildingUse?: StringNullableFilter<"Address"> | string | null
    propertyType?: StringNullableFilter<"Address"> | string | null
    createdDate?: DateTimeFilter<"Address"> | Date | string
    updatedDate?: DateTimeFilter<"Address"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    installations?: InstallationListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    postcode?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    propertyCreateDate?: SortOrderInput | SortOrder
    buildingUse?: SortOrderInput | SortOrder
    propertyType?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    referenceId?: IntWithAggregatesFilter<"Address"> | number
    referenceType?: StringWithAggregatesFilter<"Address"> | string
    postcode?: StringWithAggregatesFilter<"Address"> | string
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"Address"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    propertyCreateDate?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
    buildingUse?: StringNullableWithAggregatesFilter<"Address"> | string | null
    propertyType?: StringNullableWithAggregatesFilter<"Address"> | string | null
    createdDate?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedDate?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type InstallationWhereInput = {
    AND?: InstallationWhereInput | InstallationWhereInput[]
    OR?: InstallationWhereInput[]
    NOT?: InstallationWhereInput | InstallationWhereInput[]
    id?: IntFilter<"Installation"> | number
    installerId?: IntFilter<"Installation"> | number
    customerId?: IntFilter<"Installation"> | number
    addressId?: IntFilter<"Installation"> | number
    postcode?: StringFilter<"Installation"> | string
    zone?: StringNullableFilter<"Installation"> | string | null
    totalPVOutput?: FloatFilter<"Installation"> | number
    annualACOutput?: FloatFilter<"Installation"> | number
    roofDetails?: JsonNullableFilter<"Installation">
    shadeFactors?: JsonNullableFilter<"Installation">
    orientations?: JsonNullableFilter<"Installation">
    roofSlopes?: JsonNullableFilter<"Installation">
    roofTypes?: JsonNullableFilter<"Installation">
    results?: JsonNullableFilter<"Installation">
    pdfPath?: StringNullableFilter<"Installation"> | string | null
    status?: EnumInstallationStatusFilter<"Installation"> | $Enums.InstallationStatus
    signatureInfo?: JsonNullableFilter<"Installation">
    isLocked?: BoolFilter<"Installation"> | boolean
    createdDate?: DateTimeFilter<"Installation"> | Date | string
    updatedDate?: DateTimeFilter<"Installation"> | Date | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    installer?: XOR<InstallerScalarRelationFilter, InstallerWhereInput>
  }

  export type InstallationOrderByWithRelationInput = {
    id?: SortOrder
    installerId?: SortOrder
    customerId?: SortOrder
    addressId?: SortOrder
    postcode?: SortOrder
    zone?: SortOrderInput | SortOrder
    totalPVOutput?: SortOrder
    annualACOutput?: SortOrder
    roofDetails?: SortOrderInput | SortOrder
    shadeFactors?: SortOrderInput | SortOrder
    orientations?: SortOrderInput | SortOrder
    roofSlopes?: SortOrderInput | SortOrder
    roofTypes?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    pdfPath?: SortOrderInput | SortOrder
    status?: SortOrder
    signatureInfo?: SortOrderInput | SortOrder
    isLocked?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    address?: AddressOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    installer?: InstallerOrderByWithRelationInput
    _relevance?: InstallationOrderByRelevanceInput
  }

  export type InstallationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstallationWhereInput | InstallationWhereInput[]
    OR?: InstallationWhereInput[]
    NOT?: InstallationWhereInput | InstallationWhereInput[]
    installerId?: IntFilter<"Installation"> | number
    customerId?: IntFilter<"Installation"> | number
    addressId?: IntFilter<"Installation"> | number
    postcode?: StringFilter<"Installation"> | string
    zone?: StringNullableFilter<"Installation"> | string | null
    totalPVOutput?: FloatFilter<"Installation"> | number
    annualACOutput?: FloatFilter<"Installation"> | number
    roofDetails?: JsonNullableFilter<"Installation">
    shadeFactors?: JsonNullableFilter<"Installation">
    orientations?: JsonNullableFilter<"Installation">
    roofSlopes?: JsonNullableFilter<"Installation">
    roofTypes?: JsonNullableFilter<"Installation">
    results?: JsonNullableFilter<"Installation">
    pdfPath?: StringNullableFilter<"Installation"> | string | null
    status?: EnumInstallationStatusFilter<"Installation"> | $Enums.InstallationStatus
    signatureInfo?: JsonNullableFilter<"Installation">
    isLocked?: BoolFilter<"Installation"> | boolean
    createdDate?: DateTimeFilter<"Installation"> | Date | string
    updatedDate?: DateTimeFilter<"Installation"> | Date | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    installer?: XOR<InstallerScalarRelationFilter, InstallerWhereInput>
  }, "id">

  export type InstallationOrderByWithAggregationInput = {
    id?: SortOrder
    installerId?: SortOrder
    customerId?: SortOrder
    addressId?: SortOrder
    postcode?: SortOrder
    zone?: SortOrderInput | SortOrder
    totalPVOutput?: SortOrder
    annualACOutput?: SortOrder
    roofDetails?: SortOrderInput | SortOrder
    shadeFactors?: SortOrderInput | SortOrder
    orientations?: SortOrderInput | SortOrder
    roofSlopes?: SortOrderInput | SortOrder
    roofTypes?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    pdfPath?: SortOrderInput | SortOrder
    status?: SortOrder
    signatureInfo?: SortOrderInput | SortOrder
    isLocked?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    _count?: InstallationCountOrderByAggregateInput
    _avg?: InstallationAvgOrderByAggregateInput
    _max?: InstallationMaxOrderByAggregateInput
    _min?: InstallationMinOrderByAggregateInput
    _sum?: InstallationSumOrderByAggregateInput
  }

  export type InstallationScalarWhereWithAggregatesInput = {
    AND?: InstallationScalarWhereWithAggregatesInput | InstallationScalarWhereWithAggregatesInput[]
    OR?: InstallationScalarWhereWithAggregatesInput[]
    NOT?: InstallationScalarWhereWithAggregatesInput | InstallationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Installation"> | number
    installerId?: IntWithAggregatesFilter<"Installation"> | number
    customerId?: IntWithAggregatesFilter<"Installation"> | number
    addressId?: IntWithAggregatesFilter<"Installation"> | number
    postcode?: StringWithAggregatesFilter<"Installation"> | string
    zone?: StringNullableWithAggregatesFilter<"Installation"> | string | null
    totalPVOutput?: FloatWithAggregatesFilter<"Installation"> | number
    annualACOutput?: FloatWithAggregatesFilter<"Installation"> | number
    roofDetails?: JsonNullableWithAggregatesFilter<"Installation">
    shadeFactors?: JsonNullableWithAggregatesFilter<"Installation">
    orientations?: JsonNullableWithAggregatesFilter<"Installation">
    roofSlopes?: JsonNullableWithAggregatesFilter<"Installation">
    roofTypes?: JsonNullableWithAggregatesFilter<"Installation">
    results?: JsonNullableWithAggregatesFilter<"Installation">
    pdfPath?: StringNullableWithAggregatesFilter<"Installation"> | string | null
    status?: EnumInstallationStatusWithAggregatesFilter<"Installation"> | $Enums.InstallationStatus
    signatureInfo?: JsonNullableWithAggregatesFilter<"Installation">
    isLocked?: BoolWithAggregatesFilter<"Installation"> | boolean
    createdDate?: DateTimeWithAggregatesFilter<"Installation"> | Date | string
    updatedDate?: DateTimeWithAggregatesFilter<"Installation"> | Date | string
  }

  export type SubscriptionApplicationWhereInput = {
    AND?: SubscriptionApplicationWhereInput | SubscriptionApplicationWhereInput[]
    OR?: SubscriptionApplicationWhereInput[]
    NOT?: SubscriptionApplicationWhereInput | SubscriptionApplicationWhereInput[]
    id?: IntFilter<"SubscriptionApplication"> | number
    userId?: StringFilter<"SubscriptionApplication"> | string
    subscriptionType?: StringFilter<"SubscriptionApplication"> | string
    receiptCode?: StringFilter<"SubscriptionApplication"> | string
    receiptPhotoPath?: StringFilter<"SubscriptionApplication"> | string
    brandPhotoPath?: StringNullableFilter<"SubscriptionApplication"> | string | null
    notes?: StringNullableFilter<"SubscriptionApplication"> | string | null
    status?: StringFilter<"SubscriptionApplication"> | string
    createdDate?: DateTimeFilter<"SubscriptionApplication"> | Date | string
    updatedDate?: DateTimeFilter<"SubscriptionApplication"> | Date | string
    reviewedByUserId?: StringNullableFilter<"SubscriptionApplication"> | string | null
    reviewNotes?: StringNullableFilter<"SubscriptionApplication"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionType?: SortOrder
    receiptCode?: SortOrder
    receiptPhotoPath?: SortOrder
    brandPhotoPath?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    reviewedByUserId?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SubscriptionApplicationOrderByRelevanceInput
  }

  export type SubscriptionApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionApplicationWhereInput | SubscriptionApplicationWhereInput[]
    OR?: SubscriptionApplicationWhereInput[]
    NOT?: SubscriptionApplicationWhereInput | SubscriptionApplicationWhereInput[]
    userId?: StringFilter<"SubscriptionApplication"> | string
    subscriptionType?: StringFilter<"SubscriptionApplication"> | string
    receiptCode?: StringFilter<"SubscriptionApplication"> | string
    receiptPhotoPath?: StringFilter<"SubscriptionApplication"> | string
    brandPhotoPath?: StringNullableFilter<"SubscriptionApplication"> | string | null
    notes?: StringNullableFilter<"SubscriptionApplication"> | string | null
    status?: StringFilter<"SubscriptionApplication"> | string
    createdDate?: DateTimeFilter<"SubscriptionApplication"> | Date | string
    updatedDate?: DateTimeFilter<"SubscriptionApplication"> | Date | string
    reviewedByUserId?: StringNullableFilter<"SubscriptionApplication"> | string | null
    reviewNotes?: StringNullableFilter<"SubscriptionApplication"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubscriptionApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionType?: SortOrder
    receiptCode?: SortOrder
    receiptPhotoPath?: SortOrder
    brandPhotoPath?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    reviewedByUserId?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    _count?: SubscriptionApplicationCountOrderByAggregateInput
    _avg?: SubscriptionApplicationAvgOrderByAggregateInput
    _max?: SubscriptionApplicationMaxOrderByAggregateInput
    _min?: SubscriptionApplicationMinOrderByAggregateInput
    _sum?: SubscriptionApplicationSumOrderByAggregateInput
  }

  export type SubscriptionApplicationScalarWhereWithAggregatesInput = {
    AND?: SubscriptionApplicationScalarWhereWithAggregatesInput | SubscriptionApplicationScalarWhereWithAggregatesInput[]
    OR?: SubscriptionApplicationScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionApplicationScalarWhereWithAggregatesInput | SubscriptionApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubscriptionApplication"> | number
    userId?: StringWithAggregatesFilter<"SubscriptionApplication"> | string
    subscriptionType?: StringWithAggregatesFilter<"SubscriptionApplication"> | string
    receiptCode?: StringWithAggregatesFilter<"SubscriptionApplication"> | string
    receiptPhotoPath?: StringWithAggregatesFilter<"SubscriptionApplication"> | string
    brandPhotoPath?: StringNullableWithAggregatesFilter<"SubscriptionApplication"> | string | null
    notes?: StringNullableWithAggregatesFilter<"SubscriptionApplication"> | string | null
    status?: StringWithAggregatesFilter<"SubscriptionApplication"> | string
    createdDate?: DateTimeWithAggregatesFilter<"SubscriptionApplication"> | Date | string
    updatedDate?: DateTimeWithAggregatesFilter<"SubscriptionApplication"> | Date | string
    reviewedByUserId?: StringNullableWithAggregatesFilter<"SubscriptionApplication"> | string | null
    reviewNotes?: StringNullableWithAggregatesFilter<"SubscriptionApplication"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    installer?: InstallerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    installer?: InstallerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    installer?: InstallerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    installer?: InstallerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    excerpt?: string | null
    featured?: boolean
    imagePath?: string | null
    published?: boolean
    readTime?: number | null
    tags?: string | null
    author: UserCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    authorId: string
    excerpt?: string | null
    featured?: boolean
    imagePath?: string | null
    published?: boolean
    readTime?: number | null
    tags?: string | null
  }

  export type BlogUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    authorId: string
    excerpt?: string | null
    featured?: boolean
    imagePath?: string | null
    published?: boolean
    readTime?: number | null
    tags?: string | null
  }

  export type BlogUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstallerCreateInput = {
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerCreateNestedManyWithoutInstallerInput
    installations?: InstallationCreateNestedManyWithoutInstallerInput
    user: UserCreateNestedOneWithoutInstallerInput
    subscription?: SubscriptionCreateNestedOneWithoutInstallerInput
  }

  export type InstallerUncheckedCreateInput = {
    id?: number
    userId: string
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerUncheckedCreateNestedManyWithoutInstallerInput
    installations?: InstallationUncheckedCreateNestedManyWithoutInstallerInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutInstallerInput
  }

  export type InstallerUpdateInput = {
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateManyWithoutInstallerNestedInput
    installations?: InstallationUpdateManyWithoutInstallerNestedInput
    user?: UserUpdateOneRequiredWithoutInstallerNestedInput
    subscription?: SubscriptionUpdateOneWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUncheckedUpdateManyWithoutInstallerNestedInput
    installations?: InstallationUncheckedUpdateManyWithoutInstallerNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutInstallerNestedInput
  }

  export type InstallerCreateManyInput = {
    id?: number
    userId: string
    brandPhotoPath?: string | null
    isActive?: boolean
  }

  export type InstallerUpdateManyMutationInput = {
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstallerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateInput = {
    startDate: Date | string
    endDate: Date | string
    expiryDate?: Date | string
    plan?: string
    type?: string
    isActive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    installer: InstallerCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    installerId: number
    startDate: Date | string
    endDate: Date | string
    expiryDate?: Date | string
    plan?: string
    type?: string
    isActive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type SubscriptionUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    installer?: InstallerUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    installerId: number
    startDate: Date | string
    endDate: Date | string
    expiryDate?: Date | string
    plan?: string
    type?: string
    isActive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type SubscriptionUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    installer: InstallerCreateNestedOneWithoutCustomersInput
    installations?: InstallationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    installerId: number
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    installations?: InstallationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    installer?: InstallerUpdateOneRequiredWithoutCustomersNestedInput
    installations?: InstallationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    installations?: InstallationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    installerId: number
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    customer: CustomerCreateNestedOneWithoutAddressesInput
    installations?: InstallationCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    referenceId: number
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    installations?: InstallationUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAddressesNestedInput
    installations?: InstallationUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceId?: IntFieldUpdateOperationsInput | number
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    referenceId: number
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceId?: IntFieldUpdateOperationsInput | number
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationCreateInput = {
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    address: AddressCreateNestedOneWithoutInstallationsInput
    customer: CustomerCreateNestedOneWithoutInstallationsInput
    installer: InstallerCreateNestedOneWithoutInstallationsInput
  }

  export type InstallationUncheckedCreateInput = {
    id?: number
    installerId: number
    customerId: number
    addressId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationUpdateInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutInstallationsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutInstallationsNestedInput
    installer?: InstallerUpdateOneRequiredWithoutInstallationsNestedInput
  }

  export type InstallationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationCreateManyInput = {
    id?: number
    installerId: number
    customerId: number
    addressId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationUpdateManyMutationInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionApplicationCreateInput = {
    subscriptionType: string
    receiptCode: string
    receiptPhotoPath: string
    brandPhotoPath?: string | null
    notes?: string | null
    status?: string
    createdDate?: Date | string
    updatedDate?: Date | string
    reviewedByUserId?: string | null
    reviewNotes?: string | null
    user: UserCreateNestedOneWithoutSubscriptionApplicationsInput
  }

  export type SubscriptionApplicationUncheckedCreateInput = {
    id?: number
    userId: string
    subscriptionType: string
    receiptCode: string
    receiptPhotoPath: string
    brandPhotoPath?: string | null
    notes?: string | null
    status?: string
    createdDate?: Date | string
    updatedDate?: Date | string
    reviewedByUserId?: string | null
    reviewNotes?: string | null
  }

  export type SubscriptionApplicationUpdateInput = {
    subscriptionType?: StringFieldUpdateOperationsInput | string
    receiptCode?: StringFieldUpdateOperationsInput | string
    receiptPhotoPath?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSubscriptionApplicationsNestedInput
  }

  export type SubscriptionApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionType?: StringFieldUpdateOperationsInput | string
    receiptCode?: StringFieldUpdateOperationsInput | string
    receiptPhotoPath?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionApplicationCreateManyInput = {
    id?: number
    userId: string
    subscriptionType: string
    receiptCode: string
    receiptPhotoPath: string
    brandPhotoPath?: string | null
    notes?: string | null
    status?: string
    createdDate?: Date | string
    updatedDate?: Date | string
    reviewedByUserId?: string | null
    reviewNotes?: string | null
  }

  export type SubscriptionApplicationUpdateManyMutationInput = {
    subscriptionType?: StringFieldUpdateOperationsInput | string
    receiptCode?: StringFieldUpdateOperationsInput | string
    receiptPhotoPath?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionType?: StringFieldUpdateOperationsInput | string
    receiptCode?: StringFieldUpdateOperationsInput | string
    receiptPhotoPath?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type InstallerNullableScalarRelationFilter = {
    is?: InstallerWhereInput | null
    isNot?: InstallerWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SubscriptionApplicationListRelationFilter = {
    every?: SubscriptionApplicationWhereInput
    some?: SubscriptionApplicationWhereInput
    none?: SubscriptionApplicationWhereInput
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BlogOrderByRelevanceInput = {
    fields: BlogOrderByRelevanceFieldEnum | BlogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    excerpt?: SortOrder
    featured?: SortOrder
    imagePath?: SortOrder
    published?: SortOrder
    readTime?: SortOrder
    tags?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
    readTime?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    excerpt?: SortOrder
    featured?: SortOrder
    imagePath?: SortOrder
    published?: SortOrder
    readTime?: SortOrder
    tags?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    excerpt?: SortOrder
    featured?: SortOrder
    imagePath?: SortOrder
    published?: SortOrder
    readTime?: SortOrder
    tags?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
    readTime?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type InstallationListRelationFilter = {
    every?: InstallationWhereInput
    some?: InstallationWhereInput
    none?: InstallationWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstallationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstallerOrderByRelevanceInput = {
    fields: InstallerOrderByRelevanceFieldEnum | InstallerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstallerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandPhotoPath?: SortOrder
    isActive?: SortOrder
  }

  export type InstallerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstallerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandPhotoPath?: SortOrder
    isActive?: SortOrder
  }

  export type InstallerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandPhotoPath?: SortOrder
    isActive?: SortOrder
  }

  export type InstallerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstallerScalarRelationFilter = {
    is?: InstallerWhereInput
    isNot?: InstallerWhereInput
  }

  export type SubscriptionOrderByRelevanceInput = {
    fields: SubscriptionOrderByRelevanceFieldEnum | SubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expiryDate?: SortOrder
    plan?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expiryDate?: SortOrder
    plan?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expiryDate?: SortOrder
    plan?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    postcode?: SortOrder
    street?: SortOrder
    city?: SortOrder
    telephone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    propertyCreateDate?: SortOrder
    buildingUse?: SortOrder
    propertyType?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    postcode?: SortOrder
    street?: SortOrder
    city?: SortOrder
    telephone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    propertyCreateDate?: SortOrder
    buildingUse?: SortOrder
    propertyType?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    postcode?: SortOrder
    street?: SortOrder
    city?: SortOrder
    telephone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    propertyCreateDate?: SortOrder
    buildingUse?: SortOrder
    propertyType?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumInstallationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusFilter<$PrismaModel> | $Enums.InstallationStatus
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type InstallationOrderByRelevanceInput = {
    fields: InstallationOrderByRelevanceFieldEnum | InstallationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstallationCountOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    customerId?: SortOrder
    addressId?: SortOrder
    postcode?: SortOrder
    zone?: SortOrder
    totalPVOutput?: SortOrder
    annualACOutput?: SortOrder
    roofDetails?: SortOrder
    shadeFactors?: SortOrder
    orientations?: SortOrder
    roofSlopes?: SortOrder
    roofTypes?: SortOrder
    results?: SortOrder
    pdfPath?: SortOrder
    status?: SortOrder
    signatureInfo?: SortOrder
    isLocked?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type InstallationAvgOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    customerId?: SortOrder
    addressId?: SortOrder
    totalPVOutput?: SortOrder
    annualACOutput?: SortOrder
  }

  export type InstallationMaxOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    customerId?: SortOrder
    addressId?: SortOrder
    postcode?: SortOrder
    zone?: SortOrder
    totalPVOutput?: SortOrder
    annualACOutput?: SortOrder
    pdfPath?: SortOrder
    status?: SortOrder
    isLocked?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type InstallationMinOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    customerId?: SortOrder
    addressId?: SortOrder
    postcode?: SortOrder
    zone?: SortOrder
    totalPVOutput?: SortOrder
    annualACOutput?: SortOrder
    pdfPath?: SortOrder
    status?: SortOrder
    isLocked?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type InstallationSumOrderByAggregateInput = {
    id?: SortOrder
    installerId?: SortOrder
    customerId?: SortOrder
    addressId?: SortOrder
    totalPVOutput?: SortOrder
    annualACOutput?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumInstallationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstallationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstallationStatusFilter<$PrismaModel>
    _max?: NestedEnumInstallationStatusFilter<$PrismaModel>
  }

  export type SubscriptionApplicationOrderByRelevanceInput = {
    fields: SubscriptionApplicationOrderByRelevanceFieldEnum | SubscriptionApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionType?: SortOrder
    receiptCode?: SortOrder
    receiptPhotoPath?: SortOrder
    brandPhotoPath?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    reviewedByUserId?: SortOrder
    reviewNotes?: SortOrder
  }

  export type SubscriptionApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscriptionApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionType?: SortOrder
    receiptCode?: SortOrder
    receiptPhotoPath?: SortOrder
    brandPhotoPath?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    reviewedByUserId?: SortOrder
    reviewNotes?: SortOrder
  }

  export type SubscriptionApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionType?: SortOrder
    receiptCode?: SortOrder
    receiptPhotoPath?: SortOrder
    brandPhotoPath?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    reviewedByUserId?: SortOrder
    reviewNotes?: SortOrder
  }

  export type SubscriptionApplicationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type BlogCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type InstallerCreateNestedOneWithoutUserInput = {
    create?: XOR<InstallerCreateWithoutUserInput, InstallerUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutUserInput
    connect?: InstallerWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SubscriptionApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionApplicationCreateWithoutUserInput, SubscriptionApplicationUncheckedCreateWithoutUserInput> | SubscriptionApplicationCreateWithoutUserInput[] | SubscriptionApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionApplicationCreateOrConnectWithoutUserInput | SubscriptionApplicationCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionApplicationCreateManyUserInputEnvelope
    connect?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type InstallerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InstallerCreateWithoutUserInput, InstallerUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutUserInput
    connect?: InstallerWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SubscriptionApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionApplicationCreateWithoutUserInput, SubscriptionApplicationUncheckedCreateWithoutUserInput> | SubscriptionApplicationCreateWithoutUserInput[] | SubscriptionApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionApplicationCreateOrConnectWithoutUserInput | SubscriptionApplicationCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionApplicationCreateManyUserInputEnvelope
    connect?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BlogUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type InstallerUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstallerCreateWithoutUserInput, InstallerUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutUserInput
    upsert?: InstallerUpsertWithoutUserInput
    disconnect?: InstallerWhereInput | boolean
    delete?: InstallerWhereInput | boolean
    connect?: InstallerWhereUniqueInput
    update?: XOR<XOR<InstallerUpdateToOneWithWhereWithoutUserInput, InstallerUpdateWithoutUserInput>, InstallerUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SubscriptionApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionApplicationCreateWithoutUserInput, SubscriptionApplicationUncheckedCreateWithoutUserInput> | SubscriptionApplicationCreateWithoutUserInput[] | SubscriptionApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionApplicationCreateOrConnectWithoutUserInput | SubscriptionApplicationCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionApplicationUpsertWithWhereUniqueWithoutUserInput | SubscriptionApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionApplicationCreateManyUserInputEnvelope
    set?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    disconnect?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    delete?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    connect?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    update?: SubscriptionApplicationUpdateWithWhereUniqueWithoutUserInput | SubscriptionApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionApplicationUpdateManyWithWhereWithoutUserInput | SubscriptionApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionApplicationScalarWhereInput | SubscriptionApplicationScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type InstallerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstallerCreateWithoutUserInput, InstallerUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutUserInput
    upsert?: InstallerUpsertWithoutUserInput
    disconnect?: InstallerWhereInput | boolean
    delete?: InstallerWhereInput | boolean
    connect?: InstallerWhereUniqueInput
    update?: XOR<XOR<InstallerUpdateToOneWithWhereWithoutUserInput, InstallerUpdateWithoutUserInput>, InstallerUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SubscriptionApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionApplicationCreateWithoutUserInput, SubscriptionApplicationUncheckedCreateWithoutUserInput> | SubscriptionApplicationCreateWithoutUserInput[] | SubscriptionApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionApplicationCreateOrConnectWithoutUserInput | SubscriptionApplicationCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionApplicationUpsertWithWhereUniqueWithoutUserInput | SubscriptionApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionApplicationCreateManyUserInputEnvelope
    set?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    disconnect?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    delete?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    connect?: SubscriptionApplicationWhereUniqueInput | SubscriptionApplicationWhereUniqueInput[]
    update?: SubscriptionApplicationUpdateWithWhereUniqueWithoutUserInput | SubscriptionApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionApplicationUpdateManyWithWhereWithoutUserInput | SubscriptionApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionApplicationScalarWhereInput | SubscriptionApplicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerCreateNestedManyWithoutInstallerInput = {
    create?: XOR<CustomerCreateWithoutInstallerInput, CustomerUncheckedCreateWithoutInstallerInput> | CustomerCreateWithoutInstallerInput[] | CustomerUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutInstallerInput | CustomerCreateOrConnectWithoutInstallerInput[]
    createMany?: CustomerCreateManyInstallerInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type InstallationCreateNestedManyWithoutInstallerInput = {
    create?: XOR<InstallationCreateWithoutInstallerInput, InstallationUncheckedCreateWithoutInstallerInput> | InstallationCreateWithoutInstallerInput[] | InstallationUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutInstallerInput | InstallationCreateOrConnectWithoutInstallerInput[]
    createMany?: InstallationCreateManyInstallerInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutInstallerInput = {
    create?: XOR<UserCreateWithoutInstallerInput, UserUncheckedCreateWithoutInstallerInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstallerInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutInstallerInput = {
    create?: XOR<SubscriptionCreateWithoutInstallerInput, SubscriptionUncheckedCreateWithoutInstallerInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInstallerInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedManyWithoutInstallerInput = {
    create?: XOR<CustomerCreateWithoutInstallerInput, CustomerUncheckedCreateWithoutInstallerInput> | CustomerCreateWithoutInstallerInput[] | CustomerUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutInstallerInput | CustomerCreateOrConnectWithoutInstallerInput[]
    createMany?: CustomerCreateManyInstallerInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type InstallationUncheckedCreateNestedManyWithoutInstallerInput = {
    create?: XOR<InstallationCreateWithoutInstallerInput, InstallationUncheckedCreateWithoutInstallerInput> | InstallationCreateWithoutInstallerInput[] | InstallationUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutInstallerInput | InstallationCreateOrConnectWithoutInstallerInput[]
    createMany?: InstallationCreateManyInstallerInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutInstallerInput = {
    create?: XOR<SubscriptionCreateWithoutInstallerInput, SubscriptionUncheckedCreateWithoutInstallerInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInstallerInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type CustomerUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<CustomerCreateWithoutInstallerInput, CustomerUncheckedCreateWithoutInstallerInput> | CustomerCreateWithoutInstallerInput[] | CustomerUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutInstallerInput | CustomerCreateOrConnectWithoutInstallerInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutInstallerInput | CustomerUpsertWithWhereUniqueWithoutInstallerInput[]
    createMany?: CustomerCreateManyInstallerInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutInstallerInput | CustomerUpdateWithWhereUniqueWithoutInstallerInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutInstallerInput | CustomerUpdateManyWithWhereWithoutInstallerInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type InstallationUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<InstallationCreateWithoutInstallerInput, InstallationUncheckedCreateWithoutInstallerInput> | InstallationCreateWithoutInstallerInput[] | InstallationUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutInstallerInput | InstallationCreateOrConnectWithoutInstallerInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutInstallerInput | InstallationUpsertWithWhereUniqueWithoutInstallerInput[]
    createMany?: InstallationCreateManyInstallerInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutInstallerInput | InstallationUpdateWithWhereUniqueWithoutInstallerInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutInstallerInput | InstallationUpdateManyWithWhereWithoutInstallerInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutInstallerNestedInput = {
    create?: XOR<UserCreateWithoutInstallerInput, UserUncheckedCreateWithoutInstallerInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstallerInput
    upsert?: UserUpsertWithoutInstallerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstallerInput, UserUpdateWithoutInstallerInput>, UserUncheckedUpdateWithoutInstallerInput>
  }

  export type SubscriptionUpdateOneWithoutInstallerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutInstallerInput, SubscriptionUncheckedCreateWithoutInstallerInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInstallerInput
    upsert?: SubscriptionUpsertWithoutInstallerInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutInstallerInput, SubscriptionUpdateWithoutInstallerInput>, SubscriptionUncheckedUpdateWithoutInstallerInput>
  }

  export type CustomerUncheckedUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<CustomerCreateWithoutInstallerInput, CustomerUncheckedCreateWithoutInstallerInput> | CustomerCreateWithoutInstallerInput[] | CustomerUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutInstallerInput | CustomerCreateOrConnectWithoutInstallerInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutInstallerInput | CustomerUpsertWithWhereUniqueWithoutInstallerInput[]
    createMany?: CustomerCreateManyInstallerInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutInstallerInput | CustomerUpdateWithWhereUniqueWithoutInstallerInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutInstallerInput | CustomerUpdateManyWithWhereWithoutInstallerInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type InstallationUncheckedUpdateManyWithoutInstallerNestedInput = {
    create?: XOR<InstallationCreateWithoutInstallerInput, InstallationUncheckedCreateWithoutInstallerInput> | InstallationCreateWithoutInstallerInput[] | InstallationUncheckedCreateWithoutInstallerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutInstallerInput | InstallationCreateOrConnectWithoutInstallerInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutInstallerInput | InstallationUpsertWithWhereUniqueWithoutInstallerInput[]
    createMany?: InstallationCreateManyInstallerInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutInstallerInput | InstallationUpdateWithWhereUniqueWithoutInstallerInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutInstallerInput | InstallationUpdateManyWithWhereWithoutInstallerInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutInstallerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutInstallerInput, SubscriptionUncheckedCreateWithoutInstallerInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInstallerInput
    upsert?: SubscriptionUpsertWithoutInstallerInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutInstallerInput, SubscriptionUpdateWithoutInstallerInput>, SubscriptionUncheckedUpdateWithoutInstallerInput>
  }

  export type InstallerCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<InstallerCreateWithoutSubscriptionInput, InstallerUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutSubscriptionInput
    connect?: InstallerWhereUniqueInput
  }

  export type InstallerUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<InstallerCreateWithoutSubscriptionInput, InstallerUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutSubscriptionInput
    upsert?: InstallerUpsertWithoutSubscriptionInput
    connect?: InstallerWhereUniqueInput
    update?: XOR<XOR<InstallerUpdateToOneWithWhereWithoutSubscriptionInput, InstallerUpdateWithoutSubscriptionInput>, InstallerUncheckedUpdateWithoutSubscriptionInput>
  }

  export type AddressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type InstallerCreateNestedOneWithoutCustomersInput = {
    create?: XOR<InstallerCreateWithoutCustomersInput, InstallerUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutCustomersInput
    connect?: InstallerWhereUniqueInput
  }

  export type InstallationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InstallationCreateWithoutCustomerInput, InstallationUncheckedCreateWithoutCustomerInput> | InstallationCreateWithoutCustomerInput[] | InstallationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutCustomerInput | InstallationCreateOrConnectWithoutCustomerInput[]
    createMany?: InstallationCreateManyCustomerInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type InstallationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InstallationCreateWithoutCustomerInput, InstallationUncheckedCreateWithoutCustomerInput> | InstallationCreateWithoutCustomerInput[] | InstallationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutCustomerInput | InstallationCreateOrConnectWithoutCustomerInput[]
    createMany?: InstallationCreateManyCustomerInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type AddressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type InstallerUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<InstallerCreateWithoutCustomersInput, InstallerUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutCustomersInput
    upsert?: InstallerUpsertWithoutCustomersInput
    connect?: InstallerWhereUniqueInput
    update?: XOR<XOR<InstallerUpdateToOneWithWhereWithoutCustomersInput, InstallerUpdateWithoutCustomersInput>, InstallerUncheckedUpdateWithoutCustomersInput>
  }

  export type InstallationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InstallationCreateWithoutCustomerInput, InstallationUncheckedCreateWithoutCustomerInput> | InstallationCreateWithoutCustomerInput[] | InstallationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutCustomerInput | InstallationCreateOrConnectWithoutCustomerInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutCustomerInput | InstallationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InstallationCreateManyCustomerInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutCustomerInput | InstallationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutCustomerInput | InstallationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type InstallationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InstallationCreateWithoutCustomerInput, InstallationUncheckedCreateWithoutCustomerInput> | InstallationCreateWithoutCustomerInput[] | InstallationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutCustomerInput | InstallationCreateOrConnectWithoutCustomerInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutCustomerInput | InstallationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InstallationCreateManyCustomerInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutCustomerInput | InstallationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutCustomerInput | InstallationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutAddressesInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
  }

  export type InstallationCreateNestedManyWithoutAddressInput = {
    create?: XOR<InstallationCreateWithoutAddressInput, InstallationUncheckedCreateWithoutAddressInput> | InstallationCreateWithoutAddressInput[] | InstallationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutAddressInput | InstallationCreateOrConnectWithoutAddressInput[]
    createMany?: InstallationCreateManyAddressInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type InstallationUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<InstallationCreateWithoutAddressInput, InstallationUncheckedCreateWithoutAddressInput> | InstallationCreateWithoutAddressInput[] | InstallationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutAddressInput | InstallationCreateOrConnectWithoutAddressInput[]
    createMany?: InstallationCreateManyAddressInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    upsert?: CustomerUpsertWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAddressesInput, CustomerUpdateWithoutAddressesInput>, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type InstallationUpdateManyWithoutAddressNestedInput = {
    create?: XOR<InstallationCreateWithoutAddressInput, InstallationUncheckedCreateWithoutAddressInput> | InstallationCreateWithoutAddressInput[] | InstallationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutAddressInput | InstallationCreateOrConnectWithoutAddressInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutAddressInput | InstallationUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: InstallationCreateManyAddressInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutAddressInput | InstallationUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutAddressInput | InstallationUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type InstallationUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<InstallationCreateWithoutAddressInput, InstallationUncheckedCreateWithoutAddressInput> | InstallationCreateWithoutAddressInput[] | InstallationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutAddressInput | InstallationCreateOrConnectWithoutAddressInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutAddressInput | InstallationUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: InstallationCreateManyAddressInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutAddressInput | InstallationUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutAddressInput | InstallationUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutInstallationsInput = {
    create?: XOR<AddressCreateWithoutInstallationsInput, AddressUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutInstallationsInput
    connect?: AddressWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutInstallationsInput = {
    create?: XOR<CustomerCreateWithoutInstallationsInput, CustomerUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInstallationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type InstallerCreateNestedOneWithoutInstallationsInput = {
    create?: XOR<InstallerCreateWithoutInstallationsInput, InstallerUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutInstallationsInput
    connect?: InstallerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInstallationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InstallationStatus
  }

  export type AddressUpdateOneRequiredWithoutInstallationsNestedInput = {
    create?: XOR<AddressCreateWithoutInstallationsInput, AddressUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutInstallationsInput
    upsert?: AddressUpsertWithoutInstallationsInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutInstallationsInput, AddressUpdateWithoutInstallationsInput>, AddressUncheckedUpdateWithoutInstallationsInput>
  }

  export type CustomerUpdateOneRequiredWithoutInstallationsNestedInput = {
    create?: XOR<CustomerCreateWithoutInstallationsInput, CustomerUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInstallationsInput
    upsert?: CustomerUpsertWithoutInstallationsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInstallationsInput, CustomerUpdateWithoutInstallationsInput>, CustomerUncheckedUpdateWithoutInstallationsInput>
  }

  export type InstallerUpdateOneRequiredWithoutInstallationsNestedInput = {
    create?: XOR<InstallerCreateWithoutInstallationsInput, InstallerUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: InstallerCreateOrConnectWithoutInstallationsInput
    upsert?: InstallerUpsertWithoutInstallationsInput
    connect?: InstallerWhereUniqueInput
    update?: XOR<XOR<InstallerUpdateToOneWithWhereWithoutInstallationsInput, InstallerUpdateWithoutInstallationsInput>, InstallerUncheckedUpdateWithoutInstallationsInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionApplicationsInput = {
    create?: XOR<UserCreateWithoutSubscriptionApplicationsInput, UserUncheckedCreateWithoutSubscriptionApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionApplicationsInput, UserUncheckedCreateWithoutSubscriptionApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionApplicationsInput
    upsert?: UserUpsertWithoutSubscriptionApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionApplicationsInput, UserUpdateWithoutSubscriptionApplicationsInput>, UserUncheckedUpdateWithoutSubscriptionApplicationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumInstallationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusFilter<$PrismaModel> | $Enums.InstallationStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumInstallationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstallationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstallationStatusFilter<$PrismaModel>
    _max?: NestedEnumInstallationStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    installer?: InstallerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    installer?: InstallerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    installer?: InstallerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    installer?: InstallerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    installer?: InstallerCreateNestedOneWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    installer?: InstallerUncheckedCreateNestedOneWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    installer?: InstallerUpdateOneWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    installer?: InstallerUncheckedUpdateOneWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogCreateWithoutAuthorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    excerpt?: string | null
    featured?: boolean
    imagePath?: string | null
    published?: boolean
    readTime?: number | null
    tags?: string | null
  }

  export type BlogUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    excerpt?: string | null
    featured?: boolean
    imagePath?: string | null
    published?: boolean
    readTime?: number | null
    tags?: string | null
  }

  export type BlogCreateOrConnectWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogCreateManyAuthorInputEnvelope = {
    data: BlogCreateManyAuthorInput | BlogCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InstallerCreateWithoutUserInput = {
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerCreateNestedManyWithoutInstallerInput
    installations?: InstallationCreateNestedManyWithoutInstallerInput
    subscription?: SubscriptionCreateNestedOneWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutUserInput = {
    id?: number
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerUncheckedCreateNestedManyWithoutInstallerInput
    installations?: InstallationUncheckedCreateNestedManyWithoutInstallerInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutUserInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutUserInput, InstallerUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionApplicationCreateWithoutUserInput = {
    subscriptionType: string
    receiptCode: string
    receiptPhotoPath: string
    brandPhotoPath?: string | null
    notes?: string | null
    status?: string
    createdDate?: Date | string
    updatedDate?: Date | string
    reviewedByUserId?: string | null
    reviewNotes?: string | null
  }

  export type SubscriptionApplicationUncheckedCreateWithoutUserInput = {
    id?: number
    subscriptionType: string
    receiptCode: string
    receiptPhotoPath: string
    brandPhotoPath?: string | null
    notes?: string | null
    status?: string
    createdDate?: Date | string
    updatedDate?: Date | string
    reviewedByUserId?: string | null
    reviewNotes?: string | null
  }

  export type SubscriptionApplicationCreateOrConnectWithoutUserInput = {
    where: SubscriptionApplicationWhereUniqueInput
    create: XOR<SubscriptionApplicationCreateWithoutUserInput, SubscriptionApplicationUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionApplicationCreateManyUserInputEnvelope = {
    data: SubscriptionApplicationCreateManyUserInput | SubscriptionApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: IntFilter<"Blog"> | number
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    title?: StringFilter<"Blog"> | string
    content?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    featured?: BoolFilter<"Blog"> | boolean
    imagePath?: StringNullableFilter<"Blog"> | string | null
    published?: BoolFilter<"Blog"> | boolean
    readTime?: IntNullableFilter<"Blog"> | number | null
    tags?: StringNullableFilter<"Blog"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type InstallerUpsertWithoutUserInput = {
    update: XOR<InstallerUpdateWithoutUserInput, InstallerUncheckedUpdateWithoutUserInput>
    create: XOR<InstallerCreateWithoutUserInput, InstallerUncheckedCreateWithoutUserInput>
    where?: InstallerWhereInput
  }

  export type InstallerUpdateToOneWithWhereWithoutUserInput = {
    where?: InstallerWhereInput
    data: XOR<InstallerUpdateWithoutUserInput, InstallerUncheckedUpdateWithoutUserInput>
  }

  export type InstallerUpdateWithoutUserInput = {
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateManyWithoutInstallerNestedInput
    installations?: InstallationUpdateManyWithoutInstallerNestedInput
    subscription?: SubscriptionUpdateOneWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUncheckedUpdateManyWithoutInstallerNestedInput
    installations?: InstallationUncheckedUpdateManyWithoutInstallerNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutInstallerNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type SubscriptionApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionApplicationWhereUniqueInput
    update: XOR<SubscriptionApplicationUpdateWithoutUserInput, SubscriptionApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionApplicationCreateWithoutUserInput, SubscriptionApplicationUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionApplicationWhereUniqueInput
    data: XOR<SubscriptionApplicationUpdateWithoutUserInput, SubscriptionApplicationUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionApplicationUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionApplicationScalarWhereInput
    data: XOR<SubscriptionApplicationUpdateManyMutationInput, SubscriptionApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionApplicationScalarWhereInput = {
    AND?: SubscriptionApplicationScalarWhereInput | SubscriptionApplicationScalarWhereInput[]
    OR?: SubscriptionApplicationScalarWhereInput[]
    NOT?: SubscriptionApplicationScalarWhereInput | SubscriptionApplicationScalarWhereInput[]
    id?: IntFilter<"SubscriptionApplication"> | number
    userId?: StringFilter<"SubscriptionApplication"> | string
    subscriptionType?: StringFilter<"SubscriptionApplication"> | string
    receiptCode?: StringFilter<"SubscriptionApplication"> | string
    receiptPhotoPath?: StringFilter<"SubscriptionApplication"> | string
    brandPhotoPath?: StringNullableFilter<"SubscriptionApplication"> | string | null
    notes?: StringNullableFilter<"SubscriptionApplication"> | string | null
    status?: StringFilter<"SubscriptionApplication"> | string
    createdDate?: DateTimeFilter<"SubscriptionApplication"> | Date | string
    updatedDate?: DateTimeFilter<"SubscriptionApplication"> | Date | string
    reviewedByUserId?: StringNullableFilter<"SubscriptionApplication"> | string | null
    reviewNotes?: StringNullableFilter<"SubscriptionApplication"> | string | null
  }

  export type UserCreateWithoutBlogsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    installer?: InstallerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    installer?: InstallerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    installer?: InstallerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    installer?: InstallerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateWithoutInstallerInput = {
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    installations?: InstallationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInstallerInput = {
    id?: number
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    installations?: InstallationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutInstallerInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInstallerInput, CustomerUncheckedCreateWithoutInstallerInput>
  }

  export type CustomerCreateManyInstallerInputEnvelope = {
    data: CustomerCreateManyInstallerInput | CustomerCreateManyInstallerInput[]
    skipDuplicates?: boolean
  }

  export type InstallationCreateWithoutInstallerInput = {
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    address: AddressCreateNestedOneWithoutInstallationsInput
    customer: CustomerCreateNestedOneWithoutInstallationsInput
  }

  export type InstallationUncheckedCreateWithoutInstallerInput = {
    id?: number
    customerId: number
    addressId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationCreateOrConnectWithoutInstallerInput = {
    where: InstallationWhereUniqueInput
    create: XOR<InstallationCreateWithoutInstallerInput, InstallationUncheckedCreateWithoutInstallerInput>
  }

  export type InstallationCreateManyInstallerInputEnvelope = {
    data: InstallationCreateManyInstallerInput | InstallationCreateManyInstallerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutInstallerInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstallerInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    subscriptionApplications?: SubscriptionApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstallerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstallerInput, UserUncheckedCreateWithoutInstallerInput>
  }

  export type SubscriptionCreateWithoutInstallerInput = {
    startDate: Date | string
    endDate: Date | string
    expiryDate?: Date | string
    plan?: string
    type?: string
    isActive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type SubscriptionUncheckedCreateWithoutInstallerInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    expiryDate?: Date | string
    plan?: string
    type?: string
    isActive?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type SubscriptionCreateOrConnectWithoutInstallerInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutInstallerInput, SubscriptionUncheckedCreateWithoutInstallerInput>
  }

  export type CustomerUpsertWithWhereUniqueWithoutInstallerInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutInstallerInput, CustomerUncheckedUpdateWithoutInstallerInput>
    create: XOR<CustomerCreateWithoutInstallerInput, CustomerUncheckedCreateWithoutInstallerInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutInstallerInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutInstallerInput, CustomerUncheckedUpdateWithoutInstallerInput>
  }

  export type CustomerUpdateManyWithWhereWithoutInstallerInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutInstallerInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    installerId?: IntFilter<"Customer"> | number
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    mobile?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    createdDate?: DateTimeFilter<"Customer"> | Date | string
    updatedDate?: DateTimeFilter<"Customer"> | Date | string
  }

  export type InstallationUpsertWithWhereUniqueWithoutInstallerInput = {
    where: InstallationWhereUniqueInput
    update: XOR<InstallationUpdateWithoutInstallerInput, InstallationUncheckedUpdateWithoutInstallerInput>
    create: XOR<InstallationCreateWithoutInstallerInput, InstallationUncheckedCreateWithoutInstallerInput>
  }

  export type InstallationUpdateWithWhereUniqueWithoutInstallerInput = {
    where: InstallationWhereUniqueInput
    data: XOR<InstallationUpdateWithoutInstallerInput, InstallationUncheckedUpdateWithoutInstallerInput>
  }

  export type InstallationUpdateManyWithWhereWithoutInstallerInput = {
    where: InstallationScalarWhereInput
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyWithoutInstallerInput>
  }

  export type InstallationScalarWhereInput = {
    AND?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
    OR?: InstallationScalarWhereInput[]
    NOT?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
    id?: IntFilter<"Installation"> | number
    installerId?: IntFilter<"Installation"> | number
    customerId?: IntFilter<"Installation"> | number
    addressId?: IntFilter<"Installation"> | number
    postcode?: StringFilter<"Installation"> | string
    zone?: StringNullableFilter<"Installation"> | string | null
    totalPVOutput?: FloatFilter<"Installation"> | number
    annualACOutput?: FloatFilter<"Installation"> | number
    roofDetails?: JsonNullableFilter<"Installation">
    shadeFactors?: JsonNullableFilter<"Installation">
    orientations?: JsonNullableFilter<"Installation">
    roofSlopes?: JsonNullableFilter<"Installation">
    roofTypes?: JsonNullableFilter<"Installation">
    results?: JsonNullableFilter<"Installation">
    pdfPath?: StringNullableFilter<"Installation"> | string | null
    status?: EnumInstallationStatusFilter<"Installation"> | $Enums.InstallationStatus
    signatureInfo?: JsonNullableFilter<"Installation">
    isLocked?: BoolFilter<"Installation"> | boolean
    createdDate?: DateTimeFilter<"Installation"> | Date | string
    updatedDate?: DateTimeFilter<"Installation"> | Date | string
  }

  export type UserUpsertWithoutInstallerInput = {
    update: XOR<UserUpdateWithoutInstallerInput, UserUncheckedUpdateWithoutInstallerInput>
    create: XOR<UserCreateWithoutInstallerInput, UserUncheckedCreateWithoutInstallerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstallerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstallerInput, UserUncheckedUpdateWithoutInstallerInput>
  }

  export type UserUpdateWithoutInstallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    subscriptionApplications?: SubscriptionApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionUpsertWithoutInstallerInput = {
    update: XOR<SubscriptionUpdateWithoutInstallerInput, SubscriptionUncheckedUpdateWithoutInstallerInput>
    create: XOR<SubscriptionCreateWithoutInstallerInput, SubscriptionUncheckedCreateWithoutInstallerInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutInstallerInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutInstallerInput, SubscriptionUncheckedUpdateWithoutInstallerInput>
  }

  export type SubscriptionUpdateWithoutInstallerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUncheckedUpdateWithoutInstallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstallerCreateWithoutSubscriptionInput = {
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerCreateNestedManyWithoutInstallerInput
    installations?: InstallationCreateNestedManyWithoutInstallerInput
    user: UserCreateNestedOneWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    userId: string
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerUncheckedCreateNestedManyWithoutInstallerInput
    installations?: InstallationUncheckedCreateNestedManyWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutSubscriptionInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutSubscriptionInput, InstallerUncheckedCreateWithoutSubscriptionInput>
  }

  export type InstallerUpsertWithoutSubscriptionInput = {
    update: XOR<InstallerUpdateWithoutSubscriptionInput, InstallerUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<InstallerCreateWithoutSubscriptionInput, InstallerUncheckedCreateWithoutSubscriptionInput>
    where?: InstallerWhereInput
  }

  export type InstallerUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: InstallerWhereInput
    data: XOR<InstallerUpdateWithoutSubscriptionInput, InstallerUncheckedUpdateWithoutSubscriptionInput>
  }

  export type InstallerUpdateWithoutSubscriptionInput = {
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateManyWithoutInstallerNestedInput
    installations?: InstallationUpdateManyWithoutInstallerNestedInput
    user?: UserUpdateOneRequiredWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUncheckedUpdateManyWithoutInstallerNestedInput
    installations?: InstallationUncheckedUpdateManyWithoutInstallerNestedInput
  }

  export type AddressCreateWithoutCustomerInput = {
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    installations?: InstallationCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutCustomerInput = {
    id?: number
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    installations?: InstallationUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressCreateManyCustomerInputEnvelope = {
    data: AddressCreateManyCustomerInput | AddressCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type InstallerCreateWithoutCustomersInput = {
    brandPhotoPath?: string | null
    isActive?: boolean
    installations?: InstallationCreateNestedManyWithoutInstallerInput
    user: UserCreateNestedOneWithoutInstallerInput
    subscription?: SubscriptionCreateNestedOneWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutCustomersInput = {
    id?: number
    userId: string
    brandPhotoPath?: string | null
    isActive?: boolean
    installations?: InstallationUncheckedCreateNestedManyWithoutInstallerInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutCustomersInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutCustomersInput, InstallerUncheckedCreateWithoutCustomersInput>
  }

  export type InstallationCreateWithoutCustomerInput = {
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    address: AddressCreateNestedOneWithoutInstallationsInput
    installer: InstallerCreateNestedOneWithoutInstallationsInput
  }

  export type InstallationUncheckedCreateWithoutCustomerInput = {
    id?: number
    installerId: number
    addressId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationCreateOrConnectWithoutCustomerInput = {
    where: InstallationWhereUniqueInput
    create: XOR<InstallationCreateWithoutCustomerInput, InstallationUncheckedCreateWithoutCustomerInput>
  }

  export type InstallationCreateManyCustomerInputEnvelope = {
    data: InstallationCreateManyCustomerInput | InstallationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateManyWithWhereWithoutCustomerInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    referenceId?: IntFilter<"Address"> | number
    referenceType?: StringFilter<"Address"> | string
    postcode?: StringFilter<"Address"> | string
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    telephone?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    propertyCreateDate?: DateTimeNullableFilter<"Address"> | Date | string | null
    buildingUse?: StringNullableFilter<"Address"> | string | null
    propertyType?: StringNullableFilter<"Address"> | string | null
    createdDate?: DateTimeFilter<"Address"> | Date | string
    updatedDate?: DateTimeFilter<"Address"> | Date | string
  }

  export type InstallerUpsertWithoutCustomersInput = {
    update: XOR<InstallerUpdateWithoutCustomersInput, InstallerUncheckedUpdateWithoutCustomersInput>
    create: XOR<InstallerCreateWithoutCustomersInput, InstallerUncheckedCreateWithoutCustomersInput>
    where?: InstallerWhereInput
  }

  export type InstallerUpdateToOneWithWhereWithoutCustomersInput = {
    where?: InstallerWhereInput
    data: XOR<InstallerUpdateWithoutCustomersInput, InstallerUncheckedUpdateWithoutCustomersInput>
  }

  export type InstallerUpdateWithoutCustomersInput = {
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installations?: InstallationUpdateManyWithoutInstallerNestedInput
    user?: UserUpdateOneRequiredWithoutInstallerNestedInput
    subscription?: SubscriptionUpdateOneWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    installations?: InstallationUncheckedUpdateManyWithoutInstallerNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutInstallerNestedInput
  }

  export type InstallationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InstallationWhereUniqueInput
    update: XOR<InstallationUpdateWithoutCustomerInput, InstallationUncheckedUpdateWithoutCustomerInput>
    create: XOR<InstallationCreateWithoutCustomerInput, InstallationUncheckedCreateWithoutCustomerInput>
  }

  export type InstallationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InstallationWhereUniqueInput
    data: XOR<InstallationUpdateWithoutCustomerInput, InstallationUncheckedUpdateWithoutCustomerInput>
  }

  export type InstallationUpdateManyWithWhereWithoutCustomerInput = {
    where: InstallationScalarWhereInput
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutAddressesInput = {
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    installer: InstallerCreateNestedOneWithoutCustomersInput
    installations?: InstallationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAddressesInput = {
    id?: number
    installerId: number
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    installations?: InstallationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAddressesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
  }

  export type InstallationCreateWithoutAddressInput = {
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
    customer: CustomerCreateNestedOneWithoutInstallationsInput
    installer: InstallerCreateNestedOneWithoutInstallationsInput
  }

  export type InstallationUncheckedCreateWithoutAddressInput = {
    id?: number
    installerId: number
    customerId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationCreateOrConnectWithoutAddressInput = {
    where: InstallationWhereUniqueInput
    create: XOR<InstallationCreateWithoutAddressInput, InstallationUncheckedCreateWithoutAddressInput>
  }

  export type InstallationCreateManyAddressInputEnvelope = {
    data: InstallationCreateManyAddressInput | InstallationCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutAddressesInput = {
    update: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAddressesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type CustomerUpdateWithoutAddressesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installer?: InstallerUpdateOneRequiredWithoutCustomersNestedInput
    installations?: InstallationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type InstallationUpsertWithWhereUniqueWithoutAddressInput = {
    where: InstallationWhereUniqueInput
    update: XOR<InstallationUpdateWithoutAddressInput, InstallationUncheckedUpdateWithoutAddressInput>
    create: XOR<InstallationCreateWithoutAddressInput, InstallationUncheckedCreateWithoutAddressInput>
  }

  export type InstallationUpdateWithWhereUniqueWithoutAddressInput = {
    where: InstallationWhereUniqueInput
    data: XOR<InstallationUpdateWithoutAddressInput, InstallationUncheckedUpdateWithoutAddressInput>
  }

  export type InstallationUpdateManyWithWhereWithoutAddressInput = {
    where: InstallationScalarWhereInput
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyWithoutAddressInput>
  }

  export type AddressCreateWithoutInstallationsInput = {
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    customer: CustomerCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateWithoutInstallationsInput = {
    id?: number
    referenceId: number
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type AddressCreateOrConnectWithoutInstallationsInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutInstallationsInput, AddressUncheckedCreateWithoutInstallationsInput>
  }

  export type CustomerCreateWithoutInstallationsInput = {
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    installer: InstallerCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutInstallationsInput = {
    id?: number
    installerId: number
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutInstallationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInstallationsInput, CustomerUncheckedCreateWithoutInstallationsInput>
  }

  export type InstallerCreateWithoutInstallationsInput = {
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerCreateNestedManyWithoutInstallerInput
    user: UserCreateNestedOneWithoutInstallerInput
    subscription?: SubscriptionCreateNestedOneWithoutInstallerInput
  }

  export type InstallerUncheckedCreateWithoutInstallationsInput = {
    id?: number
    userId: string
    brandPhotoPath?: string | null
    isActive?: boolean
    customers?: CustomerUncheckedCreateNestedManyWithoutInstallerInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutInstallerInput
  }

  export type InstallerCreateOrConnectWithoutInstallationsInput = {
    where: InstallerWhereUniqueInput
    create: XOR<InstallerCreateWithoutInstallationsInput, InstallerUncheckedCreateWithoutInstallationsInput>
  }

  export type AddressUpsertWithoutInstallationsInput = {
    update: XOR<AddressUpdateWithoutInstallationsInput, AddressUncheckedUpdateWithoutInstallationsInput>
    create: XOR<AddressCreateWithoutInstallationsInput, AddressUncheckedCreateWithoutInstallationsInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutInstallationsInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutInstallationsInput, AddressUncheckedUpdateWithoutInstallationsInput>
  }

  export type AddressUpdateWithoutInstallationsInput = {
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateWithoutInstallationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceId?: IntFieldUpdateOperationsInput | number
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpsertWithoutInstallationsInput = {
    update: XOR<CustomerUpdateWithoutInstallationsInput, CustomerUncheckedUpdateWithoutInstallationsInput>
    create: XOR<CustomerCreateWithoutInstallationsInput, CustomerUncheckedCreateWithoutInstallationsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInstallationsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInstallationsInput, CustomerUncheckedUpdateWithoutInstallationsInput>
  }

  export type CustomerUpdateWithoutInstallationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    installer?: InstallerUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInstallationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type InstallerUpsertWithoutInstallationsInput = {
    update: XOR<InstallerUpdateWithoutInstallationsInput, InstallerUncheckedUpdateWithoutInstallationsInput>
    create: XOR<InstallerCreateWithoutInstallationsInput, InstallerUncheckedCreateWithoutInstallationsInput>
    where?: InstallerWhereInput
  }

  export type InstallerUpdateToOneWithWhereWithoutInstallationsInput = {
    where?: InstallerWhereInput
    data: XOR<InstallerUpdateWithoutInstallationsInput, InstallerUncheckedUpdateWithoutInstallationsInput>
  }

  export type InstallerUpdateWithoutInstallationsInput = {
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateManyWithoutInstallerNestedInput
    user?: UserUpdateOneRequiredWithoutInstallerNestedInput
    subscription?: SubscriptionUpdateOneWithoutInstallerNestedInput
  }

  export type InstallerUncheckedUpdateWithoutInstallationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUncheckedUpdateManyWithoutInstallerNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutInstallerNestedInput
  }

  export type UserCreateWithoutSubscriptionApplicationsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    installer?: InstallerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionApplicationsInput = {
    id?: string
    username?: string | null
    mobile?: string | null
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    installer?: InstallerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionApplicationsInput, UserUncheckedCreateWithoutSubscriptionApplicationsInput>
  }

  export type UserUpsertWithoutSubscriptionApplicationsInput = {
    update: XOR<UserUpdateWithoutSubscriptionApplicationsInput, UserUncheckedUpdateWithoutSubscriptionApplicationsInput>
    create: XOR<UserCreateWithoutSubscriptionApplicationsInput, UserUncheckedCreateWithoutSubscriptionApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionApplicationsInput, UserUncheckedUpdateWithoutSubscriptionApplicationsInput>
  }

  export type UserUpdateWithoutSubscriptionApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    installer?: InstallerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    installer?: InstallerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    excerpt?: string | null
    featured?: boolean
    imagePath?: string | null
    published?: boolean
    readTime?: number | null
    tags?: string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SubscriptionApplicationCreateManyUserInput = {
    id?: number
    subscriptionType: string
    receiptCode: string
    receiptPhotoPath: string
    brandPhotoPath?: string | null
    notes?: string | null
    status?: string
    createdDate?: Date | string
    updatedDate?: Date | string
    reviewedByUserId?: string | null
    reviewNotes?: string | null
  }

  export type BlogUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionApplicationUpdateWithoutUserInput = {
    subscriptionType?: StringFieldUpdateOperationsInput | string
    receiptCode?: StringFieldUpdateOperationsInput | string
    receiptPhotoPath?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionApplicationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionType?: StringFieldUpdateOperationsInput | string
    receiptCode?: StringFieldUpdateOperationsInput | string
    receiptPhotoPath?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionType?: StringFieldUpdateOperationsInput | string
    receiptCode?: StringFieldUpdateOperationsInput | string
    receiptPhotoPath?: StringFieldUpdateOperationsInput | string
    brandPhotoPath?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateManyInstallerInput = {
    id?: number
    firstName: string
    lastName: string
    mobile?: string | null
    email?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationCreateManyInstallerInput = {
    id?: number
    customerId: number
    addressId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type CustomerUpdateWithoutInstallerInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    installations?: InstallationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInstallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    installations?: InstallationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutInstallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUpdateWithoutInstallerInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutInstallationsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutInstallationsNestedInput
  }

  export type InstallationUncheckedUpdateWithoutInstallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUncheckedUpdateManyWithoutInstallerInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyCustomerInput = {
    id?: number
    referenceType?: string
    postcode: string
    street?: string | null
    city?: string | null
    telephone?: string | null
    latitude?: number | null
    longitude?: number | null
    propertyCreateDate?: Date | string | null
    buildingUse?: string | null
    propertyType?: string | null
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationCreateManyCustomerInput = {
    id?: number
    installerId: number
    addressId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type AddressUpdateWithoutCustomerInput = {
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceType?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyCreateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buildingUse?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUpdateWithoutCustomerInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutInstallationsNestedInput
    installer?: InstallerUpdateOneRequiredWithoutInstallationsNestedInput
  }

  export type InstallationUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationCreateManyAddressInput = {
    id?: number
    installerId: number
    customerId: number
    postcode: string
    zone?: string | null
    totalPVOutput: number
    annualACOutput: number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: string | null
    status?: $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: boolean
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type InstallationUpdateWithoutAddressInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInstallationsNestedInput
    installer?: InstallerUpdateOneRequiredWithoutInstallationsNestedInput
  }

  export type InstallationUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    installerId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    totalPVOutput?: FloatFieldUpdateOperationsInput | number
    annualACOutput?: FloatFieldUpdateOperationsInput | number
    roofDetails?: NullableJsonNullValueInput | InputJsonValue
    shadeFactors?: NullableJsonNullValueInput | InputJsonValue
    orientations?: NullableJsonNullValueInput | InputJsonValue
    roofSlopes?: NullableJsonNullValueInput | InputJsonValue
    roofTypes?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    pdfPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    signatureInfo?: NullableJsonNullValueInput | InputJsonValue
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}