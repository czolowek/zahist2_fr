from flask import Flask, flash, render_template, redirect, url_for

from src.data import data_actions
from src.data.forms import RewiewForm

app = Flask(__name__, template_folder="src/templates")
app.secret_key = "3252"

@app.get("/")
def index():
    products = data_actions.get_products()
    return render_template("index.html", products=products)

@app.get("/products/<product_id>/")
def get_product(product_id):
    product = data_actions.get_product(product_id)
    return render_template("product.html", product=product)


@app.get("/buy_product/<product_id>/")
def buy_product(product_id):
    product= data_actions.get_product(product_id)
    flash(f"Вітає з покупкою '{product["name"]}'", category="succes")
    return redirect(url_for('index'))



if __name__ == "__main__":
    app.run(debug=True, port=5000)