from rest_framework import routers, serializers, viewsets
from podcast.models import Podcast, Episode, ListeningProgress
from podcast.serializers import PodcastSerializer, EpisodeSerializer, ListeningProgressSerializer

# ViewSets define the view behavior.
class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer

# ViewSets define the view behavior.
class ListeningProgressViewSet(viewsets.ModelViewSet):
    queryset = ListeningProgress.objects.all()
    serializer_class = ListeningProgressSerializer

class EpisodeViewSet(viewsets.ModelViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer

    def get_queryset(self):

        user = self.request.user
        return Episode.objects.filter(podcast__subscription__user=user, podcast__subscription__subscribed=True)

