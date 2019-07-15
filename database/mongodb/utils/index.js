const token = require('./token');
function formatdata({data=[],msg='success',status=200}={}){
    if(status== 400){
        msg= 'fail';
    }
    return{
        data,
        msg,
        status
    }
}

module.exports = {
    formatdata,
    token
}