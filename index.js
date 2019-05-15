const Discord = require("discord.js");
const client = new Discord.Client();
client.login("NTc4MjMwMTc3NjMzNjY1MDM3.XNwlRg.8vb1KmpDUMba1uC-WRvGBL5Db6M");
client.on('message', (message) =>{
    if(message.content == "Тест")
    {
        message.channel.send("```Вы нашли секретное сообщение!```");
    }
})
client.on('message', (message) =>{
    if(message.content == "@everyone")
    {
        message.channel.send("Дароува");
    }
})
client.on('message', (message) =>{
    if(message.content == "&")
    {
        message.channel.send("```Это мой префикс.```");
    }
})
client.on('message', (message) =>{
    if(message.content == "&help")
    {
        message.channel.send("```Данный бот в Альфа тесте.```");
    }
})
client.on('message', (message) =>{
    if(message.content == "&credits")
    {
        message.channel.send("```Comrade-создатель и владелец бота. LKfage_In3-публикатор бота и его создатель. Только для использования на Kirov Role Play Russia!```");
    }
})