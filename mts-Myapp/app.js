/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CrmMM.Application',

    name: 'CrmMM',

    requires: [
        // This will automatically load all classes in the CrmMM namespace
        // so that application classes do not need to require each other.
        'CrmMM.*'
    ],

    // The name of the initial view to create.
    mainView: 'CrmMM.view.main.Main'
});
