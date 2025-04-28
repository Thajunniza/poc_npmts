/*global QUnit*/
import Controller from "com/thaj/pocnpmts/controller/pdf.controller";

QUnit.module("pdf Controller");

QUnit.test("I should test the pdf controller", function (assert: Assert) {
	const oAppController = new Controller("pdf");
	oAppController.onInit();
	assert.ok(oAppController);
});