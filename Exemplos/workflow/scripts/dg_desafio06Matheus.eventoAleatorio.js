//afterReleaseProcessVersion

//Evento disparado após a criação ou modificação nas 
//configurações de um determinado processo

function eventoAleatorio(processXML){
	
	    var pdv = getValue("ProcessDefinitionVersionDto");
	    var processInfo = "\n### Nova versão de processo liberada: ###";
	    processInfo += "\n User: " + getValue("WKUser");  
	    processInfo += "\n processDescription: " + pdv.getProcessDescription();
	    processInfo += "\n processId: " + pdv.getProcessId();
	    processInfo += "\n version: " + pdv.getVersion();
	    log.info(processInfo + "\n");
	}
	
