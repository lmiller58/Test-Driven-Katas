const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    // throw new Error('This test shall fail');
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns the string unchanged if it is fewer than the column number', () => {
    expect(wrap('hello', 6)).to.equal('hello');
    expect(wrap('helloWorld', 10)).to.equal('helloWorld');
  });

  it('will add a linebreak if the string is longer than the column size', () => {
    expect(wrap('hello world', 7)).to.equal('hello\nworld');
  });
  it('will break up a long string', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
});
