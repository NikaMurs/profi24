""" Добавить связь между таблицами + созал таблицы

Revision ID: 9f45b81ecf77
Revises: 8f45b81ecf77
Create Date: 2024-04-20 17:00:00

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9f45b81ecf77'
down_revision = '8f45b81ecf77'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # PAP table
    op.create_table(
        'pap',
        sa.Column('id', sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column('isActive', sa.Boolean(), nullable=False, server_default='0'),
        sa.Column('name', sa.String(100), nullable=False, server_default=''),
        sa.Column('shortName', sa.String(50), nullable=False, server_default=''),
        sa.Column('img', sa.String(600), nullable=False, server_default=''),
        sa.Column('thickness', sa.Float(), server_default='0'),
        sa.Column('text1', sa.Text(), nullable=True),
        sa.Column('text2', sa.Text(), nullable=True),
        sa.Column('text3', sa.Text(), nullable=True),
        sa.Column('notes', sa.Text(), nullable=True),
        sa.Column('pro_id', sa.Integer(), sa.ForeignKey('pro.id', ondelete='CASCADE'))
    )
    op.add_column('pro', sa.Column('pap_id', sa.Integer(), sa.ForeignKey('pap.id')))

    # BAS table
    op.create_table(
        'bas',
        sa.Column('id', sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column('isActive', sa.Boolean(), nullable=False, server_default='0'),
        sa.Column('name', sa.String(100), nullable=False, server_default=''),
        sa.Column('img', sa.String(600), nullable=False, server_default=''),
        sa.Column('thickness', sa.Float(), server_default='0'),
        sa.Column('weight', sa.Float(), server_default='0'),
        sa.Column('price', sa.Integer(), server_default='0'),
        sa.Column('max_count', sa.Integer(), server_default='0'),
        sa.Column('text1', sa.Text(), nullable=True),
        sa.Column('text2', sa.Text(), nullable=True),
        sa.Column('text3', sa.Text(), nullable=True),
        sa.Column('notes', sa.Text(), nullable=True),
        sa.Column('pro_id', sa.Integer(), sa.ForeignKey('pro.id', ondelete='CASCADE'))
    )
    op.add_column('pro', sa.Column('bas_id', sa.Integer(), sa.ForeignKey('bas.id')))

    # TCO table
    op.create_table(
        'tco',
        sa.Column('id', sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column('isActive', sa.Boolean(), nullable=False, server_default='0'),
        sa.Column('name', sa.String(100), nullable=False, server_default=''),
        sa.Column('shortName', sa.String(50), nullable=False, server_default=''),
        sa.Column('indicator', sa.String(60), nullable=False, server_default=''),
        sa.Column('factor', sa.Integer(), server_default='0'),
        sa.Column('thickness', sa.Float(), server_default='0'),
        sa.Column('img', sa.String(600), nullable=False, server_default=''),
        sa.Column('text1', sa.Text(), nullable=True),
        sa.Column('text2', sa.Text(), nullable=True),
        sa.Column('text3', sa.Text(), nullable=True),
        sa.Column('notes', sa.Text(), nullable=True),
        sa.Column('pro_id', sa.Integer(), sa.ForeignKey('pro.id', ondelete='CASCADE'))
    )
    op.add_column('pro', sa.Column('tco_id', sa.Integer(), sa.ForeignKey('tco.id')))

    # VAR01 table
    op.create_table(
        'var01',
        sa.Column('id', sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column('isActive', sa.Boolean(), nullable=False, server_default='0'),
        sa.Column('name', sa.String(100), nullable=False, server_default=''),
        sa.Column('shortName', sa.String(50), nullable=False, server_default=''),
        sa.Column('img', sa.String(600), nullable=False, server_default=''),
        sa.Column('text1', sa.Text(), nullable=True),
        sa.Column('text2', sa.Text(), nullable=True),
        sa.Column('text3', sa.Text(), nullable=True),
        sa.Column('notes', sa.Text(), nullable=True),
        sa.Column('pro_id', sa.Integer(), sa.ForeignKey('pro.id', ondelete='CASCADE'))
    )
    op.add_column('pro', sa.Column('var01_id', sa.Integer(), sa.ForeignKey('var01.id')))

    # NCO table
    op.create_table(
        'nco',
        sa.Column('id', sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column('format', sa.String(100), nullable=False, server_default=''),
        sa.Column('thickness_block', sa.Integer(), server_default='0'),
        sa.Column('target_size', sa.String(100), nullable=False, server_default=''),
        sa.Column('weight', sa.Float(), server_default='0'),
        sa.Column('guides_jpeg', sa.String(600), nullable=False, server_default=''),
        sa.Column('guides_psd', sa.String(600), nullable=False, server_default=''),
        sa.Column('guides_lndd', sa.String(600), nullable=False, server_default=''),
        sa.Column('pro_id', sa.Integer(), sa.ForeignKey('pro.id', ondelete='CASCADE'))
    )
    op.add_column('pro', sa.Column('nco_id', sa.Integer(), sa.ForeignKey('nco.id')))


def downgrade() -> None:
    op.drop_table('pap')
    op.drop_column('pro', 'pap_id')
    op.drop_table('bas')
    op.drop_column('pro', 'bas_id')
    op.drop_table('tco')
    op.drop_column('pro', 'tco_id')
    op.drop_table('var01')
    op.drop_column('pro', 'var01_id')
    op.drop_table('nco')
    op.drop_column('pro', 'nco_id')




