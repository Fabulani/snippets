from django.urls import path, include

urlpatterns = [
    path('', include('snippets_app.urls')),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]