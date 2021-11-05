import Mary from './pictures/mary.jpg'
import JackBeNimble from './pictures/JackBeNimble.jpeg'
import Piggy from './pictures/ThisLittlePiggy.jpeg'
import MaryAudio from './audio/Mary_had_a_little_lamb.mp3'
import JackBeNimbleAudio from './audio/Jack_be_nimble.mp3'
import PiggyAudio from './audio/This_little_piggy_went_to_market.mp3'
import snow from '../assets/audio/words/snow.mp3'
import lamb from '../assets/audio/words/lamb.mp3'
import and from '../assets/audio/words/and.mp3'
import teacher from '../assets/audio/words/teacher.mp3'

export const bookData = [
    {
        title: "Mary Had A Little Lamb",
        image: Mary,
        text: "Mary had a little lamb.\nIts fleece was white as snow.\nAnd everywhere that Mary went\nThe lamb was sure to go.\nIt followed her to school one day,\nWhich was against the rule.\nIt made the children laugh and play\nTo see a lamb at school.\nAnd so the teacher put it out,\nBut still it lingered near,\nAnd waited patiently about\nTill Mary did appear.\n“What makes the lamb love Mary so?”\nThe eager children cry.\n“Why, Mary loves the lamb, you know,”\nThe teacher did reply.",
        audio: MaryAudio,
        words: new Map([[lamb, 'lamb'], [snow, 'snow'], [and, 'and'], [teacher, 'teacher']]),
        wordList: [lamb, snow, and, teacher]
    },
    {
        title: "Jack Be Nimble",
        image: JackBeNimble,
        text: "Jack be nimble.\nJack be quick.\nJack jump over the candlestick.",
        audio: JackBeNimbleAudio
    },
    {
        title: "This Little Piggy",
        image: Piggy,
        text: "This little piggy went to market,\nThis little piggy stayed home;\nThis little piggy had roast beef,\nThis little piggy had none;\nThis little piggy said,\n“Wee, wee wee!  I want some!”",
        audio: PiggyAudio
    }
]