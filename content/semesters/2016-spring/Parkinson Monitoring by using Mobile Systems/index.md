---
advisors:
- Cem Ersoy
poster: images/poster_presentation.jpg
students:
- name: Furkan Caymaz
- name: Hamza Temel Can Kandaz
title: Parkinson Monitoring by using Mobile Systems
type: project
---

In the project Mobile Application for Parkinson Monitoring, the very beginning starting point for us was exhibiting a product that helps medical personnel and doctors to track and interpret the symptoms of a Parkinson patient better compared to old-fashioned order. For this purpose we did use EXLs3 branded inertial measurement units and a mobile application to control, parse and analyze the daily movement and trembling data of patients. At the beginning we planned to start with an iOS application, however since the IMUs we were going to use do not support low-energy Bluetooth connection as iOS provides, we couldn’t communicate with IMUs via an iOS application. The next step was doing the same with an Android application, which we did successfully. Following step was establishing a data transfer between application and IMUs, which is completed via IMU commands given in the user guide. IMU transmits data packet by packet and those packets were encoded by the producer of sensors. First we did convert those into hexadecimal values and then by using the user guideline of IMU, parsed those data and converted the parsed and finalized values to decimals. Again as an additional feature of the mobile application, user can share the parsed and logically converted data with other people and devices using different sharing options, such as messaging, e-mailing and so on.


{{< youtube 1MB3OuEM4EA >}}