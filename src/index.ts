import { createApp } from './app';

const app = createApp();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Current PORT http://localhost:${PORT}`);
});