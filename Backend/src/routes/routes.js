import {Router} from "express"
import {createUser, getUsers, getUserById, deleteUserById, countUsers, updateUserById, getTransferences, getTransferenceById, createTransference, countTransferences, deleteTransferenceById, updateTransferenceById, getAccounts, getAccountById, createAccount, countAccounts, deleteAccountById, updateAccountById, getCards, getCardById, createCard, countCards, deleteCardById, updateCardById} from "../controllers/controller"

const router = Router();

// USER
router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.get("/user/count", countUsers);  // No funciona
router.delete("/user/:id", deleteUserById);
router.put("/user/:id", updateUserById);

// TRANSFERENCE
router.get("/trans", getTransferences);
router.get("/trans/:id", getTransferenceById);
router.post("/trans", createTransference);
router.get("/trans/count", countTransferences);  // No funciona
router.delete("/trans/:id", deleteTransferenceById);
router.put("/trans/:id", updateTransferenceById);

// ACCOUNT
router.get("/acc", getAccounts);
router.get("/acc/:id", getAccountById);
router.post("/acc", createAccount);
router.get("/acc/count", countAccounts);  // Casi funciona
router.delete("/acc/:id", deleteAccountById);
router.put("/acc/:id", updateAccountById);

// CARD
router.get("/card", getCards);
router.get("/card/:id", getCardById);
router.post("/card", createCard);
router.get("/card/count", countCards);  // Casi funciona
router.delete("/card/:id", deleteCardById);
router.put("/card/:id", updateCardById);

export default router