import { SQLOptions } from '@grafana/sql';

export enum PostgresTLSModes {
  disable = 'disable',
  require = 'require',
  verifyCA = 'verify-ca',
  verifyFull = 'verify-full',
}

export enum PostgresTLSMethods {
  filePath = 'file-path',
  fileContent = 'file-content',
}

export enum PostgresAuthenticationType {
  azureAuthentication = 'azure-ad-auth',
  psqlAuthentication = 'postgres-auth',
}

export interface PostgresOptions extends SQLOptions {
  tlsConfigurationMethod?: PostgresTLSMethods;
  sslmode?: PostgresTLSModes;
  sslRootCertFile?: string;
  sslCertFile?: string;
  sslKeyFile?: string;
  postgresVersion?: number;
  timescaledb?: boolean;
  enableSecureSocksProxy?: boolean;
  authenticationType?: PostgresAuthenticationType;
}

export interface SecureJsonData {
  password?: string;
}
