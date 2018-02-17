/* eslint-disable import/no-extraneous-dependencies, no-console */
// @flow

import chai from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import { describe, it } from 'mocha';
import Dog from '../../shared/dog';

chai.should();
chai.use(sinonChai);

describe('Shared', () => {
  describe('Dog', () => {
    describe('barkInConsole', () => {
      it('should print a bark string with its name', () => {
        stub(console, 'log');
        new Dog('Bim').barkInConsole();
        console.log.should.have.been.calledWith('Wah-wah, I am Bim');
        console.log.restore();
      });
    });
  });
});
