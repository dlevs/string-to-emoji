const seedRandom = require('seed-random')
const emojiList = require('./emojiList')
const emojiListLength = emojiList.length

/**
 * For any given string, get a random emoji.
 * The same emoji is always returned for any given string.
 * 
 * @param {string} str
 * @returns {string}
 */
function stringToEmoji (str) {
  const random = seedRandom(str)()
  const index = Math.floor(random * emojiListLength)

  return emojiList[index]
}

module.exports = stringToEmoji
