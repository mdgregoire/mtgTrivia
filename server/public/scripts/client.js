console.log('js');
const app = angular.module('myApp', [])
const CardController = app.controller('CardController', ['$http', function($http){
  let self = this;
  self.randomCard = {url:''};

  self.getRandomCard = function(){
    console.log('in random');
    $http({
      method: 'GET',
      url: 'https://api.magicthegathering.io/v1/cards?pageSize=1&random=true'
    })
    .then(function(response){
      console.log(response.data.cards[0], 'response from get random card');

      self.randomCard.url = response.data.cards[0].imageUrl;
      console.log(self.randomCard.url);
      ///put a check in here for unddefined url, if os call the function again
    })
    .catch(function(error){
      console.log('error in get random card', error);
    })
  }


}])//end card CardController
