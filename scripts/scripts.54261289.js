"use strict";angular.module("campusInvitationApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("campusInvitationApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("campusInvitationApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("campusInvitationApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="level level-hero hero-home has-hint"> <div class="hero-overlay visible-lg"></div> <div class="container full-height"> <div class="v-align-parent"> <div class="v-center text-center"> <div class="row"> <div class="col-xs-12"> <h1 class="mb-10 heading heading-top">CURSOS DE CABALÁ</h1> <div class="subheading mb-20">una experiencia que cambiara tu vida, y es otorgada por la propia naturaleza</div> </div> <div class="col-xs-12 col-xs-offset-3"> <div class="row"> <div class="col-xs-2"> <a class="btn text-center" href="#"> Info </a> </div> <div class="col-xs-2"> <a class="btn" href="#"> Detalles </a> </div> <div class="col-xs-2"> <a class="btn text-center" href="#"> Registro </a> </div> </div> </div> </div> </div> </div> </div> <div class="container content-footer text-center"> <form class="contact" method="get" action="/" accept-charset="UTF-8"> <div class="h2 mb-20"> <a class="btn btn-register-campus" href="#"> Registrate </a> </div> <p class="mb-35">AHORA ES EL MOMENTO MAS SIGNIFICATIVO DE TU VIDA ....SI TÚ LO PERMITES</p> </form> </div> </div>')}]);