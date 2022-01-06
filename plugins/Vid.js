const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('Asiata');
const YTV_DESC = "??"
const YT_NEED = "*Need Song Yt Link!.*"
const NO_RESULT = "*?can't Find Anything...* Use Yt Link only ..."
const tk = Config.WORKTYPE == 'public' ? false : true

    Asiata.addcommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.PLAY_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,'NEED WORD 🍁',MessageType.text);
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,`╭──────•◈•──────╮
    ╲╲╲╲╲┏━━━┓╱╱╱╱╱
╲┏━━━┻━━━┻━━━┓╱
╲┃╭━╮┏━━━┓╭━╮┃╱
╱┃┃╳┃┣◯--◯┫┃╳┃┃╲
╱┃╰━╯┣━━━┫╰━╯┃╲
╱┃┈▊▊▊▊┈▂▃▅▇┈┃╲
╱┗━━━━━━━━━━━┛╲`,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,fs.readFileSync('./' + title + '.jpg'), MessageType.image, { caption: '\n```Song Name :\n'+ title +' ```\n\n'+`╭──────•◈•──────╮ 
   ╲╲╲╲╲┏━━━┓╱╱╱╱╱
╲┏━━━┻━━━┻━━━┓╱
╲┃╭━╮┏━━━┓╭━╮┃╱
╱┃┃╳┃┣◯--◯┫┃╳┃┃╲
╱┃╰━╯┣━━━┫╰━╯┃╲
╱┃┈▊▊▊▊┈▂▃▅▇┈┃╲
╱┗━━━━━━━━━━━┛╲`+'\n' });
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', contextInfo: { forwardingScore: 1, isForwarded: false }});
            });
    }));
    
