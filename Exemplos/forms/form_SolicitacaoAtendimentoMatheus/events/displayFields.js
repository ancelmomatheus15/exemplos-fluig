function displayFields(form,customHTML){ 
	form.setValue("colleagueName",getValue("WKUser"));
	form.setEnabled("colleagueName",false);
	
	customHTML.append("<script>$('#divcustom').hide();</script>");
	
}