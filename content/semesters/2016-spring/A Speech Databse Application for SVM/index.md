---
advisors:
- Fikret Gürgen
poster: images/poster-1_0.jpg
students:
- name: Cenk Temeloğlu
title: A Speech Databse Application for SVM
type: project
---

This application detects human voice in a noisy sound file. First, SVM is trained with different environments such as factory, car, river, etc. After that a noisy voice sample is given as input. Program looks first 1024 samples in noisy sample and tries to detect the environment type because at the beginning of the sample, there is only noise sound. After detection, program looks all samples according to Principal Componenet Analysis to reduce the redundancy. Then, it makes feature extraction and gets the most significant features. Finally, according to both environment sound and the rest of the file, it detects the human voice if there is any. If there is no human voice, it says there is no human voice in sound file.


{{< youtube tR7yK6X6mbs >}}