# -*- coding: utf-8 -*-
"""`app.models` package.

Contains the external services for handling external functionality.
"""

from pgtools import DBPoolEngine, DBAPIBackend, ViewField, DBAPIError
from pgtools.engine import EngineError
from settings import DBEngine, POSTGRES


engine = DBEngine.make(**POSTGRES)
print('hi')


class ModelError(Exception):
    """Base Model Exception class.
    """
    pass


class AdminModel(DBAPIBackend):
    """Admin Database Schema Model
    """

    get_latest = ViewField()

    class Meta:

        schema = 'admin'


def admin_backend(action, fetch_opts='many', **params):
    """
    Args:
        action:
        fetch_opts:
        **params:

    Returns:

    """
    callback = getattr(AdminModel(), action) or None

    try:
        records = engine.query(callback(**params), fetch_opts=fetch_opts)

    except (EngineError, DBAPIError) as error:
        raise ModelError(error.args[0])

    return records


if __name__ == '__main__':

    print(admin_backend('get_latest'))