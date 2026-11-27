import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next){
    const bearerToken = req.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
    const token = req.cookies?.token || bearerToken;

    if(!token){
        res.status(401).json({ error: "Access denied. No session token provided." });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        req.user = decoded;
        next()
    } catch (err) {
        res.status(401).json({ error: "Session expired or invalid. Please sign in again." });
    }
}
