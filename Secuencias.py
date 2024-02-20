import sys
import serial
import time

ser = serial.Serial("/dev/ttyACM1", 9600)

while True:
    Valor = sys.argv[1]
    Decimal = sys.argv[2]
    if Valor != 0:
        Valor = sys.argv[1]
        ser.write(str(Valor).encode())
        ser.write('\n'.encode())
        ser.flushInput  