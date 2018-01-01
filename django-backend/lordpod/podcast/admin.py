from django.contrib import admin
from .models import Podcast, Episode, ListeningProgress, Subscription

admin.site.register(Episode)
admin.site.register(ListeningProgress)
admin.site.register(Subscription)
