import express from "express";
import ItemsControllers from "../../controllers/items.controller";

const router = express.Router()
const controllers: ItemsControllers = new ItemsControllers()

router.get('/', controllers.getAll)
router.get('/:id', controllers.getOne)
router.post('/create', controllers.createOne)
router.put('/stock/:id', controllers.updateStock)
router.delete('/delete/:id', controllers.deleteOne)

export default router
