// import { Jwt } from "jsonwebtoken"
import jwt from "jsonwebtoken"

// generate token that expires in 12 hours
export const generateToken = (id) => {
    const token = jwt.sign({id}, process.env.NEXT_PUBLIC_JWT_SECRET, {expiresIn: "30min"})
    return token
}