angular.module('gumApp')
  .controller('GumController', GumController)


function GumController(){
  var self = this


  self.all = [
    {name: 'Trident', duration: 7, organic: false, flavor: 'spearmint', chewed: false},
    {name: '5', duration: 15, organic: false, flavor: 'mint', chewed: false},
    {name: 'Extra', duration: 30, organic: false, flavor: 'cinnamon', chewed: false},
    {name: 'Orbit', duration: 11, organic: false, flavor: 'white teeth', chewed: false}
  ]


self.add = addGum


self.newGum = {
  name: '',
  duration: '',
  organic: false,
  flavor: '',
  chewed: false
}

function addGum(){
  self.all.push({
    name: self.newGum.name,
    duration: self.newGum.duration,
    organic: self.newGum.organic,
    flavor: self.newGum.flavor,
    chewed: self.newGum.chewed
  })
  self.newGum = {
    name: '',
    duration: '',
    organic: false,
    flavor: '',
    chewed: false
  }
}














}
