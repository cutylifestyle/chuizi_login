//TODO 研究这段代码的执行流程
(function(w,d){

    var usernameDiv = d.getElementById("username-frame");
    var pwdDiv = d.getElementById("pwd-frame");
    var usernameInput = d.getElementById("username");
    var pwdInput = d.getElementById("pwd");
    var usernameLabel = d.getElementById("username-label");
    var pwdLabel = d.getElementById("pwd-label");
    var autoDiv = d.getElementById("auto-checkbox");
    var checkboxSpan = d.getElementById("checkbox");

    var isChecked = false;

    usernameInput.onfocus = function () {
        usernameDiv.style.borderColor = "#6b93f2";
    };

    usernameInput.onblur = function () {
        usernameDiv.style.borderColor = "#cccccc";
    };

    pwdInput.onfocus = function () {
        pwdDiv.style.borderColor = "#6b93f2";
    };

    pwdInput.onblur = function () {
        pwdDiv.style.borderColor = "#cccccc";
    };

    usernameInput.oninput = function () {
        var strLength = this.value.length;
        if (strLength > 0) {
            usernameLabel.style.display = "none";
        }else{
            usernameLabel.style.display = "block";
        }
    };

    pwdInput.oninput = function () {
        var strLength = this.value.length;
        if (strLength > 0) {
            pwdLabel.style.display = "none";
        }else{
            pwdLabel.style.display = "block";
        }
    };

    autoDiv.onclick = function () {
        if (isChecked) {
            checkboxSpan.style.backgroundPosition = "0 -18px";
            isChecked = false;
        }else{
            checkboxSpan.style.backgroundPosition = "0 0";
            isChecked = true;
        }
    };

})(window,document);