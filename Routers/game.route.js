import express from 'express' ;
import {
    getAll, addOnce, putOnce  
} from '../controllers/game.controller.js'; 


const router = express.Router();

router
.route('/')
.get(getAll)
.post(addOnce);
router
.route('/:name')

.put(putOnce)


;
export default router 
