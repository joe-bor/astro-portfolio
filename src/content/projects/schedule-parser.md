---
title: Schedule Parser Bot
github: https://github.com/joe-bor/Schedule-Parser-App
live: ""
publishDate: 2025-10-09 00:00:00
img: /assets/schedule-parser.gif
img_alt: Schedule parser workflow demo showing image to calendar conversion
description: |
  Telegram bot automating work schedule → Google Calendar with 96.4% OCR accuracy. Reduces manual entry by 70%.
tags:
  - TypeScript
  - Express
  - Google Cloud Vision
  - Telegram Bot API
  - Google Calendar API
  - Jest
---

#### The Problem

At Lucky's, we get our weekly schedules as printed sheets or photos. Every week, I'd spend time manually entering my shifts into Google Calendar - prone to typos and easy to forget.

#### The Solution

A Telegram bot that:
1. Receives a photo of the schedule
2. Uses Google Cloud Vision OCR to extract text (96.4% accuracy)
3. Parses shift times and dates
4. Automatically creates Google Calendar events

#### Results

- **70% reduction** in time spent on schedule management
- **Zero missed shifts** since deployment
- Used daily by me and offered to coworkers

#### Technical Highlights

- **OCR Processing**: Fine-tuned text extraction for our specific schedule format
- **Smart Parsing**: Handles various time formats and edge cases
- **Google OAuth**: Secure calendar integration
- **Error Handling**: Graceful fallbacks when OCR confidence is low

#### Links

- GitHub: <https://github.com/joe-bor/Schedule-Parser-App>
