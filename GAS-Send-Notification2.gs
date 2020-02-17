function sendNotification2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = ss.getActiveCell().getA1Notation();
  var row = sheet.getActiveRange().getRow();
  var cellvalue = ss.getActiveCell().getValue();
  Logger.log(cellvalue);
  Logger.log(cell[0]);
  var cell_cap = cell[0] + cell[1];
  Logger.log(cell_cap);
  if(cell_cap =="AD" && cellvalue < 5){ 
    Logger.log("True");
    var recipients = "tickets@officialfanpackage.com";
    var message = '';
    message = sheet.getRange('AD'+ sheet.getActiveCell().getRowIndex()).getValue()
    var subject = 'Check the San Francisco Giants Caps on '+sheet.getName();
    var body = sheet.getName() + ' has been updated. Visit ' + ss.getUrl() + ' to view the changes on row: «' + row + '». New comment: «' + cellvalue.toString() + '». For message: «' + message + '»';
    MailApp.sendEmail(recipients, subject, body);
  }
};
