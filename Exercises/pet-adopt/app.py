from flask import Flask, request, render_template, redirect, flash, session, url_for
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_adopt_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = '12345'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home_page():
  """Shows home page"""
  pets = Pet.query.all()
  return render_template('index.html', pets=pets)


@app.route('/add', methods=["GET", "POST"])
def add_pet():
  """Pet add form; handle adding"""
  
  form = AddPetForm()

  if form.validate_on_submit():
    name = form.name.data
    species = form.species.data
    photo_url = form.photo_url.data
    age = form.age.data
    notes = form.notes.data
    available = form.available.data

    new_pet = Pet(name=name, species=species, photo_url=photo_url, age=age, notes=notes, available=available)
    db.session.add(new_pet)
    db.session.commit()

    flash(f"Successfully added {name}!")
    return redirect(url_for('home_page'))
  return render_template("add_pet_form.html", form=form)


@app.route('/<int:pet_id>', methods=["GET", "POST"])
def edit_pet(pet_id):
  """Show details about a single pet"""
  pet = Pet.query.get_or_404(pet_id)
  form = EditPetForm(obj=pet)

  if form.validate_on_submit():
    pet.notes = form.notes.data
    pet.available = form.available.data
    pet.photo_url = form.photo_url.data
    db.session.commit()
    flash(f"{pet.name} updated.")
    return redirect(url_for('home_page'))
  return render_template("pet_edit_form.html", form=form, pet=pet) 


