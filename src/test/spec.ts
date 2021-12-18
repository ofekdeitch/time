import { Greeter } from '../index';

describe('Greeting', () => {
    
    it('greets', () => {
        expect(Greeter('Ofek')).toEqual("Hello Ofek!!!!");
    })

});