import {sizeScale, formatBytes} from '.';

describe('sizeScale()', () => {
  it('should return the correct px value', () => {
    expect(sizeScale(10, 'px')).toEqual('10px');
  });

  it('should return the correct % value', () => {
    expect(sizeScale(10, '%')).toEqual('10%');
  });
});

describe('formatBytes', () => {
  it('should format properly', () => {
    expect(formatBytes(419430400)).toEqual('400MB');
  });
  it('should format properly in KB', () => {
    expect(formatBytes(1024)).toEqual('1KB');
  });
  it('should format properly in with decimal remains', () => {
    expect(formatBytes(1234)).toEqual('1.21KB');
  });
  it('should format bytes', () => {
    expect(formatBytes(999)).toEqual('999B');
  });
});
