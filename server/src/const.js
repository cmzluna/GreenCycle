import { config } from 'dotenv';

config();

export const URI_MONGO = process.env.URI_MONGO || 'mongodb+srv://nmayord:Nat1mayor23@cluster0.sy4jpe7.mongodb.net/GreenCycle?retryWrites=true&w=majority';
export const PORT = process.env.PORT || 4200;

export const API_IDENTIFIER = process.env.API_IDENTIFIER || 'https://greencycle/api';
export const BASE_URL = process.env.BASE_URL || 'https://dev-ezrl2ws3gj66dktc.us.auth0.com/'
