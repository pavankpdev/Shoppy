import os
import mysql.connector
env = os.environ.get("PYTHON_ENV")

def connectSql():    
    if(env =="production"):
        mydb=mysql.connector.connect(host="shoppy-db.cexukr3eruop.ap-south-1.rds.amazonaws.com",user="root",password="shoppy_password",database="shoppy")
    else:
        mydb=mysql.connector.connect(host="localhost",user="root",password="root",database="shoppy")

    return mydb
    
    
    return mycursor

# mycursor.execute("SELECT * FROM product")
