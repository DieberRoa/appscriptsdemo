// Funciones para Convertir a PDF
// Archivos destino:
// dev: https://docs.google.com/spreadsheets/d/1Gq_Il7QlvTboY2QyZYcqjJfUUEA5tlpfuhl5Ya_HzXQ/edit#gid=0
// qa : https://docs.google.com/spreadsheets/d/1Gq_Il7QlvTboY2QyZYcqjJfUUEA5tlpfuhl5Ya_HzXQ/edit#gid=0


// Convierte un Google Sheet a PDF
function convertToPDF() {
  var doc = SpreadsheetApp.getActive();
  Logger.log(doc);
  var docblob = doc.getAs('application/pdf');
  docblob.setName(doc.getName() + ".pdf");
  var file = DriveApp.createFile(docblob);
  var id = DriveApp.getFileById(doc.getId()) //getFile
  .getParents() //getParentFolders
  .next() //getFirstParentFolder
  .getId();
  moveTo(id)
}

// Mover el archivo a un Id de carpeta en Drive
function moveTo(id) {
  file.moveTo(DriveApp.getFolderById(id));
}


// Ejecutar
function doIt(){
    convertToPDF();
}