import mongoose from 'mongoose';

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch(err) {
        console.error(`Error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectionDB;