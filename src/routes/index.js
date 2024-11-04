import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => res.render("index", {title: "Firts website with node", x: 30}))

router.get("/about", (req, res) => res.render("about", {title: "About me"}))

router.get("/contact", (req, res) => res.render("contact", {title: "Contact me"}))

export default router