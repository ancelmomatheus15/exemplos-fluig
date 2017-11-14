function validateForm(form){
	
	if (form.getValue('NOMECLIENTE') == null){
		     throw "O campo 'Nome' precisa ser preenchido";
		   } 
	
	if (form.getValue('CONTATO') == null){
	     throw "O campo 'Telefone' precisa ser preenchido";
	   }
	
	if (form.getValue('MODELO') == null){
	     throw "O campo 'Modelo' precisa ser preenchido";
	   } 
	
	if (form.getValue('ANO') == null){
	     throw "O campo 'Ano' precisa ser preenchido";
	   } 
}