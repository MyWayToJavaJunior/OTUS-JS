/*
�������� polyfill ��� ������� Object.create.
�������� Mozilla.org
Object.create(proto --- ��������
[, propertiesObject] --- ���������� �������
)
*/
const newObject = function(Obj, extProp) {
// �������� �����������
const Temp = function() {};

//  ��������  ��������� ���������� Object.prototype.hasOwnProperty
var hasOwn = Object.prototype.hasOwnProperty;
// 1. ���������, ��� ������ ��������
if (typeof Obj != 'object') {
throw TypeError('Object prototype may only be an Object or null');
}
//console.log( Obj, typeof Obj);
var obj = {};
obj.proto = Obj; // ������� ����� ������ �� ������ Obj
//console.log( obj);
// ������������ ������� �������� ���������� �������, ��� �� �������
if ( extProp|| 1 !== 1) {
var Properties = Object(extProp);
for (var prop in Properties) {
if (hasOwn.call(Properties, prop)) {
obj[prop] = Properties[prop];
}
}
}
return obj;
};

var tstObj = newObject( {w:123});
console.log( "tstObj = %o", tstObj.proto);
console.dir( tstObj);