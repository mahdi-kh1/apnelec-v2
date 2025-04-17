
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.BlogScalarFieldEnum = {
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

exports.Prisma.InstallerScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  brandPhotoPath: 'brandPhotoPath',
  isActive: 'isActive'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
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

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  installerId: 'installerId',
  firstName: 'firstName',
  lastName: 'lastName',
  mobile: 'mobile',
  email: 'email',
  createdDate: 'createdDate',
  updatedDate: 'updatedDate'
};

exports.Prisma.AddressScalarFieldEnum = {
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

exports.Prisma.InstallationScalarFieldEnum = {
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

exports.Prisma.SubscriptionApplicationScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.AccountOrderByRelevanceFieldEnum = {
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

exports.Prisma.SessionOrderByRelevanceFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
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

exports.Prisma.VerificationTokenOrderByRelevanceFieldEnum = {
  identifier: 'identifier',
  token: 'token'
};

exports.Prisma.BlogOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content',
  authorId: 'authorId',
  excerpt: 'excerpt',
  imagePath: 'imagePath',
  tags: 'tags'
};

exports.Prisma.InstallerOrderByRelevanceFieldEnum = {
  userId: 'userId',
  brandPhotoPath: 'brandPhotoPath'
};

exports.Prisma.SubscriptionOrderByRelevanceFieldEnum = {
  plan: 'plan',
  type: 'type',
  createdByUserId: 'createdByUserId',
  updatedByUserId: 'updatedByUserId'
};

exports.Prisma.CustomerOrderByRelevanceFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName',
  mobile: 'mobile',
  email: 'email'
};

exports.Prisma.AddressOrderByRelevanceFieldEnum = {
  referenceType: 'referenceType',
  postcode: 'postcode',
  street: 'street',
  city: 'city',
  telephone: 'telephone',
  buildingUse: 'buildingUse',
  propertyType: 'propertyType'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.InstallationOrderByRelevanceFieldEnum = {
  postcode: 'postcode',
  zone: 'zone',
  pdfPath: 'pdfPath'
};

exports.Prisma.SubscriptionApplicationOrderByRelevanceFieldEnum = {
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
exports.InstallationStatus = exports.$Enums.InstallationStatus = {
  DETAILS_COMPLETED: 'DETAILS_COMPLETED',
  SIGNATURE_NEEDED: 'SIGNATURE_NEEDED',
  CONTRACT_SIGNED: 'CONTRACT_SIGNED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
