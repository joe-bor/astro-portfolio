---
title: Bank Accounts API
github: https://github.com/joe-bor/BankAccounts-Api
live: /
publishDate: 2023-07-06 00:00:00
img: /assets/bank-api.png
img_alt: ERD of the models used in the API.
description: |
  Full CRUD RESTFUL API, with user authentication and authorization that consumes a 3rd party API for some of it's routes
tags:
  - Load Test
  - Unit Test
  - RapidAPI
  - REST API
  - Express
  - MongoDB
  - NodeJS
---

#### Background/Description

**Context**: In unit 2 of our bootcamp, we delved into *backend development*. This was my first encounter with creating something that users couldn't see, a significant shift from the frontend work I was accustomed to. While the backend was often described as more challenging, I mentally prepared myself for the new experience, even though I had little prior knowledge of it.

#### Process/Insights:

- **Introduction to Backend Tools**: We began by learning about *Node.js* and quickly moved on to using *Express* to build servers. This marked a shift from the custom code I had been writing so far. I had to adapt to working with frameworks and understanding their operations without knowing every intricate detail. This was akin to people knowing how to drive a car without necessarily comprehending the inner workings of the combustion engine.

- **Debugging Challenges**: Debugging in the backend was a distinct challenge compared to the frontend. Unlike the frontend, there were no visual cues to pinpoint issues. Instead, I had to learn how to trace the flow of logic and data. This involved closely reading error messages and, further refining the debugging process, adding console.log() statements to confirm the expected data at various points in the application.

- **Test-Driven Development Insights**: This unit introduced me to the concept of *test-driven development*. I learned about writing manual tests by creating assertions, conducting unit tests with *Jest* and *Supertest*, and performing load testing. Initially, writing unit tests seemed time-consuming, and I questioned their necessity. However, I later realized their importance in ensuring code quality and preventing regressions.

#### Links
- Github: <https://github.com/joe-bor/BankAccounts-Api/>

- Live: Not deployed. 3rd-party API is not free 😆. You can follow local installations from ReadMe in Github.

#### Key Takeaways:

- Adapted to working with frameworks (*Express*),efficiently navigating their operations without the need to comprehend every intricate detail

- Acquired expertise in back-end debugging, emphasizing the importance of meticulous error message analysis and strategic placement of console.log() statements, debugger tool to trace data and logic flow

- Integration of third-party API from *RapidAPI*

- API testing with Postman

- Gained proficiency in writing *unit tests* using *Jest* and *Supertest*

- Learned about load testing with *Artillery*