function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("Nome");
	dataset.addColumn("Sobrenome");
	
	
	var c1 = DatasetFactory.createConstraint("adminUser", false, false, ConstraintType.MUST_NOT);
		
		var constraints = new Array(c1);
		
		var dsUsuarios = DatasetFactory.getDataset("colleague", null, constraints, null);
		
		for(var i=0; i<dsUsuarios.rowsCount; i++){
			dataset.addRow(new Array(dsUsuarios.getValue(i,"colleagueName"), dsUsuarios.getValue(i,"mail")));
		}
		
		return dataset;		
		

}function onMobileSync(user) {

}