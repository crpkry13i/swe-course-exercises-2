from flask import Flask, request, render_template, flash, session, redirect, url_for
from forex_python.converter import CurrencyRates

app = Flask(__name__)
app.config['SECRET_KEY'] = "secretkey"

c = CurrencyRates()
fx_rates = c.get_rates('USD')


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('home.html')


@app.route("/result", methods=['GET', 'POST'])
def forex_convert():
    forex_from = (request.form.get('forex_from').upper())
    forex_to = (request.form.get('forex_to').upper())
    amount = float(request.form.get('amount'))
    if forex_from == 'USD' and forex_to == 'USD':
        return render_template('result.html', forex_from=forex_from, forex_to=forex_to, amount=amount)
    elif forex_from == 'USD' and forex_to != 'USD':
        return render_template('result.html', forex_from=forex_from, forex_to=forex_to, amount=amount * fx_rates[forex_to])
    elif forex_from != 'USD' and forex_to == 'USD':
        return render_template('result.html', forex_from=forex_from, forex_to=forex_to, amount=amount / fx_rates[forex_from])
    else:
        return render_template('result.html', forex_from=forex_from, forex_to=forex_to, amount=amount / fx_rates[forex_from] * fx_rates[forex_to])
