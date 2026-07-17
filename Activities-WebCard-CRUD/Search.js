function searchData(obj){
 var dataArray = SpreadsheetApp.getActive().getSheetByName('Data').getDataRange().getDisplayValues()
     dataArray.shift()
     var output = dataArray.filter(f=> f[1] == obj.input1)
     return output
 }

 let listname = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data')
                .getRange('B2:B').getValues().filter(d => d[0] !== "")
                .map(d => '<option>'+ d[0] +'</option>' ).join("");


