// array splice

{
  let a = [0, 1, 2, 3, 4];
  a.splice(-1, 1);
  console.log(a);
}

// array sort

{
  let a = [
    {
      value1: 'zero',
      value2: 0
    },
    {
      value1: 'three',
      value2: 3
    },
    {
      value1: 'one',
      value2: 1
    },
    {
      value1: 'six',
      value2: 6
    },
    {
      value1: 'four',
      value2: 4
    }
  ];

  a = a.sort((a, b) => {
    if (a.value2 > b.value2) return 1;
    if (a.value2 < b.value2) return -1;
    if (a.value2 === b.value2) return 0;
  });

  console.log(a);
}
