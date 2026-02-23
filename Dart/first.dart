import 'dart:io';

void main(){
//---dynamic keyword
dynamic x=10;
print(x);

//? means allows null values
String? name;
final time=DateTime.now();//final is runtime and const is compile time and const is more memory efficient
//final time="Abhi"; will show error as time is already defined
final time2=DateTime.now();
print(time);

const abc="abc";
const xyz="abc";
print("Put some input");
var readLineSync=stdin.readLineSync();

print("The value is: "+readLineSync.toString());

void test(){
  print("test");
}
test();

}