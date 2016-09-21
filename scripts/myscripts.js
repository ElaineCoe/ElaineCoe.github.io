$(document).ready(function() {
    
    //Tooltip for social buttons
    $(".social a").tooltip({placement: "bottom", container: "body"});
    
    //Toggle Orbital Mechanics Project Modal
    $("#omcMore").click(function() {
        $("#omcModal").modal('toggle');
    });
    
    //Toggle Chrome Weather Extension Project Modal            
    $('#cwMore').click(function() {
        $("#cwModal").modal('toggle');
    });
    
    //Toggle Blog Project Modal
    $('#blogMore').click(function() {
        $("#blogModal").modal('toggle');
    });
    
    //Toggle Matching Game Project Modal
    $('#mGameMore').click(function() {
        $("#mGameModal").modal('toggle');
    });
});