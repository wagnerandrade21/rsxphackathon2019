import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });
import app from './app';

app.listen(process.env.HOST_PORT);
