export const adminProtectRoute = (req , res , next) =>{
try {
    const user = req.user 
    if (user.role !=="Admin" ){
        return res.status(404).json({error : "You are not authorised as this "})
    }
    next()
} catch (error) {
    console.log ( " Error in adinProtectRoute ", error)
    return res.status(500).json({error : "Internal server error "})
}
}