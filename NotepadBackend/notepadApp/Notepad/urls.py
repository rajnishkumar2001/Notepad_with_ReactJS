from django.contrib import admin
from django.urls import path
from .views import AIApps, NotepadAPI, NotepadRegister, RegisterView, LogoutAPIView, SetNewPasswordAPIView, VerifyEmail, LoginAPIView, PasswordTokenCheckAPI, RequestPasswordResetEmail,RetriveSessionUser
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    # path('', index, name='index'),
    path('openai/', AIApps.as_view(), name="openai"),
    path('notepad/<int:pk>', NotepadAPI.as_view(), name="notepad"),
    path('register-notes/', NotepadRegister.as_view(), name="register_notes"),
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('session-user/', RetriveSessionUser.as_view(), name="session-user"),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(),
         name="request-reset-email"),
    path('password-reset/<uidb64>/<token>/',
         PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
    path('password-reset-complete', SetNewPasswordAPIView.as_view(),
         name='password-reset-complete')
]