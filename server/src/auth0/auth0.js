import { auth } from 'express-oauth2-jwt-bearer';
import { BASE_URL, API_IDENTIFIER } from '../config.js';

const checkJwt = auth({
    audience: API_IDENTIFIER,
    issuerBaseURL: BASE_URL,
    tokenSigningAlg: 'RS256'
  });

  export default checkJwt;
