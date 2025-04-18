import os
from typing import List, Union, Optional, Dict

from dotenv import load_dotenv
from flask import flash
import requests

load_dotenv()

#PROUD_URL = os.getenv("PRODUCT_URL")

PROUD_URL = "http://127.0.0.1:3000/api/products/"
USER_URI = "http://127.0.0.1:3000/api/users/"
def get_products(url: str = PROUD_URL) -> List[Dict]:
    return requests.get(url).json()


def get_product(product_id: str, url: str = PROUD_URL ) -> Dict:
    return requests.get(url + product_id).json()


def add_product(name: str, description: str, price: float, img_url: str, url: str = PROUD_URL ):
    body = dict(
        name = name,
        description = description,
        price = price,
        img_url = img_url,
    )

    msg = requests.post(url, json=body )
    flash(msg, category="succes")

def update_product(product_id: str, name: str,description:str,price: float, img_url: str, url: str = PROUD_URL):
    body = dict(
        name = name,
        description = description,
        price = price,
        img_url = img_url,
    )
    msg = requests.put(url + product_id, json=body)
    flash(msg, category="succes")

def add_review(product_id: str, text: str, url: str = PROUD_URL ) -> str:
    body = dict(text=text)
    msg = requests.patch(url + product_id, json = body)
    flash(msg, category="succes")