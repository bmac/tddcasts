from django.db import models
from django.utils.translation import ugettext_lazy as _

class Podcast(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.TextField(_("title"), help_text=_("The podcast title"), default="")

    def __str__(self):
        return self.title

    @property
    def episodes(self):
        return self.episode_set

class Episode(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.TextField(_("title"), help_text=_("The episode title"), default="")
    duration = models.TextField(_("duration"), blank=True, help_text=_("Duration of enclosure"), default="")
    published_date = models.DateTimeField(_("published_date"), help_text=_("Date item was published"))
    image = models.URLField(_("image"), blank=True, help_text=_("URL of item cover art"), max_length=1024, default="")
    enclosure_url = models.URLField(_("url"), blank=True, help_text=_("The URL of item."), max_length=1024, default="")

    podcast = models.ForeignKey(Podcast)

    def __str__(self):
        return self.title

class Subscription(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    podcast = models.ForeignKey(Podcast, null=False, blank=False)
    user = models.ForeignKey(User, null=False, blank=False)
    subscribed = models.BooleanField(default=True)

class ListeningProgress(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    duration = models.FloatField(_("duration"), help_text=_("How much the user has listened"))
    finished = models.BooleanField(_("finished"), help_text=_("True when the user has finished listening to this episode"))

    episode = models.ForeignKey(Episode, null=False, blank=False)
    subscription = models.ForeignKey(Subscription, null=False, blank=False)

    def __str__(self):
        return self.episode.title + ' ' + self.duration

    class Meta:
        pass
        #unique_together = (("episode_id", "user_id"),)
