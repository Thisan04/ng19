

const Asiata = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');
const { fetchJson, getBuffer } = require('./fetcher')

const Language = require('../language')
const Lang = Language.getString('search')


if (cn.WORKTYPE == 'private') {
     
      Asiata.addcommand({ pattern: 'spoti ?(.*)', fromMe: true, desc: Lang.SPO_USAGE,  deleteCommand: false }, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
      var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

      get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${cn.ZONE}&query=${match[1]}`)
                      get_result = get_result.result
                      ini_txt = ""
                      for (var x of get_result) {
                          ini_txt += `Title : ${x.title}\n`
                          ini_txt += `Artists : ${x.artists}\n`
                          ini_txt += `Link : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
      await reply.delete();
    })
}
else if (cn.WORKTYPE == 'public') {
  
  Asiata.addcommand({ pattern: 'spoti ?(.*)', fromMe: false, desc: Lang.SPO_USAGE,  deleteCommand: false }, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${cn.ZONE}&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }

    await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
    await reply.delete();
  })
    
}
