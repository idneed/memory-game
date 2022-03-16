const mongoose =  require("mongoose");

class Db {

    static async connect (uri) {
       await mongoose.connect(uri)  
    }


}

module.exports = Db ;