/**
 * Full version of `debug` that:
 * - Prevents errors on console methods when no console present
 * - Exposes a global log function that preserves line numbering and formatting
 */
(function(w) {
  
  function Debugger(s) {
    debug = {};
    if (s) {
      for (var m in console)
        if (typeof console[m] === 'function')
          debug[m] = console[m].bind(w.console);
    } else {
      for (var m in console)
        if (typeof console[m] === 'function')
          debug[m] = function() {};
    }
    return debug;
  }
  
  /**
   * Switch the debug mode
   * @param {boolean} s - debug state controlling the log to display or not
   */
  w.debugMode = function(s) { w.debug = Debugger(s); };
  /**
   * Display log
   */
  w.debugOn = function() { w.debug = Debugger(true); };
  /**
   * Hide log
   */
  w.debugOff = function() { w.debug = Debugger(false); };
  /**
   * Same as console {@link console}
   */
  w.debug = Debugger(true);
  
})(window);
