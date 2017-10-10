/* global describe, it, before */

import chai from 'chai';
import * as ExampleModule from '../dist/ExampleModule.js';

chai.expect();

const expect = chai.expect;


describe('Given an ExampleModule', () => {
  it('createParagraphElement should be a function', () => {
    expect(ExampleModule.createParagraphElement).to.be.an('function');
  });
});

