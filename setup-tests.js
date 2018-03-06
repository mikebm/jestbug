window.$ = window.jQuery = require('jquery');
const mockPromise = require('mock-promise');
jest.setMock('jquery', window.$);
// Set same jquery instance fo every test

/**
 * Reduce/setup boilerplate for tests that require window stuff.
 */
window.dataLayer = window.dataLayer || {
	features: {}
};
window.BCOM = {
	device: {},
	tracking: {},
	util: {},
	theme: {},
	notifications: {},
	data: {}
};

/**
 * Not really mocking Backbone here, but extending it with some globally used functionality
 */
const Backbone = require('backbone');

Backbone.View.prototype.childViews = {};
Backbone.Collection.prototype.pubSub =
	Backbone.View.prototype.pubSub =
		Backbone.Model.prototype.pubSub = Object.assign({}, Backbone.Events);

jest.setMock('backbone', Backbone);

global.createSpyObj = function (props) {
	if (!props || !Array.isArray(props)) {
		throw Error('props array is required to make a spy object');
	}
	const spyObj = {};
	props.forEach((prop) => {
		spyObj[prop] = jest.fn();
	});
	return spyObj;
};

global.System = {
	import: () => {
		return mockPromise;
	}
};
