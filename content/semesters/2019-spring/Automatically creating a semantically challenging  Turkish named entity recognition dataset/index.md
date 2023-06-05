---
advisors:
- Suzan Üsküdarlı
title: Automatically creating a semantically challenging  Turkish named entity recognition
  dataset
type: project
---

CMPE 491/492 Project


Automatically creating a semantically challenging   
Turkish named entity recognition dataset


 


Motivation  

  


We frequently refer to real world entities in written text as in the following text:  

  


Moda Deniz Kulübü çocukluğumun, gençliğimin ve de şimdilerde son çağımın başlangıcının geçtiği saygın kurumlardan biridir.  

  


Building systems that recognize these named entities is important both from technological and linguistics viewpoints. For example, a system that recognizes “Moda Deniz Kulübü” in the previous sentence as an organization can be used by a search engine crawler while indexing web pages. One can refer to <https://en.wikipedia.org/wiki/Named-entity_recognition> for more information.  

  


Currently, training and test datasets are employed for building named entity recognition (NER) systems that solve this problem. However evaluating these systems might be problematic as many of the entities found in test datasets are unambiguous, i.e. they can be recognized and classified easily with a simple lookup on special word lists for each entity class. Thus, reported performance gains on such datasets are not indicative of improved semantic capabilities of a proposed model.  

  


In this project, we propose to build a new NER dataset which is artificially made “word-list-proof” using words which are spelled the same. When we evaluate existing NER models with the resulting dataset, models which rely on gazetteers are expected to obtain lower results. Models which achieve higher results should have really improved their generalization capability of the surrounding context.  

  


You will to develop algorithms to automatically create a dataset with use of Wikipedia. A rough outline of the method is as follows:


1. List the entries in Wikipedia (Vikipedi)  with “Disambiguation Pages”, i.e. Moda

“Moda” (represents ‘fashion’ in English) E1, “Moda (semt)” E2, “Modà” (represents an Italian music band) E3, “Moda FC” (a football club in Istanbul of early 20th century) E4


2. Compile a list of sentences  in Wikipedia that refer to each Ei
3. Categorize Ei into PERSON, LOCATION, ORGANIZATION, MISC using its  corresponding Wikipedia category or with use of other clues.
4. Explore the lowercase situation to make it more challenging

Expected Outcomes


1. Open source software development
2. A new NER dataset

Contact


Suzan Uskudarli (suzan.uskudarli@boun.edu.tr)