function transform(line) {
    var name = line;
    var obj = new Object();
    var splitname = name.split(" "); //split the line into 2

    obj.first_name = splitname[0]; //for BQ first_name field
    obj.last_name = splitname[1]; //for BQ last_name field

    var jsonString = JSON.stringify(obj);

    return jsonString;
}