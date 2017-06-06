import { expect } from 'chai';

import Application from '../scripts/Application';

describe('Application.run', () => {
    it('should return "started"', () => {
        var application = new Application();
        expect(application.run()).to.equal('started');
    });
});

describe('Dom', () => {
    it('should have window', () => {
        expect(window).to.not.be.undefined;
    });

    it('should have document', () => {
        expect(document).to.not.be.undefined;
    });

    it('should have document.createElement', () => {
        var element = document.createElement('div');
        expect(element.tagName.toLowerCase()).to.equal('div');
    });
});