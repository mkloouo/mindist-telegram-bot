import TelegramBot from 'node-telegram-bot-api';

export const onMessageHandler =
  (bot: TelegramBot) => async (message: TelegramBot.Message, _metadata: TelegramBot.Metadata) => {
    console.log('message:', message.text);

    if (!message.text || !message.text.startsWith('/')) {
      return;
    }

    message.text = message.text.substring(1);

    if (message.text === 'hello') {
      bot.sendMessage(message.chat.id, `Hello, @${message.from.username}, to you back`);
    }
  };
