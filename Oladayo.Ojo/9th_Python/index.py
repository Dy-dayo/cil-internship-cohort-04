

# import module
from copy import copy
from PIL import Image


myImg = Image.open('C:\Users\Alfa\Desktop\Dayo_work\Cil_Assessment\cil-internship-cohort-04\Oladayo.Ojo\images\Bikers.jpg')



def copyResize(myImg, w, h):
    copy = Image.open('img')
    resize = ((w,h))
    save = resize.save()
    show = resize.show()
    return show


copyResize(myImg, 200, 400)

