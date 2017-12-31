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
from podcast.models import Episode
from rest_framework import routers, serializers, viewsets
from podcast.views import recent_episodes

# Serializers define the API representation.
class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = ('id', 'title', 'podcastTitle', 'publishedDate', 'image', 'url', 'duration', 'currentTime')

# ViewSets define the view behavior.
class EpisodeViewSet(viewsets.ModelViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer

    def get_queryset(self):

        user = self.request.user
        return Episode.objects.filter(podcast__subscription__user=user, podcast__subscription__subscribed=True)


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'podcast', PodcastViewSet)
router.register(r'episode', EpisodeViewSet)
# router.register(r'episode/recent', recent_episodes)
router.register(r'listening-progress', ListeningProgressViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    # url(r'^api/episode/recent', recent_episodes),
    url(r'^admin/', admin.site.urls),
]
