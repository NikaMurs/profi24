"""Добавляем отношение 1:1 между таблицами pro и for, а также таблитцу for

Revision ID: 8f45b81ecf77
Revises: 7f45b81ecf66
Create Date: 2024-04-09 17:00:00

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8f45b81ecf77'
down_revision = '7f45b81ecf66'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Создаем таблицу for
    op.create_table(
        'for',
        sa.Column('id', sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column('isActive', sa.Boolean(), nullable=False, server_default='0'),
        sa.Column('name', sa.String(100), nullable=False, server_default=''),
        sa.Column('img', sa.String(600), nullable=False, server_default=''),
        sa.Column('paper_price', sa.Integer(), server_default='0'),
        sa.Column('base_price', sa.Integer(), server_default='0'),
        sa.Column('jpeg', sa.String(600), nullable=False, server_default=''),
        sa.Column('psd', sa.String(600), nullable=False, server_default=''),
        sa.Column('lndd', sa.String(600), nullable=False, server_default=''),
        sa.Column('text1', sa.Text(), nullable=True),
        sa.Column('text2', sa.Text(), nullable=True),
        sa.Column('text3', sa.Text(), nullable=True),
        sa.Column('target_size', sa.String(100), nullable=False, server_default=''),
        sa.Column('notes', sa.Text(), nullable=True),
        sa.Column('pro_id', sa.Integer(), sa.ForeignKey('pro.id', ondelete='CASCADE'))
    )
    op.add_column('pro', sa.Column('for_id', sa.Integer(), sa.ForeignKey('for.id')))


def downgrade() -> None:
    # Откатываем создание таблицы for
    op.drop_table('for')
    op.drop_column('pro', 'for_id')
