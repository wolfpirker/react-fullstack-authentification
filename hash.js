const bcrypt = require('bcrypt');

bcrypt.genSalt(10,(err,salt)=>{
    if(err) return false;
    bcrypt.hash('password12345',salt,(err, hash)=>{
        if(err) return false;
        console.log(hash)
    })  
})
