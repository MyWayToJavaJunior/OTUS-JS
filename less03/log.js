/*
� ����� log.js ����� ������� � �������������� ��������� EventEmitter. 
���� ������ ������ ����� listener �� ������� 'request', ������� ����� 
�������� � ������� ��������� ��������� - ������� request (��������, url �������).
*/

var EventEmitter = require('events').EventEmitter;

module.exports = new EventEmitter();


//export.on('request', (data)=> console.log('Client`s request:'+data));

module.exports.On = (txt) => {
	module.exports.on('request', (txt)=> {
		console.count();
		console.log('log.js: %s', txt)
	});
}

module.exports.Add = (txt) => module.exports.emit('request', txt);

