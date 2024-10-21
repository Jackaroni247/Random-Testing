var iterations = 25;
var prevNum = 0;
var num = 1;
var save;

for (var i = 0; i <= iterations; i++) {
  save = num;
  num += prevNum;
  prevNum = save;
  console.log(num);
}
