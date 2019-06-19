"use strict";

/*
 * Copyright (C) MIKO LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nikolay Beketov, 5 2018
 *
 */

/* global globalRootUrl,globalTranslate, Form, PbxApi */
var mailSettings = {
	$formObj: $('#mail-settings-form'),
	validateRules: {
		name: {
			identifier: 'name',
			rules: [{
				type: 'empty',
				prompt: globalTranslate.cq_ValidateNameEmpty
			}]
		}
	},
	initialize: function () {
		function initialize() {
			$('#mail-settings-menu .item').tab();
			$('.checkbox').checkbox();
			this.initializeForm();
		}

		return initialize;
	}(),
	updateMailSettingsCallback: function () {
		function updateMailSettingsCallback(response) {
			if (response.result.toUpperCase() === 'SUCCESS') {
				mailSettings.$formObj.after("<div class=\"ui success message ajax\">".concat(globalTranslate.ms_TestEmailSubject, "</div>"));
				var testEmail = mailSettings.$formObj.form('get value', 'SystemNotificationsEmail');

				if (testEmail.length > 0) {
					var params = {
						email: testEmail,
						subject: globalTranslate.ms_TestEmailSubject,
						body: globalTranslate.ms_TestEmailBody,
						encode: ''
					};
					PbxApi.SendTestEmail(params);
				}
			}
		}

		return updateMailSettingsCallback;
	}(),
	cbBeforeSendForm: function () {
		function cbBeforeSendForm(settings) {
			var result = settings;
			result.data = mailSettings.$formObj.form('get values');
			return result;
		}

		return cbBeforeSendForm;
	}(),
	cbAfterSendForm: function () {
		function cbAfterSendForm(response) {
			if (response.success === true) {
				PbxApi.UpdateMailSettings(mailSettings.updateMailSettingsCallback);
			}
		}

		return cbAfterSendForm;
	}(),
	initializeForm: function () {
		function initializeForm() {
			Form.$formObj = mailSettings.$formObj;
			Form.url = "".concat(globalRootUrl, "mail-settings/save");
			Form.validateRules = mailSettings.validateRules;
			Form.cbBeforeSendForm = mailSettings.cbBeforeSendForm;
			Form.cbAfterSendForm = mailSettings.cbAfterSendForm;
			Form.initialize();
		}

		return initializeForm;
	}()
};
$(document).ready(function () {
	mailSettings.initialize();
});
//# sourceMappingURL=mail-settings-modify.js.map