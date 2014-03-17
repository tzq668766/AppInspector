/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AI.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
        'AI.util.InspectedWindow'
    ],

    views: [
        'MainView',
        'About'
    ],

    init: function(application) {
        this.control({
            '#mainview' : {
                'afterrender' : this.onAppRender
            }
        });
    },

    onAppRender: function() {
        var app = this.getApplication(),
            main = Ext.ComponentQuery.query('#mainview')[0];

        AI.util.InspectedWindow.eval(
            AI.util.InspectedWindow.getAppVersion,
            null,
            function (data) {
                if (data) {
                    main.down('#AppDetails').setSource(data);

                    app.info = {
                        framework : data.extjs ? 'ext' : 'touch',
                        version   : data.extjs ? data.extjs.version : data.touch.version
                    };
                } else {
                    // mask entire AppInspector body element
                    Ext.getBody().mask(
                        'No Sencha framework found!',
                        'no-framework-mask'
                    );
                }
            }
        );
    }

});
