define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0i36c3046a99945 **/
    AS_Button_j775f0e3b7104354b0c3f428138407e4: function AS_Button_j775f0e3b7104354b0c3f428138407e4(eventobject) {
        var self = this;
        //Invokes function 'initializeFFI'
        try {
            var j = self.view.url.text;
            alert(j);
            com.mki.samplekonyffi.initializeFFI(
            /**Function*/
            ffiCallback, j);
        } catch (e) {
            if (e instanceof KonyError) alert("A Kony error");
            else(e instanceof EvalError)
            alert("A JS Eval Eror");
        }

        function ffiCallback(data) {
            alert(data)
        }
    }
});