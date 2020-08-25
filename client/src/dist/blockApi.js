"use strict";
exports.__esModule = true;
exports.fetchBlocks = void 0;
var helpers_1 = require("helpers");
// userApi.ts
var HOST = "127.0.0.1:3000";
var SCHEME = "http";
var PATH = '/users/';
/**
 *
 * @param {Record<string, string>} [init]
 * @returns {Promise<BlockID[]>}
 */
function fetchBlocks(init) {
    var searchParams = new URLSearchParams(init);
    var QUERY = searchParams.toString();
    var input = SCHEME + "://" + HOST + "/" + PATH + "?" + QUERY;
    return helpers_1.createRequest(input);
}
exports.fetchBlocks = fetchBlocks;
