interface MacKeyboardInterface {
    cmdAndC(): void;
}

interface WindowsKeyboardInterface {
    ctrlAndC(): void;
}

class WindowsKeyboard implements WindowsKeyboardInterface {
    ctrlAndC(): void {
        console.log('Selected content copied on windows system');
    }
}

class MacKeyboard implements MacKeyboardInterface {
    cmdAndC(): void {
        console.log('Selected content copied on mac');
    }
}

class WindowsKeyboardAdapterForMac implements WindowsKeyboardInterface {
    constructor (private _macKeyboard: MacKeyboard) {}

    ctrlAndC(): void {
        this._macKeyboard.cmdAndC();
    }
}

const windowsKeyboardAdapter = new WindowsKeyboardAdapterForMac(new MacKeyboard());

// I connected a windows keyboard to my mac and pressed ctrl + c
windowsKeyboardAdapter.ctrlAndC();

//OUTPUT: Selected content copied on mac