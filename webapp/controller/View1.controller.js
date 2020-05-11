sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (Controller, Fragment) {
	"use strict";

	return Controller.extend("demo.dialogissue.controller.View1", {
		onInit: function () {

		},
		openDialog: function () {
			const fragmentDialogPromise = new Promise(function (resolve, reject) {
				if (!this._oDialog) {
					Fragment.load({
							name: "demo.dialogissue.view.fragments.TestDialog",
							controller: this
						})
						.then(function (fragment) {
							this._oDialog = fragment;
							this.getView().addDependent(fragment);
							resolve(fragment);
						}.bind(this));
				} else {
					resolve(this._oDialog);
				}
			}.bind(this));
			fragmentDialogPromise.then(function (dialog) {
				dialog.open();
			});
		}
	});
});