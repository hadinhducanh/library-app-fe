export const oktaConfig = {
    clientId: '0oagaun92s3vSKRb65d7',
    issuer: 'https://dev-33458837.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}