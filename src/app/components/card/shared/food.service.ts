import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Food } from './food.model';
@Injectable()
export class FoodService {
  foodList: AngularFireList<any>;
  selectedFood: Food = new Food();
  constructor(private firebase :AngularFireDatabase ) { }
 
  getData(){
    this.foodList = this.firebase.list('Desayuno');
    return this.foodList;
  }
 
  // insertFood(employee : Food)
  // {
  //   this.foodList.push({
  //     name: employee.name,
  //     position: employee.position,
  //     office: employee.office,
  //     salary: employee.salary
  //   });
  // }
 
  // updateFood(employee : Food){
  //   this.foodList.update(employee.$key,
  //     {
  //       name: employee.name,
  //       position: employee.position,
  //       office: employee.office,
  //       salary: employee.salary
  //     });
  // }
 
  // deleteFood($key : string){
  //   this.foodList.remove($key);
  // }
  'use strict';
  /* global browser: true */
  var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;
  
  exports.config = {
    rootElement: 'html',
    // The timeout for each script run on the browser. This should be longer
    // than the maximum time your application needs to stabilize between tasks.
    allScriptsTimeout: 60000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // seleniumServerJar: './selenium-server-standalone-3.11.0.jar',
  
    // Capabilities to be passed to the webdriver instance.
  
    capabilities: {
      'browserName': 'chrome',
      chromeOptions: {
        binary: process.env.CHROME_BIN,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-gpu-sandbox',
            '--disable-accelerated-2d-canvas',
            '--disable-accelerated-jpeg-decoding',
            '--disable-dev-shm-usage',
            '--test-type=ui',
            ],
    },
      'shardTestFiles': false,
      'maxInstances': 1
    },
  
    baseUrl: 'http://localhost:3000/',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: [
      'features/**/00*.feature',
      'features/**/01*.feature',
      'features/**/02*.feature',
      'features/**/03*.feature',
      'features/**/04*.feature',
      'features/**/05*.feature',
      'features/**/06*.feature',
      'features/**/07*.feature',
      'features/**/08*.feature',
      'features/**/09*.feature',
      'features/**/10*.feature',
      'features/**/11*.feature',
      'features/**/12*.feature',
      'features/**/13*.feature',
      'features/**/14*.feature',
      'features/**/15*.feature',
      'features/**/16*.feature',
      'features/**/17*.feature',
      'features/**/18*.feature',
      'features/**/19*.feature',
      'features/**/20*.feature',
    ],
  
    beforeLaunch: function() {
      console.log('beforeLaunch');
    },
  
    onPrepare: function() {
      //Disable animations when testing
      console.log('onPrepare: Disable animations');
      browser.driver.manage().window().setSize(1440, 900);
      var disableNgAnimate = function () {
        angular.module('disableNgAnimate', []).run(function($animate){
          $animate.enabled(false);
        });
      };
      var disableCssAnimate = function () {
        angular.module('disableCssAnimate', []).run(function() {
          var style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML = '* {' +
              '-webkit-transition: 1ms !important;' +
              '-moz-transition: 1ms !important' +
              '-o-transition: 1ms !important' +
              '-ms-transition: 1ms !important' +
              'transition: 1ms !important' +
              '-webkit-animation-duration: 1ms !important;' +
              '-moz-animation-duration: 1ms !important;' +
              '-o-animation-duration: 1ms !important;' +
              '-ms-animation-duration: 1ms !important;' +
              'animation-duration: 1ms !important;' +
            '}';
          document.getElementsByTagName('head')[0].appendChild(style);
        });
      };
      browser.addMockModule('disableNgAnimate', disableNgAnimate);
      browser.addMockModule('disableCssAnimate', disableCssAnimate);
    },
  
    onComplete: function() {
      console.log('onComplete');
    },
  
    onCleanUp: function() {
      console.log('onCleanUp');
    },
  
    afterLaunch: function() {
      console.log('afterLaunch');
    },
  
    // Patterns to exclude.
    exclude: [],
  
    cucumberOpts: {
      require: ['features/step_definitions/*.js', 'features/step_definitions/support/*.js'],
      format: ['json:reports/summary.json'],
      timeout: 60000,
      tags: '~@ignore',
    }
  };
  
}