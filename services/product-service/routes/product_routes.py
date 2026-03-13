from flask import Blueprint, request, jsonify
import os
from werkzeug.utils import secure_filename
from controllers.product_controller import ProductController

product_bp = Blueprint("products", __name__)
UPLOAD_FOLDER = "uploads"

@product_bp.route("/products", methods=["GET"])
def get_products():
    return jsonify(ProductController.get_products())

@product_bp.route("/products/<int:id>", methods=["GET"])
def get_product(id):
    return jsonify(ProductController.get_product_by_id(id))

@product_bp.route("/products", methods=["POST"])
def create_product():

    nombre = request.form.get("nombre")
    descripcion = request.form.get("descripcion")
    precio = request.form.get("precio")
    stock = request.form.get("stock")

    archivo = request.files.get("imagen")
    nombre_imagen = None

    if archivo and archivo.filename != "":
        nombre_imagen = secure_filename(archivo.filename)
        archivo.save(os.path.join("uploads", nombre_imagen))

    data = {
        "nombre": nombre,
        "descripcion": descripcion,
        "precio": precio,
        "stock": stock,
        "imagen": nombre_imagen
    }

    return ProductController.create_product(data)

@product_bp.route("/products/<int:id>", methods=["PUT"])
def update_product(id):

    nombre = request.form.get("nombre")
    descripcion = request.form.get("descripcion")
    precio = request.form.get("precio")
    stock = request.form.get("stock")

    archivo = request.files.get("imagen")
    nombre_imagen = None

    if archivo and archivo.filename != "":
        nombre_imagen = secure_filename(archivo.filename)
        archivo.save(os.path.join(UPLOAD_FOLDER, nombre_imagen))

    data = {
        "nombre": nombre,
        "descripcion": descripcion,
        "precio": precio,
        "stock": stock,
        "imagen": nombre_imagen
    }

    return ProductController.update_product(id, data)

@product_bp.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):
    return jsonify(ProductController.delete_product(id))