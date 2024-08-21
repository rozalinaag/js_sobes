function typeof_examples() {
  console.log(typeof 'Hi');
  console.log(typeof true);
  console.log(typeof function () {});
  console.log(typeof NaN);
  console.log(typeof 1 / 0);
  console.log(typeof 1);
  console.log(typeof Math);
  console.log(typeof undefined * 2);
  let a;
  console.log(typeof a);
  var b;
  console.log(typeof b);
  console.log(typeof Infinity);
}

function string_examples() {
  console.log('EXAMPLES: ');

  console.log(1 + '2');
  console.log(1 + '2' + 1);
  console.log('' + 1 + 0);
  console.log('' - 1 + '2');
  console.log('' - 1 + 2);
  console.log(1 + 2 + '2');
  console.log('3' * '2');
  console.log('42' - 40);
  console.log('42px' - 20);
  console.log(null + 2);
  console.log(undefined + 2);
}

function equels() {
  console.log(1 == '1');
  console.log(1 === '1'); //
  console.log(undefined == null); //
  console.log(undefined === null); //
  console.log('0' == false); //
  console.log('0' == 0); //
  console.log('' === false); //
  console.log(false == []); //
  console.log(false == {}); //
  //{} - !
}

typeof_examples();
equels();
