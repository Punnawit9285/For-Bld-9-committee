function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
                    .setTitle('ระบบลงเบียน เเชทบอทตอบปัญหาวิชาการ ตึก 9')
                    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function processForm(formData) {
  var sheet = SpreadsheetApp.openById('1ryTnflGaCwmW9O3nmv6DPt7BoCbL35wK2lrWKpQuEZw').getActiveSheet();
  var row = [
    new Date(),
    formData.name,
    formData.surname,
    formData.class,
    formData.studentId
  ];

  sheet.appendRow(row);
}
