let myParent = document.getElementsByClassName("container")[1];
let end = document.querySelectorAll(".end");
let final = new Array();
let PYES = 0;
let PNO = 0;
let count = 0;
let numberOfItem = 0;
let item;
let finalValueOfRow = 0;
let name1 = 0;
let name2 = 0;
let outputInfo = [];

function find() {
  if (count < numberOfItem) {
    let bttn = document.getElementById(`bttn${count}`);
    for (let i = 0; i < final.length; i++) {
      let select = document.getElementById(`mySelect${count}`);
      item = select.options[select.selectedIndex].value;
      if (final[i] == item) {
        PYES *= final[i + 1];
        PNO *= final[i + 2];
        console.log(final[i + 1], final[i + 2], PYES, PNO);
      }
    }
    bttn.classList.add("show");
    count++;
    if (count == numberOfItem) {
      document.getElementById("result1").innerHTML = `P(Yes|X) = ${Number(
        PYES.toFixed(5)
      )}`;
      document.getElementById("result2").innerHTML = `P(No|X) = ${Number(
        PNO.toFixed(5)
      )}`;
      if (PYES > PNO) {
        document.getElementById(
          "result3"
        ).innerHTML = ` ${finalValueOfRow} = ${name1}`;
      } else {
        document.getElementById(
          "result3"
        ).innerHTML = `${finalValueOfRow} = ${name2}`;
      }
      //for (let i = 0; i < numberOfItem; i++) end[i].classList.add("border");
    }
  } else {
    window.alert("You see the final value");
    console.log(count);
  }
}

function clearData() {
  for (let i = 0; i < numberOfItem; i++) {
    let bttn = document.getElementById(`bttn${i}`);
    bttn.classList.remove("show");
  }
  count = 0;
  document.getElementById("result1").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result3").innerHTML = "";
  console.log(count);
  console.log(outputInfo);
  if (outputInfo[0][0] == "Yes") {
    name1 = outputInfo[0][0];
    name2 = outputInfo[1][0];
    PYES = outputInfo[0][1];
    PNO = outputInfo[1][1];
  } else {
    name1 = outputInfo[1][0];
    name2 = outputInfo[0][0];
    PYES = outputInfo[1][1];
    PNO = outputInfo[0][1];
  }
}

const excel_file = document.getElementById("excel_file");
// Convet Excel Sheet to HTML table
excel_file.addEventListener("change", (event) => {
  if (
    ![
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ].includes(event.target.files[0].type)
  ) {
    document.getElementById("excel_data").innerHTML =
      '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';

    excel_file.value = "";

    return false;
  }

  var reader = new FileReader();

  reader.readAsArrayBuffer(event.target.files[0]);

  reader.onload = function (event) {
    var data = new Uint8Array(reader.result);

    var work_book = XLSX.read(data, { type: "array" });

    var sheet_name = work_book.SheetNames;

    var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {
      header: 1,
    });
    console.log(sheet_data);
    for (let i = 0; i < sheet_data.length; i++) {
      for (let j = 0; j < sheet_data[i].length; j++) {
        finalValueOfRow = sheet_data[i][j];
      }
      break;
    }
    console.log(finalValueOfRow);
    if (sheet_data.length > 0) {
      var table_output = '<table class="table table-striped table-bordered">';

      for (var row = 0; row < sheet_data.length; row++) {
        table_output += "<tr>";

        for (var cell = 0; cell < sheet_data[row].length; cell++) {
          if (row == 0) {
            table_output += "<th>" + sheet_data[row][cell] + "</th>";
          } else {
            table_output += "<td>" + sheet_data[row][cell] + "</td>";
          }
        }

        table_output += "</tr>";
      }

      table_output += "</table>";

      document.getElementById("excel_data").innerHTML = table_output;
    }

    excel_file.value = "";
    //
    Naive(sheet_data);
    //
  };
});

let inputInfo;
let allDup = new Array();

function Naive(array) {
  // cols && rows Number
  let colsNumber = array[0].length;
  let rowsNumber = array.length;
  console.log(colsNumber);
  console.log(rowsNumber);
  // Take all information about output
  let outputArray = [];
  for (let i = 1; i < rowsNumber; i++) {
    outputArray.push(array[i][colsNumber - 1]);
  }
  // Take the uniqes and calculate the repeat them
  let noDupResult = new Set(outputArray);
  noDupResult = [...noDupResult];
  let countResult = new Array(noDupResult.length);
  countResult.fill(0);
  for (let i = 0; i < outputArray.length; i++) {
    for (let j = 0; j < noDupResult.length; j++) {
      if (noDupResult[j] == outputArray[i]) {
        ++countResult[j];
      }
    }
  }
  // Possibilities for output
  outputInfo = [];
  for (let i = 0; i < noDupResult.length; i++) {
    outputInfo.push([
      noDupResult[i],
      countResult[i] / (array.length - 1),
      countResult[i],
    ]);
  }
  if (outputInfo[0][0] == "Yes") {
    name1 = outputInfo[0][0];
    name2 = outputInfo[1][0];
    PYES = outputInfo[0][1];
    PNO = outputInfo[1][1];
  } else {
    name1 = outputInfo[1][0];
    name2 = outputInfo[0][0];
    PYES = outputInfo[1][1];
    PNO = outputInfo[0][1];
  }

  //console.log(outputArray);
  inputInfo = [];
  for (let i = 1; i < colsNumber - 1; i++) {
    let newArray = [];
    for (let j = 1; j < rowsNumber; j++) {
      newArray.push(array[j][i]);
      console.log(newArray);
    }
    let noDup = new Set(newArray);
    noDup = [...noDup];
    allDup.push(noDup);
    let count = new Array(noDup.length);
    count.fill(0);
    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < count.length; j++) {
        if (newArray[i] == noDup[j]) {
          ++count[j];
          console.log(noDup[0], count[0]);
          console.log(noDup[1], count[1]);
          break;
        }
      }
    }
    let inputsCount = new Array();
    for (let i = 0; i < noDup.length; i++) {
      let array = new Array(outputInfo.length);
      inputsCount.push(array);
    }
    inputsCount.forEach((item) => item.fill(0));
    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < noDup.length; j++) {
        for (let k = 0; k < outputInfo.length; k++) {
          if (outputInfo[k][0] == outputArray[i] && noDup[j] == newArray[i]) {
            inputsCount[j][k]++;
          }
        }
      }
    }
    inputInfo.push(inputsCount);
    console.log(inputInfo);
  }
  //Create and append select list
  for (let i = 0; i < allDup.length; i++) {
    let selectList = document.createElement("select");
    let btn = document.createElement("button");
    let div = document.createElement("div");
    selectList.id = `mySelect${i}`;
    myParent.appendChild(div);
    div.appendChild(selectList);
    numberOfItem++;
    div.appendChild(btn);
    btn.innerText = "SET";
    btn.id = `bttn${i}`;
    btn.setAttribute("onclick", "find()");
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    if (i == allDup.length - 1) {
      let btn = document.createElement("button");
      let div = document.createElement("div");
      myParent.appendChild(div);
      div.appendChild(btn);
      btn.innerText = "Reset";
      btn.id = `bttn${i + 1}`;
      btn.setAttribute("onclick", "clearData()");
      div.appendChild(document.createElement("br"));
      div.appendChild(document.createElement("br"));
    }
  }
  //Create and append the options
  let c = 0;
  for (let i = 0; i < allDup.length; i++) {
    for (let j = 0; j < allDup[i].length; j++) {
      let option = document.createElement("option");
      option.value = allDup[i][j];
      option.text = allDup[i][j];
      option.id = `op${c}`;
      document.getElementById(`mySelect${i}`).appendChild(option);
      c++;
    }
  }
  for (let i = 0; i < inputInfo.length; i++) {
    for (let j = 0; j < inputInfo[i].length; j++) {
      for (let k = 0; k < inputInfo[i][j].length; k++) {
        inputInfo[i][j][k] /= outputInfo[k][2];
      }
    }
  }
  console.log(inputInfo);
  let d = 0;
  for (let i = 0; i < inputInfo.length; i++) {
    for (let j = 0; j < inputInfo[i].length; j++) {
      final.push(document.getElementById(`op${d++}`).value);
      for (let k = 0; k < inputInfo[i][j].length; k++) {
        final.push(inputInfo[i][j][k]);
      }
    }
  }
}
