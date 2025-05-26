import express from 'express';
import dotenv from 'dotenv';
import clerkWebhook from './src/api/webhooks/clerk';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/webhooks', clerkWebhook);

app.listen(port, () => {
  console.log(`Webhook server running on port ${port}`);
}); 