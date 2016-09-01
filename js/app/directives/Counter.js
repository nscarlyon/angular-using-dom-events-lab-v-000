function Counter() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			this.count = 0;
		},
		require: 'counter',
		controllerAs: 'ctrl',
		link: function(scope, element, attrs, ctrl) {

			element.on('click', function() {
				debugger;
				ctrl.count += 1;
				scope.$apply()
			});

			scope.$on('$destroy', function() {
				element.off();
			})
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
