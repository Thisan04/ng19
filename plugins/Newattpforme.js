const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🕊️"

if (Config.WORKTYPE == 'public') {
   
   
   Asiata.addcommand({ pattern: 'attppack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/5e6b637122b3353a7902b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔═════════════════════╗
║       ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  
║        ║🕊️╚ATTP PACK╝🕊️║
║
╠═✖ 🕊️.01attp      ❴your text❵
║send fiee fire logo
╠═✖ 🕊️.02attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.03attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.04attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.05attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.06attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.07attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.08attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.09attp      ❴your text❵
║send Text logo
╠═✖ 🕊️.10attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.11attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.12attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.13attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.14attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.15attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.16attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.17attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.18attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.19attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.20attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.21attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.22attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.23attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.24attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.25attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.26attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.27attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.28attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.29attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.30attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.31attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.32attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.33attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.34attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.35attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.36attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.37attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.38attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.39attp       ❴your text❵
║send Text logo
╠═✖ 🕊️.40attp       ❴your text❵
║send Text logo
║
║▷Creator: THISAN 
║
║  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋  
╚═════════════════════╝
`,quoted: message.data})

    }));
   
   
     Asiata.addcommand({ pattern: '01attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '02attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '03attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/wroom?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '04attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/surfboard?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '05attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/orlando?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '06attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '07attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '08attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '09attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sunshine?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '10attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: '11attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})
    }));
      
     Asiata.addcommand({ pattern: '12attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/glow?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: '13attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/army?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
      Asiata.addcommand({ pattern: '14attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/casino?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: '15attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/star?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ',quoted: message.data})

    }));
      
      
      Asiata.addcommand({ pattern: '16attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/shrek?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: '17attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
    
    Asiata.addcommand({ pattern: '18attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sugar?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
    
    Asiata.addcommand({ pattern: '19attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fireworks?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
    
    Asiata.addcommand({ pattern: '20attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/trance?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
    Asiata.addcommand({ pattern: '21attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd2?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
    
    Asiata.addcommand({ pattern: '22attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
    
      Asiata.addcommand({ pattern: '23attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
    
    Asiata.addcommand({ pattern: '24attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/happy?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '25attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/zilch?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      Asiata.addcommand({ pattern: '26attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/prime?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '27attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sports?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      Asiata.addcommand({ pattern: '28attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      Asiata.addcommand({ pattern: '29attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/usa?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '30attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/cereal?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '31attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/neon?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      Asiata.addcommand({ pattern: '32attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fun?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   
   Asiata.addcommand({ pattern: '33attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/chrome?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   
   Asiata.addcommand({ pattern: '34attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/smurf?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   
   Asiata.addcommand({ pattern: '35attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/booking?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '36attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/husky?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '37attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hockey?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '38attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      Asiata.addcommand({ pattern: '39attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/toothpaste?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   Asiata.addcommand({ pattern: '40attp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n    ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ ' ,quoted: message.data})

    }));
      
   
   
   
   
   
   
}
