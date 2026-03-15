from flask import Flask


def create_app():
    app = Flask(__name__)

    from backend.app.routes import varna, shloka, pronunciation, progress
    app.register_blueprint(varna.bp)
    app.register_blueprint(shloka.bp)
    app.register_blueprint(pronunciation.bp)
    app.register_blueprint(progress.bp)

    return app
