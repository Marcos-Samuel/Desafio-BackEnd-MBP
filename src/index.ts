import 'dotenv/config'
import express from 'express'
import routes from './routes/routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
