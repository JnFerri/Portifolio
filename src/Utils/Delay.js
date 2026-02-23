async function Delay(ms){
    try{
        if(typeof ms !== "number"  || ms < 1 ) {
             throw new Error("Function Delay called with wrong params");
        }
        await new Promise(resolve => setTimeout(resolve, ms))

    }catch(err){
        throw err;
    }
}

export default Delay