int Led1=12;
int Led2=11;
int Led3=10;
int Led4=9;
int Led5=8;
int Led6=7;
int Led7=6;
int Led8=5;
int msg;
void setup() 
{
  pinMode(Led1, OUTPUT);
  pinMode(Led2, OUTPUT);
  pinMode(Led3, OUTPUT);
  pinMode(Led4, OUTPUT);
  pinMode(Led5, OUTPUT);
  pinMode(Led6, OUTPUT);
  pinMode(Led7, OUTPUT);
  pinMode(Led8, OUTPUT);
  Serial.begin(9600);
}
void loop() 
{
    msg = Serial.parseInt();  
    if (Serial.available() > 0)
    {
    switch (msg) 
    {
     case 1:
     //Encender todo
     digitalWrite(Led1, HIGH);
     digitalWrite(Led2, HIGH);
     digitalWrite(Led3, HIGH);
     digitalWrite(Led4, HIGH);
     digitalWrite(Led5, HIGH);
     digitalWrite(Led6, HIGH);
     digitalWrite(Led7, HIGH);
     digitalWrite(Led8, HIGH);
     delay(3000);
     //Apagar 1
     digitalWrite(Led8, LOW);
     delay(1000);
     //Apagar 2
     digitalWrite(Led7, LOW);
     delay(1000);
     //Apagar 3
     digitalWrite(Led6, LOW);
     delay(1000);
     //Apagar 4
     digitalWrite(Led5, LOW);
     delay(1000);
     //Apagar 5
     digitalWrite(Led4, LOW);
     delay(1000);
     //Apagar 6
     digitalWrite(Led3, LOW);
     delay(1000);
     //Apagar 7
     digitalWrite(Led2, LOW);
     delay(1000);
     //Apagar 8
     digitalWrite(Led1, LOW);
     delay(1000);
     break;
     
     case 2:
     //Paso 1
     digitalWrite(Led1, HIGH);
     digitalWrite(Led2, LOW);
     digitalWrite(Led3, HIGH);
     digitalWrite(Led4, LOW);
     digitalWrite(Led5, HIGH);
     digitalWrite(Led6, LOW);
     digitalWrite(Led7, HIGH);
     digitalWrite(Led8, LOW);
     delay(1000);
     digitalWrite(Led1, LOW);
     digitalWrite(Led2, HIGH);
     digitalWrite(Led3, LOW);
     digitalWrite(Led4, HIGH);
     digitalWrite(Led5, LOW);
     digitalWrite(Led6, HIGH);
     digitalWrite(Led7, LOW);
     digitalWrite(Led8, HIGH);
     delay(1000);
     break;  
        
     case 3:
     digitalWrite(Led7, LOW);
     digitalWrite(Led8, LOW);
     digitalWrite(Led1, HIGH);
     digitalWrite(Led2, HIGH);
     delay(1000);  
     digitalWrite(Led1, LOW);
     digitalWrite(Led2, LOW);
     digitalWrite(Led3, HIGH);
     digitalWrite(Led4, HIGH);
     delay(1000);
     digitalWrite(Led3, LOW);
     digitalWrite(Led4, LOW);
     digitalWrite(Led5, HIGH);
     digitalWrite(Led6, HIGH);
     delay(1000);
     digitalWrite(Led5, LOW);
     digitalWrite(Led6, LOW);
     digitalWrite(Led7, HIGH);
     digitalWrite(Led8, HIGH);
     delay(1000);
     break;

     case 4:
     digitalWrite(Led4, HIGH);
     digitalWrite(Led5, HIGH); 
     delay(1000);
     digitalWrite(Led3, HIGH);
     digitalWrite(Led6, HIGH);
     digitalWrite(Led4, LOW);
     digitalWrite(Led5, LOW);      
     delay(1000);
     digitalWrite(Led2, HIGH);
     digitalWrite(Led7, HIGH);
     digitalWrite(Led3, LOW);
     digitalWrite(Led6, LOW);      
     delay(1000);
     digitalWrite(Led1, HIGH);
     digitalWrite(Led8, HIGH);
     digitalWrite(Led2, LOW);
     digitalWrite(Led7, LOW);      
     delay(1000);
     digitalWrite(Led1, LOW);
     digitalWrite(Led8, LOW);
     digitalWrite(Led2, HIGH);
     digitalWrite(Led7, HIGH);      
     delay(1000);
     digitalWrite(Led2, LOW);
     digitalWrite(Led7, LOW);
     digitalWrite(Led3, HIGH);
     digitalWrite(Led6, HIGH);      
     delay(1000);
     digitalWrite(Led3, LOW);
     digitalWrite(Led6, LOW);
     digitalWrite(Led4, HIGH);
     digitalWrite(Led5, HIGH);      
     delay(1000);
     break;

     case 5:
     digitalWrite(Led5, LOW);
     digitalWrite(Led6, LOW);
     digitalWrite(Led7, LOW);
     digitalWrite(Led8, LOW);
     digitalWrite(Led1, HIGH);
     digitalWrite(Led2, HIGH);
     digitalWrite(Led3, HIGH);
     digitalWrite(Led4, HIGH);
     delay(1000);
     digitalWrite(Led1, LOW);
     digitalWrite(Led2, LOW);
     digitalWrite(Led3, LOW);
     digitalWrite(Led4, LOW);
     digitalWrite(Led5, HIGH);
     digitalWrite(Led6, HIGH);
     digitalWrite(Led7, HIGH);
     digitalWrite(Led8, HIGH);
     delay(1000);
     break;

     case 6:
     digitalWrite(Led1, LOW);
     digitalWrite(Led2, LOW);
     digitalWrite(Led3, LOW);
     digitalWrite(Led4, LOW);
     digitalWrite(Led5, LOW);
     digitalWrite(Led6, LOW);
     digitalWrite(Led7, LOW);
     digitalWrite(Led8, LOW);
     delay(1000);   
     break;
    }
  }    
}