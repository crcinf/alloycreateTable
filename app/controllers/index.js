function createTable(e) {  
	var db = Ti.Database.open('codeguru');
	if(db){
		db.execute('CREATE TABLE people (name TEXT, phone_number TEXT, city TEXT)');
		var thisName = 'Arthur';
		var thisPhoneNo = '1-617-000-0000';
		var thisCity = 'Mountain View';
		db.execute('INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)', thisName, thisPhoneNo, thisCity);

		var personArray = ['Paul','020 7000 0000', 'London'];
		db.execute('INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)', personArray);

		var rows = db.execute('SELECT rowid,name,phone_number,city FROM people');
		while (rows.isValidRow())
		{
		  Ti.API.info('Person ---> ROWID: ' + rows.fieldByName('rowid') + ', name:' + rows.field(1) + ', phone_number: ' + rows.fieldByName('phone_number') + ', city: ' + rows.field(3));
		  rows.next();
		}
		rows.close();
	}
    alert($.label.text);
}

$.index.open();
