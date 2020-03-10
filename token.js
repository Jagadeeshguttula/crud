jst=require("jsonwebtoken")
pload={
uname:"scott",
	city:"hyd"
}
seckey="#$%^&"
tok=jst.sign(pload,seckey,{expiresIn:"24h"})
console.log(tok)