"""lordpod URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.models import User
from podcast.models import Podcast, Episode, ListeningProgress
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = ('created_at', 'updated_at', 'title')

# ViewSets define the view behavior.
class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer


# Serializers define the API representation.
class ListeningProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListeningProgress
        fields = ('created_at', 'updated_at', 'duration', 'finished', 'episode')

# ViewSets define the view behavior.
class ListeningProgressViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = ListeningProgressSerializer

# Serializers define the API representation.
class EpisodeSerializer(serializers.ModelSerializer):
    included_serializers = {
        'podcast': PodcastSerializer,
        'listeningprogress': ListeningProgressSerializer
    }
    class Meta:
        model = Episode
        fields = ('created_at', 'updated_at', 'title', 'duration', 'published_date', 'image', 'enclosure_url', 'podcast', 'listening_progress')

# ViewSets define the view behavior.
class EpisodeViewSet(viewsets.ModelViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'podcast', PodcastViewSet)
router.register(r'episode/recent', EpisodeViewSet)
router.register(r'listening-progress', ListeningProgressViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
]
