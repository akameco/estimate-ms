'use strict';
const prettyMs = require('pretty-ms');

module.exports = total => {
	if (typeof total !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof total}`);
	}

	const start = new Date();

	return i => {
		if (typeof i !== 'number') {
			throw new TypeError(`Expected a number, got ${typeof i}`);
		}

		const elapsed = new Date() - start;

		if (i === 0) {
			return prettyMs(elapsed * (total - 1));
		}

		const ratio = Math.min(Math.max((i + 1) / total, 0), 1);
		const percent = ratio * 100;

		let eta = (percent === 100) ? 0 : elapsed * ((total / i) - 1);
		eta = (isNaN(eta) || !isFinite(eta)) ? 0.0 : eta;

		return prettyMs(eta);
	};
};
