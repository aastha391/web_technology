class Vehicle{
  String? brand;
  String? model;

  Vehicle(this.brand,this.model);

  void printIn(){
    print('Vehicle brand is ${this.brand}');
    print("Vehicle model is : ${this.model}");
  }
}

class Car extends Vehicle{
  int? Year;
  String? Type;

  Car(String brand,String model,int year,String type)
    :super(brand,model);

    printInfo(){
      printIn();
      print("year :${Year}");
      print("Type: ${Type}");
    }
}

void main(){
   Car myCar = Car("Toyota", "Fortuner" ,1990 ,"Normal");
  myCar.printInfo();
}


