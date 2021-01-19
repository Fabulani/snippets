from django.contrib import admin
from django.contrib.admin import AdminSite
from snippets_app.models import Snippet


@admin.register(Snippet)
class SnippetAdmin(admin.ModelAdmin): 
      fields = ['id', 'created', 'owner',
                'title', 'code', 'linenos', 'language', 'style']
      readonly_fields = ('id', 'created')
      list_display = ('id', 'title', 'created', 'owner')
      list_display_links  = ('id', 'title', 'created')
      