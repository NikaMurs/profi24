"""Добавляем таблицу Pro

Revision ID: 5f45b81ecf44
Revises: 4f45b81ecf33
Create Date: 2024-04-09 12:00:00

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5f45b81ecf44'
down_revision = '4f45b81ecf33'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Создаем таблицу Pro
    op.create_table('pro',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('isActive', sa.Boolean(), nullable=False),
                    sa.Column('title', sa.String(length=100), nullable=False, server_default=""),
                    sa.Column('shortTitle', sa.String(length=50), nullable=False, server_default=""),
                    sa.Column('img', sa.String(length=600), nullable=False, server_default=""),
                    sa.Column('text1', sa.Text(), nullable=True),
                    sa.Column('text2', sa.Text(), nullable=True),
                    sa.Column('text3', sa.Text(), nullable=True),
                    sa.Column('notes', sa.Text(), nullable=True),
                    sa.PrimaryKeyConstraint('id')
                    )


def downgrade() -> None:
    # Откатываем создание таблицы Pro
    op.drop_table('pro')
