from flask import Flask, render_template, request, redirect

app = Flask(__name__, template_folder='templates')

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

@app.route('/led')
def led():
    return render_template('led.html')

@app.route('/temperature')
def temperature():
    return render_template('temperature.html')

@app.route('/humidity')
def humidity():
    return render_template('humidity.html')

@app.route('/changeLight', methods=['POST'])
def changeLight():
    status = request.form['status']
    a_file = open("config.txt", "r")
    list_of_lines = a_file.readlines()
    index = -1
    count = 0
    for line in list_of_lines:
        if line.find("gpio-100:") != -1:
            index = count
        count += 1

    a_file = open("config.txt", "w")
    s = list_of_lines[index].split(":")
    list_of_lines[index] = s[0] + ":" + str(status) + "\n"
    a_file.writelines(list_of_lines)
    a_file.close()
    return status

@app.route('/readLight', methods=['GET'])
def readLight():
    a_file = open("config.txt", "r")
    list_of_lines = a_file.readlines()
    light = ''
    for line in list_of_lines:
        if line.find("gpio-100") != -1:
            light = line
    return light


@app.route('/readTemp', methods=['GET'])
def readTemp():
    a_file = open("config.txt", "r")
    list_of_lines = a_file.readlines()
    temp = ''
    for line in list_of_lines:
        if line.find("temp-101") != -1:
            temp = line
    return temp


@app.route('/readHum', methods=['GET'])
def readHum():
    a_file = open("config.txt", "r")
    list_of_lines = a_file.readlines()
    hum = ''
    for line in list_of_lines:
        if line.find("hum-102") != -1:
            hum = line
    return hum


if __name__ == "__main__":
    app.run()
