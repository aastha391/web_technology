//MIXIN 
//A mixin is a way to reuse code in multiple classes without using inheritance.
//with mixin we use with
// mixin Swimmer{
//   void swim(){
//     print("Swimming");
//   }
// }

// mixin Runner{
//   void run(){
//     print("Running");
//   }
// }

// class Athlete with Swimmer,Runner{}
// void main(){
//   Athlete a=Athlete();
//   a.swim();
//   a.run();
// }

//FUTURE AND AWAIT
Future<String> fetchData(){
  return Future.delayed(
    Duration(seconds: 2),
    () => "Data Loaded",
  );
}

void main() async{
  print("Loading..");
  String result=await fetchData();
  print(result);
}
