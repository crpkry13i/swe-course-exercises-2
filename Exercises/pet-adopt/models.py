from flask_sqlalchemy import SQLAlchemy
from forms import AddPetForm

BASE_IMAGE = "https://click2kemah.com/directory/wp-content/uploads/2019/04/No-image-available.jpg"

db = SQLAlchemy()

def connect_db(app):
  """Connect to database"""
  db.app = app
  db.init_app(app)

class Pet(db.Model):
  "Pet Model"

  __tablename__ = 'pets'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.Text, nullable=False)
  species = db.Column(db.Text, nullable=False)
  photo_url = db.Column(db.Text, nullable=True)
  age = db.Column(db.Integer, nullable=True)
  notes = db.Column(db.Text, nullable=True)
  available = db.Column(db.Boolean, nullable=False, default=True)

  def image_url(self):
    """Image for Pet Model"""

    return self.photo_url or BASE_IMAGE
