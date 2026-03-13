import os
from flask import Flask
from flask_cors import CORS
from flask import send_from_directory
from config.database import db
from routes.product_routes import product_bp

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///products.db"

db.init_app(app)

CORS(app)

app.register_blueprint(product_bp)

@app.route("/")
def home():
    return {"message": "API Tienda Tecnologia funcionando"}

UPLOAD_FOLDER = "uploads"

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True, port=5000)