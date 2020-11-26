import mysql.connector
mydb=mysql.connector.connect(host="localhost",user="root",password="root",database="shoppy")
git=mydb.cursor()

  
mycursor.execute("SELECT * FROM product")



for db in mycursor: 
    print(db)