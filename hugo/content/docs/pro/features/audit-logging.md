---
aliases:
title: Audit Logging
weight: 2
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Pro
    weight: 2
---

Changes to resources are recorded in realtime and exportable in CSV format with headers included.

## Log Format

Organization, site, and user are recorded if applicable. Timestamps are UTC and the IP address may be either IPv4 or IPv6.

| **Organization** | **Site**      | **Actor** | **Action**        | **Fields**                                      | **IPAddress** | **Timestamp**           |
|:----------------:|:-------------:|:---------:|:-----------------:|:-----------------------------------------------:|:-------------:|:-----------------------:|
| Forestry         | Wiki          | Britney   | site.create       | `{"name":{"as":"Wiki"}}`                        | 127.0.0.1 | 2019-02-21 22:45:28 UTC |
| Forestry         | Forestry Wiki | Britney   | site.update       | `{"name":{"from":"Wiki","to":"Forestry Wiki"}}` | 127.0.0.1 | 2019-02-21 22:45:28 UTC |
| Forestry         | Forestry Wiki | Britney   | site.guest.create | `{"email":{"as":"gwen@example.com"}}`           | 127.0.0.1 | 2019-02-21 22:45:28 UTC |