/* global describe, it, before */

import chai from 'chai';
import { createParagraphElement } from '../dist/ExampleModule.js';

chai.expect();

const expect = chai.expect;

describe('Given an ExampleModule', () => {
    it('createParagraphElement should be a function', () => {
        expect(createParagraphElement).to.be.an('function');
    });
});

