const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "  *Send Love Messages.. , ආදර පණිවිඩ යැවීමට..* "

 if (Config.WORKTYPE == 'public') {
  
/*  Asiata.addcommand({ pattern: 'lovepack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/0e96fae1520475124d275.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔═══════════════════════╗

            ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋

═════════════════════════

                  ♥ LOVE PACK ♥

                  
♥ Command : .love you
➢ Description :  Send I love you message with Image..

♥ Command : .miss you
➢ Description :  Send i miss you message with image..

♥ Command : .love you somuch
➢ Description :  Send I love you so much message with image..

♥ Command : .hate you
➢ Description :  Send i hate you message 😪..

♥ Command : .cry
➢ Description :  Send I m cry message..

♥ Command : .alone
➢ Description :  Send i am alone message..

♥ Command : .single
➢ Description : Send i am single message..

♥ Command : .need gf
➢ Description :  Send I need Girl friend message..

♥ Command : need bf
➢ Description :  Send i need Boy friend message..
` ,quoted: message.data})

    }));*/
    Asiata.addcommand({pattern:  'ffpack', fromMe: false }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[1] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[2] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[3] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[4] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[5] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[6] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer'})    
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔═════════════════════╗
║       ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  
║         ║🕊️╚FF PACK╝🕊️║
║
╠═➢ 🕊️.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🕊️.ff10      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff11      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff12      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff13      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff14      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff15      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff16      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff17      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff18       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff19       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff20       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff21       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff22       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff23       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff24       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff25       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff26       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff27       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff28       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff29       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff30       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff31       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff32       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff33       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff34       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff35       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff36       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff37       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff38       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff39       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff41       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff42       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff43       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff44       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff45       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff46       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff47       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff48       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff49       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff50       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff51       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff52       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff53       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff54       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff55       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: THISAN 
║
║  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  
╚═════════════════════╝`  ,quoted: message.data})

    }));

 /* Asiata.addcommand({pattern: 'love you', fromMe: false }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://telegra.ph/file/9fdcba7310b4accd41119.jpg";

    r_text[1] = "https://telegra.ph/file/c91ce55d58336bee137a0.jpg";

    r_text[2] = "https://telegra.ph/file/01479ee5aa5964989bf30.jpg";

    r_text[3] = "https://telegra.ph/file/84f1b008c175b1dc3bcb5.jpg";

    r_text[4] = "https://telegra.ph/file/7aeaf5907f67f2cf9078c.jpg";

    r_text[5] = "https://telegra.ph/file/7809664f52214ec6eba99.jpg";

    r_text[6] = "https://telegra.ph/file/0e96fae15204751https://telegra.ph/file/72ba4b1a8caf38604c18c.jpg24d275.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer'})

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔══╗╔╗  ♡
╚╗╔╝║║╔═╦╦╦╔╗
╔╝╚╗║╚╣║║║║╔╣
╚══╝╚═╩═╩═╩═╝

ஜ۩۞۩ஜ YOU ஜ۩۞۩ஜ`  ,quoted: message.data})

    }));

  Asiata.addcommand({pattern: 'miss you', fromMe: false }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://telegra.ph/file/420aad8a5c96b545ddf52.jpg";

    r_text[1] = "https://telegra.ph/file/7af1f81554120ef582fa1.jpg";

    r_text[2] = "https://telegra.ph/file/f2c9064c9afc912d58a88.jpg";

    r_text[3] = "https://telegra.ph/file/506cbe50b126155882d2e.jpg";

    r_text[4] = "https://telegra.ph/file/7af1f81554120ef582fa1.jpg";

    r_text[5] = "https://telegra.ph/file/f2c9064c9afc912d58a88.jpg";

    r_text[6] = "https://telegra.ph/file/420aad8a5c96b545ddf52.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer'})

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔═╦═╦╦═╦═╗╔═╦╗
║║║║╠╣═╣═╣╚╗║╠═╦╦╗
║║║║║╠═╠═║╔╩╗║╬║║║
╚╩═╩╩╩═╩═╝╚══╩═╩═╝`  ,quoted: message.data})

    }));
 */
  Asiata.addcommand({pattern:  'ffpack', fromMe: true }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[1] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[2] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[3] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[4] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[5] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    r_text[6] = "https://telegra.ph/file/5e6b637122b3353a7902b.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer'})    
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔═════════════════════╗
║       ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  
║         ║🕊️╚FF PACK╝🕊️║
║
╠═➢ 🕊️.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🕊️.ff10      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff11      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff12      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff13      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff14      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff15      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff16      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff17      ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff18       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff19       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff20       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff21       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff22       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff23       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff24       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff25       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff26       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff27       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff28       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff29       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff30       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff31       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff32       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff33       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff34       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff35       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff36       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff37       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff38       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff39       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff40       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff41       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff42       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff43       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff44       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff45       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff46       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff47       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff48       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff49       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff50       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff51       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff52       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff53       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff54       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff55       ❴your text❵
║send free fire logo
╠═➢ 🕊️.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: THISAN 
║
║  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  
╚═════════════════════╝` })
   
   }));
 }
