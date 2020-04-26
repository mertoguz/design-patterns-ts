// There is no possibility to create another instance from this class.
class Singleton {
    private static instance: Singleton;

    private constructor() {}

    static getInstance(): Singleton {
        if (this.instance === undefined) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}