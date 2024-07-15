const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = [];
    let subarray = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(sum + arr[i] <= n) {
            subarray.push(arr[i]);
            sum += arr[i];
        } else {
            res.push(subarray);
            subarray = [arr[i]];
            sum = arr[i];
        }
    }
    if(subarray.length > 0) {
        res.push(subarray);
    }
    return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
