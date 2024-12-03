function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }
    size = array.length - 1;
    for (tmpSize = 1; tmpSize <= size; tmpSize *= 2) {
        for (start = 0; start <= size; start += 2 * tmpSize) {
            middle = Math.min(start + tmpSize - 1, size);
            end = Math.min(start + 2 * tmpSize - 1, size)
            merge(array, start, middle, end);
        }
    }
    return array;
}

function merge(array, left, middle, right) {
    if (array[middle] < array[middle + 1]) {
        return;
    } else {
        mid2 = middle + 1;
        while (left <= middle && mid2 <= end) {
            if (array[left] <= array[mid2]) {
                left++;
            } else {
                tmp = array[mid2];
                i = mid2;
                while (!(i === left)){
                    array[i] = array[i - 1];
                    i -= 1;
                }
                array[left] = tmp;

                left += 1;
                middle += 1;
                mid2 += 1;
            }
        }
    }
    return;
}
