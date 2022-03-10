"""Seed file to make sample data for db."""

from models import Playlist, Song, PlaylistSong, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

Playlist1 = Playlist(name="Walking", description="Walking in the park")
Playlist2 = Playlist(name="Gym", description="Gym workout")
Playlist3 = Playlist(name="Meditation", description="Meditation session")
Song1 = Song(title="Individual Entity", artist="Rylei Nathaniel")
Song2 = Song(title="Runnin' Down A Dream", artist="Tom Petty")
Song3 = Song(title="This Love", artist="Maroon 5")
PlaylistSong1 = PlaylistSong(playlist_id=1, song_id=1)
PlaylistSong2 = PlaylistSong(playlist_id=2, song_id=2)
PlaylistSong3 = PlaylistSong(playlist_id=3, song_id=3)

db.session.add_all([Playlist1, Playlist2, Playlist3, Song1,
                   Song2, Song3, PlaylistSong1, PlaylistSong2, PlaylistSong3])

db.session.commit()
