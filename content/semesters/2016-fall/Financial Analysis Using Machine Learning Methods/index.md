---
advisors:
- Ali Taylan Cemgil
poster: images/cmpe_492_poster_presentation_0.jpg
students:
- name: Doruk Kilitçioğlu
title: Financial Analysis Using Machine Learning Methods
type: project
---

Machine Learning methods have long been applied to financial data. We explore the correlation (or the lack thereof) of financial data, such as the BIST 100 index or individual stock prices, to features extracted from financial news and past data. We intend to use the advancements in text classification and Natural Language Processing capabilities in general, and machine learning models to extract the features of Turkish news documents and stock price series using statistical methods and to analyze the correlation of the extracted features with the financial data. We build a platform for data annotation for annotating the sentiment of reports about stocks in BIST, and use that to build a sentiment classifier. We use report sentiment, past price data and moving averages as our feature set and try it on Linear Regression and Logistic Regression models. We also use HMM with stock prices, and a variant of Yoshua Bengio’s Input Output HMM with sentiment inputs. We show that using IOHMM with sentiment inputs gives better results than using IOHMM with report availabilities or HMM with stock prices. We achieve an average precision of 64% in predicting the non-increase of stock prices across 40 stocks, and reach an accuracy of 54%.


{{< youtube BfIEpcRUvJE >}}