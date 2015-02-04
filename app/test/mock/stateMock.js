/*

 State mocker for jasmine tests.
 http://stackoverflow.com/questions/23655307/ui-router-interfers-with-httpbackend-unit-test-angular-js

 */
angular.module('stateMock',[]);
angular.module('stateMock').service("$state", function($q){
    this.expectedTransitions = [];
    this.transitionTo = function(stateName){
        console.log('Expected Transitions: ' +this.expectedTransitions.length);
        if(this.expectedTransitions.length > 0){
            var expectedState = this.expectedTransitions.shift();
            if(expectedState !== stateName){
                throw Error("Expected transition to state: " + expectedState + " but transitioned to " + stateName );
            }
        }else{
            throw Error("No more transitions were expected! Tried to transition to "+ stateName );
        }
        console.log("Mock transition to: " + stateName);
        var deferred = $q.defer();
        var promise = deferred.promise;
        deferred.resolve();
        return promise;
    };
    this.go = this.transitionTo;
    this.expectTransitionTo = function(stateName){
        this.expectedTransitions.push(stateName);
    };


    this.ensureAllTransitionsHappened = function(){
        if(this.expectedTransitions.length > 0){
            throw Error("Not all transitions happened!");
        }
    }
});