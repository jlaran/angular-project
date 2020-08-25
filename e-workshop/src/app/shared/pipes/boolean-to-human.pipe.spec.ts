import { BooleanToHumanPipe } from './boolean-to-human.pipe';

describe('BooleanToHumanPipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanToHumanPipe();
    expect(pipe).toBeTruthy();
  });
});
