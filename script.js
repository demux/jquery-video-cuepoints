$(document).ready(function() {
    $('#video').cuepoints({
        2.5: function() {
            console.log('que at 2.5');
        },
        6: function() {
            console.log('que at 6');
        },
        10: function() {
            console.log('que at 10');
        }
    });
});