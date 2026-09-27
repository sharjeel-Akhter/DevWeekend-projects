const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./db/db')

dotenv.config({quiet: true });
const PORT = process.env.PORT || 3000;

connectDB()

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// UnHandled promise Rejection

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`shutting down the server due to unhandled promise rejection`);

    server.close();
    process.exit(1)
})
