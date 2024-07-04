const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/acc9fb159ba06aee6ab7d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "22395064497" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "22395064497";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22395064497";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/acc9fb159ba06aee6ab7d.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_55_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBuTlliOFRpWnJNVHRIZzVaVjJ0d1pnZENWRkdHVEJkYmM2UW53UUU4VlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI1NDc4Njk3NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBODY3NjU1QThDMjE2RUU1MDk0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDAwMDUxMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXLURudEtpYVNVNkw4NHp2ZWttMnFnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM3MTRiYTVhLWQwY2EtNDkwZi04YTQ4LWY2ZDA4OTFkN2YyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDUsXG4gICAgICA4MCxcbiAgICAgIDEwNixcbiAgICAgIDE3MCxcbiAgICAgIDEyOSxcbiAgICAgIDEwLFxuICAgICAgMTU4LFxuICAgICAgMjA3LFxuICAgICAgMTU0LFxuICAgICAgOTYsXG4gICAgICA2MixcbiAgICAgIDIzNyxcbiAgICAgIDE1LFxuICAgICAgMixcbiAgICAgIDE1NyxcbiAgICAgIDEwMCxcbiAgICAgIDcwLFxuICAgICAgMjQ5LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDEzMSxcbiAgICAgIDE2NixcbiAgICAgIDEyNixcbiAgICAgIDUwLFxuICAgICAgMTkyLFxuICAgICAgMTQxLFxuICAgICAgMzksXG4gICAgICAyNDgsXG4gICAgICA3NSxcbiAgICAgIDE0MixcbiAgICAgIDE1OSxcbiAgICAgIDE5NixcbiAgICAgIDE1OSxcbiAgICAgIDE5OCxcbiAgICAgIDgzLFxuICAgICAgMTcwLFxuICAgICAgNjQsXG4gICAgICAyMzksXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEpQWVhLUlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTQ3ODY5NzcxOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZnfCdmZ7wnZmgLfCdmaDwnZmeXCIsXG4gICAgXCJsaWRcIjogXCI5NTkxNTcxMzAxMTkyMjozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUGY3YVlMRVBhL2xMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhpVDk0RDdNN0IyekVMWDUzYVdBL2g2TFE5ZVBqY21tQllYNksrR01LVkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiazZrWTFZYmVvbHovU3djQzVOZFltR1BTZ3g1d1IxWko2blg3VGhlejBkWWlYZzJ2dTJVL2ZYYi9JRmdydlhTbmtSUHp2VmFGeTF3cnRmZm1FWmFDQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDZCTGdRYXY2UjJlNlBrOVFEMFJaMU42YWNuV0hDamdMaC8zMTFDR2w2RkJ2U3U4S1Z5YXZvVHNzQ2hteFk1WTNoUnZDajArQVJSeEErNU5BV3RsaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NDc4Njk3NzE6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDAwNTA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREsrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFESysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIY1VuQnhKbHA5SGpFWXJJUHJTTHFIMHNacVJNdDRwbnBaTHdjQ3EreWs0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwMzQyNzk5MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDAwMDUwODE1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "❥𝑏𝑤𝑎𝑏𝑦𝑚𝑜𝑢𝑑𝑦" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "❥𝑏𝑤𝑎𝑏𝑦𝑚𝑜𝑢𝑑𝑦",
  packname: process.env.PACK_NAME || "❥𝑏𝑤𝑎𝑏𝑦𝑚𝑜𝑢𝑑𝑦",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "❥𝑏𝑤𝑎𝑏𝑦𝑚𝑜𝑢𝑑𝑦",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
