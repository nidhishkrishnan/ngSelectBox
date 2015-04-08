angular.module('app', ['ngSelectBox'])

.controller('MainCtrl', function($scope) {
        $scope.zoo = [{
            id: 12,
            type: 'Animals',
            img: "https://taiwanease.com/en/forums/images/smilies/e04f.png",
            list: [{ id: 56, name: "Cat", img: "https://taiwanease.com/en/forums/images/smilies/e04f.png"}, 
                   { id: 57, name: "Dog", img : "http://www.nittanygreys.org/i/nodogs.png"},
                   { id: 58, name: "Elephant", img : "http://fc00.deviantart.net/fs71/f/2013/094/d/5/elephantyellow_by_mandarimvu-d60fpl8.png"}]
        }, {
            id: 13, 
            type: 'Birds',
            img: "http://owleyesmagazine.com/sites/default/files/owlpoints_0.png",
            list: [{ id: 59, name: "Parrot", img: "http://tochki.su/tibiame/img/game/parrot.png"}, 
                   { id: 60, name: "Owl" ,img: "http://owleyesmagazine.com/sites/default/files/owlpoints_0.png"},
                   { id: 61, name: "Duck" ,img: "http://howtomanguide.com/img/duck.png"}
                  ]
        }];
});
