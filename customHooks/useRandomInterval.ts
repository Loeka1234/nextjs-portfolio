import { useRef, useEffect, useCallback } from "react";
import { random } from "../utils/random";

const useRandomInterval = (callback, minDelay: number, maxDelay: number) => {
	const timeoutId = useRef(null);
	const savedCallback = useRef(callback);

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		const handleTick = () => {
			const nextTickAt = random(minDelay, maxDelay);

			timeoutId.current = window.setTimeout(() => {
				savedCallback.current();
				handleTick();
			}, nextTickAt);
		};
		handleTick();

		return () => window.clearTimeout(timeoutId.current);
	}, [minDelay, maxDelay]);

	const cancel = useCallback(function () {
		window.clearTimeout(timeoutId.current);
	}, []);

	return cancel;
};

export default useRandomInterval;
