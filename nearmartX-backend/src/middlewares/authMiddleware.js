const jwt= require('jsonwebtoken');

const authMiddleware= (req, res, next)=>{
    const token = req.header("Authorization");
    if(!token) return res.status(401).json({message: "Auth Error"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send({message: "Invalid Token"});
    }
}

module.exports= authMiddleware;