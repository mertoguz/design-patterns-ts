enum VehicleEnum {
    Bus,
    Taxi,
    VipCar,
}

interface AirportShuttle {
    getEstimatedArrivalTime(): void;
}

class ShuttleByBus implements AirportShuttle {
    getEstimatedArrivalTime(): void {
        console.log('Estimated arrival time to the airport by bus is 2 hours');
    }
}

class ShuttleByTaxi implements AirportShuttle {
    getEstimatedArrivalTime(): void {
        console.log('Estimated arrival time to the airport by public taxi is 1 hours');
    }
}

class ShuttleByVipCar implements AirportShuttle {
    getEstimatedArrivalTime(): void {
        console.log('Estimated arrival time to the airport by vip car is 45 minutes');
    }
}

class AirportShuttleFactory {
    create(type: VehicleEnum): AirportShuttle {
        switch (type) {
            case VehicleEnum.Bus: return new ShuttleByBus();
            case VehicleEnum.Taxi: return new ShuttleByTaxi();
            case VehicleEnum.VipCar: return new ShuttleByVipCar();
        }
    } 
}

const shuttleFactory = new AirportShuttleFactory();

const shuttle = shuttleFactory.create(VehicleEnum.Bus);
shuttle.getEstimatedArrivalTime();

//OUTPUT: Estimated arrival time to the airport by bus is 2 hours