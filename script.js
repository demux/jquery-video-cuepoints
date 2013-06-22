$(document).ready(function() {
    $('#video').cuepoints({
        2.5: function() {
            console.log('Cue at 2.5 sec.');
        },
        6: function() {
            console.log('Cue at 6 sec.');
        },
        10: function() {
            console.log('Cue at 10 sec.');
        }
    });
});