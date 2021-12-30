const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');




Asiata.addcommand({pattern: 'public', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar WORK_TYPE=public', MessageType.text);
        await message.client.sendMessage(message.jid,'YOUR BOT SET ON PUBLIC 🐼🐼',MessageType.text);
            
        }));

Asiata.addcommand({pattern: 'button', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar BUTTON_CMD=btn', MessageType.text);
        await message.client.sendMessage(message.jid,'SUCCESFULLY ADDED BUTTON COMMAND 🐼🐼',MessageType.text);
            
        }));

Asiata.addcommand({pattern: 'txt', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar BUTTON_CMD=txt', MessageType.text);
        await message.client.sendMessage(message.jid,'SUCCESFULLY ADDED TEXT COMMAND 🐼🐼',MessageType.text);
            
        }));

Asiata.addcommand({pattern: 'private', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar WORK_TYPE=private', MessageType.text);
        await message.client.sendMessage(message.jid,'YOUR BOT SET ON PRIVATE 🐼🐼',MessageType.text);
            
        }));

Asiata.addcommand({pattern: 'voice on', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar VOICE_CHAT=true', MessageType.text);
        await message.client.sendMessage(message.jid,'ACTIVATED VOICE CHAT 🐼🐼',MessageType.text);
            
        }));


Asiata.addcommand({pattern: 'voice off', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar VOICE_CHAT=false', MessageType.text);
        await message.client.sendMessage(message.jid,'DEACTIVATED VOICE CHAT 🐼🐼',MessageType.text);
            
        }));

Asiata.addcommand({ pattern: 'logo ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {
    
    await message.client.sendMessage(message.jid,'.setvar ALIVE_LOGO='+(match[1]),MessageType.text);
    }));
