module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "🦋𝐒𝐨𝐜𝐢𝐞𝐭𝐲 𝐎𝐟 𝐀𝐧𝐢𝐦𝐞 𝐋𝐨𝐯𝐞𝐫𝐬🎊🎭",
    description: "",
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}