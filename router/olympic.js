var router = require('express').Router();
var path =require('path');

var boxing  = [{  Name: 'Carlos Balderas',  Origin: 'Santa Maria, Calif.'},
               {  Name: 'Charles Conwell',  Origin: 'Cleveland Heights, Ohio '},
               {  Name: 'Nico Hernandez',  Origin: 'Wichita, Kan.'},
               {  Name: 'Mikaela Mayer',  Origin: 'Los Angeles, Calif.'},
               {  Name: 'Gary Russell',  Origin: 'Washington, D.C.'},
               {  Name: 'Claressa Shields ',  Origin: 'Flint, Mich'},
               {  Name: 'Shakur Stevenson',  Origin: 'Newark, N.J.'},
               {  Name: 'Antonio Vargas',  Origin: 'Kissimmee, Fla.'}];


var judo  =[{  Name: 'Colton Brown',  Origin: 'Piscataway, N.J.'},
               {  Name: 'Angelica Delgado',  Origin: 'Miami, Fla.  '},
               {  Name: 'Nick Delpopolo',  Origin: 'Davie, Fla. '},
               {  Name: 'Kayla Harrison',  Origin: 'Middletown, Ohio'},
               {  Name: 'Marti Malloy',  Origin: 'Marti Malloy'},
               {  Name: 'Travis Stevens',  Origin: 'Tacoma, Wash.'}];

var fencing =[{  Name: 'Miles Chamley-Watson ',  Origin: 'New York, N.Y. '},
               {  Name: 'Eli Dershwitz',  Origin: 'Sherborn, Mass. '},
               {  Name: ' Katharine Holmes',  Origin: 'Washington, D.C.'},
               {  Name: 'Daryl Homer',  Origin: 'Bronx, N.Y. '},
               {  Name: 'Courtney Hurley',  Origin: 'Houston, Texas '},
               {  Name: 'Kelley Hurley ',  Origin: 'San Antonio, Texas   '},
               {  Name: ' Lee Kiefer',  Origin: 'Lexington, Ky. '},
               {  Name: 'Alex Massialas',  Origin: 'San Francisco, Calif.'},
               {  Name: 'Gerek Meinhardt ',  Origin: 'San Francisco, Calif.'},
               {  Name: 'Ibtihaj Muhammad',  Origin: 'Maplewood, N.J. '},
               {  Name: 'Nzingha Prescod',  Origin: 'Brooklyn, N.Y.  '},
               {  Name: 'Jason Pryor',  Origin: 'South Euclid, Ohio '},
               {  Name: 'Dagmara Wozniak',  Origin: 'Avenel, N.J. '},
               {  Name: 'Mariel Zagunis',  Origin: 'Beaverton, Ore.'}];

  var wrestling =[{  Name: 'Haley Augello ',  Origin: 'Lockport, Ill. '},
                {  Name: 'Andy Bisek',  Origin: 'Chaska, Minn.  '},
                {  Name: 'Jordan Burroughs',  Origin: 'Sicklerville, N.J.'},
                {  Name: 'J\'den Cox',  Origin: 'Columbia, Mo. '},
                {  Name: 'Daniel Dennis',  Origin: 'Ingleside, Ill. '},
                {  Name: 'Tervel Dlagnev ',  Origin: 'Columbus, Ohio '},
                {  Name: ' Adeline Gray',  Origin: 'Denver, Colo.'},
                {  Name: 'Helen Maroulis',  Origin: 'Rockville, Md. '},
                {  Name: 'Frank Molinaro ',  Origin: 'Barnegat, N.J. '},
                {  Name: 'Elena Pirozhkova',  Origin: 'Greenfield, Mass. '},
                {  Name: 'Ben Provisor',  Origin: 'Colorado Springs, Colo. '},
                {  Name: 'Robby Smith',  Origin: 'San Ramon, Calif. '},
                {  Name: 'Kyle Snyder',  Origin: 'Woodbine, Md. '},
                {  Name: 'Jesse Thielke',  Origin: 'Germantown, Wis.'}];

  var t  =[{  Name: 'Jackie Galloway',  Origin: 'Wylie, Texas'},
                 {  Name: 'Stephen Lambdin',  Origin: 'Rockwall, Texas '},
                 {  Name: 'Steven Lopez',  Origin: 'Sugar Land, Texas'},
                 {  Name: 'Paige McPherson',  Origin: 'Abilene, Texas'}];



router.get('/', function(request,responce){
  responce.sendFile(path.join(__dirname, '../public/view/index.html'));
});

router.get('/boxing', function(request,responce){
  responce.send(boxing[randomIndex(boxing.length)]);
});

router.get('/judo', function(request,responce){
  responce.send(judo[randomIndex(judo.length)]);
});

router.get('/fencing', function(request,responce){
  responce.send(fencing[randomIndex(fencing.length)]);
});

router.get('/taekwondo', function(request,responce){
  responce.send(t[randomIndex(t.length)]);
});

router.get('/wrestling', function(request,responce){
  responce.send(wrestling[randomIndex(wrestling.length)]);
});


//
function randomIndex(leng){
  return Math.floor(Math.random() * leng);
}

module.exports= router;
