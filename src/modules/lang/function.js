/* --------------------------------------- *
* Guerrilla UI                             *
* @module: Function based utility methods  * 
* ---------------------------------------- */
$.GUI().use(function(G) {

    return {

        load: function(api) {

            // Extend api object
            api.utils.merge(api.utils, {

                /**
                 * Delay a functions execution by passed amount of time 
                 *
                 * @param fn {function} - function to bounce 
                 * @param time {number} - amount of time in miliseconds to wait
                 * @param context {object} context to apply to passed function 
                 * @return {function} - keeps from executing passed method before its ready 
                **/
                debounce: function(fn, time, context) {
                    var timeout;

                    return function () {
                        var args = arguments;

                        clearTimeout(timeout);

                        timeout = setTimeout(utils.proxy(function () {
                            fn.apply(this, args);
                        }, context || this), time);
                    };
                },
                
                /**
                 * Allow passed method to only be executed only once
                 *
                 * @param fn {function} - the function to execute once
                 * @param context {object} - optional context that will be applied to passed method
                 * @return {function}
                **/
                once: function(fn, context) {
                    var result;
                    
                    return function() {
                        
                        if (fn) {
                        
                            result = fn.apply(context || this, arguments);
                            
                            fn = null;
                        }
                        
                        return result;
                    }
                },

                /**
                 * Delay a functions execution by passed amount of time 
                 *
                 * @param fn {function} - function to throttle 
                 * @param time {number} - amount of time in miliseconds to wait
                 * @param context {object} context to apply to passed function 
                 * @return {function} - keeps from executing passed method before its ready 
                **/
                throttle: function(fn, time, context) {
                    var run;
                    
                    time = time || 1000;

                    return function() {
                        var args = arguments,
                            ctx = context || this;

                        if (!run) {
                            run = true;

                            setTimeout(function() {
                                fn.apply(ctx, args);
                                run = false;
                            }, time);
                        }
                    };
                },

                /**
                 * Attempt to defer a function call 
                 *
                 * @param fn {function} - function to defer 
                 * @param context {object} context to apply to passed function 
                 * @return void 
                **/
                defer: function(fn, context) {
                    var args = arguments,
                        ctx = context || this;

                    setTimeout(function() {
                        fn.apply(ctx, args);
                    }, 0);
                }
            });
        }
    };
});