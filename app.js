angular.module("app",["ui.router"])

	.config(function config($stateProvider){
		$stateProvider.state("index",{
			url:"",
			controller:"firstCtrl as first",
			templateUrl:"templates/first.html"
		})
		$stateProvider.state("second",{
			url:"/second",
			controller:"secondCtrl as second",
			templateUrl:"templates/second.html"
		})
	})

	.service("greeting",function Greeting(){

		var greeting = this;

		greeting.message = "hey!";




	})

	.controller("firstCtrl", function firstCtrl(greeting){

		var first = this;

		first.greeting = greeting;


	})
	.controller("secondCtrl", function secondCtrl(greeting){

		var second = this;

		second.greeting = greeting;


	})