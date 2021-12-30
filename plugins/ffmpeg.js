/* Copyright (C) 2021 SL-ASIATA

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
const Lang = Language.getString('ffmpeg');

if (Config.WORKTYPE == 'private') {

    Asiata.addcommand({pattern: 'ffmpeg ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.FF_DESC}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,'Need Media and Filter Name!\nℹ️ Ex: ```.ffmpeg fade=in:0:30```\nℹ️ Ex: ```.ffmpeg curves=vintage, fps=fps=25```', MessageType.text);
        if (message.reply_message.video) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .format('mp4')
                .save('Asiata.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('Asiata.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (message.reply_message.video === false && message.reply_message.image) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .save('Asiata.jpg')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('Asiata.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else {
            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .audioFilters(`${match[1]}`)
                .save('Asiata.mp3')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('Asiata.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asiata.addcommand({pattern: 'ffmpeg ?(.*)', fromMe: false, desc: Lang.FF_DESC}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,'Need Media and Filter Name!\nℹ️ Ex: ```.ffmpeg fade=in:0:30```\nℹ️ Ex: ```.ffmpeg curves=vintage, fps=fps=25```', MessageType.text);
        if (message.reply_message.video) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .format('mp4')
                .save('Asiata.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('Asiata.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (message.reply_message.video === false && message.reply_message.image) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .save('Asiata.jpg')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('Asiata.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: ' ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋ '});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else {
            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .audioFilters(`${match[1]}`)
                .save('Asiata.mp3')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('Asiata.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
    }));
}
