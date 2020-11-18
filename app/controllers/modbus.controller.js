var modbusRTU=require('../../config/modbus');

var toggleRelay=(req,res)=>{
    modbusRTU.writeCoil(req.params['ch'],1);
    res.send(1);
}

module.exports={
    toggleRelay
}