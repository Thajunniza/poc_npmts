import Controller from "sap/ui/core/mvc/Controller";

import * as jspdf from "jspdf";

/**
 * @namespace com.thaj.pocnpmts.controller
 */
export default class pdf extends Controller {
  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {}

  public onPdf(): void {
    const doc = new jspdf.jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  }
}
