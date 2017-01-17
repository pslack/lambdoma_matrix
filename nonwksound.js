importScripts('wavencoder.js');

console.log("nonwkworker.js");
var timedecay = 0.8;
var sampleTime = 1.0;

var sampleRateHz = 44100;
var numSamples = 44100 * sampleTime;                 // 1 sec

var baseFreq = 2 * Math.PI * 27.5 / sampleRateHz;  // A0

var wavEncoder = new WavEncoder(numSamples, {sampleRateHz: sampleRateHz});

var tones = [];
var samples = [];

for (var n = 0; n < 88; ++n) {

  var freq = baseFreq * Math.pow(2, n/12);

  for (var t = 0; t < numSamples; ++t) {
    samples[t] = Math.sin(freq * t)*(numSamples-t)/numSamples*.05;
  }

  tones[n] = wavEncoder.encode(samples);
  
}

postMessage(tones);
