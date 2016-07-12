from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('artiste.views',
    # Examples:
    # url(r'^$', 'kwanzMusic.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^kwanz/$', 'kwanz'),
)

urlpatterns += staticfiles_urlpatterns()
