"use strict";

/*
 * Copyright (C) MIKO LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nikolay Beketov, 12 2019
 *
 */

/* global globalRootUrl,globalTranslate, Form, PasswordScore */
var generalSettingsModify = {
  $formObj: $('#general-settings-form'),
  $webAdminPassword: $('#WebAdminPassword'),
  $sshPassword: $('#SSHPassword'),
  validateRules: {
    pbxname: {
      identifier: 'PBXName',
      rules: [{
        type: 'empty',
        prompt: globalTranslate.gs_ValidateEmptyPBXName
      }]
    },
    WebAdminPassword: {
      identifier: 'WebAdminPassword',
      rules: [{
        type: 'empty',
        prompt: globalTranslate.gs_ValidateEmptyWebPassword
      }, {
        type: 'minLength[5]',
        prompt: globalTranslate.gs_ValidateWeakWebPassword
      }]
    },
    WebAdminPasswordRepeat: {
      identifier: 'WebAdminPasswordRepeat',
      rules: [{
        type: 'match[WebAdminPassword]',
        prompt: globalTranslate.gs_ValidateWebPasswordsFieldDifferent
      }]
    },
    SSHPassword: {
      identifier: 'SSHPassword',
      rules: [{
        type: 'empty',
        prompt: globalTranslate.gs_ValidateEmptySSHPassword
      }, {
        type: 'minLength[5]',
        prompt: globalTranslate.gs_ValidateWeakSSHPassword
      }]
    },
    SSHPasswordRepeat: {
      identifier: 'SSHPasswordRepeat',
      rules: [{
        type: 'match[SSHPassword]',
        prompt: globalTranslate.gs_ValidateSSHPasswordsFieldDifferent
      }]
    }
  },
  initialize: function () {
    function initialize() {
      generalSettingsModify.$webAdminPassword.on('keyup', function () {
        PasswordScore.checkPassStrength({
          pass: generalSettingsModify.$webAdminPassword.val(),
          bar: $('.password-score'),
          section: $('.password-score-section')
        });
      });
      generalSettingsModify.$sshPassword.on('keyup', function () {
        PasswordScore.checkPassStrength({
          pass: generalSettingsModify.$sshPassword.val(),
          bar: $('.ssh-password-score'),
          section: $('.ssh-password-score-section')
        });
      });
      $('#general-settings-menu').find('.item').tab({
        history: true,
        historyType: 'hash'
      });
      $('#general-settings-form .checkbox').checkbox();
      $('#general-settings-form .dropdown').dropdown();
      generalSettingsModify.initializeForm();
    }

    return initialize;
  }(),
  cbBeforeSendForm: function () {
    function cbBeforeSendForm(settings) {
      var result = settings;
      result.data = generalSettingsModify.$formObj.form('get values');
      return result;
    }

    return cbBeforeSendForm;
  }(),
  cbAfterSendForm: function () {
    function cbAfterSendForm() {}

    return cbAfterSendForm;
  }(),
  initializeForm: function () {
    function initializeForm() {
      Form.$formObj = generalSettingsModify.$formObj;
      Form.url = "".concat(globalRootUrl, "general-settings/save");
      Form.validateRules = generalSettingsModify.validateRules;
      Form.cbBeforeSendForm = generalSettingsModify.cbBeforeSendForm;
      Form.cbAfterSendForm = generalSettingsModify.cbAfterSendForm;
      Form.initialize();
    }

    return initializeForm;
  }()
};
$(document).ready(function () {
  generalSettingsModify.initialize();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HZW5lcmFsU2V0dGluZ3MvZ2VuZXJhbC1zZXR0aW5ncy1tb2RpZnkuanMiXSwibmFtZXMiOlsiZ2VuZXJhbFNldHRpbmdzTW9kaWZ5IiwiJGZvcm1PYmoiLCIkIiwiJHdlYkFkbWluUGFzc3dvcmQiLCIkc3NoUGFzc3dvcmQiLCJ2YWxpZGF0ZVJ1bGVzIiwicGJ4bmFtZSIsImlkZW50aWZpZXIiLCJydWxlcyIsInR5cGUiLCJwcm9tcHQiLCJnbG9iYWxUcmFuc2xhdGUiLCJnc19WYWxpZGF0ZUVtcHR5UEJYTmFtZSIsIldlYkFkbWluUGFzc3dvcmQiLCJnc19WYWxpZGF0ZUVtcHR5V2ViUGFzc3dvcmQiLCJnc19WYWxpZGF0ZVdlYWtXZWJQYXNzd29yZCIsIldlYkFkbWluUGFzc3dvcmRSZXBlYXQiLCJnc19WYWxpZGF0ZVdlYlBhc3N3b3Jkc0ZpZWxkRGlmZmVyZW50IiwiU1NIUGFzc3dvcmQiLCJnc19WYWxpZGF0ZUVtcHR5U1NIUGFzc3dvcmQiLCJnc19WYWxpZGF0ZVdlYWtTU0hQYXNzd29yZCIsIlNTSFBhc3N3b3JkUmVwZWF0IiwiZ3NfVmFsaWRhdGVTU0hQYXNzd29yZHNGaWVsZERpZmZlcmVudCIsImluaXRpYWxpemUiLCJvbiIsIlBhc3N3b3JkU2NvcmUiLCJjaGVja1Bhc3NTdHJlbmd0aCIsInBhc3MiLCJ2YWwiLCJiYXIiLCJzZWN0aW9uIiwiZmluZCIsInRhYiIsImhpc3RvcnkiLCJoaXN0b3J5VHlwZSIsImNoZWNrYm94IiwiZHJvcGRvd24iLCJpbml0aWFsaXplRm9ybSIsImNiQmVmb3JlU2VuZEZvcm0iLCJzZXR0aW5ncyIsInJlc3VsdCIsImRhdGEiLCJmb3JtIiwiY2JBZnRlclNlbmRGb3JtIiwiRm9ybSIsInVybCIsImdsb2JhbFJvb3RVcmwiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQVNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUc7QUFDN0JDLEVBQUFBLFFBQVEsRUFB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cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgTUlLTyBMTEMgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4gKiBVbmF1dGhvcml6ZWQgY29weWluZyBvZiB0aGlzIGZpbGUsIHZpYSBhbnkgbWVkaXVtIGlzIHN0cmljdGx5IHByb2hpYml0ZWRcbiAqIFByb3ByaWV0YXJ5IGFuZCBjb25maWRlbnRpYWxcbiAqIFdyaXR0ZW4gYnkgTmlrb2xheSBCZWtldG92LCAxMiAyMDE5XG4gKlxuICovXG5cblxuLyogZ2xvYmFsIGdsb2JhbFJvb3RVcmwsZ2xvYmFsVHJhbnNsYXRlLCBGb3JtLCBQYXNzd29yZFNjb3JlICovXG5cbmNvbnN0IGdlbmVyYWxTZXR0aW5nc01vZGlmeSA9IHtcblx0JGZvcm1PYmo6ICQoJyNnZW5lcmFsLXNldHRpbmdzLWZvcm0nKSxcblx0JHdlYkFkbWluUGFzc3dvcmQ6ICQoJyNXZWJBZG1pblBhc3N3b3JkJyksXG5cdCRzc2hQYXNzd29yZDogJCgnI1NTSFBhc3N3b3JkJyksXG5cdHZhbGlkYXRlUnVsZXM6IHtcblx0XHRwYnhuYW1lOiB7XG5cdFx0XHRpZGVudGlmaWVyOiAnUEJYTmFtZScsXG5cdFx0XHRydWxlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHlwZTogJ2VtcHR5Jyxcblx0XHRcdFx0XHRwcm9tcHQ6IGdsb2JhbFRyYW5zbGF0ZS5nc19WYWxpZGF0ZUVtcHR5UEJYTmFtZSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHRXZWJBZG1pblBhc3N3b3JkOiB7XG5cdFx0XHRpZGVudGlmaWVyOiAnV2ViQWRtaW5QYXNzd29yZCcsXG5cdFx0XHRydWxlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHlwZTogJ2VtcHR5Jyxcblx0XHRcdFx0XHRwcm9tcHQ6IGdsb2JhbFRyYW5zbGF0ZS5nc19WYWxpZGF0ZUVtcHR5V2ViUGFzc3dvcmQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0eXBlOiAnbWluTGVuZ3RoWzVdJyxcblx0XHRcdFx0XHRwcm9tcHQ6IGdsb2JhbFRyYW5zbGF0ZS5nc19WYWxpZGF0ZVdlYWtXZWJQYXNzd29yZCxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHRXZWJBZG1pblBhc3N3b3JkUmVwZWF0OiB7XG5cdFx0XHRpZGVudGlmaWVyOiAnV2ViQWRtaW5QYXNzd29yZFJlcGVhdCcsXG5cdFx0XHRydWxlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHlwZTogJ21hdGNoW1dlYkFkbWluUGFzc3dvcmRdJyxcblx0XHRcdFx0XHRwcm9tcHQ6IGdsb2JhbFRyYW5zbGF0ZS5nc19WYWxpZGF0ZVdlYlBhc3N3b3Jkc0ZpZWxkRGlmZmVyZW50LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdFNTSFBhc3N3b3JkOiB7XG5cdFx0XHRpZGVudGlmaWVyOiAnU1NIUGFzc3dvcmQnLFxuXHRcdFx0cnVsZXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHR5cGU6ICdlbXB0eScsXG5cdFx0XHRcdFx0cHJvbXB0OiBnbG9iYWxUcmFuc2xhdGUuZ3NfVmFsaWRhdGVFbXB0eVNTSFBhc3N3b3JkLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHlwZTogJ21pbkxlbmd0aFs1XScsXG5cdFx0XHRcdFx0cHJvbXB0OiBnbG9iYWxUcmFuc2xhdGUuZ3NfVmFsaWRhdGVXZWFrU1NIUGFzc3dvcmQsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0U1NIUGFzc3dvcmRSZXBlYXQ6IHtcblx0XHRcdGlkZW50aWZpZXI6ICdTU0hQYXNzd29yZFJlcGVhdCcsXG5cdFx0XHRydWxlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHlwZTogJ21hdGNoW1NTSFBhc3N3b3JkXScsXG5cdFx0XHRcdFx0cHJvbXB0OiBnbG9iYWxUcmFuc2xhdGUuZ3NfVmFsaWRhdGVTU0hQYXNzd29yZHNGaWVsZERpZmZlcmVudCxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRnZW5lcmFsU2V0dGluZ3NNb2RpZnkuJHdlYkFkbWluUGFzc3dvcmQub24oJ2tleXVwJywgKCkgPT4ge1xuXHRcdFx0UGFzc3dvcmRTY29yZS5jaGVja1Bhc3NTdHJlbmd0aCh7XG5cdFx0XHRcdHBhc3M6IGdlbmVyYWxTZXR0aW5nc01vZGlmeS4kd2ViQWRtaW5QYXNzd29yZC52YWwoKSxcblx0XHRcdFx0YmFyOiAkKCcucGFzc3dvcmQtc2NvcmUnKSxcblx0XHRcdFx0c2VjdGlvbjogJCgnLnBhc3N3b3JkLXNjb3JlLXNlY3Rpb24nKSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGdlbmVyYWxTZXR0aW5nc01vZGlmeS4kc3NoUGFzc3dvcmQub24oJ2tleXVwJywgKCkgPT4ge1xuXHRcdFx0UGFzc3dvcmRTY29yZS5jaGVja1Bhc3NTdHJlbmd0aCh7XG5cdFx0XHRcdHBhc3M6IGdlbmVyYWxTZXR0aW5nc01vZGlmeS4kc3NoUGFzc3dvcmQudmFsKCksXG5cdFx0XHRcdGJhcjogJCgnLnNzaC1wYXNzd29yZC1zY29yZScpLFxuXHRcdFx0XHRzZWN0aW9uOiAkKCcuc3NoLXBhc3N3b3JkLXNjb3JlLXNlY3Rpb24nKSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdCQoJyNnZW5lcmFsLXNldHRpbmdzLW1lbnUnKS5maW5kKCcuaXRlbScpLnRhYih7XG5cdFx0XHRoaXN0b3J5OiB0cnVlLFxuXHRcdFx0aGlzdG9yeVR5cGU6ICdoYXNoJyxcblx0XHR9KTtcblx0XHQkKCcjZ2VuZXJhbC1zZXR0aW5ncy1mb3JtIC5jaGVja2JveCcpLmNoZWNrYm94KCk7XG5cdFx0JCgnI2dlbmVyYWwtc2V0dGluZ3MtZm9ybSAuZHJvcGRvd24nKS5kcm9wZG93bigpO1xuXHRcdGdlbmVyYWxTZXR0aW5nc01vZGlmeS5pbml0aWFsaXplRm9ybSgpO1xuXHR9LFxuXHRjYkJlZm9yZVNlbmRGb3JtKHNldHRpbmdzKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gc2V0dGluZ3M7XG5cdFx0cmVzdWx0LmRhdGEgPSBnZW5lcmFsU2V0dGluZ3NNb2RpZnkuJGZvcm1PYmouZm9ybSgnZ2V0IHZhbHVlcycpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cdGNiQWZ0ZXJTZW5kRm9ybSgpIHtcblxuXHR9LFxuXHRpbml0aWFsaXplRm9ybSgpIHtcblx0XHRGb3JtLiRmb3JtT2JqID0gZ2VuZXJhbFNldHRpbmdzTW9kaWZ5LiRmb3JtT2JqO1xuXHRcdEZvcm0udXJsID0gYCR7Z2xvYmFsUm9vdFVybH1nZW5lcmFsLXNldHRpbmdzL3NhdmVgO1xuXHRcdEZvcm0udmFsaWRhdGVSdWxlcyA9IGdlbmVyYWxTZXR0aW5nc01vZGlmeS52YWxpZGF0ZVJ1bGVzO1xuXHRcdEZvcm0uY2JCZWZvcmVTZW5kRm9ybSA9IGdlbmVyYWxTZXR0aW5nc01vZGlmeS5jYkJlZm9yZVNlbmRGb3JtO1xuXHRcdEZvcm0uY2JBZnRlclNlbmRGb3JtID0gZ2VuZXJhbFNldHRpbmdzTW9kaWZ5LmNiQWZ0ZXJTZW5kRm9ybTtcblx0XHRGb3JtLmluaXRpYWxpemUoKTtcblx0fSxcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcblx0Z2VuZXJhbFNldHRpbmdzTW9kaWZ5LmluaXRpYWxpemUoKTtcbn0pOyJdfQ==