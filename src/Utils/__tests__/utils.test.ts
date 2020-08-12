import sleep from '../sleep';

describe('Utils', () => {
  describe('Sleep', () => {
    test('Sleep 100ms', done => {
      let res = false;
      setTimeout(() => {
        res = true;
      }, 90);
      setTimeout(() => {
        res = false;
      }, 110);
      sleep(100).then(() => {
        expect(res).toBeTruthy();
        done();
      });
    });
  });
});
