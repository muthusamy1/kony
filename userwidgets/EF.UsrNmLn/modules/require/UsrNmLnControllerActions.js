define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for txtUserNameSline **/
    AS_TextField_4eb1475ca4d94a49b764ccd9ccccf865: function AS_TextField_4eb1475ca4d94a49b764ccd9ccccf865(eventobject, x, y) {
        var self = this;
    },
    /** onTouchEnd defined for txtUserNameSline **/
    AS_TextField_fa66791f5bef4c85b09a4a9d07e9681e: function AS_TextField_fa66791f5bef4c85b09a4a9d07e9681e(eventobject, x, y) {
        var self = this;
    },
    /** onBeginEditing defined for txtUserNameSline **/
    AS_TextField_0f1d44a4928f4b9e9e6d988f282d229d: function AS_TextField_0f1d44a4928f4b9e9e6d988f282d229d(eventobject, changedtext) {
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
    },
    /** onEndEditing defined for txtUserNameSline **/
    AS_TextField_a4116496cb544e3e9bcdd5f32b9c255d: function AS_TextField_a4116496cb544e3e9bcdd5f32b9c255d(eventobject, changedtext) {
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
    },
    /** onBeginEditing defined for txtUserNameSline **/
    AS_TextField_30c2932512294ca78a230b90dd7d1d12: function AS_TextField_30c2932512294ca78a230b90dd7d1d12(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.FlxContainerLine.skin = "CopyslBlueColor0b9af828562634d";
            }, null);
        } else {
            (function() {
                self.view.FlxContainerLine.skin = "CopyslBlueColor0b9af828562634d";
            })();
        }
    },
    /** onEndEditing defined for txtUserNameSline **/
    AS_TextField_7d112048a2254a688671626a3154408e: function AS_TextField_7d112048a2254a688671626a3154408e(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.FlxContainerLine.skin = "CopyslNormal0f2ca4322fbc546";
            }, null);
        } else {
            (function() {
                self.view.FlxContainerLine.skin = "CopyslNormal0f2ca4322fbc546";
            })();
        }
    }
});