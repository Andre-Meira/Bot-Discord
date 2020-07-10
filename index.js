const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on("ready",()=>{
    const idServes = Client.guilds.cache.map(procuraId => procuraId.id)
    const nomesSevers = Client.guilds.cache.map(procuraName => procuraName.name)
    const membrosServidor = Client.guilds.cache.map(procuraMember => procuraMember.memberCount)
    
    const tabelaServidores = {"Servidores":nomesSevers, "ID":idServes, "Membros": membrosServidor}

    console.log(`LOGADO COM:${Client.user.tag}`);
    console.log(tabelaServidores)
    Client.generateInvite("ADMINISTRATOR").then(link => console.log(`Convite Bot:${link}`))
})

Client.on("message",(msg) =>{
    if(!msg.author.bot){        
        
        console.log(`Servidor:"${msg.guild.name}": Usuario:"${msg.author.username}": Diz:"${msg.content}"`)
        
       if(msg.content.startsWith("-BOTeu")){
            const user = msg.author
            const permissoes = msg.guild.member(user).permissions.toArray()
            const cargo = msg.guild.member(user).roles.cache.map(nmCargo => nmCargo.name)

            msg.reply(`(Seu Cargo:${cargo}) (Suas Permissões:${permissoes})`)
        } 
        
        if(msg.content.startsWith("-BOTkick")){
            const userMencionado = msg.mentions.users.first() 
            
            if(userMencionado){
                const userKicado = msg.guild.member(mencionaKick)

                if(userKicado){
                    userKicado.kick('').then(msg.reply(`${userKicado} Foi Expuso!`))
                }
                else{
                    console.log(`Usuario não pertece ao ${msg.guild.name}`)
                }
            }
            else{
                msg.reply("Faltou Menciona a pessoa a ser Expusa")
            }

        }

    }
})


Client.login("BOT - Token")