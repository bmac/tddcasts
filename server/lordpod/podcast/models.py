from django.db import models
from django.utils.translation import ugettext_lazy as _

class Episode(models.Model):
    title = models.TextField(_("Title"), help_text=_("The episode title"), default="")
    podcastTitle = models.TextField(_("Podcast Title"), help_text=_("The podcast title"), default="")
    publishedDate = models.DateTimeField(_("Published Date"), help_text=_("Date item was published"))
    image = models.URLField(_("Image"), blank=True, help_text=_("URL of item cover art"), max_length=1024, default="")
    url = models.URLField(_("url"), blank=True, help_text=_("The URL of item."), max_length=1024, default="")

    duration = models.FloatField(_("Duration"), help_text=_("Total Lenght of the audio file"))
    currentTime = models.FloatField(_("Current Time"), help_text=_("How much the user has listened"), default=0)

    def __str__(self):
        return self.title
