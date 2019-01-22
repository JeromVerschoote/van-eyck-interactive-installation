import openSocket from 'socket.io-client';

class Api{
    constructor(address){
        this.address = address;
        this.socket = openSocket(this.address);

        if(this.socket){
            console.log(`Succesfully connected to the server! \nVisit ${this.address} to use controls.`);
        }else{
            console.log(`There appears to be no socket on this server.`);
        }
    }
}

export default Api;