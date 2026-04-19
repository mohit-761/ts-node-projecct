import './config/env.config';
import app from './app';
import { connectDatabase } from './config/db.config';

let PORT = process.env.PORT || 3000;

(async () => {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`APP IS LISTENING ON http://localhost:${PORT}`);
    })
})();