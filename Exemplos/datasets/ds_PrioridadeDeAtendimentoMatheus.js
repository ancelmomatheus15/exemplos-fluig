function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	//colunas
	dataset.addColumn("CODPRIORIDADE");
	dataset.addColumn("PRIORIDADE");
	
	//cria registros
	dataset.addRow(new Array("3", "ALTA"));
	dataset.addRow(new Array("2", "MÉDIA"));
	dataset.addRow(new Array("1", "BAIXA"));
	
	return dataset;


}function onMobileSync(user) {

}