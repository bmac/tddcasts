from podcast.views import PodcastViewSet, EpisodeViewSet, ListeningProgressViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'podcast', PodcastViewSet)
router.register(r'episode', EpisodeViewSet)
router.register(r'listening-progress', ListeningProgressViewSet)
