// Scenario is; I am in a gas station and using different nozzles to fill different fuel types.

// Strategy type
interface FuelPumpNozzle {
    fill(): void;
}

// Concrete Strategies
class Gasoline implements FuelPumpNozzle {
    fill(): void {
        console.log('Filling with 95 octane gasoline...');
    }
}

class Diesel implements FuelPumpNozzle {
    fill(): void {
        console.log('Filling with diesel...');
    }
}

class Lpg implements FuelPumpNozzle {
    fill(): void {
        console.log('Filling with LPG...');
    }
}

// Context
class GasStationHub {
    constructor(private _fuelPumpNozzle: FuelPumpNozzle) {}

    fill(): void {
        this._fuelPumpNozzle.fill();
    }
}

//I went to gas station hub and want to fill LPG
let gasStationHub = new GasStationHub(new Lpg());
gasStationHub.fill();

//Aah there is good discount for gasoline let's fullfill it too before leaving the station
gasStationHub = new GasStationHub(new Gasoline());
gasStationHub.fill();

//OUTPUT: Filling with LPG...
//OUTPUT: Filling with 95 octane gasoline...
