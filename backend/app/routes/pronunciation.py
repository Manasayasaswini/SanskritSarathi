from flask import Blueprint, jsonify

bp = Blueprint('pronunciation', __name__, url_prefix='/api/pronunciation')


@bp.route('/analyze', methods=['POST'])
def analyze_pronunciation():
    return jsonify({'message': 'Pronunciation analysis'})


@bp.route('/feedback', methods=['GET'])
def get_feedback():
    return jsonify({'message': 'Get feedback'})
