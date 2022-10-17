from pyautogui import press
from time import sleep
sleep(2)
for i in range(50):
    press('a')
    print('a')
    sleep(0.01)
    press('d')
    print('d')