import { renderHook } from '@testing-library/react-hooks'

import usePrevious from './usePrevious';

describe('Hooks - usePrevious', () => {
	it('returns the previously provided value or undefined if first render', () => {
		const { result, rerender } = renderHook(
			(value) => usePrevious(value),
			{ initialProps: 1 }
		);
		expect(result.current).toBeUndefined();
		rerender(2);
		expect(result.current).toBe(1);
		rerender();
		expect(result.current).toBe(2);
		rerender();
		expect(result.current).toBe(2);
	});
});
