import {Router} from "express"
import {createUser, getUsers, getUserById, deleteUserById, countUsers, updateUserById} from "../controllers/controller"

const router = Router();

router.get("/user", getUsers);

router.get("/user/:id", getUserById);

router.post("/user", createUser);

router.get("/user/count", countUsers);

router.delete("/user/:id", deleteUserById);

router.put("/user/:id", updateUserById);


export default router