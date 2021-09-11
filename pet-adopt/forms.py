from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, TextAreaField, SelectField
from wtforms.validators import InputRequired, Optional, URL, NumberRange, Length

class AddPetForm(FlaskForm):
  """Form for adding pets"""

  name = StringField("Name", validators=[InputRequired()])
  species = SelectField("Species", choices=[("cat", "Cat",), ("dog", "Dog"), ("porcupine", "Porcupine")])
  photo_url = StringField("Photo", validators=[URL(), Optional()])
  age = IntegerField("Age", validators=[Optional(), NumberRange(min=0, max=30)])
  notes = StringField("Notes", validators=[Optional()])
  available = BooleanField("Available")

class EditPetForm(FlaskForm):
  """Edit existing Pet"""

  photo_url = StringField("Photo URL", validators=[Optional(), URL()])
  notes = TextAreaField("Notes", validators=[Optional(), Length(min=10)])
  available = BooleanField("Available?")