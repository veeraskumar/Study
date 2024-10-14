{
  var a = 20; //Gobal var but it out dated and securty issuse
  console.log(a);
  let b = 30; //is more like var but if we want as let i  block
  console.log(b);
  {
    let c = 40;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  // console.log(c);

  const d = 50; // in cont, we can't change varabie
  console.log(d);
  //  d = 60;
  //  console.log(d);
}

// number, aplh, objectes, boolean, bigint = n;
{
  let int = 10;
  let big_int = 123456789101112131415916n;
  let str = "20";
  let bol = true;
  let dic = {
    C: { Ca: 1962, C: 1968 },
    java: 1995,
    phton: 1992,
    SQL: 1972,
    html: 1991,
    css: 1995,
    javascript: 1995,
  };

  console.log(typeof int);
  console.log(int, big_int, str, bol);
  console.table(dic);
}

{
  console.log("------------------------------------>");
  {
    //pre increament
    let a = 10;
    console.log("Before ", a, "| pre increament ", ++a, "| After ", a);
  }
  //post inncreament
  {
    let a = 20;
    console.log("Before ", a, "| Post increament ", a++, "| After ", a);
  }
  //pre decreament
  {
    let a = 10;
    console.log("Before ", a, "| pre decreament ", --a, "| After ", a);
  }
  //post decreament
  {
    let a = 20;
    console.log("Before ", a, "| post increament ", a--, "| After ", a);
  }

  {
    //assignment operator is +=, -=, *=, /=, **=, %=
    let a = 10;
    let b = 20;
    a += 10;
    b -= 10;
    console.log("a+=10 = ", a, "| b-=10 = ", b);
  }
  {
    //Camparsion is ==, !=, ===, !==, <, >
    let a = 10;
    let b = "12";
    console.log(
      "a==b = ",
      a == b,
      "| a!=b = ",
      a != b,
      "| a===b = ",
      a === b,
      "| a!==b",
      a !== b,
      "| a > 100 = ",
      "a" > "100"
    );
    let c = 18;
    18 <= b ? console.log("vote") : console.log("not vote");
  }
}
