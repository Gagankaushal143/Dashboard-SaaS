import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(400).json({message: "No token, Access denied"})
    }

    try{
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    }
    catch(error){
        res.status(400).json({message: "Invalid token"})
    }

};

export default authMiddleware;