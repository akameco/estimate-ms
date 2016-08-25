import test from 'ava';
import sinon from 'sinon';
import fn from './';

test.beforeEach(t => {
	t.context.clock = sinon.useFakeTimers();
});

test('output pretty format estimated time', t => {
	const est = fn(10);

	t.context.clock.tick(1000);
	t.is(est(0), '9s');
	t.is(est(2), '4s');
	t.is(est(5), '1s');
	t.is(est(9), '0ms');
});
