class ComputerCabinet {
    private _powerSupply: string;
    private _motherboard: string;
    private _processor: string;
    private _graphicsCard: string;
    private _memory: string;
    private _storage: string;

    set powerSupply(powerSupply: string) {
        this._powerSupply = powerSupply;
    }

    set motherboard(motherboard: string) {
        this._motherboard = motherboard;
    }

    set processor(processor: string) {
        this._processor = processor;
    }

    set graphicsCard(graphicsCard: string) {
        this._graphicsCard = graphicsCard;
    }

    set memory(memory: string) {
        this._memory = memory;
    }

    set storage(storage: string) {
        this._storage = storage;
    }

    showSpecs(): void {
        console.log(
            `
                Specs of the built cabinet:

                Power Supply: ${this._powerSupply}
                Motherboard: ${this._motherboard}
                Processor: ${this._processor}
                Graphics Card: ${this._graphicsCard}
                Memory: ${this._memory}
                Storage: ${this._storage}
            `
        )
    }
}

interface ComputerCabinetBuilderInterface {
    addPowerSupply(powerSupply: string): ComputerCabinetBuilder;
    addMotherboard(motherboard: string): ComputerCabinetBuilder;
    addProcessor(processor: string): ComputerCabinetBuilder;
    addGraphicsCard(graphicsCard: string): ComputerCabinetBuilder;
    addMemory(memory: string): ComputerCabinetBuilder;
    addStorage(storage: string): ComputerCabinetBuilder;
    build(): ComputerCabinet;
}

class ComputerCabinetBuilder implements ComputerCabinetBuilderInterface {
    private cabinet: ComputerCabinet;
    
    // couldn't add it to interface because of private modifier ;/
    private reset(): void {
        this.cabinet = new ComputerCabinet();
    }

    constructor() {
        this.reset();
    }

    addPowerSupply(powerSupply: string): ComputerCabinetBuilder {
        this.cabinet.powerSupply = powerSupply;
        return this;
    }

    addMotherboard(motherboard: string): ComputerCabinetBuilder {
        this.cabinet.motherboard = motherboard;
        return this;
    }

    addProcessor(processor: string): ComputerCabinetBuilder {
        this.cabinet.processor = processor;
        return this;
    }

    addGraphicsCard(graphicsCard: string): ComputerCabinetBuilder {
        this.cabinet.graphicsCard = graphicsCard;
        return this;
    }

    addMemory(memory: string): ComputerCabinetBuilder {
        this.cabinet.memory = memory;
        return this;
    }

    addStorage(storage: string): ComputerCabinetBuilder {
        this.cabinet.storage = storage;
        return this;
    }

    public build(): ComputerCabinet {
        const builtCabinet = this.cabinet;

        this.reset();
        return builtCabinet;
    }
}

// Lets build my first computer :)
const computerCabinetBuilder = new ComputerCabinetBuilder();

const cabinet =
    computerCabinetBuilder
        .addProcessor('Intel Pentium 3 800Mhz')
        .addGraphicsCard('32MB')
        .addMemory('64MB')
        .addStorage('15GB HDD')
        .build();

cabinet.showSpecs();
