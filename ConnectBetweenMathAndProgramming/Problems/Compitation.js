function solution(n , k) {
    /**
     * Input:
     * n = 5, k = 3 (1 <= n <= 10^5, 1 <= k <= n)
     * {1,2,3,4,5}
     * 
     * Ouput: (x1 < x2 < x3 < ... < x[k-1] < x[k])
     * {1,2,3}
     * {1,2,4}
     * {1,2,5}
     * {1,3,4}
     * {1,3,5}
     * {1,4,5}
     * {2,3,4}
     * {2,3,5}
     * {3,4,5}
     * 
     * x1: 0 -> n-k
     * x[k]: 
    */
    const numArr = autogenerateArrNumber(1, 1, n);
    console.log('numArr === ', numArr);
    const results = []; // array => [[1,2,3], [1,2,4], [1,2,5], ...]

    const FIRST_ELEMENT_MAX=numArr[n-k];
    const MAX_VALUE = numArr[numArr.length - 1];
    const currentConfig = results[results.length - 1] ?? [];
    let nextGenerateControl = false;
    while (!currentConfig[0] || Number(currentConfig[0]) < FIRST_ELEMENT_MAX) {
        // generate start_element of each generation
        if (!results?.length) {
            results.push(autogenerateArrNumber(1, 1, k));
        } else if (nextGenerateControl) {
            results.push(autogenerateArrNumber(currentConfig[0] + 1, 1, k));
            // reset next generate control
            nextGenerateControl = false;
        } else {
            const previousConfig = results[results.length - 1];
            for (let i = previousConfig.length - 1; i >= 0; i--) {
                if (previousConfig[i] < MAX_VALUE) {
                    if (previousConfig[i] === previousConfig[i+1]) {
                        nextGenerateControl = true;
                    } else {
                        let nextConfig = [...previousConfig.slice(0, i), previousConfig[i] + 1];
                        if (nextConfig.length < k) {
                            const restOfNextConfig =
                            // previousConfig[i+1] < MAX_VALUE 
                                // ? 
                                autogenerateArrNumber(nextConfig[nextConfig.length-1] + 1, 1, k-nextConfig.length) 
                                // : previousConfig.slice(i + 1, k); 
                            nextConfig = [...nextConfig, ...restOfNextConfig];
                        }
                        results.push(nextConfig);
                    }
                    break;
                }
            }
        }
        console.log(results);
    }
    return results;
}

function autogenerateArrNumber(valueStart, rangeStep, length) {
    if (valueStart < 0 || rangeStep < 0 || length < 0) return [];
    const results = [valueStart];
    let iControl = 1;
    while(iControl <= length-1) {
        results[iControl] = results[iControl - 1] + rangeStep;
        ++iControl;
    }
    return results;
}

// const results1 = solution(5,2);
const results2 = solution(5,3);
// const results3 = solution(5,4);

// console.log(results1);
console.log(results2);
// console.log(results3);