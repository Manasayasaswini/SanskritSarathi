from flask import Blueprint, jsonify

bp = Blueprint('progress', __name__, url_prefix='/api/progress')


@bp.route('/', methods=['GET'])
def get_progress():
    return jsonify({'message': 'Progress routes'})


@bp.route('/<int:user_id>', methods=['GET'])
def get_user_progress(user_id):
    return jsonify({'message': f'Progress for user {user_id}'})
