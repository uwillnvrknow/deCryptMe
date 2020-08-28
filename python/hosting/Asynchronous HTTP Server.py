from pyfiglet import figlet_format
import python.mongoDB.Mongo_Interaction_Connect_Query as mongolib
from aiohttp import web
import os.path
import os

#while running will host on: http://localhost:8080/index.html

async def handler_file(request):
    request_type = ((request.path).split("."))[-1]

    if 'png' == request_type:
        filepath = os.path.join(os.path.dirname(__file__), '../../../ProjectCrypto', 'img', os.path.basename(request.path))
        return web.Response(body=open(filepath, "rb").read(), content_type="image/png")

    else:
        try:
            container_file = request_type
            if request_type == "html":
                container_file = "pages"

            filepath = os.path.join(os.path.dirname(__file__), '../../../ProjectCrypto', container_file, os.path.basename(request.path))
            return web.Response(body=open(filepath, "r").read(), content_type=f"{request_type}")
        except:
            print(f"file : {request.path} not found")
            if request_type == "html":
                filepath = os.path.join(os.path.dirname(__file__), '../../../ProjectCrypto', 'pages', "contact.html")
                return web.Response(body=open(filepath, "r").read(), content_type="text/html")




    print(f'GOT request for {request.path}')
    return web.Response()

async def handler_mongodb(request):
    request_type = ((request.path).split("."))[-1]
    request_file = ((request.path).split("/"))[-1]

    db_link = (open("C:\\Users\\james\\Desktop\\db_info.txt", "r").read())[:-1]
    db = mongolib.DB_Connection(db_link)
    db.connect_Client()


    try:
        if 'png' == request_type:
            return web.Response(body=mongolib.QueryImage(db.client).getOne(request_file),
                                content_type=f"{request_type}")
        if 'css' == request_type:
            query_type = mongolib.QueryCSS
        if 'js' == request_type:
            query_type = mongolib.QueryJS
        if 'html' == request_type:
            query_type = mongolib.QueryHTML
        if 'php' == request_type:
            query_type = mongolib.QueryPHP
        if 'mp3' == request_type:
            query_type = mongolib.QueryMP3

        return web.Response(body=query_type(db.client).getOne(request_file), content_type=f"{request_type}")
    except:
        print(f"file : {request.path} not found")
        if request_type == "html":
            filepath = os.path.join(os.path.dirname(__file__), '../../../ProjectCrypto', 'pages', "contact.html")
            return web.Response(body=open(filepath, "r").read(), content_type="text/html")




    print(f'GOT request for {request.path}')
    return web.Response()


def main():

    print(figlet_format('DeCryptMe', font='starwars'))
    app = web.Application()

    app.router.add_route('GET', '/{tail:.*}', handler_mongodb)

    web.run_app(app)

main()