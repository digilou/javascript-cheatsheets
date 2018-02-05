// set up test with assertions

test('Invoking a method', function() {
  var result1 = filter1.highPass(3),
      result2 = highPass.call(filter2, 3),
      result3 = filter1.highPass(6);
  equal(result1, false,
    '3 >= filter1.cutoff should be false.');
  equal(result2, true,
    '3 >= filter2.cutoff should be true.');
  equal(result3, true,
    '6 >= filter3.cutoff should be true.');
});

.start()
.stop()
.complete()