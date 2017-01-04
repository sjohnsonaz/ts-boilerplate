import { expect } from 'chai';

import Application from '../scripts/Application';

describe('Application.run', () => {
    it('should return "started"', () => {
        var application = new Application();
        expect(application.run()).to.equal('started');
    });
});
