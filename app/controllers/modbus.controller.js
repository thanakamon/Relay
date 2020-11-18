var modbusRTU=require('../../config/modbus');

var toggleRelay=(req,res)=>{
    modbusRTU.readCoils(req.params['ch'],1).then((data)=>{
        modbusRTU.writeCoil(req.params['ch'],!data);
        res.send("COMPLETE");
    }).catch((err)=>{
        console.log(err);
        res.send("ERROR")
    });
}

module.exports={
    toggleRelay
}