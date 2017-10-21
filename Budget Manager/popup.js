$(function(){

	chrome.storage.sync.get(['limit','total'],function(budget){
		$('#limit').text(budget.limit);
		$('#total').text(budget.total);
	});


	/*chrome.storage.sync.get('total',function(budget){
		$('#total').text(budget.total);
	});*/




	$('#spentAmount').click(function(){

		chrome.storage.sync.get(['total','limit'],function(budget){
			var newTotal=0;
			if(budget.total){
				newTotal+= parseInt(budget.total);
			}

			var amount=$('#amount').val();
			if(amount){
				newTotal+= parseInt(amount);
			}

			chrome.storage.sync.set({'total':newTotal},function(){
				if(amount && newTotal >= budget.limit){
					var notifOptions={
						type:'basic',
						iconUrl:'icon48.png',
						title:'Limit Reached!',
						message:"Uh oh! looks like you've reached your limit!"
					};

					chrome.notifications.create('limitNotif',notifOptions);
				}

			});

			$('#total').text(newTotal);
			$('#amount').val('');
		});

	});
});