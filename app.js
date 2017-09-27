//googleLogin

function onLoadFunction() {
	gapi.client.setApiKey('AIzaSyDwtCfiyeWtlghjKl7QsqDRFoMdE5BO_bY');
	gapi.client.load('plus', 'v1', function(){});
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1587690951296100',
      xfbml      : true,
      version    : 'v2.10',
      status	 : true
    });
    FB.AppEvents.logPageView(); 

    FB.getLoginStatus(function(response){
    	if(response.status === 'connected'){
    		//vous etes connecter
    		console.log('connected');
    	}else if(response.status === 'not_authorized'){
    		// not auth
    		console.log('Not not_authorized');
    	}else{
    		//we are not logged in to fb.
    		console.log('Pas connecter ');
    	}
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));