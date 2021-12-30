

const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asiata.addcommand({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.asiata'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '.rules'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/1851f11236282e46d5360.jpg',
    contentText: "😇 How Are You 🙃",
    footerText: '🐼 SL-ASIATA BOT 🇱🇰',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/1851f11236282e46d5360.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "හායිම් මන් දැන් ඔන්ලයින්🙃මගෙන් මොනවද වෙන්න ඕන ගායිස්💝 🕊️\n\n🕊️ My name : 👨‍💻ASIATA බොටා 😈\n\n🕊️ Developer: THISAN\n\n🕊️ආසියාටා ගැම්මක් තමා🐼  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.asiata'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '.rules'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/1851f11236282e46d5360.jpg',
    contentText: "😇 CLICK MENU BUTTON TO GET MENU 🙃",
    footerText: '🐼BY SL-ASIATA BOT🇱🇰',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n* ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Asiata.addcommand({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asiata.addcommand({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `* ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 Public'+
                `\n\n🕊️ Check github for bot: https://github.com/Thisan04/SL-ASIATA`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Asiata.addcommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.asiata'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '.rules'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "😇 HOW ARE YOU 🙃",
    footerText: '🐼BY SL-ASIATA BOT🇱🇰',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/1851f11236282e46d5360.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "හායිම් මන් දැන් ඔන්ලයින්🙃මගෙන් මොනවද වෙන්න ඕන ගායිස්💝 🕊️\n\n🕊️ My name : 👨‍💻ASIATA බොටා 😈\n\n🕊️ Developer: THISAN\n\n🕊️ආසියාටා ගැම්මක් තමා🐼  ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.asiata'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: '.rules'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/1851f11236282e46d5360.jpg',
    contentText: "😇 HOW ARE YOU 🙃",
    footerText: '🐼BY SL-ASIATA BOT🇱🇰',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n* ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Asiata.addcommand({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asiata.addcommand({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `* ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 - Public'+
                `\n\n🕊️ Check github for bot:  https://github.com/Thisan04/SL-ASIATA`
           , MessageType.text);
            
        }));
}
