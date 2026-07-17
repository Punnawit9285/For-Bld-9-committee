function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
                    .setTitle('Button Links')
                    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
