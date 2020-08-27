import pymongo
import python.mongoDB.Mongo_Interaction_Connect_Query as mongolib

client = pymongo.MongoClient(open("C:\\Users\\james\\Desktop\\db_info.txt").read())
db = client.test
q = mongolib.QueryHTML(client).insert("C:\\Users\\james\\Desktop\\db_info.txt")
print(db)
