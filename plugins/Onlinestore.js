const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Asiata.addcommand({pattern: 'online store', fromMe: false,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🕊️ ONLINE STORE 🕊️
│
│   SELECT YOUR TYPE
│
│▷ .ladies
│─▷ For girl cloths
│
│▷ .mens
│─▷ For mens cloths
│
│    ONLY SRI LANKA 
│        BUYERS
│
│     🕊️POWERD BY🕊️
│      🐼 SL-ASIATA 🐼
╰──────────────`,quoted: message.data})

    }));
  

    Asiata.addcommand({pattern: 'ladies', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/873e00ec90306f5180f19.jpg', {responseType: 'arraybuffer'})
            
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🕊️ RS.1000.00\n\n🕊️ Dilivary available \n🕊️Charge RS.300.00\n\n🕊️ More details call 0775849690\n\n 🐼 POWERD BY SL-ASIATA 🐼',quoted: message.data})
        
        

    }));
    
  Asiata.addcommand({pattern: 'ladies', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/60cd76df9eeab865aeb50.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🕊️ RS.1000.00\n\n🕊️ Dilivary available \n🕊️Charge RS.300.00\n\n🕊️ More details call 0775849690\n\n 🐼 POWERD BY SL-ASIATA 🐼',quoted: message.data})

  }));
    
  Asiata.addcommand({pattern: 'ladies', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/7639b67f052f3d4b34236.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🕊️ RS.1000.00\n\n🕊️ Dilivary available \n🕊️Charge RS.300.00\n\n🕊️ More details call 0775849690\n\n 🐼 POWERD BY SL-ASIATA 🐼',quoted: message.data})

    }));
  
  Asiata.addcommand({pattern: 'ladies', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/db29720b4ac93686826c0.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🕊️ RS.1000.00\n\n🕊️ Dilivary available \n🕊️Charge RS.300.00\n\n🕊️ More details call 0775849690\n\n 🐼 POWERD BY SL-ASIATA 🐼',quoted: message.data})

    }));
    Asiata.addcommand({pattern: 'ladies', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/2b5b8437d28720d6f2d79.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🕊️ RS.1000.00\n\n🕊️ Dilivary available \n🕊️Charge RS.300.00\n\n🕊️ More details call 0775849690\n\n 🐼 POWERD BY SL-ASIATA 🐼',quoted: message.data})

    }));
  
  
  // MENS TYPE
  Asiata.addcommand({pattern: 'mens', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/b260087f89c4f5cfd5bdd.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🕊️ RS.1000.00\n\n🕊️ Dilivary available \n🕊️Charge RS.300.00\n\n🕊️ More details call 0775849690\n\n 🐼 POWERD BY SL-ASIATA 🐼',quoted: message.data})

    }));
 
}
