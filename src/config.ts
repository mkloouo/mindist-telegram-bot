import process from 'process';

export const config = {
  apis: {
    telegram: {
      token: process.env.TELEGRAM_BOT_API_TOKEN || '',
    },
  },
};
