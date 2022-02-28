"""Forms for playlist app."""

from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, SubmitField, ValidationError, validators


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    # Add the necessary code to use this form
    name = StringField("Playlist Name")
    description = StringField("Description")


class SongForm(FlaskForm):
    """Form for adding songs."""

    # Add the necessary code to use this form
    title = StringField("Title")
    artist = StringField("Artist")


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
