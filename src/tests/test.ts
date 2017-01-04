import { expect } from 'chai';

import Main from '../scripts/main';

describe('Main.run', () => {
    it('should return "started"', () => {
        var main = new Main();
        expect(main.run()).to.equal('started');
    });
});
