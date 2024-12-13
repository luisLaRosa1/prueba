import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://login.microsoftonline.com/4f6e1565-c2c7-43cb-8a4c-0981d022ce20/v2.0',
  redirectUri: window.location.origin,
  clientId: '94cdc808-28b2-4736-a45b-c20368b1419a',
  scope: 'openid profile email',
  requireHttps: false,
  strictDiscoveryDocumentValidation: false,
};
