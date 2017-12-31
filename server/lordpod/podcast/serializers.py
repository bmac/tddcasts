from podcast.models import Podcast, Episode, ListeningProgress
from rest_framework import serializers


class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = ('created_at', 'updated_at', 'title')

# Serializers define the API representation.
class ListeningProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListeningProgress
        fields = ('created_at', 'updated_at', 'duration', 'finished', 'episode')


class EpisodeSerializer(serializers.ModelSerializer):
    included_serializers = {
        'podcast': PodcastSerializer,
        'listeningprogress': ListeningProgressSerializer
    }
    class Meta:
        model = Episode
        fields = ('created_at', 'updated_at', 'title', 'duration', 'published_date', 'image', 'enclosure_url', 'podcast')
