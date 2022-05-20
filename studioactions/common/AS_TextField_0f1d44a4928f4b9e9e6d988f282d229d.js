function AS_TextField_0f1d44a4928f4b9e9e6d988f282d229d(eventobject, changedtext) {
    var self = this;
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.skin = "CopyslBlueColor0b9af828562634d";
        }, null);
    } else {
        (function() {
            self.view.skin = "CopyslBlueColor0b9af828562634d";
        })();
    }
}