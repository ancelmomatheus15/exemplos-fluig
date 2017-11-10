function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	//colunas
	dataset.addColumn("sigla");
	dataset.addColumn("estado");
	dataset.addColumn("capital");
	
	//cria registros
	dataset.addRow(new Array("AM", "Amazonas", "Manaus"));
	dataset.addRow(new Array("SP", "São Paulo", "São Paulo"));
	dataset.addRow(new Array("RJ", "Rio de Janeiro", "Rio de Janeiro"));
	dataset.addRow(new Array("RS", "Rio Grande do Sul", "Porto Alegre"));
	dataset.addRow(new Array("PA", "Pará", "Belém"));
	dataset.addRow(new Array("BA", "Bahia", "Salvador"));
	
	return dataset;

}function onMobileSync(user) {

}