function dailyCaps(startRow,startColumn,numColumns, team, columnName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Accounting");
  var lastRow = parseInt(sheet.getLastRow());
  var values = sheet.getSheetValues(startRow, startColumn, lastRow, numColumns);
  var keyNotifier = sheet.getSheetValues(startRow,(startColumn+1),lastRow,numColumns);
  Logger.log(values);
  var lowCaps = [];
  var rowCaps = [];

  for(i in values) {
    var clmnVal = startRow+parseInt(i);
    Logger.log("clmnVal: " + clmnVal);
    Logger.log("row value: " + values[i]);
    Logger.log('keyNotifier: ' + keyNotifier[i]);
    var cell = sheet.getRange(String(columnName + clmnVal));
    if(values[i] < 5 && cell.isBlank() == false){
      if(keyNotifier[i] != 'N'){
        lowCaps.push(values[i]);
        Logger.log(clmnVal);
        rowCaps.push(clmnVal);
        cell.setBackgroundRGB(255, 0, 0);
      }
      else{
        cell.setBackgroundRGB(255,255,255);
      }
    }
    Logger.log("lowCaps: " + lowCaps);
    Logger.log("RowCaps: " + rowCaps);
  }

  if(lowCaps.length > 0){
    var recipients = "tickets@officialfanpackage.com";
    var message = '';
    var subject = 'Check the ' + team + ' Caps on '+sheet.getName();
    var body = sheet.getName() + ' has been updated. Visit ' + ss.getUrl() + ' to check the caps on row(s): «' + rowCaps + '». For column: «' + columnName + '». If you do not want to be notified of a row, mark N in the column to the right';
    MailApp.sendEmail(recipients, subject, body);
  
  }

};
