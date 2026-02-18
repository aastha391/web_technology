import 'dart:io';

void main(){
  stdout.write("Enter the number : ");
  int num=int.parse(stdin.readLineSync()!);
  if(num%2==0){
    print("Even");
  }
  else{
    print("Odd");
  }
}