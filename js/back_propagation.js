let next = document.getElementById("next");
let back = document.getElementById("back");
let result = document.getElementById("numOfEpoch");
let select = document.getElementById("select");

let inputs = [
  // 0  1
  [1, 1], // 0
  [0, 1], // 1
  [1, 0], // 2
  [0, 0], // 3
];
let counter = 0;
let counterNext = 0;
// For Column 3 ==> Head ==> Span //
let ite = 1;
let ep = 1;

let t1 =
  (t2 =
  t3 =
  t4 =
  t5 =
  t6 =
  t7 =
  t8 =
  t9 =
  t10 =
  t11 =
  t12 =
  t13 =
  t14 =
  t15 =
    0);
let bb = 0;
let n = 0;

let o1 = (o2 = o3 = o4 = o5 = o6 = o7 = o8 = o9 = o10 = o11 = o12 = o13 = 0);

let w13 = (w14 = w23 = w24 = w35 = w45 = theata3 = theata4 = theata5 = 0);

select.addEventListener("click", function () {
  w13 = Number(document.getElementById("w13").value);
  w14 = Number(document.getElementById("w14").value);
  w23 = Number(document.getElementById("w23").value);
  w24 = Number(document.getElementById("w24").value);
  w35 = Number(document.getElementById("w35").value);
  w45 = Number(document.getElementById("w45").value);
  theata3 = Number(document.getElementById("theta3").value);
  theata4 = Number(document.getElementById("theta4").value);
  theata5 = Number(document.getElementById("theta5").value);
  alpha = Number(document.getElementById("alpha").value);
  document.getElementById("show1").innerHTML = "";
  document.getElementById("show2").innerHTML = "";
  document.getElementById("show3").innerHTML = "";
  document.getElementById("show4").innerHTML = "";
  document.getElementById("show5").innerHTML = "";
  document.getElementById("show6").innerHTML = "";
  document.getElementById("show7").innerHTML = "";
  document.getElementById("show8").innerHTML = "";
  document.getElementById("show9").innerHTML = "";
  document.getElementById("show10").innerHTML = "";
  document.getElementById("show11").innerHTML = "";
  document.getElementById("show12").innerHTML = "";
  document.getElementById("show13").innerHTML = "";
  document.getElementById("col3-h-sp1").innerHTML = 0;
  document.getElementById("col3-h-sp2").innerHTML = 0;
  n++;
  counter = 0;
  counterNext = 0;
  ite = 1;
  ep = 1;
});

function showing() {
  document.getElementById("chk").classList.add("showing-element");
}

next.addEventListener("click", function () {
  if (n > 0) {
    if (counterNext < 16) {
      let Y3 =
        (Y4 =
        Y5 =
        Yact =
        erorr =
        error_gradient5 =
        error_gradient3 =
        error_gradient4 =
        theata5Delta =
        theata3Delta =
        theata4Delta =
        w35Delta =
        w45Delta =
        w13Delta =
        w23Delta =
        w14Delta =
        w24Delta =
          0);
      // Hazem
      e1 = e2 = e3 = e4 = 0;
      // Y Desired
      Y3 = Number(
        (
          1 /
          (1 +
            Math.exp(
              -(
                inputs[counter][0] * w13 +
                inputs[counter][1] * w23 -
                1 * theata3
              )
            ))
        ).toFixed(4)
      );
      Y4 = Number(
        (
          1 /
          (1 +
            Math.exp(
              -(
                inputs[counter][0] * w14 +
                inputs[counter][1] * w24 -
                1 * theata4
              )
            ))
        ).toFixed(4)
      );
      Y5 = Number(
        (1 / (1 + Math.exp(-(Y3 * w35 + Y4 * w45 - 1 * theata5)))).toFixed(4)
      );
      Yact = inputs[counter][0] ^ inputs[counter][1];
      // Error
      error = Number((Yact - Y5).toFixed(4));

      // Error Gradient Five
      error_gradient5 = Y5 * (1 - Y5) * error;
      w35Delta = Number((alpha * Y3 * error_gradient5).toFixed(4));
      w45Delta = Number((alpha * Y4 * error_gradient5).toFixed(4));
      theata5Delta = Number((alpha * -1 * error_gradient5).toFixed(4));

      // Error Gradient Three AND Four
      error_gradient3 = Number(
        (Y3 * (1 - Y3) * error_gradient5 * w35).toFixed(4)
      );
      error_gradient4 = Number(
        (Y4 * (1 - Y4) * error_gradient5 * w45).toFixed(4)
      );
      w13Delta = Number(
        (alpha * inputs[counter][0] * error_gradient3).toFixed(4)
      );
      w23Delta = Number(
        (alpha * inputs[counter][1] * error_gradient3).toFixed(4)
      );
      theata3Delta = Number((alpha * -1 * error_gradient3).toFixed(4));
      w14Delta = Number(
        (alpha * inputs[counter][0] * error_gradient4).toFixed(4)
      );
      w24Delta = Number(
        (alpha * inputs[counter][1] * error_gradient4).toFixed(4)
      );
      theata4Delta = Number((alpha * -1 * error_gradient4).toFixed(4));
      o1 = w35;
      o2 = w45;
      o3 = w13;
      o4 = w14;
      o5 = w23;
      o6 = w24;
      w35 = Number((w35 + w35Delta).toFixed(4));
      w45 = Number((w45 + w45Delta).toFixed(4));
      w13 = Number((w13 + w13Delta).toFixed(4));
      w14 = Number((w14 + w14Delta).toFixed(4));
      w23 = Number((w23 + w23Delta).toFixed(4));
      w24 = Number((w24 + w24Delta).toFixed(4));

      // Threshold New
      o7 = theata3;
      o8 = theata4;
      o9 = theata5;
      theata3 = Number((theata3 + theata3Delta).toFixed(4));
      theata4 = Number((theata4 + theata4Delta).toFixed(4));
      theata5 = Number((theata5 + theata5Delta).toFixed(4));

      // Increase Counter
      counter++;
      if (counter == 4) {
        counter = 0;
      }

      t1 = document.getElementById("show1").innerHTML;
      document.getElementById("show1").innerHTML = Y3;
      t2 = document.getElementById("show2").innerHTML;
      document.getElementById("show2").innerHTML = Y4;
      t3 = document.getElementById("show3").innerHTML;
      document.getElementById("show3").innerHTML = Y5;
      t4 = document.getElementById("show4").innerHTML;
      document.getElementById("show4").innerHTML = error;
      t5 = document.getElementById("show5").innerHTML;
      document.getElementById("show5").innerHTML = w13;
      t6 = document.getElementById("show6").innerHTML;
      document.getElementById("show6").innerHTML = w14;
      t7 = document.getElementById("show7").innerHTML;
      document.getElementById("show7").innerHTML = w23;
      t8 = document.getElementById("show8").innerHTML;
      document.getElementById("show8").innerHTML = w24;
      t9 = document.getElementById("show9").innerHTML;
      document.getElementById("show9").innerHTML = w35;
      t10 = document.getElementById("show10").innerHTML;
      document.getElementById("show10").innerHTML = w45;
      t11 = document.getElementById("show11").innerHTML;
      document.getElementById("show11").innerHTML = theata3;
      t12 = document.getElementById("show12").innerHTML;
      document.getElementById("show12").innerHTML = theata4;
      t13 = document.getElementById("show13").innerHTML;
      document.getElementById("show13").innerHTML = theata5;
      t14 = document.getElementById("col3-h-sp1").innerHTML;
      document.getElementById("col3-h-sp1").innerHTML = ep;
      t15 = document.getElementById("col3-h-sp2").innerHTML;
      document.getElementById("col3-h-sp2").innerHTML = ite;
      ite++;
      if (ite == 5) {
        ite = 1;
        ep++;
      }
      bb = 0;
      counterNext++;
    } else {
      window.alert("You arrived the last iteration !");
    }
  } else {
    window.alert(
      'You have to choose the values and then click on "Select Button"'
    );
  }
});
back.addEventListener("click", function () {
  if ((ep > 1 || ite > 1) && bb == 0) {
    w35 = o1;
    w45 = o2;
    w13 = o3;
    w14 = o4;
    w23 = o5;
    w24 = o6;
    theata3 = o7;
    theata4 = o8;
    theata5 = o9;
    document.getElementById("show1").innerHTML = t1;
    document.getElementById("show2").innerHTML = t2;
    document.getElementById("show3").innerHTML = t3;
    document.getElementById("show4").innerHTML = t4;
    document.getElementById("show5").innerHTML = t5;
    document.getElementById("show6").innerHTML = t6;
    document.getElementById("show7").innerHTML = t7;
    document.getElementById("show8").innerHTML = t8;
    document.getElementById("show9").innerHTML = t9;
    document.getElementById("show10").innerHTML = t10;
    document.getElementById("show11").innerHTML = t11;
    document.getElementById("show12").innerHTML = t12;
    document.getElementById("show13").innerHTML = t13;
    document.getElementById("col3-h-sp1").innerHTML = t14;
    document.getElementById("col3-h-sp2").innerHTML = t15;
    bb++;
    if (counter == 0 && ite == 1) {
      counter == 3;
      ite = 4;
      ep--;
    } else {
      counter--;
      ite--;
    }
    counterNext--;
  } else {
    window.alert("You can't do back iteration !");
  }
});

$(function () {
  $(".slider").on("input change", function () {
    $(this).next($(".slider_label")).html(this.value);
  });
  $(".slider_label").each(function () {
    var value = $(this).prev().attr("value");
    $(this).html(value);
  });
});
