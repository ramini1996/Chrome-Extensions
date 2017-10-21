$(function(){

	chrome.storage.sync.get('limit',function(limit){
		$('#limit').val(limit.limit);
	});

	$('#resetTotal').click(function(){
		chrome.storage.sync.set({'total':0});

		var notifOptions={
						type:'basic',
						iconUrl:'icon48.png',
						title:'Total Reset!',
						message:"Your total has been successsfully reset"
					};

					chrome.notifications.create('totalResetNotif',notifOptions);

	});


	$('#saveLimit').click(function(){
		var limit=$('#limit').val();
		chrome.storage.sync.set({'limit':limit},function(){
			close();
		});
	});
});