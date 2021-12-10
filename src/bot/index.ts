import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config';
import { onMessageHandler } from './onMessageHandler';

const telegramBot = new TelegramBot(config.apis.telegram.token);

telegramBot.addListener('message', onMessageHandler(telegramBot));

export const bot = {
  start: async () => {
    telegramBot.startPolling();
  },
};
