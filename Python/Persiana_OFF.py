import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(27, GPIO.OUT)

GPIO.output(27, 0)

GPIO.cleanup()
