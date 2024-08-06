""" Переименовал таблицу

Revision ID: 10f45b81ecf77
Revises: 8f45b81ecf77
Create Date: 2024-04-20 17:00:00

"""

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '10f45b81ecf77'
down_revision = '9f45b81ecf77'
branch_labels = None
depends_on = None

def upgrade():
    # Используйте op.rename_table для переименования таблицы
    op.rename_table('format', 'format')
    op.execute('ALTER TABLE pro CHANGE COLUMN for_id format_id INT')
    op.alter_column('pro', 'for_id', new_column_name='format_id')

def downgrade():
    # В случае отката миграции, можно снова переименовать таблицу обратно
    op.rename_table('format', 'for')
    op.execute('ALTER TABLE pro CHANGE COLUMN format_id for_id INT')
    op.alter_column('pro', 'format_id', new_column_name='for_id')


