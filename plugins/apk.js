/* Copyright (C) 2021 SL-ASIATA.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

SL-ASIATA THISAN 

▛▀▀▜    ▛▀▀▀   ▀▀▉▀▀   ▛▀▀▀▜   ▀▀▉▀▀     ▛▀▀▀▜
▋▰▰▋  ▀▀▀▜        ▉        ▋▰▰ ▋       ▉          ▋▰▰  ▋    
▋        ▋ ▀▀▀▀    ▰▰▰    ▋         ▋       ▊          ▋          ▋

ගැම්ම තමා කෝඩ් කොපි කරාට සම කරන්න බෑ  *┋✖☛🧚‍♂️ASIATA BOT🧚‍♂️☚✖┋*
*/

const Asiata = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('weather');


if (Config.WORKTYPE == 'private') {

   Asiata.addcommand({pattern: 'apkmod', fromMe: true, desc: "gives  mod apks "}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 🐼 *APK COMMANDS* 🐼 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷💝 Nova Launcher:\n     *.nova*\n\n┠⊷💝 CM Launcher:\n     *.cml*\n\n┠⊷💝 Apex Launcher:\n     *.apex*\n\n\n┠⊷💝 Kinemaster:\n     *.kinemaster*\n\n┠⊷💝 PicsArt Gold:\n     *.picsart*\n\n┠⊷💝 Canva Pro:\n     *.canva*\n\n┠⊷💝 Ligthrom:\n     *.lightroom*\n\n┠⊷💝 Photoshop Express:\n     *.pshop*\n\n┠⊷💝 Snapseed:\n     *.snaps*\n\n┠⊷💝 Retouch:\n     *.retouch*\n\n\n┠⊷💝 Vanced Manager:\n     *.vanced*\n\n┠⊷💝 Crunchyroll:\n     *.crunchy*\n\n┠⊷💝 Freezer Mod:\n     *.freez*\n\n┠⊷💝 Deezer Premium:\n     *.deezer*\n\n┠⊷💝 RadioBox:\n     *.rbox*\n\n┠⊷💝 Mx Player Pro:\n     *.mxpro*\n\n┠⊷💝 Power AMP:\n     *.amp*\n\n┠⊷💝 JetAudio:\n     *.jetau*\n\n\n┠⊷💝 ExpressVpn:\n     *.xpress*\n\n┠⊷💝 Hospot Shield:\n     *.hshield*\n\n┠⊷💝 TurboVpn:\n     *.Turbo*\n\n┠⊷💝 File Manager:\n     *.flmanager*\n\n┠⊷💝 CallRecorder:\n     *.callr*\n\n┠⊷💝 FingScanner:\n     *.fing*\n\n┠⊷💝 Shazam Encore:\n     *.shazam*\n\n┠⊷💝 QR Scanner Pro:\n     *.qrcode*\n\n┠⊷💝 Screen Recorder:\n     *.srecorder*\n\n┠⊷💝 TikTok Mod:\n     *.tiktok*\n\n┠⊷💝 Photomath:\n     *.pmath*\n\n┠⊷💝 WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *┋✖☛🧚‍♂️ASIATA BOT🧚‍♂️☚✖┋*\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   Asiata.addcommand({pattern: 'nova', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *NOVA LAUNCHER* 🇱🇰\npremium unlocked .\n🕊️ bit.ly/drknova');
   }));

   Asiata.addcommand({pattern: 'cml', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CM LAUNCHER* 🇱🇰\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   Asiata.addcommand({pattern: 'apex', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *APEX LAUNCHER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkapex');
   }));

   Asiata.addcommand({pattern: 'kinemaster', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *KINEMASTER MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456');
   }));

   Asiata.addcommand({pattern: 'inshot', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *INSHOT MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   Asiata.addcommand({pattern: 'alight', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *ALIGHT MOTION MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass: 3456');
   }));

   Asiata.addcommand({pattern: 'capcut', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CAP CUT MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   Asiata.addcommand({pattern: 'picsart', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *PICSART GOLD* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkpicsart');
   }));

   Asiata.addcommand({pattern: 'canva', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CANVA PRO* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/canvapro');
   }));

   Asiata.addcommand({pattern: 'lightr', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *LIGTHROM* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drklightr');
   }));

   Asiata.addcommand({pattern: 'pshop', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *PHOTOSHOP EXPRESS* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkphotoshop');
   }));

   Asiata.addcommand({pattern: 'snaps', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *SNAPSEED* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drksnaps');
   }));

   Asiata.addcommand({pattern: 'retouch', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *RETOUCH* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkretouch');
   }));

   Asiata.addcommand({pattern: 'vanced', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *VANCED MANAGER* 🇱🇰\nyoutube vanced.\n🕊️ bit.ly/drkytubev');
   }));

   Asiata.addcommand({pattern: 'freez', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *FREEZER MOD* 🇱🇰\nPremium Unlocked.\n🕊️ bit.ly/drkfreezer');
   }));

   Asiata.addcommand({pattern: 'deezer', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *DEEZER MOD* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkdeezer');
   }));

   Asiata.addcommand({pattern: 'rbox', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *RADIO BOX* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkradiobox');
   }));

   Asiata.addcommand({pattern: 'mxpro', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *MX PLAYER PRO* 🇱🇰\npremium unlocked.\n⚠️ Versión Premium.\n🕊️ bit.ly/drkmxplayer');
   }));

   Asiata.addcommand({pattern: 'amp', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *POWERAMP* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkampplayer');
   }));

   Asiata.addcommand({pattern: 'jetau', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *JetAudio* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkjetau');
   }));

   Asiata.addcommand({pattern: 'xpress', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *EXPRESS VPN* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkXpress');
   }));

   Asiata.addcommand({pattern: 'hshield', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *HOSPOT SHIELD VPN* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkHShield');
   }));

   Asiata.addcommand({pattern: 'avguard', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *TURBO VPN* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkguard');
   }));

   Asiata.addcommand({pattern: 'flmanager', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *FILE MANAGER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkesfile');
   }));

   Asiata.addcommand({pattern: 'callr', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CALL RECORDER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkcallr');
   }));

   Asiata.addcommand({pattern: 'fing', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *FING SCANNER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkfing');
   }));

   Asiata.addcommand({pattern: 'shazam', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *SHAZAM ENCORE* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkshaz');
   }));

   Asiata.addcommand({pattern: 'qrcode', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *QR CODE SCANER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkqrscanner');
   }));

   Asiata.addcommand({pattern: 'srecorder', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *SCREEN RECORDER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkgrabr');
   }));

   Asiata.addcommand({pattern: 'tiktok', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *TIKTOK MOD* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drktiktok');
   }));

   Asiata.addcommand({pattern: 'pmath', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *PHOTOMATH* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkphotomath');
   }));

   Asiata.addcommand({pattern: 'waplus', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *WHATSAPP PLUS* 🇱🇰\nwhattsapp mod.\n🕊️ bit.ly/drkWaPlus');
   }));
}

else if (Config.WORKTYPE == 'public') {

   Asiata.addcommand({pattern: 'apkmod', fromMe: false, desc: "gives  mod apks "}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 🐼 *APK COMANDOS* 🐼 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷💝 Nova Launcher:\n     *.nova*\n\n┠⊷💝 CM Launcher:\n     *.cml*\n\n┠⊷💝 Apex Launcher:\n     *.apex*\n\n\n┠⊷💝 Kinemaster:\n     *.kinemaster*\n\n┠⊷💝 PicsArt Gold:\n     *.picsart*\n\n┠⊷💝 Canva Pro:\n     *.canva*\n\n┠⊷💝 Ligthrom:\n     *.lightroom*\n\n┠⊷💝 Photoshop Express:\n     *.pshop*\n\n┠⊷💝 Snapseed:\n     *.snaps*\n\n┠⊷💝 Retouch:\n     *.retouch*\n\n\n┠⊷💝 Vanced Manager:\n     *.vanced*\n\n┠⊷💝 Crunchyroll:\n     *.crunchy*\n\n┠⊷💝 Freezer Mod:\n     *.freez*\n\n┠⊷💝 Deezer Premium:\n     *.deezer*\n\n┠⊷💝 RadioBox:\n     *.rbox*\n\n┠⊷💝 Mx Player Pro:\n     *.mxpro*\n\n┠⊷💝 Power AMP:\n     *.amp*\n\n┠⊷💝 JetAudio:\n     *.jetau*\n\n\n┠⊷💝 ExpressVpn:\n     *.xpress*\n\n┠⊷💝 Hospot Shield:\n     *.hshield*\n\n┠⊷💝 TurboVpn:\n     *.Turbo*\n\n┠⊷💝 File Manager:\n     *.flmanager*\n\n┠⊷💝 CallRecorder:\n     *.callr*\n\n┠⊷💝 FingScanner:\n     *.fing*\n\n┠⊷💝 Shazam Encore:\n     *.shazam*\n\n┠⊷💝 QR Scanner Pro:\n     *.qrcode*\n\n┠⊷💝 Screen Recorder:\n     *.srecorder*\n\n┠⊷💝 TikTok Mod:\n     *.tiktok*\n\n┠⊷💝 Photomath:\n     *.pmath*\n\n┠⊷💝 WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *┋✖☛🧚‍♂️ASIATA BOT🧚‍♂️☚✖┋*\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));
    

   Asiata.addcommand({pattern: 'nova', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *NOVA LAUNCHER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drknova');
   }));

   Asiata.addcommand({pattern: 'cml', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CM LAUNCHER* 🇱🇰\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   Asiata.addcommand({pattern: 'apex', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *APEX LAUNCHER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkapex');
   }));

   Asiata.addcommand({pattern: 'kinemaster', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *KINEMASTER MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\npass: 3456');
   }));

Asiata.addcommand({pattern: 'inshot', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *INSHOT MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

Asiata.addcommand({pattern: 'alight', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *ALIGHT MOTION MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass 3456');
   }));

Asiata.addcommand({pattern: 'capcut', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CAP CUT MOD* 🇱🇰\npremium unlocked.\n👉https://bit.ly/3pSSlFu\npass 3456');
   }));
   Asiata.addcommand({pattern: 'picsart', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *PICSART GOLD* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkpicsart');
   }));

   Asiata.addcommand({pattern: 'canva', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CANVA PRO* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/canvapro');
   }));

   Asiata.addcommand({pattern: 'lightr', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *LIGTHROM* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drklightr');
   }));

   Asiata.addcommand({pattern: 'pshop', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *PHOTOSHOP EXPRESS* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkphotoshop');
   }));

   Asiata.addcommand({pattern: 'snaps', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *SNAPSEED* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drksnaps');
   }));

   Asiata.addcommand({pattern: 'retouch', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *RETOUCH* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkretouch');
   }));

   Asiata.addcommand({pattern: 'vanced', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *VANCED MANAGER* 🇱🇰\nYouTube Premium  YouTube Music.\n🕊️ bit.ly/drkytubev');
   }));

   Asiata.addcommand({pattern: 'crunchy', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('💦 *CRUNCHYROLL(vrv)* 💦\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   Asiata.addcommand({pattern: 'freez', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *FREEZER MOD* 🇱🇰\npremium unlocked - spotify\n🕊️ bit.ly/drkfreezer');
   }));

   Asiata.addcommand({pattern: 'deezer', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *DEEZER MOD* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkdeezer');
   }));

   Asiata.addcommand({pattern: 'rbox', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *RADIO BOX* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkradiobox');
   }));

   Asiata.addcommand({pattern: 'mxpro', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *MX PLAYER PRO* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkmxplayer');
   }));

   Asiata.addcommand({pattern: 'amp', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *POWERAMP* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkampplayer');
   }));


   Asiata.addcommand({pattern: 'xpress', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *EXPRESS VPN* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkXpress');
   }));

   Asiata.addcommand({pattern: 'hshield', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *HOSPOT SHIELD VPN* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkHShield');
   }));

   Asiata.addcommand({pattern: 'avguard', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *TURBO VPN* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkguard');
   }));

   Asiata.addcommand({pattern: 'flmanager', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *FILE MANAGER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkesfile');
   }));

   Asiata.addcommand({pattern: 'callr', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *CALL RECORDER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkcallr');
   }));

   Asiata.addcommand({pattern: 'fing', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *FING SCANNER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkfing');
   }));

   Asiata.addcommand({pattern: 'shazam', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *SHAZAM ENCORE* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkshaz');
   }));

   Asiata.addcommand({pattern: 'qrcode', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *QR CODE SCANER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkqrscanner');
   }));

   Asiata.addcommand({pattern: 'screen recorder', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *SCREEN RECORDER* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkgrabr');
   }));

   Asiata.addcommand({pattern: 'tiktok', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *TIKTOK MOD* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drktiktok');
   }));

   Asiata.addcommand({pattern: 'pmath', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *PHOTOMATH* 🇱🇰\npremium unlocked.\n🕊️ bit.ly/drkphotomath');
   }));

   Asiata.addcommand({pattern: 'waplus', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('🇱🇰 *WHATSAPP PLUS* 🇱🇰\nmhatsapp mod.\n🕊️ bit.ly/drkWaPlus');
   }));
}
