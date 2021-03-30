var arr = read_line().split(' ');
var n = parseInt(arr[0]);
var m = parseInt(arr[1]);
var k = parseInt(arr[2]);
var left = 0, right = m * n, mid;
var sum;

while(left <= right){
  sum = 0;
  mid = Math.floor((left + right) / 2);
  for(var i = 1; i <= m; i++){
    sum += mid >= n * i ? n : Math.floor(mid / i);
  }
  if(sum < k){
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
print(left);