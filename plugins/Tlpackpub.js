const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ðï¸"

if (Config.WORKTYPE == 'public') {
   
   
   Asiata.addcommand({ pattern: 'tlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/5e6b637122b3353a7902b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `âââââââââââââââââââââââ
ââ ðï¸*SL LOGO PACK 1*ðï¸ â
â ââââââââââââââââââââââ
â
â   `+Config.CAPTION+`
â
â âð§ââï¸ ðï¸Cmd: *.wel*
â ââð§ââï¸ â Dec: *Send welcome logo*
â âð§ââï¸ ðï¸ Ex: *.wel SL-ASIATA*
â
â âð§ââï¸ ðï¸ Cmd: *.bye*
â ââð§ââï¸ â Dec: *Send bye logo*
â âð§ââï¸ ðï¸Ex: *.bye SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.marvel*
â ââð§ââï¸ â Dec: *Send marve logo*
â âð§ââï¸ ðï¸ Ex: *.marvel SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.2marvel*
â ââð§ââï¸ â Dec: *Send marvel logo*
â âð§ââï¸ ðï¸Ex: *.2marvel SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.wolf*
â ââð§ââï¸ â Dec: *Send wolf logo*
â âð§ââï¸ ðï¸Ex: *.wolf SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.lava*
â ââð§ââï¸ â Dec: *Send lava logo*
â âð§ââï¸ ðï¸Ex: *.lava SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.xmas*
â ââð§ââï¸ â Dec: *Send xmas logo*
â âð§ââï¸ ðï¸Ex: *.xmas SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.round*
â ââð§ââï¸â Dec: *Send round logo*
â âð§ââï¸ ðï¸ Ex: *.round { image url }*
â
â âð§ââï¸ ðï¸Cmd: .*.quot*
â ââð§ââï¸ â  Dec: *Send quote logo*
â âð§ââï¸ ðï¸ Ex: *.quot SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.harta*
â ââð§ââï¸ â Dec: *Send harta logo*
â âð§ââï¸ ðï¸Ex: *.harta SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.1917*
â ââð§ââï¸ â Dec: *Send 1917 logo*
â âð§ââï¸ ðï¸Ex: *.1917 SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.minion*
â ââð§ââï¸ â Dec: *Send minion logo*
â âð§ââï¸ ðï¸Ex: *.minion SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.holo*
â ââð§ââï¸ â  Dec: *Send holo logo*
â âð§ââï¸ ðï¸ Ex: *.holo SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.metalp*
â ââð§ââï¸ â  Dec: *Send metalp logo*
â âð§ââï¸ ðï¸ Ex: *.metalp SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.avengers*
â ââð§ââï¸ â  Dec: *Send avengers logo*
â âð§ââï¸ ðï¸ Ex: *.avengers SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.halloween*
â ââð§ââï¸ â  Dec: *Send halloween logo*
â âð§ââï¸ ðï¸ Ex: *.halloween SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.horror*
â ââð§ââï¸ â  Dec: *Send horror logo*
â âð§ââï¸ ðï¸ Ex: *.horror SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.glossyc*
â ââð§ââï¸ â  Dec: *Send glossy logo*
â âð§ââï¸ ðï¸ Ex: *.glossyc SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.deluxe*
â ââð§ââï¸ â  Dec: *Send deluxe logo*
â âð§ââï¸ ðï¸ Ex: *.deluxe SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.glossyb*
â ââð§ââï¸ â  Dec: *Send glossy logo*
â âð§ââï¸ ðï¸ Ex: *.glossyb SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.joker*
â ââð§ââï¸ â  Dec: *Send joker logo*
â âð§ââï¸ ðï¸ Ex: *.joker SL-ASIATA*
â
â      ââðï¸ SL-ASIATA BOT ðï¸ââ
â        â ENJOY WITH US â
âââââââââââââââââââââââ`,quoted: message.data})

    }));

   Asiata.addcommand({pattern: 'wel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/welcome?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/5e6b637122b3353a7902b.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'bye ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/leave?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/5e6b637122b3353a7902b.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'marvel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: '2marvel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios2?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ  ',quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'wolf ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/wolf?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ  ',quoted: message.data})
   
   }));
   
   
     Asiata.addcommand({ pattern: 'harta ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'quot ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'round ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'lava ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/lava?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '1917 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/1917-style?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'minion ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/minion-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'holo ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'metalp ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-purple?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'avengers ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/avengers-logo?text=SL-ASIATA&text2=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'halloween ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/halloween?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'horror ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blood?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})
    }));
      
     Asiata.addcommand({ pattern: 'xmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://h4ck3rs404-api.herokuapp.com/api/textprome/xmas?text=${encodeURIComponent(match[1])}&apikey=404Api`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'glossyc ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
      Asiata.addcommand({ pattern: 'deluxe ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/deluxe-gold?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'glossyb ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ',quoted: message.data})

    }));
      
      
      Asiata.addcommand({ pattern: 'joker ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/joker?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
