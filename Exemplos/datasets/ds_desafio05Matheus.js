function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("Código");
	dataset.addColumn("Nome");
	dataset.addColumn("Cidade");
	
	var c1 = DatasetFactory.createConstraint("NOME", "Maria", "Maria", ConstraintType.SHOULD);		
	var c2 = DatasetFactory.createConstraint("NOME", "João", "João", ConstraintType.SHOULD);
		
	var constraints = new Array(c1, c2);
		
	var dsUsuarios = DatasetFactory.getDataset("ds_desafio05", null, constraints, null);
		
	for(var i=0; i<dsUsuarios.rowsCount; i++){
			dataset.addRow(new Array(dsUsuarios.getValue(i,"NOME"), dsUsuarios.getValue(i,"CIDADE"), dsUsuarios.getValue(i,"CODIGO")));
	}
		
	return dataset;		

}function onMobileSync(user) {

}