"""Изменяем столбец isActive в таблице Pro на 0

Revision ID: 7f45b81ecf66
Revises: 6f45b81ecf66
Create Date: 2024-04-09 16:00:00

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7f45b81ecf66'
down_revision = '6f45b81ecf66'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Изменяем столбец isActive
    op.alter_column('pro', 'isActive', existing_type=sa.Boolean(), server_default=sa.text('0'))


def downgrade() -> None:
    # Откатываем изменения столбца isActive
    op.alter_column('pro', 'isActive', existing_type=sa.Boolean(), server_default="0")
