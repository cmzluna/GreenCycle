import { config } from 'dotenv';
config();

export const URI_MONGO = process.env.URI_MONGO || 'mongodb+srv://nmayord:Nat1mayor23@cluster0.sy4jpe7.mongodb.net/GreenCycle?retryWrites=true&w=majority';
export const PORT = process.env.PORT || 3000;
