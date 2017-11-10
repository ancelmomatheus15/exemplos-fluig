function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dsAdmin = DatasetBuilder.newDataset();
	
	dsAdmin.addColumn("Nome Usuário");
	dsAdmin.addColumn("e-mail Usuário");
	dsAdmin.addColumn("Login");
	
	var c1 = DatasetFactory.createConstraint("login", "%user.sobrenome%", "%user.sobrenome%", ConstraintType.MUST);
		c1.setLikeSearch(true);
		
	var constraints = new Array(c1);
	
	var dsUsuarios = DatasetFactory.getDataset("colleague", null, constraints, null);
	
	for(var i=0; i<dsUsuarios.rowsCount; i++){
		dsAdmin.addRow(new Array(dsUsuarios.getValue(i,"colleagueName"), dsUsuarios.getValue(i,"mail"), dsUsuarios.getValue(i,"login")));
	}
	
	return dsAdmin;

}function onMobileSync(user) {

}