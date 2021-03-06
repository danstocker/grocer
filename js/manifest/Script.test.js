/*global dessert, troop, sntls, grocer */
/*global module, test, expect, ok, equal, strictEqual, notStrictEqual, deepEqual, notDeepEqual, raises */
(function () {
    "use strict";

    module("Script");

    test("Instantiation", function () {
        var asset = grocer.Script.create('foo/bar');

        equal(asset.assetPath, 'foo/bar', "should set assetPath property");
        equal(asset.assetType, 'js', "should set assetType to js");
    });

    test("Asset surrogate", function () {
        var asset = grocer.Asset.create('foo/bar', 'js');
        ok(asset.isA(grocer.Script), "should return Script instance");
    });

    test("Serialization", function () {
        var asset = grocer.Script.create('foo/bar');
        equal(
            asset.toString(),
            '<script src="foo/bar"></script>',
            "should return a script tag");
    });
}());
