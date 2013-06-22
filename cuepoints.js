(function($) {
    $.fn.cuepoints = function(cuepoints) {
        var video = this[0];
        var _cuepoints = {};

        function _reset() {
            _cuepoints = $.extend({}, cuepoints); // Copy object
        }
        _reset();

        video.addEventListener('playing', _reset);
        video.addEventListener('ended', _reset);
        video.addEventListener('loadstart', _reset);
        video.addEventListener('seeked', _reset);

        video.addEventListener('timeupdate', function() {
            for(var i in _cuepoints) {
                var t = parseFloat(i, 10); // Make sure time is float
                i = i + ''; // Make sure index is string

                if(t <= video.currentTime && video.currentTime <= t + 0.5) {
                    _cuepoints[i](); // Execute cue callback
                    delete _cuepoints[i]; // Make sure event fires only once
                }
            }
        });

        return this;
    };
})(jQuery);
