import express from "express";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const users = await prismaClient.user.findMany();
        res.json(users);
    }
    catch (err:any) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/users", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prismaClient.user.create({
            data: {
                username,
                password
            }
        });
        res.json(user);
    }
    catch (err:any) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});