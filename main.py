from flask import Flask, render_template, request, redirect
from flask_cors import CORS

app = Flask(__name__, template_folder='templates')
CORS(app)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("index.html", _anchor="about")

@app.route('/services')
def services():
    return render_template("index.html", _anchor="services")

@app.route('/team')
def team():
    return render_template("index.html", _anchor="team")

@app.route('/contact')
def contact():
    return render_template("index.html", _anchor="contact")

@app.route('/light')
def light():
    return render_template('light.html')

@app.route('/temperature')
def temperature():
    return render_template('temperature.html')

@app.route('/humidity')
def humidity():
    return render_template('humidity.html')


@app.route('/changeLight', methods=['POST'])
def changeLight():
    status = request.form['status']
    a_file = open("/sys/class/gpio/gpio24/value", "w")
    a_file.writelines(status)
    a_file.close()
    return status

@app.route('/readLight', methods=['GET'])
def readLight():
    a_file = open("/sys/class/gpio/gpio24/value", "r")
    list_light = a_file.readlines()
    light = list_light[0]
    return light


@app.route('/readTemp', methods=['GET'])
def readTemp():
    a_file = open("temp.txt", "r")
    list_of_lines = a_file.readlines()
    temp = list_of_lines[0]
    return temp


@app.route('/readHum', methods=['GET'])
def readHum():
    a_file = open("humidity.txt", "r")
    list = a_file.readlines()
    humidity = list[0]
    return humidity


if __name__ == "__main__":
    app.run()
