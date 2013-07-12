exports.definition = {
		config:{
			
			adapter:{
				"type":"sql",
				"collection_name":"codeguru",
				"db_file": "/codeguru.sqlite",
				"db_name": "codeguru",
				"idAttribute": "id",
				"remoteBackup":false
			}
		}
}