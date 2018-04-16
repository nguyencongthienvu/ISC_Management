$(document).ready(function () {
	//-----------------------------------------------------------//
    //none exit when click outside modal
    //----------------------------------------------------------//
    $('.add-subject').click(function(){
      	$('#add-subject').modal({backdrop: 'static'})
      });
      
    $('#subject-table_wrapper').removeClass("container-fluid");
})