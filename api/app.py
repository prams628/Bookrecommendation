import logging as logger
from flask import Blueprint, jsonify, request
import pandas as pd
from .GoodReadsGraph import BuildGraph

main = Blueprint('main', __name__)
logger.debug("App starting")

BigGraph, titles_dict = BuildGraph()
logger.debug("Graph is built service")

books = pd.read_csv("api/data/goodbooks-10k-master/books.csv")

output_URL = ""
output_URL2 = ""
output_URL1 = ""
ids = []
titles = []
seperator = ";"

@main.route('/input_book', methods=['POST'])
def input_book():
    # We get a request from our React App
    logger.debug("Starting service")
    _book = request.get_json()
    # We extract the title from our JSON
    _book_title = str(_book["title"])
    logger.debug("book: ", _book_title)
    # We use our dictionary to pull out a book Object
    try:
        _book_object = titles_dict[_book_title.lower()]["Book"]
        logger.debug(_book_object)
        # Grab the first set of entries, return it
        book_list = BigGraph.book2book(_book_object, N=5)

        # Set the global url to be the large version of the input url
        global output_URL, seperator
        for i in book_list:
            titles.append(i.title)
        output_URL = ";".join(titles)
        # Return the image URL to be displayed on our app
        #    NB: POST does not support anything else.
        return "Done", 201
    except Exception as e:
        logger.warning("Encountered exception: ", e)
        return "Error", 400

@main.route('/novel_novel', methods=['GET'])
def novel_novel():
    logger.debug("GET method returning output_url")
    return jsonify({"original_title": output_URL}), 200
