const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://durgeshdwivedi81:M6HZTFt821ugGmWK@cluster0.mrvh7lu.mongodb.net/esamyak`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

module.exports = connectDB