function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	//colunas
	dataset.addColumn("marca");
	dataset.addColumn("pais");
	
	//cria registros
	dataset.addRow(new Array("Volkswagen", "Alemanha"));
	dataset.addRow(new Array("Ford", "Estados Unidos"));
	dataset.addRow(new Array("FIAT", "Italia"));
	dataset.addRow(new Array("Peugeot", "França"));
	dataset.addRow(new Array("Honda", "Japão"));
	dataset.addRow(new Array("KIA", "Coréia do Sul"));
	
	return dataset;

}function onMobileSync(user) {

}