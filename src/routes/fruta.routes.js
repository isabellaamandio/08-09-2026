import { Router } from "express";
import { frutaService } from "../services/fruta.services.js";

export const frutaRouter = Router ()

frutaRouter.get("/", async (req, res) => {
    try {
        const fruta = await frutaService.listarfruta()
         res.json(fruta)
    } catch (error) {
        console.error(error);
    }
})

