module.exports.config = {
 name: "𝐑𝐢𝐟𝐚𝐭 𝐀𝐡𝐦𝐞𝐝",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "🦋𝐒𝐨𝐜𝐢𝐞𝐭𝐲 𝐎𝐟 𝐀𝐧𝐢𝐦𝐞 𝐋𝐨𝐯𝐞𝐫𝐬🎊🎭",
 description: "auto reply to salam",
 commandCategory: "noprefix",
 usages: "assalamu alaikum",
 cooldowns: 5,
 dependencies: {
 "request":"",
 "fs-extra":"",
 "axios":""
 }

};
module.exports.handleEvent = async ({ api, event, Threads,Users}) => {
var id = event.senderID;
 var name = await Users.getNameUser(event.senderID);
 if (event.body.indexOf("ULLASH")==0 || (event.body.indexOf("ullash bau")==0) || event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0 ||
event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0 ||
event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0 ||
event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0 ||
event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0 ||
event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0 ||
event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0 ||
event.body.indexOf("🅁🄸🄵🄰🅃 🄰🄷🄼🄴🄳")==0) {
 const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
 var link = [
"https://i.imgur.com/fGY8plC.mp4",
"https://i.imgur.com/fGY8plC.mp4",
 ];
 var callback = () => api.sendMessage({body:`╭•┄┅════❁🌺❁════┅┄•╮\n প্রিয় মানুষ ডুবে থাকুক,,,\nহৃদওপিন্ডের বিশাল গভিরতায়,,!🌸 \n╰•┄┅════❁🌺❁════┅┄•╯\n\n ${name} রিফাত এর ইনবক্স :- m.me/100086680386976 \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`,attachment: fs.createReadStream(__dirname + "/cache/emon.jpeg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/emon.jpeg"), event.messageID);
 const timeStart = Date.now();
 const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
 var la = Math.floor((dcm % (60 * 60)) / 60);
 var vt = Math.floor(dcm % 60);
 const PREFIX = config.PREFIX;
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ULLASH.mp4")).on("close",() => callback());
}

 module.exports.languages = {
 "vi": {
 "on": "Use it the wrong way and then complain",
 "off": "Stupid student, used it the wrong way",
 "successText": `🧠`,
 },
 "en": {
 "on": "on",
 "off": "off",
 "successText": "success!",
 }
 }
 module.exports.run = async ({ event, api, Threads, getText }) => {
 let { threadID, messageID } = event;
 let data = (await Threads.getData(threadID)).data;
 if (typeof data["salam"] == "undefined" || data["salam"] == true) data["salam"] = false;
 else data["salam"] = true;
 await Threads.setData(threadID, {
 data
 });
 global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["salam"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
} 





 }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

 };