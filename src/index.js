exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        let max = min;
        for (i = 1; i < array.length; ++i) {
            if (array[i] > max) max = array[i];
            if (array[i] < min) min = array[i];
        }
        return min;
    }
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        let max = min;
        for (i = 1; i < array.length; ++i) {
            if (array[i] > max) max = array[i];
            if (array[i] < min) min = array[i];
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            count += array[i];
        }

        return count / array.length;
    }
};
