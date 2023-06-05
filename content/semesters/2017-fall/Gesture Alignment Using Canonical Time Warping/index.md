---
advisors:
- Lale Akarun
poster: images/erkam_uyanik_492_poster.jpg
students:
- name: Erkam Uyanık
title: Gesture Alignment Using Canonical Time Warping
type: project
---

In this project, we are interested with the problem of aligning features of human motions and gestures. There are variations in subjects’ characteristics, style, and speed in hand, body, and facial gestures. We try to minimize effects of those variations by a pre-alignment step. Canonical Time Warping (CTW) and Generalized Canonical Time Warping (GTW) are claimed to give better results for human motion alignment than alternative methods. Our aim is to analyze mathematical foundations of GTW, fine tune its parameters for sign language alignment, and find the best setup for GTW to work. We align gestures in an unsupervised manner before classification step. We try to find the best alignment for each gesture for a given set of multi-class gestures. After aligning, we warp classification features with derived warping paths using linear interpolation. In our experiments, DTW gave best results for hand coordinates (.9909) while CTW was the most accurate for hand speed (.9819).


{{< youtube 8bthAkWmFaw >}}