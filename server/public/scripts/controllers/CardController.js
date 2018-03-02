const CardController = app.controller('CardController', ['$http', function($http){
  console.log('controller created');
  let self = this;
  self.randomCard = {card: {}};

  self.getRandomCard = function(){
    console.log('in random');
    $http({
      method: 'GET',
      url: 'https://api.magicthegathering.io/v1/cards?pageSize=1&random=true'
    })
    .then(function(response){
      console.log(response.data.cards[0], 'response from get random card');
      self.randomCard.card = response.data.cards[0];
      console.log(self.randomCard.card.imageUrl);

      ///put a check in here for unddefined url, if is call the function again
    })
    .catch(function(error){
      console.log('error in get random card', error);
    })
  }


}])//end card CardController
