---
advisors:
- Fikret Gürgen
poster: images/poster.jpg
students:
- name: Ömer Ulusal
- name: Fatih Çataltepe
title: Recommendation System with Apache Spark
type: project
---

The aim of this project is to implement a movie recommendation system using apache spark. In the first phase of the project we learned how to use spark and installed it to our local machines. Then coded a recommendation algorithm using python. In the second phase, we hired 4 machines from Google Cloud and installed our application to cluster and run it in parallel to reach better time performance. And we focused on validating our test results. 


We have used spark’s mllib library’s ALS(Alternating Least Square) algorithm. It is an algorithm based on classifying movies depends on some variables and recommend a user some movies using past ratings of him. We used python to implement application and used Atom as IDE. Git was one of our core tools to store our code and every other resourses. Additionaly, we have used Movielens sample datasets which includes more then 6000 users and 1000000 ratings.


For validating our results, we have moved one of the best rated movies for each user from training set to test set. And for every user we have recommended 20 movies based on our model. Then we looked for if the removed movie is in the recommended set or not. If it is, it was a success for us. Trying a huge range of combination of variables we have reached the best combination and seen that we improved our success ratio to 4.5%.


As a future work, we are planning to make a friendly user interface and convert our application into a website in which people can login, rate some movies and the system recommend movies whenever they ask for.


{{< youtube bhjEfBusK-I >}}