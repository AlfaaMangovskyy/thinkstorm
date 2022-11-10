const vscode = require('vscode');
// const clipboardy = require("clipboardy"); //

/** 
* @param {vscode.ExtensionContext} context
*/

function writeTextFile(afilename, output)
{
    var txtFile =new File(afilename);
    txtFile.writeln(output);
    txtFile.close();// s //
}

function activate(context) {
    var statusbar = vscode.window.createStatusBarItem("thinkstorm", "left", 1);
    statusbar.show()
    statusbar.text = "ThinkStorm";
    statusbar.tooltip = "Note set through ThinkStorm extension.";
    // statusbar.color = "#ffffff"; //
    statusbar.color = "#cccccc";
    function chc () {
        // // // //
        statusbar.color = "#cccccc";
        // // // //
    }
    let dispend = vscode.commands.registerCommand("thinkstorm.evlet", function () {
        // //
        // //
        // //
        // vscode.window.showInformationMessage("Successfully mixed the theme."); //
        // vscode.workspace.openTextDocument("") //
        // const editor = vscode.window.activeTextEditor; //
        // const editorcontent = editor.document.getText(); //
        // writeTextFile(vscode.workspace. + ".txt", editorcontent); //
        vscode.window.showInformationMessage("Hey!");
        // //
        // //
        // //
    })
    let dispend_note = vscode.commands.registerCommand("thinkstorm.dispend_note", async function () {
        // // // //
        var picker = await vscode.window.showInputBox({})
        if (picker == null) return null
        statusbar.text = picker
        statusbar.tooltip = "Note set through ThinkStorm extension."
        vscode.window.showInformationMessage("Successfully updated status bar note to \"NOTE\".".replace("NOTE", picker));
        statusbar.color = "#ffffff";
        statusbar.color = "#cccccc";
        // // // //
    })

    context.subscriptions.push(dispend);
    context.subscriptions.push(dispend_note);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
// xD //