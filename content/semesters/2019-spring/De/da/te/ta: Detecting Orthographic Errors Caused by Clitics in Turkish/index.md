---
advisors:
- Suzan Üsküdarlı
poster: images/ugurcan-arikan-poster.jpg
students:
- name: Uğurcan Arıkan
title: 'De/da/te/ta: Detecting Orthographic Errors Caused by Clitics in Turkish'
type: project
rank: 3
---

For the spell correction task, vocabulary based methods have been replaced with methods that take morphological and grammar rules into account. However, such tools are fairly immature, and, worse,  non-existent for many low resource languages. Checking only if a word is well-formed with respect to the morphological rules of a language may produce false negatives due to the ambiguity resulting from the presence of numerous homophonic words. In this work, we propose an approach to detect and correct the "de/da'' clitic errors in Turkish text. Our model is a neural sequence tagger trained with a synthetically constructed dataset consisting of positive and negative samples. The model's performance with this dataset is presented according to different word embedding configurations. The model achieved an F1 score of 86.67% on a synthetically constructed dataset. We also compared the model's performance on a manually curated dataset of challenging samples that proved superior to other spelling correctors with 71% accuracy compared to the second best (Google Docs) with 34% accuracy.


{{< youtube 3ELifsrbOIk >}}