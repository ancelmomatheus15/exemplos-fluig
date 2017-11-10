function validateForm(form){
	
	if(form.getValue("colleagueName")==""){
		throw("Informe o Código");
	}
	
	if(form.getValue("NOMEAREA")==""){
		throw("Informe a área");
	}
	
	if(form.getValue("DESCAREA")==""){
		throw("Informe a área");
	}
}