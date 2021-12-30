const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🕊️"

if (Config.WORKTYPE == 'private') {
   
   
   Asiata.addcommand({ pattern: 'rlpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/5e6b637122b3353a7902b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔══════════════════════
║❌ 🕊️*SL LOGO PACK 1*🕊️ ❌
╠══════════════════════
║
╠═🧚‍♂️ 🕊️Cmd: *.phub*
╠══🧚‍♂️ ✖ Dec: *Send pornhub logo*
╠═🧚‍♂️ 🕊️ Ex: *.phub SL-ASIATA*
║
╠═🧚‍♂️ 🕊️ Cmd: *.stone*
╠══🧚‍♂️ ✖ Dec: *Send stone like logo*
╠═🧚‍♂️ 🕊️Ex: *.stone SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.glitch*
╠══🧚‍♂️ ✖ Dec: *Send glitch logo*
╠═🧚‍♂️ 🕊️ Ex: *.glitch SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.space*
╠══🧚‍♂️ ✖ Dec: *Send space logo*
╠═🧚‍♂️ 🕊️Ex: *.space SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.blood*
╠══🧚‍♂️ ✖ Dec: *Send blood hor logo*
╠═🧚‍♂️ 🕊️Ex: *.blood SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.blackpink*
╠══🧚‍♂️ ✖ Dec: *Send bpink logo*
╠═🧚‍♂️ 🕊️Ex: *.blackpink SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.wall*
╠══🧚‍♂️ ✖ Dec: *Send wall art logo*
╠═🧚‍♂️ 🕊️Ex: *.wall SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.coding*
╠══🧚‍♂️✖ Dec: *Send coding logo*
╠═🧚‍♂️ 🕊️ Ex: *.coding SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: .*.sand1*
╠══🧚‍♂️ ✖  Dec: *Send sand writting*
╠═🧚‍♂️ 🕊️ Ex: *.sand1 SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.sand2*
╠══🧚‍♂️ ✖ Dec: *Send sand writting*
╠═🧚‍♂️ 🕊️Ex: *.sand2 SL-ASIATA
║
╠═🧚‍♂️ 🕊️Cmd: *.sand3*
╠══🧚‍♂️ ✖ Dec: *Send sand writting*
╠═🧚‍♂️ 🕊️Ex: *.sand3 SL-ASIATA
║
╠═🧚‍♂️ 🕊️Cmd: *.beach*
╠══🧚‍♂️ ✖ Dec: *Send beach logo*
╠═🧚‍♂️ 🕊️Ex: *.beach SL-ASIATA
║
╠═🧚‍♂️ 🕊️Cmd: *.gradient*
╠══🧚‍♂️ ✖  Dec: *Send logo*
╠═🧚‍♂️ 🕊️ Ex: *.gradient SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.luxury*
╠══🧚‍♂️ ✖  Dec: *Send luxury logo*
╠═🧚‍♂️ 🕊️ Ex: *.luxury SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.sky*
╠══🧚‍♂️ ✖  Dec: *Send sky logo*
╠═🧚‍♂️ 🕊️ Ex: *.sky SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.winter*
╠══🧚‍♂️ ✖  Dec: *Send winter logo*
╠═🧚‍♂️ 🕊️ Ex: *.winter SL-ASIATA
║
╠═🧚‍♂️ 🕊️Cmd: *.christmas*
╠══🧚‍♂️ ✖  Dec: *Send xmas logo*
╠═🧚‍♂️ 🕊️ Ex: *.christmas SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.neon*
╠══🧚‍♂️ ✖  Dec: *Send neon logo*
╠═🧚‍♂️ 🕊️ Ex: *.neon SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.king*
╠══🧚‍♂️ ✖  Dec: *Send king logo*
╠═🧚‍♂️ 🕊️ Ex: *.king SL-ASIATA*
║
╠═🧚‍♂️ 🕊️Cmd: *.glue*
╠══🧚‍♂️ ✖  Dec: *Send Glue logo*
╠═🧚‍♂️ 🕊️ Ex: *.glue SL-ASIATA*
║
║      ╔═🕊️ SL-ASIATA BOT 🕊️═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════`,quoted: message.data})

    }));

   Asiata.addcommand({pattern: 'gamma ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://api.lolhuman.xyz/api/meme8?apikey=d3be4b65ca9dab633c773d66&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'stone ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/stone-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'glitch ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/glitch-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'space ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/space-3d?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'phub ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/phub?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  ' ,quoted: message.data})
   
   }));
   
   
     Asiata.addcommand({ pattern: 'blood ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'blackpink ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'coding ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'wall ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sand1 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'beach ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'gradient ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'luxury ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sky ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'winter ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'christmas ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})
    }));
      
     Asiata.addcommand({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'king ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      Asiata.addcommand({ pattern: 'sand2 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'sand3 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
      
      Asiata.addcommand({ pattern: 'glue ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
