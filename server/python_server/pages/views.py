from django.http import HttpResponse
from django.shortcuts import render
from database import connect

my = connect.connectSql()
mycursor = my.cursor()
data = mycursor.execute("SELECT * FROM shoppy.product")
print(mycursor)
print(data)
# Create your views here.
def home_view(*args,**kwargs):
    return HttpResponse ("<h1>hello world</h1>")
