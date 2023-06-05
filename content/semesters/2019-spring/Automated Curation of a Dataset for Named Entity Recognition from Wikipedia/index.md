---
advisors:
- Suzan Üsküdarlı
poster: images/cmpe492-2019-1-poster-furkanenesyalcin-nazmicancalik-automated_dataset_curation_for_ner.jpg
students:
- name: Nazmican Çalık
- name: Furkan Enes Yalçın
title: Automated Curation of a Dataset for Named Entity Recognition from Wikipedia
type: project
---

Most NER datasets do not contain many lexically ambiguous words, as a result it becomes hard for a NER model trained with such a dataset to distinguish between different meanings of a lexically ambiguous word. For example, in the sentence "Paris Hilton owns a Hilton Hotel in Paris.", Both Paris and Hilton are used with two different meanings and their entity types are different too. (Paris: Person, Paris: Location, etc.) In order to deal with this problem, we decided to come up with a method to curate a dataset that intensely contains such words, with their entity types in a language independent manner. We decided to use Wikipedia as our data source because of the number of available languages and its potential for such words. These words are brought together under the category called "Disambiguation pages". We get potential meanings of an ambiguous term from these pages and then extract sentences from pages that refers to these potential meanings. We call these potential meanings "Disambiguation Term Candidate (DT)". Later, we extract the entity type information of a DT from yet another Wikimedia Site, Wikidata. After we fetch all of these information we gather them all and create a useful data set for NER.


{{< youtube 06VcWgPPw_U >}}