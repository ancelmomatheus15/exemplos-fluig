function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	//colunas
	dataset.addColumn("RESPONSAVEL");
	dataset.addColumn("COTACAO");
	dataset.addColumn("ESTADO");
	
	return dataset;
	
	

}function onMobileSync(user) {

}