module.exports = function (robot) {
    robot.hear(/hola/i, (res) =>  {
      respuesta = "_==========================";
      respuesta += "_Hola, soy homelab-chatops y me estoy ejecutando dentro del ENTORNO: "+process.env.BOT_ENV;
      respuesta += "_estoy utilizando el adaptador: "+process.env.BOT_ADAPTER;
      respuesta += "_==========================_"
      respuesta += "_OPCIONES DISPONIBLES:";
      respuesta += "_hola : Muestra este saludo.";
      enviarMsg(respuesta,res);
    })

    function enviarMsg(msg,channel){
        var EOL;
        switch(process.env.BOT_ADAPTER){
            case "discord":
                EOL="EOL DISCORD"
            break;            
            default:
                EOL="\n\r"
            break;
        }
        msg_parsed = msg.replace(/_/g, EOL);

      if (process.env.BOT_ADAPTER=="shell"){
        channel.send(msg_parsed); 
      }else{
          //FEATURE FUTURO, AGREGAR VALIDACION
          channel.send(msg_parsed);
      }                
    }
}