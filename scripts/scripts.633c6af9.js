"use strict";angular.module("campusInvitationApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap.tabs","template/tabs/tab.html","template/tabs/tabset.html","js-data","angular-mandrill"]).config(["$routeProvider","DSFirebaseAdapterProvider","MandrillProvider",function(a,b,c){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"}),b.defaults.basePath="https://centrodeestudios.firebaseio.com/",c.setApiKey("qfs05hqLxFmpN2Y2CRwC3Q")}]).run(["DS","DSFirebaseAdapter",function(a,b){a.registerAdapter("firebase",b,{"default":!0}),a.defineResource("student")}]),angular.module("campusInvitationApp").controller("MainCtrl",["$q","$scope","Registration","Locations","Mail","Mandrill",function(a,b,c,d,e,f){function g(){i.countries=d.countries(),i.cities=d.cities()}function h(d){console.log(b),a.all({registry:c["new"](d),notify:f.messages.send(e.toLearningCenter(d))}).then(function(a){i.status="success"},function(a){console.log(a)})}var i=this;i.submit=h,g()}]),angular.module("campusInvitationApp").factory("Mail",function(){function a(a){return this.content={message:{html:"<h1>Nuevo Estudiante</h1><p>Se ha registrado un nuevo estudiante, correo electrónico "+a.email+"</p>",text:"Se ha registrado un nuevo estudiante, correo electrónico "+a.email,subject:"Nuevo Estudiante",from_email:a.email,from_name:a.firstName+" "+a.lastName,to:[{name:"Centro de Estudios Latino America",email:"centrodeestudios@bblatinamerica.org",type:"to"}]}}}var b=(angular.extend,{content:{},toLearningCenter:a});return b}),angular.module("campusInvitationApp").service("Registration",["DS",function(a){this["new"]=function(b){return a.create("student",b)}}]),angular.module("campusInvitationApp").service("Locations",function(){this.countries=function(){return[{name:"Venezuela",code:"VE"},{name:"Bolivia",code:"BO"}]},this.cities=function(a){return[{id:1,name:"Caracas",country:"VE"},{id:2,name:"Valencia",country:"VE"},{id:3,name:"La Paz",country:"BO"},{id:4,name:"Sucre",country:"BO"}]}}),angular.module("campusInvitationApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="level level-hero hero-home has-hint text-center"> <div class="container full-height"> <div class="row"> <div class="col-xs-12"> <h1 class="mb-10 heading heading-top">CURSOS DE CABALÁ</h1> <div class="subheading mb-20">una experiencia que cambiara tu vida, y es otorgada por la propia naturaleza</div> </div> </div> </div> <div class="container content-body"> <tabset type="pills"> <tab class="hidden" heading="Info">Info</tab> <tab class="hidden" heading="Detalle"> <b>Catálogo del curso</b> El Catálogo del curso provee una breve descripción de los cursos ofrecidos por el Centro de Estudios, incluyendo los prerrequisitos, fechas y horas en las que se ofrece el curso, y los textos que se usan durante el curso. <b>Estructura del Curso</b> La Estructura del curso provee un plan de los temas claves que se cubrirán en cada curso. <b>Servicios Estudiantiles</b> El Centro de Estudios ofrece mucho más que clases en vivo. Pueden conocer más sobre algunos de los otros servicios, tales como el Foro Estudiantil, la Librería de Cabalá, y Convenciones de Cabalá aquí. <b>Registro</b> El primer paso para accesar a todo lo que ofrece el Centro de Estudios es el registro. Una vez registrados podrán inscribirse a los cursos, accesar al programa de Auto-estudio y participar en el Foro Estudiantil una vez iniciados los cursos </tab> <tab class="hidden" heading="Registro" active="true"> <div class="content-form row"> <form name="formRegistration" class="contact" ng-submit="vm.submit(vm.student)" ng-model="vm.formRegistration"> <div class="form-group"> <label for="firstName" class="col-xs-4 control-label">Nombre <span class="require">*</span></label> <div class="col-xs-8"> <input ng-model="vm.student.firstName" type="text" class="form-control" id="firstName" placeholder="Nombres" required> </div> </div> <div class="form-group"> <label for="lastName" class="col-xs-4 control-label">Apellido <span class="require">*</span></label> <div class="col-xs-8"> <input ng-model="vm.student.lastName" type="text" class="form-control" id="lastName" placeholder="Apellidos" required> </div> </div> <div class="form-group"> <label for="email" class="col-xs-4 control-label control-one-line">Correo Electrónico <span class="require">*</span></label> <div class="col-xs-8"> <input ng-model="vm.student.email" type="email" class="form-control" id="email" placeholder="Correo Electrónico" required> </div> </div> <div class="form-group"> <label class="col-xs-4 control-label">País <span class="require">*</span></label> <div class="col-xs-8"> <select class="form-control" ng-options="country.code as country.name for country in vm.countries" ng-model="vm.student.country" required> <option></option> </select> </div> </div> <div class="form-group"> <label class="col-xs-4 control-label">Ciudad <span class="require">*</span></label> <div class="col-xs-8"> <select class="form-control" ng-options="city.id as city.name for city in vm.cities | filter:{country:vm.student.country}" ng-model="vm.student.city" ng-disabled="!vm.student.country" required> <option></option> </select> </div> </div> <div class="form-group"> <div class="h2 mb-20 col-xs-12"> <button type="submit" class="btn btn-register-campus">Registrate Gratis</button> </div> </div> </form> </div> </tab> </tabset> </div> <div class="container content-footer text-center"> <p class="mb-35 subheading">AHORA ES EL MOMENTO MAS SIGNIFICATIVO DE TU VIDA ....SI TÚ LO PERMITES</p> </div> </div>')}]);