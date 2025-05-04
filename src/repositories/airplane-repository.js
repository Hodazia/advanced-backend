const CrudRepository = require("./crud-repositories");
const Airplane = require("../models");



class AirplaneRepository extends CrudRepository
{
    constructor()
    {
        // call the parent class contructor
        super(Airplane);
    }

}

module.exports = AirplaneRepository



