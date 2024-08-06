"""Изменяем столбец isActive в таблице Pro

Revision ID: 6f45b81ecf66
Revises: 5f45b81ecf44
Create Date: 2024-04-09 15:00:00

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6f45b81ecf66'
down_revision = '5f45b81ecf44'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Изменяем столбец isActive
    op.alter_column('pro', 'isActive', existing_type=sa.Boolean(), server_default="0")


def downgrade() -> None:
    # Откатываем изменения столбца isActive
    op.alter_column('pro', 'isActive', existing_type=sa.Boolean(), server_default=None)
