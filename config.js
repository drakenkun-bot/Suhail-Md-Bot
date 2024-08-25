const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://King-MdIsbot:King-MdIsbot@cluster0.hikjrg2.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || "mongodb+srv://King-MdIsbot:King-MdIsbot@cluster0.hikjrg2.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347065628222";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_51_08_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyR1JiSXZ5anEyRjVtNmc3b2Y0Q2V1ZjZ6endQaVh6b1hyRk1ZTnZXbnE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQMzNSYjdQdlRXLUx6V0k0LXBHSURnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVlYjdjODM0LTc1YWItNDRiMS1iMWRlLWIwZmVhMmI2OTgxYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDE4LFxuICAgICAgMTAxLFxuICAgICAgNjEsXG4gICAgICAyMDksXG4gICAgICAxMTQsXG4gICAgICAxOTYsXG4gICAgICA0MixcbiAgICAgIDE5MSxcbiAgICAgIDIzNyxcbiAgICAgIDMsXG4gICAgICAyNTUsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAxOTIsXG4gICAgICAyNTIsXG4gICAgICAyMTYsXG4gICAgICA1MixcbiAgICAgIDI0MCxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICA5MCxcbiAgICAgIDE5MCxcbiAgICAgIDI0OSxcbiAgICAgIDE3NCxcbiAgICAgIDEwMCxcbiAgICAgIDEyOCxcbiAgICAgIDE3NSxcbiAgICAgIDE2OCxcbiAgICAgIDc2LFxuICAgICAgMTY3LFxuICAgICAgMjMsXG4gICAgICAxNTgsXG4gICAgICAxMTksXG4gICAgICA4NixcbiAgICAgIDE3NyxcbiAgICAgIDE0NSxcbiAgICAgIDE0MCxcbiAgICAgIDEwNCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJTQkIzOU1EXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY1NjI4MjIyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQQUlOXCIsXG4gICAgXCJsaWRcIjogXCI4MjgyMDQwODA1Nzg4Njo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0oveGplRUhFTEd5cnJZR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWVRLTFFPR0Z3OW4yQUkvVmpQdW1idE5hdmtUMnd1dTltZVVhSS9ydFIwUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMbkRWNXhtOE9YL3BHUzlIb2U5V2dUTG9GU2dvZFBTV2wxcytHZGFvRzVnNlpxb1A2OUYwNVZ6ZUhZbFVhMHpQeWQvcUxUZjBMNS9GNlc4dllmNHVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyc1ZmeVZ6ZllnTHBhN3BXQmY5QWZreUEveVo2STdTK2JydE55SFBDbHRaOFpZMFlteEtJRjM3cVBpU3BiNWIzaTUrTUFDRFFzM3g2SURnOEtWS29EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY1NjI4MjIyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0NjE5MDYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMQXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvZU9IVEdrQkFtNldsMmN6ZVBaMlFXWnE0Q0NGTHpSZis2YmVMU0RvbG1FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODI2OTk0MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
