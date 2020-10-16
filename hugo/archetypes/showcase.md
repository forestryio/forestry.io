---
title: "{{ replace .Name '-' ' ' | humanize }}"
description: "{{ replace .Name '-' ' ' | humanize }} website is built with Hugo and edited in Forestry"
date: {{ .Date }}
featured: false
images:
- "/uploads/showcase/{{ .Name }}.jpg"
permalink:
weight:
---
