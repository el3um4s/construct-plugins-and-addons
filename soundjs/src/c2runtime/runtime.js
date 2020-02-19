// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.behaviors, "cr.behaviors not created");

/////////////////////////////////////
// Behavior class
// *** CHANGE THE BEHAVIOR ID HERE *** - must match the "id" property in edittime.js
//           vvvvvvvvvvvvvvvv
cr.behaviors.stranianelliSoundJS = function (runtime) {
    this.runtime = runtime;
};

(function () {
    // *** CHANGE THE BEHAVIOR ID HERE *** - must match the "id" property in edittime.js
    //                               vvvvvvvvvvvvvvvv
    var behaviorProto = cr.behaviors.stranianelliSoundJS.prototype;

    /////////////////////////////////////
    // Behavior type class
    behaviorProto.Type = function (behavior, objtype) {
        this.behavior = behavior;
        this.objtype = objtype;
        this.runtime = behavior.runtime;
    };

    var behtypeProto = behaviorProto.Type.prototype;

    behtypeProto.onCreate = function () {};

    /////////////////////////////////////
    // Behavior instance class
    behaviorProto.Instance = function (type, inst) {
        this.type = type;
        this.behavior = type.behavior;
        this.inst = inst; // associated object instance to modify
        this.runtime = type.runtime;
    };

    var behinstProto = behaviorProto.Instance.prototype;

    behinstProto.onCreate = function () {
        this.noteFrequency = this.properties[0]; // la nota in pitch notation o in Hertz (Hz)

        this.frequency = noteHz(this.noteFrequency);
    };

    behinstProto.onDestroy = function () {
        // called when associated object is being destroyed
        // note runtime may keep the object and behavior alive after this call for recycling;
        // release, recycle or reset any references here as necessary
    };

    // called when saving the full state of the game
    behinstProto.saveToJSON = function () {
        // return a Javascript object containing information about your behavior's state
        // note you MUST use double-quote syntax (e.g. "property": value) to prevent
        // Closure Compiler renaming and breaking the save format
        return {
            "noteFrequency": this.noteFrequency
            // e.g.
            //"myValue": this.myValue
        };
    };

    // called when loading the full state of the game
    behinstProto.loadFromJSON = function (o) {
        // load from the state previously saved by saveToJSON
        // 'o' provides the same object that you saved, e.g.
        // this.myValue = o["myValue"];
        // note you MUST use double-quote syntax (e.g. o["property"]) to prevent
        // Closure Compiler renaming and breaking the save format
        this.noteFrequency = o["noteFrequency"];
    };

    behinstProto.tick = function () {
        var dt = this.runtime.getDt(this.inst);

        // called every tick for you to update this.inst as necessary
        // dt is the amount of time passed since the last tick, in case it's a movement
    };

    // The comments around these functions ensure they are removed when exporting, since the
    // debugger code is no longer relevant after publishing.
    /**BEGIN-PREVIEWONLY**/
    behinstProto.getDebuggerValues = function (propsections) {
        propsections.push({
            "title": this.type.name,
            "properties": [
                {
                    "name": "Note/Frequency",
                    "value": this.noteFrequency,
                    "readonly": true
                },
                {
                    "name": "Note",
                    "value": this.frequency,
                    "readonly": true
                }
			]
        });
    };

    behinstProto.onDebugValueEdited = function (header, name, value) {};
    /**END-PREVIEWONLY**/

    //////////////////////////////////////
    // Conditions
    function Cnds() {};

    // the example condition
    Cnds.prototype.IsMoving = function () {
        // ... see other behaviors for example implementations ...
        return false;
    };

    // ... other conditions here ...

    behaviorProto.cnds = new Cnds();

    //////////////////////////////////////
    // Actions
    function Acts() {};

    // the example action
    Acts.prototype.Play = function () {
        // ... see other behaviors for example implementations ...
        soundEffect(this.frequency, 0, 0.2, "sine", 1, 0, 0);
    };

    Acts.prototype.setNoteFrequency = function (noteFrequency = 200) {
        this.noteFrequency = noteFrequency;
        this.frequency = noteHz(this.noteFrequency);
    };
    // ... other actions here ...

    behaviorProto.acts = new Acts();

    //////////////////////////////////////
    // Expressions
    function Exps() {};

    // the example expression
    Exps.prototype.MyExpression = function (ret) // 'ret' must always be the first parameter - always return the expression's result through it!
    {
        ret.set_int(1337); // return our value
        // ret.set_float(0.5);			// for returning floats
        // ret.set_string("Hello");		// for ef_return_string
        // ret.set_any("woo");			// for ef_return_any, accepts either a number or string
    };

    // ... other expressions here ...

    behaviorProto.exps = new Exps();

}());
