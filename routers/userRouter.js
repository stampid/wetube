import express from "express";

const userRouter  = express.Router();

userRouter.get("/", (req, res) => { res.send('user hello')})

export default userRouter;
