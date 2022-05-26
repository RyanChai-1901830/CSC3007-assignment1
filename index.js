// api url
const api_url = "https://api.data.gov.sg/v1/environment/psi";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();

    // Display JSON data into table
    display_data(data);
    console.log(data);
    console.log(data.items[0].update_timestamp);
    // console.log("space");
    // console.log(data.region_metadata[0]);
    // console.log("space 2");
    // console.log(data.items[0].readings.co_eight_hour_max.west);
}
// Calling that async function
getapi(api_url);

// Display api json data into table & updated datetime, take note of ` ` 
function display_data(data) {
    // Create table header
    let tableheader = `<tr> 
                            <th>Metric</th> 
                            <th>National</th> 
                            <th>Central</th> 
                            <th>West</th> 
                            <th>East</th> 
                            <th>North</th> 
                            <th>South</th> 
                        </tr>`;

    // Data from json key readings
    bodydata = data.items[0].readings;

    let tablebody = ``;

    // Make use of key value pair to get the data
    for (var key in bodydata) {

        tablebody += `<tr>
                        <td>${key}</td>
                        <td>${bodydata[key].national}</td>
                        <td>${bodydata[key].central}</td>
                        <td>${bodydata[key].west}</td>
                        <td>${bodydata[key].east}</td>
                        <td>${bodydata[key].north}</td>
                        <td>${bodydata[key].south}</td>
                    </tr>`;
    }

    let table = tableheader + tablebody;

    var updated_date_time = data.items[0].update_timestamp;

    updated_date_time = new Date(updated_date_time).toLocaleString();

    console.log("datetime" + updated_date_time.toLocaleString());

    // Setting innerHTML for table
    document.getElementById("table-data").innerHTML = table;
    document.getElementById("datetime").innerHTML += updated_date_time;
}