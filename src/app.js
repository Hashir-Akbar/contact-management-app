import  express from 'express';
import notFound from "./Middlewares/notFound.js";

import errorHandler from "./Middlewares/errorHandler.js";
import contactRoutes from "./Routes/contacts.routes.js";
import connectDb from "./db/connect.js";


const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
connectDb()

app.get('/', (req, res) => {
    res.send('Hello World!');
})


//routes
app.use("/api/v1",contactRoutes )

app.use(errorHandler)
app.use(notFound)

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})