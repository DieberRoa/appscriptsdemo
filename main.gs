// Funciones para Convertir a PDF



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