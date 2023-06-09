"""empty message

Revision ID: 8726925c3065
Revises: 75d409970959
Create Date: 2023-05-18 19:40:46.900590

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8726925c3065'
down_revision = '75d409970959'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('licores', schema=None) as batch_op:
        batch_op.alter_column('category',
               existing_type=sa.VARCHAR(length=100),
               type_=sa.String(length=1000),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('licores', schema=None) as batch_op:
        batch_op.alter_column('category',
               existing_type=sa.String(length=1000),
               type_=sa.VARCHAR(length=100),
               existing_nullable=False)

    # ### end Alembic commands ###
