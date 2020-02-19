"use strict";

function noteHz(nota) {
    var notaMaiuscolo = nota.toString().toUpperCase();

    var corrispondenzaNoteFrequenza = {
        'A0': 27.5000,
        'A#0': 29.1352,
        'BB0': 29.1352,
        'B0': 30.8677,
        'B#0': 32.7032,
        'CB1': 30.8677,
        'C1': 32.7032,
        'C#1': 34.6478,
        'DB1': 34.6478,
        'D1': 36.7081,
        'D#1': 38.8909,
        'EB1': 38.8909,
        'E1': 41.2034,
        'FB1': 41.2034,
        'E#1': 43.6535,
        'F1': 43.6535,
        'F#1': 46.2493,
        'GB1': 46.2493,
        'G1': 48.9994,
        'G#1': 51.9131,
        'AB1': 51.9131,
        'A1': 55.0000,
        'A#1': 58.2705,
        'BB1': 58.2705,
        'B1': 61.7354,
        'CB2': 61.7354,
        'B#1': 65.4064,
        'C2': 65.4064,
        'C#2': 69.2957,
        'DB2': 69.2957,
        'D2': 73.4162,
        'D#2': 77.7817,
        'EB2': 77.7817,
        'E2': 82.4069,
        'FB2': 82.4069,
        'E#2': 87.3071,
        'F2': 87.3071,
        'F#2': 92.4986,
        'GB2': 92.4986,
        'G2': 97.9989,
        'G#2': 103.826,
        'AB2': 103.826,
        'A2': 110.000,
        'A#2': 116.541,
        'BB2': 116.541,
        'B2': 123.471,
        'CB3': 123.471,
        'B#2': 130.813,
        'C3': 130.813,
        'C#3': 138.591,
        'DB3': 138.591,
        'D3': 146.832,
        'D#3': 155.563,
        'EB3': 155.563,
        'E3': 164.814,
        'FB3': 164.814,
        'E#3': 174.614,
        'F3': 174.614,
        'F#3': 184.997,
        'GB3': 184.997,
        'G3': 195.998,
        'G#3': 207.652,
        'AB3': 207.652,
        'A3': 220.000,
        'A#3': 233.082,
        'BB3': 233.082,
        'B3': 246.942,
        'CB4': 246.942,
        'B#3': 261.626,
        'C4': 261.626,
        'C#4': 277.183,
        'DB4': 277.183,
        'D4': 293.665,
        'D#4': 311.127,
        'EB4': 311.127,
        'E4': 329.628,
        'FB4': 329.628,
        'E#4': 349.228,
        'F4': 349.228,
        'F#4': 369.994,
        'GB4': 369.994,
        'G4': 391.995,
        'G#4': 415.305,
        'AB4': 415.305,
        'A4': 440.000,
        'A#4': 466.164,
        'BB4': 466.164,
        'B4': 493.883,
        'CB5': 493.883,
        'B#4': 523.251,
        'C5': 523.251,
        'C#5': 554.365,
        'DB5': 554.365,
        'D5': 587.330,
        'D#5': 622.254,
        'EB5': 622.254,
        'E5': 659.255,
        'FB5': 659.255,
        'E#5': 698.456,
        'F5': 698.456,
        'F#5': 739.989,
        'GB5': 739.989,
        'G5': 783.991,
        'G#5': 830.609,
        'AB5': 830.609,
        'A5': 880.000,
        'A#5': 932.328,
        'BB5': 932.328,
        'B5': 987.767,
        'CB6': 987.767,
        'B#5': 1046.50,
        'C6': 1046.50,
        'C#6': 1108.73,
        'DB6': 1108.73,
        'D6': 1174.66,
        'D#6': 1244.51,
        'EB6': 1244.51,
        'FB6': 1318.51,
        'E6': 1318.51,
        'E#6': 1396.91,
        'F6': 1396.91,
        'F#6': 1479.98,
        'GB6': 1479.98,
        'G6': 1567.98,
        'G#6': 1661.22,
        'AB6': 1661.22,
        'A6': 1760.00,
        'A#6': 1864.66,
        'BB6': 1864.66,
        'B6': 1975.53,
        'CB7': 1975.53,
        'B#6': 2093.00,
        'C7': 2093.00,
        'C#7': 2217.46,
        'DB7': 2217.46,
        'D7': 2349.32,
        'D#7': 2489.02,
        'EB7': 2489.02,
        'E7': 2637.02,
        'FB7': 2637.02,
        'E#7': 2793.83,
        'F7': 2793.83,
        'F#7': 2959.96,
        'GB7': 2959.96,
        'G7': 3135.96,
        'G#7': 3322.44,
        'AB7': 3322.44,
        'A7': 3520.00,
        'A#7': 3729.31,
        'BB7': 3729.31,
        'B7': 3951.07,
        'CB8': 3951.07,
        'B#7': 4186.01,
        'C8': 4186.01
    };

    var res = corrispondenzaNoteFrequenza[notaMaiuscolo];

    isNaN(res) ? res = 0 : res = res;

    if (res == 0) {
        notaMaiuscolo = notaMaiuscolo.replace(/[^\d.-]/g, '');
        res = parseFloat(notaMaiuscolo);
        if (isNaN(res)) res = 0;
    }
    return res;
}

/*
function soundEffect(
    frequencyValue, //The sound's fequency pitch in Hertz
    attack, //The time, in seconds, to fade the sound in
    decay, //The time, in seconds, to fade the sound out
    type, //waveform type: "sine", "triangle", "square", "sawtooth"
    volumeValue, //The sound's maximum volume
    panValue, //The speaker pan. left: -1, middle: 0, right: 1
    wait, //The time, in seconds, to wait before playing the sound
    pitchBendAmount, //The number of Hz in which to bend the sound's pitch down
    reverse, //If `reverse` is true the pitch will bend up
    randomValue, //A range, in Hz, within which to randomize the pitch
    dissonance, //A value in Hz. It creates 2 dissonant frequencies above and below the target pitch
    echo, //An array: [delayTimeInSeconds, feedbackTimeInSeconds, filterValueInHz]
    reverb, //An array: [durationInSeconds, decayRateInSeconds, reverse]
    timeout //A number, in seconds, which is the maximum duration for sound effects
) {} //Set the default values
if (frequencyValue === undefined) frequencyValue = 200;
if (attack === undefined) attack = 0;
if (decay === undefined) decay = 1;
if (type === undefined) type = "sine";
if (volumeValue === undefined) volumeValue = 1;
if (panValue === undefined) panValue = 0;
if (wait === undefined) wait = 0;
if (pitchBendAmount === undefined) pitchBendAmount = 0;
if (reverse === undefined) reverse = false;
if (randomValue === undefined) randomValue = 0;
if (dissonance === undefined) dissonance = 0;
if (echo === undefined) echo = undefined;
if (reverb === undefined) reverb = undefined;
if (timeout === undefined) timeout = undefined;
*/
