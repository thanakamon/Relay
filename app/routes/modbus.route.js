module.exports=(app)=>{
    var modbus=require('../controllers/modbus.controller');
    app.get('/modbus/ch/:ch',modbus.toggleRelay);
}