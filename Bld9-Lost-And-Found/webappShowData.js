
// Editable
let sheetName = 'LF';
let index_col = {'Timestamp':0,'รายละเอียดของที่พบ ( เช่น ลักษณะภายนอก / สถานที่พบหรือฝากไว้ ฯลฯ )':1,'Contact ของผู้พบ ( เช่น IG / Line / เบอร์โทร )':2,'รูปภาพ (ถ้ามี)':3, 'ดาวน์โหลด': 4};
let order_select_col = [index_col['รายละเอียดของที่พบ ( เช่น ลักษณะภายนอก / สถานที่พบหรือฝากไว้ ฯลฯ )'],index_col['Contact ของผู้พบ ( เช่น IG / Line / เบอร์โทร )'],index_col['รูปภาพ (ถ้ามี)'],index_col['ดาวน์โหลด']];
let isFirstNumCol = true; // true or false

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(sheetName);
  let range = sheet.getDataRange();
  let values = range.getValues();
  let format_values = formatData(values);
  format_values = JSON.stringify(format_values);
  return format_values;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function formatData(_data) {
  let data = _data;
  data.shift();
  for (let i = 0; i < data.length; i++) {
    let cur_data = data[i];
    let new_data = [];
    if (isFirstNumCol) {
      new_data.push(i+1);
    }
    for (let j = 0; j < order_select_col.length; j++) {
      new_data.push(cur_data[order_select_col[j]]);
    }
    data[i] = new_data;
  }
  return data;
}