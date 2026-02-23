import 'dart:io';
class Student{
  String name="";
  int? rollNo;
  String? department;

  Student(String name,int rn,String depart){
    this.name=name;
    this.rollNo=rn;
    this.department=depart;
  }
}
void main(){
  Student s1=new Student("Aastha",001,"Computer Science");
  Student s2=new Student("Ahana",002,"Computer Science in AI");
  
}