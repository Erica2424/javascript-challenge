//from data.js
var tableData = data;
// YOUR CODE HERE!
const tbody = d3.select("tbody");



function buildTable(ufos) {
  tbody.html("");
 

  ufos.forEach(dataRow => {
    const row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);

    });
  });
}


function handleClick(){
    // filter
    filtereddate= [];
    
    user_input = d3.select('#datetime');
 
    user_value = user_input.property("value");

    if (user_value === "") {
      buildTable(tableData);
    } else {

    //console.log(tableData[100].datetime);


    for (let i = 0; i < tableData.length; i++) {
        console.log(tableData[i].datetime);
        if (user_value == tableData[i].datetime) {
           filtereddate.push(tableData[i]) 
        
        }
    }
    buildTable(filtereddate);
  }




}

d3.selectAll("#filter-btn").on("click", handleClick);


buildTable(tableData);
// YOUR CODE HERE!
