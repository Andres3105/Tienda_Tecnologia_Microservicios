from config.database import db

class Product(db.Model):

    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    precio = db.Column(db.Float)
    categoria = db.Column(db.String(50))
    descripcion = db.Column(db.String(255))
    imagen = db.Column(db.String(255))
    stock = db.Column(db.Integer)