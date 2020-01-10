// Merge namespace with global chai
    global {
        export namespace Chai {
            interface Assertion {
                count: (count: number) => void;
                focus: () => void;
                text: (expected: string | number | RegExp) => void;
                there: () => void;
                value: (expected: string | number | RegExp) => void;
                displayed: () => void;
                enabled: () => void;
                immediately: Assertion;
            }
        }
    }

declare function chaiWebdriverIO(client: any, options?: any): (chai: any, utils: any) => void;
export = chaiWebdriverIO;
