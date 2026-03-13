class ProductDTO:

    def __init__(self, product):
        self.id = product.id
        self.nombre = product.nombre
        self.precio = product.precio
        self.categoria = product.categoria
        self.descripcion = product.descripcion
        self.imagen = product.imagen
        self.stock = product.stock

    def to_dict(self):
        return self.__dict__