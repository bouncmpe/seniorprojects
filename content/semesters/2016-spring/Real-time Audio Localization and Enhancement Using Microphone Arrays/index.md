---
advisors:
- Cem Ersoy
poster: images/poster-1_6.jpg
students:
- name: Siray Ocak
title: Real-time Audio Localization and Enhancement Using Microphone Arrays
type: project
---

Introduction  

 Breath is very important data for many areas such as healthcare, babycare, security and more but it is hard to detect. Especially in babyphones, parents want to monitor their babies breathing. However, there is no product to allow this. By implementing algorithms of breath detection, any sound in [10,100]Hz range actually but used especially for breath, we can produce a usable technology which can be combined any kind of devices with two microphones. Project setup consists of a computer with a two microphone. The software equipment is only MATLAB on Linux.  

 Methods   

 Project consists of two main part; localization and enhancement. For localization sample delay between microphones recordings are calculated. For enhancement part input signal has been filtered with both highpass and lowpass filters. Also, to test enhancement algorithms there is a breath counting algorithm.  

 Results  

 Localization algorithms works for signals which are recorded at most 120130 cm distance roughly. Enhancement algorithms works good, gives [10,100]Hz which we want. However Breath Counting algorithm give wrong results if there is a loud human voice as a noise because it confuses original breath sound with human voice noise in some cases.  

 Conclusion  

 In overall, algorithms have approximately 70% success rate by ignoring peak errors due to significant reasons. This is not perfect but acceptable also improvable result.


{{< youtube JS4-KuFuQHM >}}