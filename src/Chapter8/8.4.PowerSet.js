/**
 * Write a method to return all subsets of a set.
 */

function powerset(arr, set = [], sets = [[]], idx = 0) {
    for (let i = idx; i < arr.length; i++) {
        let newSet = [...set];
        newSet.push(arr[i]);
        sets.push(newSet);
        powerset(arr, newSet, sets, i + 1);
    }
    return sets;
}



exports.powerset = powerset;

