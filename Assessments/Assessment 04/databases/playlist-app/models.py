"""Models for Playlist app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""
    __tablename__ = 'playlists'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'Playlist id={self.id} name={self.name} description={self.description}'


class Song(db.Model):
    """Song."""
    __tablename__ = 'songs'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<Song id={self.id} title={self.title} artist={self.artist}>'


class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""
    __tablename__ = 'playlists_songs'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'))
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'))

    playlists = db.relationship('Playlist', backref='playlists_songs')
    songs = db.relationship('Song', backref='playlists_songs')

    def __repr__(self):
        return f'<PlaylistSong id={self.id} playlist_id={self.playlist_id} song_id={self.song_id}>'

# DO NOT MODIFY THIS FUNCTION


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
