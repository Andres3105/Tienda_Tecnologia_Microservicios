from models.product_model import Product
from config.database import db


class ProductController:

    @staticmethod
    def get_products():
        products = Product.query.all()

        return [
            {
                "id": p.id,
                "nombre": p.nombre,
                "descripcion": p.descripcion,
                "precio": p.precio,
                "stock": p.stock,
                "imagen": p.imagen
            }
            for p in products
        ]

    @staticmethod
    def get_product_by_id(id):
        product = Product.query.get(id)
        if not product:
            return {"message": "Producto no encontrado"}
        
        return {
            "id": product.id,
            "nombre": product.nombre,
            "descripcion": product.descripcion,
            "precio": product.precio,
            "stock": product.stock,
            "imagen": product.imagen
        }

    @staticmethod
    def create_product(data):

        product = Product(
            nombre=data.get("nombre"),
            descripcion=data.get("descripcion"),
            precio=data.get("precio"),
            stock=data.get("stock"),
            imagen=data.get("imagen")
        )

        db.session.add(product)
        db.session.commit()

        return {"message": "Producto creado"}


    @staticmethod
    def update_product(id, data):

        product = Product.query.get(id)

        if not product:
            return {"message": "Producto no encontrado"}

        product.nombre = data.get("nombre")
        product.descripcion = data.get("descripcion")
        product.precio = data.get("precio")
        product.stock = data.get("stock")

        db.session.commit()

        return {"message": "Producto actualizado"}


    @staticmethod
    def delete_product(id):

        product = Product.query.get(id)

        if not product:
            return {"message": "Producto no encontrado"}

        db.session.delete(product)
        db.session.commit()

        return {"message": "Producto eliminado"}