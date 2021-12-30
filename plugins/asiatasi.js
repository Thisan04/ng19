const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "  *ASIATA  MENU* "
const alive = fs.readFileSync('./Voice/alive.mp3')

if (Config.LANG == 'SI') {
 if (Config.WORKTYPE == 'public') {
 
  
  Asiata.addcommand({ pattern: 'alive', fromMe: false, dontAddCommandList: true }, (async (message, match) => {
   if (Config.AUTOVOICE == 'true') {
   await message.client.sendMessage(message.jid,alive, MessageType.audio, {mimetype: 'audio/mp4', ptt:true,quoted: message.data})
   }
  }));
  
  Asiata.addcommand({ pattern: 'aasiata', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/5e6b637122b3353a7902b.jpg`, { responseType: 'arraybuffer' })
        

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔═══════════════════════╗

         💝 ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋💝

═════════════════════════

*🕊️ විධානය:* 💝.xmedia💝

*✖ විස්තරය:* 💝එය මාධ්‍ය මෙවලම් 25 කට වඩා ඇති ප්ලගිනයකි.💝

*🕊️ විධානය:* 💝.admin💝

*✖ විස්තරය:* 💝Admin විධාන ලැයිස්තුව ලබා ගැනීමට💝

 🕊️ විධානය:  .dis on/off
 
 ▷ විස්තරය;  Disapearing on off කිරීමට
 
🕊️ විධානය:   .play
 
 ▷ විස්තරය;  ගීත බාගත කිරීමට
 
 🕊️ විධානය:  .afk
 
 ▷ විස්තරය;  බොට් ඔන්ලයින් තැබීමේ පනිවිඩය

*🕊️ විධානය:* 💝.asiata💝

*✖ විස්තරය:* 💝සියලමු විධාන💝

*🕊️ විධානය;* 💝.rlpack💝

*✖ විස්තරය:* 💝SL-ASIATA ලොගෝ එකතුව 01💝

*🕊️ විධානය:* 💝.sl💝

*✖ විස්තරය:* 💝AI chat bot සමඟ කතාබස් කරන්න.💝

*🕊️ විධානය;* 💝.grp💝

*✖ විස්තරය:* 💝සමූහ ලයිස්ට්ත්තුතුව ලබා දෙයි💝

*🕊️ විධානය:* 💝.warn1,.warn2,.warn3,.warn4

*✖ විස්තරය:* 💝ඔබගේ සමූහ වල අවවාදයයි මැසේජ් යවයි බොට් අයිතිකරු සදහා වලන්ගු වේ.💝

*🕊️ විධානය:* 💝.rules💝

*✖ විස්තරය:* 💝සමූහයේ නීති ඔබ වෙත එවයි💝

*🕊️ විධානය:* 💝.switch💝

*✖ විස්තරය:* 💝AI chat bot සක්‍රිය / අක්‍රිය කිරීමට.

⌨️ උදාහරණය: AI chat bot සක්‍රිය කිරීමට, .switch CHAT_BOT:true විධානය කරන්න.

AI chat bot අක්‍රිය කිරීමට, .switch CHAT_BOT:false විධානය කරන්න.

(මෙය admin පමණක් විධානයකි.)💝

*🕊️ විධානය:* 💝.anime💝

*✖ විස්තරය:* 💝Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..💝

*🕊️ විධානය:* 💝.antispam💝

*✖ විස්තරය:* 💝This command for any emergency situation about any kind of WhatsApp SPAM in Group💝

*🕊️ විධානය:* 💝.mp3💝

*✖ විස්තරය:* 💝🕊️ ✖ වීඩියෝව mp3 බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.photo💝

*✖ විස්තරය:* 💝🕊️ ✖ ස්ටිකරය ඡායාරූපයකට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.ffmpeg💝

*✖ විස්තරය:* 💝වීඩියෝවට අපේක්ෂිත ffmpeg filter යොදයි.

⌨️ Example: .ffmpeg fade=in:0:30💝

*🕊️ විධානය:* 💝.info💝

*✖ විස්තරය:* 💝අදාළ chatහි විස්තර පතක් සපයයි.💝

*🕊️ විධානය:* 💝.covid💝

*✖ විස්තරය:* 💝රටවල Covid-19 පිළිබඳ තොරතුරු පරීක්‍ෂා කරන්න.

උදාහරණය : .covid Sri Lanka💝

*🕊️ විධානය:* 💝.meme💝

*✖ විස්තරය:* 💝ඔබ පිළිතුරු දුන් ඡායාරූප මේමස්.💝

*🕊️ විධානය:* 💝.movie💝

*✖ විස්තරය:* 💝Movies වල විස්තර ලබාදීම.💝

*🕊️ විධානය:* 💝.notes💝

*✖ විස්තරය:* 💝ඔබගේ පවතින සියලුම සටහන් පෙන්වයි.💝

*🕊️ විධානය:* 💝.save💝

*✖ විස්තරය:* 💝පණිවිඩයකට mention දී ටයිප් කරන්න .save හෝ භාවිතා කරන්න .save <ඔබේ සටහන>💝

*🕊️ විධානය:* 💝.deleteNotes💝

*✖ විස්තරය:* 💝ඔබගේ සුරකින ලද සටහන් *සියල්ල* මකා දමයි.💝

*🕊️ විධානය:* 💝.ocr💝

*✖ විස්තරය:* 💝ඔබ mention දුන් ඡායාරූපයෙහි පෙළ කියවයි.💝

*🕊️ විධානය:* 💝.removebg💝

*✖ විස්තරය:* 💝ඡායාරූපවල පසුබිම ඉවත් කරයි.💝

*🕊️ විධානය:* 💝.report💝

*✖ විස්තරය:* 💝කණ්ඩායමේ කෙනෙක් පරිපාලක වෙත වාර්තා කරන්න.💝

*🕊️ විධානය:* 💝.song💝

*✖ විස්තරය:* 💝ඔබ ලියූ ගීතය mp3 එකක් ලෙස බාගත කරයි.💝

*🕊️ විධානය:* 💝.fsong💝

*✖ විස්තරය:* 💝ඔබ ලියූ ගීතය ෆයිල් එකක් ලෙස බාගත කරයි.💝

*🕊️ විධානය:* 💝.video💝

*✖ විස්තරය:* 💝යූ ටියුබ් වෙතින් වීඩියෝ බාගත කරයි.💝

*🕊️ විධානය:* 💝.insta💝

*✖ විස්තරය:* 💝Instagram වෙතින් රූපය / වීඩියෝ බාගන්න,මෙය වැඩ නොකරන්නේ නම් API දෝශයකි💝

*🕊️ විධානය:* 💝.fb💝

*✖ විස්තරය:* 💝ෆේස්බුක් වෙතින් වීඩියෝ බාගත කරයි , මෙය වැඩ නොකරන්නේ නම් API දෝශයකි..💝

*🕊️ විධානය:* 💝.trt💝

*✖ විස්තරය:* 💝එය ගූගල් පරිවර්තනය සමඟ පරිවර්තනය කරයි. ඔබ ඕනෑම පණිවිඩයකට mention දිය යුතුය.💝

*⌨️ උදාහරණයක්:* 💝.trt en si (From English to Sinhala)💝

*🕊️ විධානය:* 💝.spdf💝

*✖ විස්තරය:* 💝Converts a Site into PDF💝

*🕊️ විධානය:* 💝.quote💝

*✖ විස්තරය:* 💝It Sends Random Quote💝

*🕊️ විධානය:* 💝.currency💝

*✖ විස්තරය:* 💝මුදල් ඒකක පරිවර්තනය කිරීමට.💝

*🕊️ විධානය:* 💝.tts💝

*✖ විස්තරය:* 💝එය වචන voice messageට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.yt💝

*✖ විස්තරය:* 💝එය යූ ටියුබ් තුළ සොයයි 🕊️✖ .💝

*🕊️ විධානය:* 💝.wiki💝

*✖ විස්තරය:* 💝Wikipedia සොයයි.💝

*🕊️ විධානය:* 💝.img💝

*✖ විස්තරය:* 💝ගූගල් හි අදාළ පින්තූර සෙවීම.💝

*🕊️ විධානය:* 💝.wame💝

*✖ විස්තරය:* 💝Get a link to the user chat.💝

*🕊️ විධානය:* 💝.github💝

*✖ විස්තරය:* 💝දී ඇති පරිශීලක නාමයෙන් github තොරතුරු රැස් කරයි.

⌨️ Example: .github Thisan01💝

*🕊️ විධානය:* 💝.tk💝

*✖ විස්තරය:* 💝දී ඇති usrname යෙන් tiktok තොරතුරු රැස් කරයි.

⌨️ Example: .tk hiruwa66💝

*🕊️ විධානය:* 💝.ss💝

*✖ විස්තරය:* 💝දී ඇති linkයේ website screenshot ගනී.💝

*🕊️ විධානය:* 💝.mod💝

*✖ විස්තරය:* 💝Moddroid වෙබ් අඩවිය තුළ mod කළ apk සොයන්න.💝

*🕊️ විධානය:* 💝.spoti💝

*✖ විස්තරය:* 💝Spotify වෙතින් ගීතය සොයන්න.💝

*🕊️ විධානය:* 💝.animesay💝

*✖ විස්තරය:* 💝එය anime girl රඳවාගෙන සිටින banner තුළ text ලියයි💝

*🕊️ විධානය:* 💝.changesay💝

*✖ විස්තරය:* 💝Change my mind meme පෝස්ටරය වෙනස් කිරීම සඳහා text හරවයි.💝

*🕊️ විධානය:* 💝.trumpsay💝

*✖ විස්තරය:* 💝Trumpගේ tweet එකට text පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.lovepack💝

*✖ විස්තරය:* 💝Love pack Send lovely messages to gf/bf..💝

*🕊️ විධානය:* 💝.spotify💝

*✖ විස්තරය:* 💝ඔබට spotify ගීත links මඟින් download කරගත හැක.💝

*🕊️ විධානය:* 💝.sticker💝

*✖ විස්තරය:* 💝එය ඔබගේ mention දුන් ඡායාරූපය හෝ වීඩියෝව ස්ටිකර් බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.sticvid💝

*✖ විස්තරය:* 💝🕊️✖ සජීවිකරණ ස්ටිකර් වීඩියෝ බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.alive💝

*✖ විස්තරය:* 💝බොට් වැඩ කරන්නේ නැද්ද යන්න පරීක්ෂා කිරීමට?💝

*🕊️ විධානය:* 💝.version💝

*✖ විස්තරය:* 💝ඔබ දැනට install කර තිබෙන bot version එක පෙන්වීම.💝

*🕊️ විධානය:* 💝.tagadmin💝

*✖ විස්තරය:* 💝Admins ටැග් කිරීමට.💝

*🕊️ විධානය:* 💝.tblend💝

*✖ විස්තරය:* 💝Applies the selected TBlend effect to videos.💝

*🕊️ විධානය:* 💝.carbon💝

*✖ විස්තරය:* 💝ඔබ mention කරන text එක carbon.sh මඟින් carbon image කරයි.💝

*🕊️ විධානය:* 💝.agm💝

*✖ විස්තරය:* 💝it sends good morning text message💝

*🕊️ විධානය:* 💝.agn💝

*✖ විස්තරය:* 💝it sends good night text message💝

*🕊️ විධානය:* 💝.ttp💝

*✖ විස්තරය:* 💝Text සරල image බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.gm💝

*✖ විස්තරය:* 💝it sends good morning picture message💝

*🕊️ විධානය:* 💝.gn💝

*✖ විස්තරය:* 💝it sends good night picture message💝

*🕊️ විධානය:* 💝.attp💝

*✖ විස්තරය:* 💝දේදුන්න text ස්ටිකරයක් ලෙස එක් කරයි.💝

*🕊️ විධානය:* 💝.unaudio💝

*✖ විස්තරය:* 💝Converts sound recording to an audio File.💝

*🕊️ විධානය:* 💝.unvoice💝

*✖ විස්තරය:* 💝Mp3 files, voice message බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.vid2💝

*✖ විස්තරය:* 💝Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .💝

*🕊️ විධානය:* 💝.weather💝

*✖ විස්තරය:* 💝කාලගුණය පෙන්වයි.💝

*🕊️ විධානය:* 💝.speedtest💝

*✖ විස්තරය:* 💝Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.💝

*🕊️ විධානය:* 💝.ping💝

*✖ විස්තරය:* 💝ඔබේ ping මැනීම.💝

*🕊️ විධානය:* 💝.short💝

*✖ විස්තරය:* 💝Links shorten කරන්න.💝

*🕊️ විධානය:* 💝.xxx💝

*✖ විස්තරය:* 💝xnxx අඩවියේ සෙක්ස් වීඩියෝ බාගත කරයි අව්නර් සදහා පමණයි..Download sex videos on xnxx site💝

` ,quoted: message.data})

    }));
   }
 
else if (Config.WORKTYPE == 'private') {
 
 Asiata.addcommand({ pattern: 'alive', fromMe: false, dontAddCommandList: true }, (async (message, match) => {
   await message.client.sendMessage(message.jid,alive, MessageType.audio, {mimetype: 'audio/mp4', ptt:true,quoted: message.data})
  }));
 
 Asiata.addcommand({ pattern: 'aasiata', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] ==='' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/5e6b637122b3353a7902b.jpg`, { responseType: 'arraybuffer' })
        
        await message.client.sendMessage(message.jid, alive, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: message.data})

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `╔═══════════════════════╗

         💝 ┋✖☛🧚‍♂️ASIATA🧚‍♂️☚✖┋💝

═════════════════════════

*🕊️ විධානය:* 💝.xmedia💝

*✖ විස්තරය:* 💝එය මාධ්‍ය මෙවලම් 25 කට වඩා ඇති ප්ලගිනයකි.💝

*🕊️ විධානය:* 💝.admin💝

*✖ විස්තරය:* 💝Admin විධාන ලැයිස්තුව ලබා ගැනීමට💝

*🕊️ විධානය:* 💝.asiata💝

*✖ විස්තරය:*💝සියලමු විධාන💝

 🕊️ විධානය:  .dis on/off
 
 ▷ විස්තරය;  Disapearing on off කිරීමට
 
🕊️ විධානය:   .play
 
 ▷ විස්තරය;  ගීත බාගත කිරීමට
 
 🕊️ විධානය:  .afk
 
 ▷ විස්තරය;  බොට් ඔන්ලයින් තැබීමේ පනිවිඩය
 
*🕊️ විධානය;* 💝.rlpack💝

*✖ විස්තරය:* 💝SL-ASIATA ලොගෝ එකතුව 01💝

*🕊️ විධානය:* 💝.sl💝

*✖ විස්තරය:* 💝AI chat bot සමඟ කතාබස් කරන්න.💝

🕊️ විධානය;* 💝.grp💝

*✖ විස්තරය:* 💝සමූහ ලයිස්ට්ත්තුතුව ලබා දෙයි💝

*🕊️ විධානය:* 💝.warn1,.warn2,.warn3,.warn4

*✖ විස්තරය:* 💝ඔබගේ සමූහ වල අවවාදයයි මැසේජ් යවයි බොට් අයිතිකරු සදහා වලන්ගු වේ.💝

*🕊️ විධානය:* 💝.rules💝

*✖ විස්තරය:* 💝සමූහයේ නීති ඔබ වෙත එවයි💝

*🕊️ විධානය:* 💝.switch💝

*✖ විස්තරය:* 💝AI chat bot සක්‍රිය / අක්‍රිය කිරීමට.

⌨️ උදාහරණය: AI chat bot සක්‍රිය කිරීමට, .switch CHAT_BOT:true විධානය කරන්න.

AI chat bot අක්‍රිය කිරීමට, .switch CHAT_BOT:false විධානය කරන්න.

(මෙය admin පමණක් විධානයකි.)💝

*🕊️ විධානය:* 💝.anime💝

*✖ විස්තරය:* 💝Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..💝

*🕊️ විධානය:* 💝.antispam💝

*✖ විස්තරය:* 💝This command for any emergency situation about any kind of WhatsApp SPAM in Group💝

*🕊️ විධානය:* 💝.mp3💝

*✖ විස්තරය:* 💝🕊️ ✖ වීඩියෝව mp3 බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.photo💝

*✖ විස්තරය:* 💝🕊️ ✖ ස්ටිකරය ඡායාරූපයකට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.ffmpeg💝

*✖ විස්තරය:* 💝වීඩියෝවට අපේක්ෂිත ffmpeg filter යොදයි.

⌨️ Example: .ffmpeg fade=in:0:30💝

*🕊️ විධානය:* 💝.info💝

*✖ විස්තරය:* 💝අදාළ chatහි විස්තර පතක් සපයයි.💝

*🕊️ විධානය:* 💝.covid💝

*✖ විස්තරය:* 💝රටවල Covid-19 පිළිබඳ තොරතුරු පරීක්‍ෂා කරන්න.

උදාහරණය : .covid Sri Lanka💝

*🕊️ විධානය:* 💝.meme💝

*✖ විස්තරය:* 💝ඔබ පිළිතුරු දුන් ඡායාරූප මේමස්.💝

*🕊️ විධානය:* 💝.movie💝

*✖ විස්තරය:* 💝Movies වල විස්තර ලබාදීම.💝

*🕊️ විධානය:* 💝.notes💝

*✖ විස්තරය:* 💝ඔබගේ පවතින සියලුම සටහන් පෙන්වයි.💝

*🕊️ විධානය:* 💝.save💝

*✖ විස්තරය:* 💝පණිවිඩයකට mention දී ටයිප් කරන්න .save හෝ භාවිතා කරන්න .save <ඔබේ සටහන>💝

*🕊️ විධානය:* 💝.deleteNotes💝

*✖ විස්තරය:* 💝ඔබගේ සුරකින ලද සටහන් *සියල්ල* මකා දමයි.💝

*🕊️ විධානය:* 💝.ocr💝

*✖ විස්තරය:* 💝ඔබ mention දුන් ඡායාරූපයෙහි පෙළ කියවයි.💝

*🕊️ විධානය:* 💝.removebg💝

*✖ විස්තරය:* 💝ඡායාරූපවල පසුබිම ඉවත් කරයි.💝

*🕊️ විධානය:* 💝.report💝

*✖ විස්තරය:* 💝කණ්ඩායමේ කෙනෙක් පරිපාලක වෙත වාර්තා කරන්න.💝

*🕊️ විධානය:* 💝.song💝

*✖ විස්තරය:* 💝ඔබ ලියූ ගීතය mp3 එකක් ලෙස බාගත කරයි.💝

*🕊️ විධානය:* 💝.song💝

*✖ විස්තරය:* 💝ඔබ ලියූ ගීතය ෆයිල් එකක් ලෙස බාගත කරයි..💝

*🕊️ විධානය:* 💝.video💝

*✖ විස්තරය:* 💝යූ ටියුබ් වෙතින් වීඩියෝ බාගත කරයි.💝

*🕊️ විධානය:* 💝.insta💝

*✖ විස්තරය:* 💝Instagram වෙතින් රූපය / වීඩියෝ බාගන්න,මෙය වැඩ නොකරන්නේ නම් API දෝශයකි💝

*🕊️ විධානය:* 💝.fb💝

*✖ විස්තරය:* 💝ෆේස්බුක් වෙතින් වීඩියෝ බාගත කරයි , මෙය වැඩ නොකරන්නේ නම් API දෝශයකි..💝

*🕊️ විධානය:* 💝.trt💝

*✖ විස්තරය:* 💝එය ගූගල් පරිවර්තනය සමඟ පරිවර්තනය කරයි. ඔබ ඕනෑම පණිවිඩයකට mention දිය යුතුය.💝

*⌨️ උදාහරණයක්:* 💝.trt en si (From English to Sinhala)💝

*🕊️ විධානය:* 💝.spdf💝

*✖ විස්තරය:* 💝Converts a Site into PDF💝

*🕊️ විධානය:* 💝.quote💝

*✖ විස්තරය:* 💝It Sends Random Quote💝

*🕊️ විධානය:* 💝.currency💝

*✖ විස්තරය:* 💝මුදල් ඒකක පරිවර්තනය කිරීමට.💝

*🕊️ විධානය:* 💝.tts💝

*✖ විස්තරය:* 💝එය වචන voice messageට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.yt💝

*✖ විස්තරය:* 💝එය යූ ටියුබ් තුළ සොයයි 🕊️✖ .💝

*🕊️ විධානය:* 💝.wiki💝

*✖ විස්තරය:* 💝Wikipedia සොයයි.💝

*🕊️ විධානය:* 💝.img💝

*✖ විස්තරය:* 💝ගූගල් හි අදාළ පින්තූර සෙවීම.💝

*🕊️ විධානය:* 💝.wame💝

*✖ විස්තරය:* 💝Get a link to the user chat.💝

*🕊️ විධානය:* 💝.github💝

*✖ විස්තරය:* 💝දී ඇති පරිශීලක නාමයෙන් github තොරතුරු රැස් කරයි.

⌨️ Example: .github Thisan01💝

*🕊️ විධානය:* 💝.tk💝

*✖ විස්තරය:* 💝දී ඇති usrname යෙන් tiktok තොරතුරු රැස් කරයි.

⌨️ Example: .tk hiruwa66💝

*🕊️ විධානය:* 💝.ss💝

*✖ විස්තරය:* 💝දී ඇති linkයේ website screenshot ගනී.💝

*🕊️ විධානය:* 💝.mod💝

*✖ විස්තරය:* 💝Moddroid වෙබ් අඩවිය තුළ mod කළ apk සොයන්න.💝

*🕊️ විධානය:* 💝.spoti💝

*✖ විස්තරය:* 💝Spotify වෙතින් ගීතය සොයන්න.💝

*🕊️ විධානය:* 💝.animesay💝

*✖ විස්තරය:* 💝එය anime girl රඳවාගෙන සිටින banner තුළ text ලියයි💝

*🕊️ විධානය:* 💝.changesay💝

*✖ විස්තරය:* 💝Change my mind meme පෝස්ටරය වෙනස් කිරීම සඳහා text හරවයි.💝

*🕊️ විධානය:* 💝.trumpsay💝

*✖ විස්තරය:* 💝Trumpගේ tweet එකට text පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.lovepack💝

*✖ විස්තරය:* 💝Love pack Send lovely messages to gf/bf..💝

*🕊️ විධානය:* 💝.spotify💝

*✖ විස්තරය:* 💝ඔබට spotify ගීත links මඟින් download කරගත හැක.💝

*🕊️ විධානය:* 💝.sticker💝

*✖ විස්තරය:* 💝එය ඔබගේ mention දුන් ඡායාරූපය හෝ වීඩියෝව ස්ටිකර් බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.sticvid💝

*✖ විස්තරය:* 💝🕊️✖ සජීවිකරණ ස්ටිකර් වීඩියෝ බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.alive💝

*✖ විස්තරය:* 💝බොට් වැඩ කරන්නේ නැද්ද යන්න පරීක්ෂා කිරීමට?💝

*🕊️ විධානය:* 💝.version💝

*✖ විස්තරය:* 💝ඔබ දැනට install කර තිබෙන bot version එක පෙන්වීම.💝

*🕊️ විධානය:* 💝.tagadmin💝

*✖ විස්තරය:* 💝Admins ටැග් කිරීමට.💝

*🕊️ විධානය:* 💝.tblend💝

*✖ විස්තරය:* 💝Applies the selected TBlend effect to videos.💝

*🕊️ විධානය:* 💝.carbon💝

*✖ විස්තරය:* 💝ඔබ mention කරන text එක carbon.sh මඟින් carbon image කරයි.💝

*🕊️ විධානය:* 💝.agm💝

*✖ විස්තරය:* 💝it sends good morning text message💝

*🕊️ විධානය:* 💝.agn💝

*✖ විස්තරය:* 💝it sends good night text message💝

*🕊️ විධානය:* 💝.ttp💝

*✖ විස්තරය:* 💝Text සරල image බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.gm💝

*✖ විස්තරය:* 💝it sends good morning picture message💝

*🕊️ විධානය:* 💝.gn💝

*✖ විස්තරය:* 💝it sends good night picture message💝

*🕊️ විධානය:* 💝.attp💝

*✖ විස්තරය:* 💝දේදුන්න text ස්ටිකරයක් ලෙස එක් කරයි.💝

*🕊️ විධානය:* 💝.unaudio💝

*✖ විස්තරය:* 💝Converts sound recording to an audio File.💝

*🕊️ විධානය:* 💝.unvoice💝

*✖ විස්තරය:* 💝Mp3 files, voice message බවට පරිවර්තනය කරයි.💝

*🕊️ විධානය:* 💝.vid2💝

*✖ විස්තරය:* 💝Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .💝

*🕊️ විධානය:* 💝.weather💝

*✖ විස්තරය:* 💝කාලගුණය පෙන්වයි.💝

*🕊️ විධානය:* 💝.speedtest💝

*✖ විස්තරය:* 💝Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.💝

*🕊️ විධානය:* 💝.ping💝

*✖ විස්තරය:* 💝ඔබේ ping මැනීම.💝

*🕊️ විධානය:* 💝.short💝

*✖ විස්තරය:* 💝Links shorten කරන්න.💝


` })

    

    }));
 }
}
