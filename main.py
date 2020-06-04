from flask import Flask, render_template, request, redirect

app = Flask(__name__, template_folder='templates')


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/change_light', methods=['POST'])
def change_light():
    print('change_light function')
    return render_template("index.html")
    # your code
    # return a response


if __name__ == "__main__":
    app.run()
