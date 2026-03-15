from flask import Blueprint, jsonify

bp = Blueprint('shloka', __name__, url_prefix='/api/shloka')


@bp.route('/', methods=['GET'])
def get_shlokas():
    return jsonify({'message': 'Shloka routes'})


@bp.route('/<int:shloka_id>', methods=['GET'])
def get_shloka(shloka_id):
    return jsonify({'message': f'Shloka {shloka_id}'})
