from django.test import TestCase
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from .models import Podcast, Episode, Subscription

User = get_user_model()


class AccountTests(APITestCase):
    def setUp(self):
        self.user = user = User(username='test')
        user.set_password('test')
        user.save()
        self.softSkills = Podcast.objects.create(title='Soft Skills Eng')
        self.frontside = Podcast.objects.create(title='Frontside')
        Episode.objects.create(title='Meetings', podcast=self.softSkills)
        Episode.objects.create(title='Haskell', podcast=self.frontside)
        self.client.login(username='test', password='test')
        
    def test_list_episodes_user_has_subscribed_to(self):
        """
        Ensure we can create a new account object.
        """
        Subscription.objects.create(user=self.user, podcast=self.softSkills)
        response = self.client.get('/api/episode/', {}, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 1, 'Should only return the episodes a user has a subscription for')

    def test_list_podcasts(self):
        """
        Ensure we can create a new account object.
        """

        response = self.client.get('/api/podcast/', {}, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 2, 'Should list all podcasts')
