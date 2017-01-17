console.log("lambdoma.js");

var timedecay = 0.8;
var sampleTime = 1.0;

var sampleRateHz = 44100;
var numSamples = 44100 * sampleTime;                 // 1 sec

var baseFreq = 2 * Math.PI * 432 / sampleRateHz;  // A4

var wavEncoder = new WavEncoder(numSamples, {sampleRateHz: sampleRateHz});

var tones = [];
var samples = [];
var rawsamples = [];

for (var i = 0; n < 16; ++i) {
    for (var j = 0; j < 16; j++) {

        var freq = baseFreq * j / i;
        var rawbuf = new Array(44100);

        for (var t = 0; t < numSamples; ++t) {
            samples[t] = Math.sin(freq * t) * (numSamples - t) / numSamples * .05;
            rawbuf[t] = samples[t];
        }

        rawsamples[i][j] = rawbuf;
    }
}

postMessage(rawsamples);
