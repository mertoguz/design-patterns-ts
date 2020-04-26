// Car ECU scenario with observer pattern

interface Observer {
    update(pedalPosition: number): void;
}

interface Observable {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

class GasPedalPositionSensor implements Observable {
    private observers: Array<Observer> = [];
    private _pedalPosition: number;

    registerObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex != -1) {
            this.observers.splice(observerIndex, 1);
        } else {
            throw ReferenceError('Observer doesnt exist in observers: ' + observer);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this._pedalPosition);
        }
    }

    setPedalPosition(position: number) {
        this._pedalPosition = position;
        this.notifyObservers();
    }
}

// Set opening rate of the throttle based on gas pedal position
class Throttle implements Observer {
    private _openingRate: number;

    constructor(private _gasPedalPositionSensor: GasPedalPositionSensor) {
        this._gasPedalPositionSensor.registerObserver(this);
    }

    update(pedalPosition: number): void {
        this._openingRate = pedalPosition;

        console.log(`Throttle is ${this._openingRate}% opened`);
    }
}

const gasPedalPositionSensor = new GasPedalPositionSensor();
const throttle = new Throttle(gasPedalPositionSensor);

// Step on! :p
gasPedalPositionSensor.setPedalPosition(100);

//woops redline! Release the pedal.
gasPedalPositionSensor.setPedalPosition(0);

//Output:
//Throttle is 100% opened
//Throttle is 0% opened