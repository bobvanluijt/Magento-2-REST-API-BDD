'use strict';
/**
 *  _____                 _   _
 * |  __ \               | | (_)
 * | |  | | ___  _ __ ___| |  _  ___
 * | |  | |/ _ \| '__/ _ \ | | |/ _ \
 * | |__| | (_) | | |  __/ |_| | (_) |
 * |_____/ \___/|_|  \___|_(_)_|\___/
 *
 * Description: Installs a complete Magento 2 installation in travis and validates the APIs
 * Author: Bob van Luijt
 */
var assert  = require('assert');
var request = require('supertest');
var should  = require('should');

var magentoRestUrl = 'http://localhost/index.php/rest/default/V1'; // set in travis yaml file.

describe('Buy a simple product', () => {

    it('should get a product with certain properties', function(done) {

        this.timeout(10000);                // set timeout to 10seconds because all caches are disabled

        request(magentoRestUrl)             // set the request url
            .get('/products/24-MB01')       // always JSON
            .expect('Content-Type', /json/) // always JSON
            .expect(200, (err, res) => {
                let result = res.body;      // load the result into a let
                result // should have product in JSON object
                    .should
                    .have
                    .property('id');
                result // should have product in JSON object
                    .should
                    .have
                    .property('sku', '24-MB01');
                result // should have product in JSON object
                    .should
                    .have
                    .property('name', 'Joust Duffle Bag');
                result // should have product in JSON object
                    .should
                    .have
                    .property('price', 34);
                result // should have product in JSON object
                    .should
                    .have
                    .property('visibility');
                result // should have product in JSON object
                    .should
                    .have
                    .property('type_id', 'simple');
                result // should have product in JSON object
                    .should
                    .have
                    .property('created_at');
                result // should have product in JSON object
                    .should
                    .have
                    .property('updated_at');
                done();
            });

    });

    /**
     * ETCETERA...
     */

});