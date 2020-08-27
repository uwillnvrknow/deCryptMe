import pymongo
import logging
import os
import bson

#enter address for cluster here:
cluster_address = open("C:\\Users\\james\\Desktop\\db_info.txt").read()

class DB_Connection:
    """
    connection object
    """

    def __init__(self, addr=None):
        self.address = addr
        self.port = 27017
        #27017 is default port for mongodb
        self.client = None


    def connect_Client(self):
        try:
            self.client = pymongo.MongoClient(self.address)
        except:
            logging.error("couldn't connect to address given")





class Query:
    """"
    query object.
    an instance of DB_connection is passed in upon an instance of Query's creation
    """
    database = 'webpage'
    collection = None
    payloadKey = "ERROR"

    def __init__(self, client_in):
        self.client = client_in

    def insert(self, pathToHtml):
        with open(pathToHtml, 'r') as html:
            try:
                contents = html.read()
                filename = os.path.basename(pathToHtml)
                self.client[self.database][self.collection].insert_one({'name': filename, self.payloadKey: contents})
            except:
                print("error uploading")

    def getOne(self, filename):
        payload = self.client[self.database][self.collection].find_one({'name': filename})[self.payloadKey]
        print(f'serving {filename}')
        return payload


class QueryImage(Query):
    collection = 'ímages'
    payloadKey = 'ímage'

    """"
    stores image as BSON object
    """

    def insert(self, pathToImage):
        with open(pathToImage, 'rb') as image:
            contents = image.read()
            filename = os.path.basename(pathToImage)
            self.client[self.database][self.collection].insert_one({'name': filename, self.payloadKey: bson.Binary(contents)})

class QueryMP3(QueryImage):
    collection = 'audio'
    payloadKey = 'mp3'





class QueryHTML(Query):
    collection = 'html'
    payLoadKey = 'html'

class QueryCSS(Query):
    collection = 'css'
    payloadKey = 'css'

class QueryJS(Query):
    collection = 'js'
    payloadKey = 'javaScript'

class QueryPHP(Query):
    collection = 'php'
    payloadKey = 'php'


def main():
    #example below
    """"
    db = DB_Connection()
    db.address = cluster_address
    db.connect_Client()

    q = Query(db.client)
    q.change_db("test")
    q.insert('testcoll', {'akey': 'avalue', 'other': 'stuff'})


    i = q.getOne('testcoll', {'akey': 'avalue'})
    print(i)
    """


main()