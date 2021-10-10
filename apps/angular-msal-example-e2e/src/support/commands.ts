// -- This is a parent command --
import { login } from './auth';


declare namespace Cypress {
  interface Chainable<Subject> {
    login(): void;
  }
}
//

let cachedTokenExpiryTime = new Date().getTime();
let cachedTokenResponse: any = null;

Cypress.Commands.add('login', () => {
  // Clear our cache if tokens are expired
  if (cachedTokenExpiryTime <= new Date().getTime()) {
    cachedTokenResponse = null;
  }

  return login(cachedTokenResponse).then((tokenResponse) => {
    cachedTokenResponse = tokenResponse;
    // Set expiry time to 50 minutes from now
    cachedTokenExpiryTime = new Date().getTime() + 50 * 60 * 1000;
  });
});