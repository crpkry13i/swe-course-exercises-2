"""Seed file to make sample data for db."""

from models import Playlist, Song, PlaylistSong, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

Playlist1 = Playlist(name="My Playlist", description="This is my playlist")
Playlist2 = Playlist(name="My Playlist 2", description="This is my playlist 2")
Playlist3 = Playlist(name="My Playlist 3", description="This is my playlist 3")
Song1 = Song(title="Song 1", artist="Artist 1")
Song2 = Song(title="Song 2", artist="Artist 2")
Song3 = Song(title="Song 3", artist="Artist 3")
PlaylistSong1 = PlaylistSong(playlist_id=1, song_id=1)
PlaylistSong2 = PlaylistSong(playlist_id=2, song_id=2)
PlaylistSong3 = PlaylistSong(playlist_id=3, song_id=3)

db.session.add_all([Playlist1, Playlist2, Playlist3, Song1,
                   Song2, Song3, PlaylistSong1, PlaylistSong2, PlaylistSong3])

db.session.commit()
