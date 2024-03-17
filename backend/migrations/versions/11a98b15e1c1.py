"""empty message

Revision ID: 11a98b15e1c1
Revises: 62a98b15e1c9
Create Date: 2024-03-16 12:49:00

"""

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '11a98b15e1c1'
down_revision = '62a98b15e1c9'
branch_labels = None
depends_on = None

def upgrade() -> None:
    # Изменяем поля с nullable=False на nullable=True
    op.alter_column('user', 'surname', type_=sa.String(length=50), nullable=True)
    op.alter_column('user', 'name', type_=sa.String(length=50), nullable=True)
    op.alter_column('user', 'second_name', type_=sa.String(length=50), nullable=True)
    op.alter_column('user', 'email', type_=sa.String(length=100), nullable=True)
    op.alter_column('user', 'country', type_=sa.String(length=100), nullable=True)
    op.alter_column('user', 'city', type_=sa.String(length=100), nullable=True)
    op.alter_column('user', 'is_active', type_=sa.Boolean(), nullable=True)
    op.alter_column('user', 'is_superuser', type_=sa.Boolean(), nullable=True)
    op.alter_column('user', 'is_verified', type_=sa.Boolean(), nullable=True)

def downgrade() -> None:
    # Откатываем изменения, возвращая поля к nullable=False
    op.alter_column('user', 'surname', type_=sa.String(length=50), nullable=False)
    op.alter_column('user', 'name', type_=sa.String(length=50), nullable=False)
    op.alter_column('user', 'second_name', type_=sa.String(length=50), nullable=False)
    op.alter_column('user', 'email', type_=sa.String(length=100), nullable=False)
    op.alter_column('user', 'country', type_=sa.String(length=100), nullable=False)
    op.alter_column('user', 'city', type_=sa.String(length=100), nullable=False)
    op.alter_column('user', 'is_active', type_=sa.Boolean(), nullable=False)
    op.alter_column('user', 'is_superuser', type_=sa.Boolean(), nullable=False)
    op.alter_column('user', 'is_verified', type_=sa.Boolean(), nullable=False)