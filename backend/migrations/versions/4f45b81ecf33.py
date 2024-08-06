"""Изменяем поля country и city, а также добавляем новые колонки

Revision ID: 4f45b81ecf33
Revises: 3f45b81ecf22
Create Date: 2024-03-22 21:42:00

"""

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '4f45b81ecf33'
down_revision = '3f45b81ecf22'
branch_labels = None
depends_on = None

def upgrade() -> None:
    # Изменяем типы и добавляем новые колонки
    op.alter_column('user', 'country', type_=sa.String(length=100), nullable=True, server_default="")
    op.alter_column('user', 'city', type_=sa.String(length=100), nullable=True, server_default="")
    op.add_column('user', sa.Column('street', sa.String(length=200), nullable=False, server_default=""))
    op.add_column('user', sa.Column('profession', sa.String(length=100), nullable=False, server_default=""))
    op.add_column('user', sa.Column('countBook', sa.Integer(), nullable=False, server_default="0"))
    op.add_column('user', sa.Column('site', sa.String(length=900), nullable=False, server_default=""))
    op.add_column('user', sa.Column('vk', sa.String(length=200), nullable=False, server_default=""))
    op.add_column('user', sa.Column('telegram', sa.String(length=200), nullable=False, server_default=""))
    op.add_column('user', sa.Column('whatsapp', sa.String(length=200), nullable=False, server_default=""))
    op.add_column('user', sa.Column('money', sa.Float(), nullable=False, server_default="0"))
    op.add_column('user', sa.Column('bonus', sa.Integer(), nullable=False, server_default="0"))
    op.add_column('user', sa.Column('bonusStatus', sa.Enum("Base", "Bronze", "Silver", "Gold"), nullable=False, server_default="Base"))

def downgrade() -> None:
    # Откатываем изменения
    op.alter_column('user', 'country', type_=sa.String(length=100), nullable=True, server_default=None)
    op.alter_column('user', 'city', type_=sa.String(length=100), nullable=True, server_default=None)
    op.drop_column('user', 'street')
    op.drop_column('user', 'profession')
    op.drop_column('user', 'countBook')
    op.drop_column('user', 'site')
    op.drop_column('user', 'vk')
    op.drop_column('user', 'telegram')
    op.drop_column('user', 'whatsapp')
    op.drop_column('user', 'money')
    op.drop_column('user', 'bonus')
    op.drop_column('user', 'bonusStatus')
