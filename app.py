from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("proposal.html")

@app.route("/weather")
def weather():
    return render_template("nws.html")