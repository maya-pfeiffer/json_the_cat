const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('reutns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Golden Retriever', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark.";

      if (desc === 'No matching cat breeds.') {
        assert.fail('No matching cat breeds found.');
      } else {
        assert.equal(expectedDesc, desc);

        done();
      }
    });
  });
});