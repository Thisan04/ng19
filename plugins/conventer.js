/* Copyright (C) 2021 SL-ASIATA.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
SL-ASIATA THISAN 
*/

const Asiata = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    Asiata.addcommand({pattern: 'mp3', fromMe: true,  deleteCommand: false, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('Asiata.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('Asiata.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asiata.addcommand({pattern: 'photo', fromMe: true,  deleteCommand: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {   

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
 
        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('Asiata.jpg')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('Asiata.jpg'), MessageType.image, {quoted: message.data}, {mimetype: Mimetype.jpg , Caption : ' ��????��?ASIATA??��???��'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asiata.addcommand({pattern: 'mp3', fromMe: false, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('Asiata.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('Asiata.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asiata.addcommand({pattern: 'photo', fromMe: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('Asiata.jpg')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('Asiata.jpg'), MessageType.image, {quoted: message.data}, {mimetype: Mimetype.jpg, Caption : ' ��????��?ASIATA??��???��'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
