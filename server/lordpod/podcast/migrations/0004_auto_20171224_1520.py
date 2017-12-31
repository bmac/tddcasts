# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-12-24 15:20
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('podcast', '0003_auto_20171108_2041'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('subscribed', models.BooleanField(default=True)),
                ('podcast', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='podcast.Podcast')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='listeningprogress',
            name='user',
        ),
        migrations.AddField(
            model_name='listeningprogress',
            name='subscription',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='podcast.Subscription'),
            preserve_default=False,
        ),
    ]
