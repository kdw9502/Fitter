# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-07 11:02
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fitterKakao', '0004_auto_20170607_1948'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='user',
            new_name='name',
        ),
    ]