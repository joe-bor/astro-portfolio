---
title: Lucky's IRIS Order Helper
github: https://github.com/joe-bor/luckys_iris
live: https://loom.com/share/fbe32a7b4ad540589008d28515db4a6a
publishDate: 2025-01-01 00:00:00
img: /assets/luckys-iris.png
img_alt: IRIS order helper barcode generation interface
description: |
  Barcode generation tool enabling 20+ department managers to streamline inventory ordering, reducing processing time by 70%.
tags:
  - Python
  - FastAPI
  - Pandas
  - Jinja Templates
---

#### Background

Lucky's supermarket uses IRIS (Inventory Replenishment Information System) for ordering. The manual process of looking up item codes and entering quantities was time-consuming and error-prone. I built this tool to solve my own problem, and it spread to other departments.

#### How It Works

1. Upload a CSV or manually enter item data
2. System generates scannable barcodes for each item
3. Print the barcode sheet
4. Scan barcodes directly into IRIS terminal

#### Impact

- **20+ department managers** now use this tool
- **70% reduction** in order processing time
- **Fewer errors** from manual code entry
- **Adopted company-wide** from a personal side project

#### Technical Details

- **FastAPI** backend for fast response times
- **Pandas** for data processing and validation
- **Jinja Templates** for generating print-ready barcode sheets
- Deployed internally for store use

#### Links

- Demo Video: <https://loom.com/share/fbe32a7b4ad540589008d28515db4a6a>
- GitHub: <https://github.com/joe-bor/luckys_iris>
