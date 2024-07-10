export const checkUserSession = (req, res, next) => {
    if (req.session.user) {
        next();
    }
    else {
        return res.status(401).json({ message: 'No user session' }); // No user session, return 401 status
    }
};