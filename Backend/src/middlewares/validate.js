const validator = (schema, source) => {

    
    return (req, res, next) =>{
        console.log("SOURCE:", source);
        console.log("DATA:", req[source]);
        const { error } = schema.validate(req[source], {
            abortEarly:false
        })
        
        if(error){   
            console.log("inside Validator")         
            return res.status(400).json({
                message:"validation failed",
                errors: error.details.map(detail => detail.message)
            })
        }
        next();
    };
};

module.exports = validator