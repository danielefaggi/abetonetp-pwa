@echo off
echo Abetone trail park PWA build started

xcopy /s/y .\frontend\*.* .\build
workbox injectManifest .\workbox-config.js

