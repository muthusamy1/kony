function AS_TextField_a4116496cb544e3e9bcdd5f32b9c255d(eventobject, changedtext) {
    var self = this;
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            self.view.skin = "CopyslNormal0f2ca4322fbc546";
        }, null);
    } else {
        (function() {
            self.view.skin = "CopyslNormal0f2ca4322fbc546";
        })();
    }
}