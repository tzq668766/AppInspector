/*
 * File: app/view/Events.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
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

Ext.define('AI.view.Events', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.eventgrid',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    icon: 'resources/images/light.png',
    title: 'Events',
    store: 'Events',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'eventName',
                    text: 'Event Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'source',
                    text: 'Event Source',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'xtype',
                    text: 'XType',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'Cmp ID',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'ClearEvents',
                            text: 'Clear'
                        },
                        {
                            xtype: 'button',
                            itemId: 'RecordEvents',
                            text: 'Record'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'StopRecording',
                            text: 'Stop Recording'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});