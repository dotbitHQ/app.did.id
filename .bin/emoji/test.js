const uts46 = require('idna-uts46-hx')
const puppeteer = require('puppeteer')

async function runBrowser (url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const getUrl = page.url()
  await browser.close()
  return getUrl
}

let emojiList = ['🎱', '💯', '🔢', '👍', '👎', '🆎', '🧮', '🔤', '🔡', '🧑', '🚡', '🛬', '🛫', '⏰', '👽', '🚑', '🏺', '⚓', '👼', '💢', '😠', '😧', '🐜', '🍎', '♒', '🏹', '♈', '⏬', '⏫', '🔽', '🔼', '🔃', '🔄', '🎨', '🚛', '😲', '👟', '🏧', '🥑', '👶', '🍼', '🐤', '🚼', '🔙', '🤚', '🥓', '🦡', '🏸', '🥯', '🛄', '🥖', '🎈', '🎍', '🍌', '🏦', '📊', '💈', '⚾', '🧺', '🏀', '🦇', '🛀', '🛁', '🔋', '🐻', '🧔', '🐝', '🍺', '🍻', '🐞', '🔰', '🔔', '🍱', '🚴', '🚲', '👙', '🧢', '🐦', '🎂', '⚫', '🖤', '🃏', '⬛', '◾', '🔲', '👱', '🌼', '🐡', '📘', '🚙', '🔵', '💙', '😊', '🐗', '💣', '🦴', '📖', '🔖', '📑', '📚', '💥', '👢', '🍾', '💐', '🙇', '🥣', '🎳', '🥊', '👦', '🧠', '🍞', '🤱', '🧱', '👰', '🌉', '💼', '🥦', '💔', '🧹', '🐛', '💡', '🚅', '🚄', '🌯', '🚌', '🚏', '👤', '👥', '🦋', '🌵', '🍰', '📆', '🤙', '📲', '🐫', '📷', '📸', '♋', '🍬', '🥫', '🛶', '🔠', '♑', '📇', '🎠', '🥕', '🤸', '🐱', '🐈', '💿', '🥂', '💹', '📉', '📈', '🏁', '🧀', '🍒', '🌸', '🌰', '🐔', '🧒', '🚸', '🍫', '🥢', '🎄', '⛪', '🎦', '🎪', '🌆', '🌇', '🆑', '👏', '🎬', '📋', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧', '📕', '🔐', '🌂', '🤡', '🧥', '🍸', '🥥', '☕', '🥶', '😰', '🧭', '💻', '🎊', '😖', '😕', '🚧', '👷', '🏪', '🍪', '🍳', '🆒', '👮', '🌽', '👫', '💑', '💏', '🐮', '🐄', '🤠', '🦀', '💳', '🌙', '🦗', '🏏', '🐊', '🥐', '🎌', '👑', '😢', '😿', '🔮', '🥒', '🥤', '🧁', '💘', '🥌', '➰', '💱', '🍛', '🍮', '🛃', '🥩', '🌀', '💃', '👯', '🍡', '🎯', '💨', '📅', '🌳', '🦌', '🏬', '💠', '😞', '😥', '💫', '😵', '🧬', '🚯', '🐶', '🐕', '💵', '🎎', '🐬', '🚪', '🍩', '🐉', '🐲', '👗', '🐪', '🤤', '💧', '🥁', '🦆', '🥟', '📀', '📧', '🦅', '👂', '🌾', '🌍', '🌎', '🌏', '🥚', '🍆', '🔌', '🐘', '🧝', '🔚', '📩', '💶', '🏰', '🏤', '🌲', '❗', '🤰', '🤯', '😑', '👓', '👀', '🤦', '🤮', '🤭', '🤕', '🧐', '🤨', '🙄', '🤬', '🤒', '🏭', '🧚', '🍂', '👪', '⏩', '📠', '😨', '🐾', '🤺', '🎡', '🏑', '📁', '🤞', '🔥', '🚒', '🧯', '🧨', '🎆', '🥇', '🌓', '🌛', '🐟', '🍥', '🎣', '✊', '🎏', '🔦', '💾', '🎴', '😳', '🥏', '🛸', '🌁', '🦶', '🏈', '👣', '🍴', '🥠', '⛲', '🍀', '🦊', '🆓', '🍤', '🍟', '🐸', '😦', '⛽', '🌕', '🌝', '🎲', '💎', '♊', '🧞', '👻', '🎁', '💝', '🦒', '👧', '🥛', '🌐', '🧤', '🥅', '🐐', '🥽', '⛳', '🦍', '👵', '🍇', '🍏', '📗', '💚', '🥗', '❕', '❔', '😬', '😁', '😀', '💂', '🎸', '🔫', '💇', '🍔', '🔨', '🐹', '👜', '🤾', '🤝', '💩', '🐥', '🐣', '🎧', '🙉', '💟', '😍', '😻', '💓', '💗', '➗', '💲', '➖', '➕', '🦔', '🚁', '🌿', '🌺', '🔆', '👠', '🥾', '🦛', '🏒', '🍯', '🐴', '🏇', '🏥', '🌭', '🥵', '🏨', '⌛', '⏳', '🏠', '🏡', '🤗', '😯', '🍨', '🍦', '🆔', '👿', '📥', '📨', '💁', '😇', '📱', '🏮', '🎃', '🗾', '🏯', '👺', '👹', '👖', '🧩', '😂', '😹', '🤹', '🕋', '🦘', '🥋', '🔑', '🔟', '👘', '💋', '😗', '😽', '😚', '😘', '😙', '🥝', '🔪', '🐨', '🥼', '🥍', '🔷', '🔶', '🌗', '🌜', '😆', '🥬', '🍃', '📒', '🤛', '🛅', '🦵', '🍋', '♌', '🐆', '🤥', '♎', '🚈', '🔗', '🦁', '👄', '💄', '🦎', '🦙', '🦞', '🔒', '🔏', '🍭', '➿', '🔊', '📢', '🏩', '💌', '🤟', '🔅', '🧳', '🔍', '🔎', '🧙', '🧲', '🀄', '📫', '📪', '📬', '📭', '🕺', '👨', '🤵', '👲', '👳', '🥭', '👞', '🍁', '😷', '💆', '🍖', '🏅', '📣', '🍈', '📝', '🕎', '🚹', '🧜', '🤘', '🚇', '🦠', '🎤', '🔬', '🖕', '🌌', '🚐', '💽', '📴', '🤑', '💸', '💰', '🐒', '🐵', '🚝', '🥮', '🎓', '🕌', '🦟', '🤶', '🛵', '🗻', '🚵', '🚠', '🚞', '🐭', '🐁', '🎥', '🗿', '💪', '🍄', '🎹', '🎵', '🎼', '🔇', '💅', '📛', '🤢', '🧿', '👔', '❎', '🤓', '😐', '🆕', '🌑', '🌚', '📰', '🆖', '🌃', '🔕', '🚳', '⛔', '🚫', '🙅', '📵', '😶', '🚷', '🚭', '🚱', '👃', '📓', '📔', '🎶', '🔩', '⭕', '🌊', '🛑', '🐙', '🍢', '🏢', '🆗', '👌', '🙆', '🧓', '👴', '🔛', '🚘', '🚍', '🚔', '🚖', '📂', '👐', '😮', '⛎', '📙', '🧡', '📤', '🦉', '🐂', '📦', '🥘', '📄', '📃', '📟', '🌴', '🤲', '🥞', '🐼', '📎', '🦜', '⛅', '🥳', '🛂', '🍑', '🦚', '🥜', '🍐', '🐧', '😔', '🤼', '🎭', '😣', '🧗', '🙍', '🧘', '🧖', '🤽', '🙎', '🙋', '🚣', '🏃', '🤷', '🏄', '🏊', '🚶', '🧫', '🥧', '🐷', '🐖', '🐽', '💊', '🍍', '🏓', '♓', '🍕', '🛐', '🥺', '👇', '👈', '👉', '👆', '🚓', '🐩', '🍿', '🏣', '📯', '📮', '🚰', '🥔', '👝', '🍗', '💷', '😾', '🙏', '📿', '🥨', '🤴', '👸', '👊', '💜', '👛', '📌', '🚮', '❓', '🐰', '🐇', '🦝', '🐎', '📻', '🔘', '😡', '🚃', '🌈', '✋', '🖖', '🙌', '🐏', '🍜', '🐀', '🧾', '🚗', '🔴', '🧧', '🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹', '🇺', '🇻', '🇼', '🇽', '🇾', '🇿', '😌', '🔁', '🔂', '🚻', '💞', '⏪', '🦏', '🎀', '🍚', '🍙', '🍘', '🎑', '🤜', '💍', '🤖', '🚀', '🤣', '🧻', '🎢', '🐓', '🌹', '🚨', '📍', '🏉', '🎽', '🧷', '♐', '⛵', '🍶', '🧂', '👡', '🥪', '🎅', '📡', '🦕', '🎷', '🧣', '🏫', '🎒', '🛴', '🦂', '♏', '😱', '🙀', '📜', '💺', '🥈', '🙈', '🌱', '🤳', '🦈', '🍧', '🐑', '🐚', '🚢', '👕', '🛒', '🚿', '🦐', '🤫', '📶', '🔯', '🛹', '💀', '🎿', '🛷', '😴', '🛌', '😪', '🙁', '🙂', '🎰', '🔹', '🔸', '🔺', '🔻', '😄', '😸', '😃', '😺', '🥰', '😈', '😏', '😼', '🚬', '🐌', '🐍', '🤧', '🏂', '⛄', '🧼', '😭', '⚽', '🧦', '🥎', '🔜', '🆘', '🔉', '👾', '🍝', '🎇', '✨', '💖', '🙊', '🔈', '💬', '🚤', '🧽', '🥄', '🧴', '🦑', '⭐', '🌟', '🤩', '🌠', '🚉', '🗽', '🚂', '🍲', '📏', '🍓', '😛', '😝', '😜', '🥙', '🌞', '🌻', '😎', '🌅', '🌄', '🦸', '🦹', '🍣', '🚟', '🦢', '😓', '💦', '😅', '🍠', '🔣', '🕍', '💉', '🦖', '🌮', '🎉', '🥡', '🎋', '🍊', '♉', '🚕', '🍵', '🧸', '📞', '🔭', '🎾', '⛺', '🧪', '🤔', '🥉', '💭', '🧵', '🎫', '🐯', '🐅', '😫', '🚽', '🗼', '🍅', '👅', '🧰', '🦷', '🔝', '🎩', '🚜', '🚥', '🚋', '🚆', '🚊', '🚩', '📐', '🔱', '😤', '🚎', '🏆', '🍹', '🐠', '🚚', '🎺', '🌷', '🥃', '🦃', '🐢', '📺', '🔀', '💕', '👬', '👭', '☔', '😒', '🔞', '🦄', '🔓', '🆙', '🙃', '🧛', '🚦', '📼', '📳', '📹', '🎮', '🎻', '♍', '🌋', '🏐', '🆚', '🌘', '🌖', '⌚', '🐃', '🍉', '👋', '🌒', '🌔', '🚾', '😩', '💒', '🐳', '🐋', '♿', '✅', '⚪', '💮', '⬜', '◽', '🔳', '🥀', '🎐', '🍷', '😉', '🐺', '👩', '🧕', '👚', '🥿', '👒', '🚺', '🥴', '😟', '🔧', '❌', '🧶', '💛', '💴', '😋', '🤪', '⚡', '🦓', '🤐', '🧟', '💤']

console.log('emojiList:' + emojiList.length)

emojiList = Array.from(new Set(emojiList))

console.log('de-duplication emojiList:' + emojiList.length)

async function test () {
  const newEmojiList = []
  const unsupportedEmojiList = []
  const errorEmojiList = []

  for (let i = 0; i < emojiList.length; i++) {
    const emoji = emojiList[i]
    try {
      const url = `https://${emoji}.bit.host`
      let ascii = await runBrowser(url)
      ascii = ascii.substr(0, ascii.length - 10)
      ascii = ascii.replace('https://', '')
      const unicode = uts46.toUnicode(ascii, { useStd3ASCII: true })
      console.log(`unicode${unicode} === emoji${emoji}: ` + (unicode === emoji))
      if (unicode === emoji) {
        newEmojiList.push(emoji)
      }
      else {
        unsupportedEmojiList.push(emoji)
      }
    }
    catch (err) {
      console.error(err)
      errorEmojiList.push(emoji)
    }
  }

  console.log('newEmojiList:' + newEmojiList.length)
  console.log('unsupportedEmojiList:' + unsupportedEmojiList.length)
  console.log('errorEmojiList:' + errorEmojiList.length)

  console.log('----newEmojiList----')
  console.log(JSON.stringify(newEmojiList))
  console.log('----unsupportedEmojiList----')
  console.log(JSON.stringify(unsupportedEmojiList))
  console.log('----errorEmojiList----')
  console.log(JSON.stringify(errorEmojiList))
}

test()
