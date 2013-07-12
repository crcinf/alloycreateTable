function Controller() {
    function createTable() {
        var db = Ti.Database.open("codeguru");
        if (db) {
            db.execute("CREATE TABLE people (name TEXT, phone_number TEXT, city TEXT)");
            var thisName = "Arthur";
            var thisPhoneNo = "1-617-000-0000";
            var thisCity = "Mountain View";
            db.execute("INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)", thisName, thisPhoneNo, thisCity);
            var personArray = [ "Paul", "020 7000 0000", "London" ];
            db.execute("INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)", personArray);
            var rows = db.execute("SELECT rowid,name,phone_number,city FROM people");
            while (rows.isValidRow()) {
                Ti.API.info("Person ---> ROWID: " + rows.fieldByName("rowid") + ", name:" + rows.field(1) + ", phone_number: " + rows.fieldByName("phone_number") + ", city: " + rows.field(3));
                rows.next();
            }
            rows.close();
        }
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        text: "create table",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.create_table = Ti.UI.createButton({
        top: "100dp",
        id: "create_table",
        title: "Create Table"
    });
    $.__views.index.add($.__views.create_table);
    createTable ? $.__views.create_table.addEventListener("click", createTable) : __defers["$.__views.create_table!click!createTable"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.create_table!click!createTable"] && $.__views.create_table.addEventListener("click", createTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;