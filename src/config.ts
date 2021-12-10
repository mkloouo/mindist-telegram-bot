import process from 'process';

export const config = {
  apis: {
    telegram: {
      token: process.env.TELEGRAM_BOT_API_TOKEN || '5093443294:AAGxySU2Yu_p6IvvRDEUUeXK5J8zQN43jMQ',
    },
  },
};
