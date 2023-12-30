import { Router } from "express"
import { ListResults } from "../controllers/listResults";
import { registerResults } from "../controllers/registerResults";
import { deleteResult } from "../controllers/deleteResult";

const routes = Router()

routes.get('/resultados/:bimestre?', ListResults );
routes.post('/resultados', registerResults)
routes.delete('/resultados/:id', deleteResult)

export default routes
