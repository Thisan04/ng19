const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


Asiata.addcommand({pattern: 'alive', fromMe: false, desc: "💃SL ASIATA V2🔥"}, (async (message, match) => {

    // send a simple text!
        var image = await axios.get ('https://telegra.ph/file/1851f11236282e46d5360.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🍂```\n\n🍂 My name : 🎎αѕιαтα вσт🔥\n\n🍂Creater : THISAN&MIHIRANGA\n\n🍂 Developer: KAVEESHA NETHUM\n\n🍂Thank You For Using 🎎αѕιαтα вσт🔥"})
        
    // send a contact!
    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                + 'VERSION:3.0\n' 
                + 'FN:Mr.ASIATA\n' // full name
                + 'ORG:Subcribe Bro You Tube Chanel;\n' // the organization of the contact
                + 'TEL;type=CELL;type=VOICE;waid=94766816809:+94766816809\n' // WhatsApp ID + phone number
                + 'END:VCARD'
    await message.client.sendMessage(message.jid, {displayname: "💃Mr.ASIATA", vcard: vcard}, MessageType.contact)

    
//send a template message!
const Buttons = [
    {index: 1, urlButton: {displayText: '💖 Plz Subacribe on Youtube!', url: 'https://youtube.com/channel/UCCqExh2u6Cf1apVOdvbbRIg'}},
    {index: 2, callButton: {displayText: "Don't Call me!", phoneNumber: "+94766816809"}},
    {index: 3, quickReplyButton: {displayText: "It's ok", id: '.alive'}},
]

const btn = {
    text: "🇱🇰ᴛʜᴇ ʀᴀᴠᴀɴᴀ ᴛᴇᴄʜ ғᴀᴍɪʟʏ🇱🇰️",
    footer: '🎎ꇘ꒒ ꋫꇘ꒐ꋫ꓅ꋫ ꃲꄱ꓅🔥',
    Buttons: Buttons
}

await message.client.sendMessage(message.jid, btn)

    

    // End
 }));
