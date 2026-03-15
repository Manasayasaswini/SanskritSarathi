from flask import Blueprint, jsonify

bp = Blueprint('varna', __name__, url_prefix='/api/varna')


@bp.route('/', methods=['GET'])
def get_varnas():
    return jsonify({'message': 'Varna routes'})


@bp.route('/<int:varna_id>', methods=['GET'])
def get_varna(varna_id):
    return jsonify({'message': f'Varna {varna_id}'})
