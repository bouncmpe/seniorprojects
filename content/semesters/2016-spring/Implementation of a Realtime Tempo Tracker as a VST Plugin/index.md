---
advisors:
- Ali Taylan Cemgil
poster: images/cmpe492poster-page-001.jpg
students:
- name: Behlülcan Mert Çotuk
- name: Umut Gülsün
title: Implementation of a Realtime Tempo Tracker as a VST Plugin
type: project
---

This project aims at implementing a VST plugin that tracks the tempo of a musical piece in BPM (beats per minute) in real time, namely the RealTime Tempo Tracker plugin. The implementation of the RealTime Tempo Tracker plugin comes in two parts: onset detection and measuring the tempo using a Hidden Markov model based on onset data. The plugin takes some waveform as input via a microphone or a stereo mixer. Then Fast Fourier transform is applied on windows of the waveform to track the change of the power spectrum over time. This computation gives us data for the detection of possible musical onsets. The second part of the implementation involves taking the onset data as input and finding a probable rhythmic pattern out of this onset data using a Hidden Markov model, namely the Dynamic Bar Pointer Model. The result of this process provides us with the tempo of the musical piece.


{{< youtube 7SueGBpBjhY >}}