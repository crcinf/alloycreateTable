exports.definition = {
    config: {
        adapter: {
            type: "sql",
            collection_name: "codeguru",
            db_file: "/codeguru.sqlite",
            db_name: "codeguru",
            idAttribute: "id",
            remoteBackup: false
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("codeguru", exports.definition, []);

collection = Alloy.C("codeguru", exports.definition, model);

exports.Model = model;

exports.Collection = collection;