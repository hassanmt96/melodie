from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Song, User
from auth_routes import validation_errors_to_error_messages

song_routes = Blueprint('songs', __name__)

@song_routes.route('/')
def songs():
    songs = Song.query.all()
    return {"songs": [song.to_dict() for song in songs]}

@song_routes.route('/<int:id>', methods=["POST", "DELETE"])
@login_required
def update_song(id):
    song = Song.query.get(id)
    if song.user_id == current_user.id:
        if form.validate_on_submit():
            song = Song(
                title=form.data['title'],
                length=form.data['length'],
                description=form.data['description'],
                image_url=form.data['image_url'],
                song_url=form.data['song_url']
            )
            db.session.add(song)
            db.session.commit()
            return song.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}
    return {'errors': 'Only the artist can delete this song'}
