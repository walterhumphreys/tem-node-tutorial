const authorize = (reg,res,next)=>{
const {user} = reg.query;
if(user ==='walter'){
    reg.user = {name:'walter', id:'1'}
    next()
}
   else {
       res.status(401).send('no access for u')
   }

}

module.exports = authorize