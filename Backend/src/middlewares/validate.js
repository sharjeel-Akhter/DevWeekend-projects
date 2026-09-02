
const validator = (schema) => {
    return (req, res, next) =>{
        const { error } = schema.validate(req.body, {
            abortEarly:false
        })
        
        if(error){
            
            const errors = error.details.map((detail)=>{
                return detail.message
            })
            console.log(error)
            
            return res.status(400).json({
                message:"validation failed",
                errors
            })
        }
        next();
    };
};

module.exports = validator