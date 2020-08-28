import python.mongoDB.Mongo_Interaction_Connect_Query as mongolib
import os
import time


try:
    db_link = (open("C:\\Users\\james\\Desktop\\db_info.txt", "r").read())[:-1]
except:
    print("if you want the  connection to mongodb to work change the db_link on line 11")


def upload_files():
    db = mongolib.DB_Connection(db_link)
    db.connect_Client()



    for subdir, queryType in (('css', mongolib.QueryCSS), ('img', mongolib.QueryImage), ('audio', mongolib.QueryMP3), ('js', mongolib.QueryJS), ('pages', mongolib.QueryHTML), ('php', mongolib.QueryPHP)):
        queryInstance = queryType(db.client)

        for filename in os.listdir(os.path.join(os.path.dirname(__file__), '../../../ProjectCrypto', subdir)):
            queryInstance.insert(os.path.join(os.path.join(os.path.dirname(__file__), '../../../ProjectCrypto', subdir, filename)))

            print(f'inserted {filename}')


def main():
    upload_files()

main()