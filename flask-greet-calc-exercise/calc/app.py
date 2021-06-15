from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def adding():
    """Add a and b parameters."""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    res = add(a,b)

    return str(res)

@app.route('/sub')
def subtract():
    """Subtract a and b parameters."""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    res = sub(a, b)

    return str(res)

@app.route('/mult')
def multiply():
    """Multiply a and b parameters."""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    res = mult(a, b)

    return str(res)

@app.route('/div')
def divide():
    """Divide a and b parameters."""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    res = div(a, b)

    return str(res)


operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}

@app.route("/math/<oper>")
def do_math(oper):
    """Do math on a and b."""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    res = operators[oper](a,b)

    return str(res)