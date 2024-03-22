"""Изменяем имя колонки с surname на first_name

Revision ID: 3f45b81ecf22
Revises: 11a98b15e1c1
Create Date: 2024-03-21 13:00:00

"""

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '3f45b81ecf22'
down_revision = '11a98b15e1c1'
branch_labels = None
depends_on = None

def upgrade() -> None:
    # Изменяем имя колонки с surname на first_name и оставляем nullable=True
    op.alter_column('user', 'surname', new_column_name='first_name', type_=sa.String(length=50), nullable=True)

def downgrade() -> None:
    # Откатываем изменения, возвращая имя колонки к surname и оставляем nullable=True
    op.alter_column('user', 'first_name', new_column_name='surname', type_=sa.String(length=50), nullable=True)
