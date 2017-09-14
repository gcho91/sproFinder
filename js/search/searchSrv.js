angular.module("sproFinder").service("searchSrv", function($http){

  console.log("something works")
      var client_secret = 'client_secret=xExoQBd9GdBfY32NmpBDB4U7uQfUgnBACihKqk6CXBNbdOEynYvWUeelUPLfQzIp';
      var client_id = 'client_id=2pbGuDJrgCyIj-4m_K0Obw';
      var access_token = 'Bearer l8OuFxmqEpb04RASl9A0aIDdi3Yd68ONIolPl39iLOvxAHGmlDEjKTNsxEry_QOnMqQnud1jwKc8cfwgRZBSXind9SmzsZO4h-5Cm68gf7CcO0RQBNcB1Vp3eZK5WXYx';

      this.getSomething = function(zip, term) {

        return $http.post('http://dogcompanydtx.com/api/proxyServer', {
          base_url: 'https://api.yelp.com/v3/businesses/search?',
          query_string:
            client_secret + '&' + client_id + '&location=' + zip + '&term=' + term,
          access_token: access_token
        });
      };


    //   this.getSomething().then(function(response){
    //   console.log(response);
    // })


})
