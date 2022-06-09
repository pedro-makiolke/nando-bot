module.exports = (player) => {

    player.on('trackAdd', (fila, musica) => {
        fila.metadata.send(`🎶 | AOOOOOOO DISGRAÇA ${musica.title} | ENTRO NESSA MERDA DE FILA`)
    })

    player.on('trackStart', (fila, musica) => {
        fila.metadata.send(`▶ | ${musica.title} | COMEÇO TOCA NESSA MERDA`)
    })

    player.on('botDisconnect', fila => {
        fila.metadata.send("🤬 | QUEM FOI O CORNO?")
    })

    player.on('channelEmpty', queue => {
        queue.metadata.send("😎 | NÃO SOBRO UM CORNO KKKKKKKKKK");
      })
      
    player.on('queueEnd', queue => {
      queue.metadata.send("🐣 | ACABO ESSA MERDA");
    })
}