import { config } from 'dotenv';
import { bot } from './bot';

config();
bot.start();
