from flask import Flask, request, render_template, jsonify, session
from boggle import Boggle

app = Flask(__name__)
app.config["SECRET_KEY"] = "notsosecret"

boggle_game = Boggle()

@app.route("/")
def homepage():
    """Show board"""

    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get("highscore", 0)
    num_of_plays = session.get("num_of_plays", 0)

    return render_template("index.html", board=board, highscore=highscore, num_of_plays=num_of_plays)

@app.route("/check-word")
def check_word():
    """Check if word is in dictionary"""

    word = request.args["word"]
    board = session["board"]
    response = boggle_game.check_valid_word(board, word)

    return jsonify({'result': response})

@app.route("/post-score", methods=["POST"])
def post_score():
    """Receive score, update num_of_plays, update high score if appropriate""" 

    score = request.json["score"]
    highscore = session.get("highscore", 0)
    num_of_plays = session.get("num_of_plays", 0)

    session["num_of_plays"] = num_of_plays + 1
    session["highscore"] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore)       