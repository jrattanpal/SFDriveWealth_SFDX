({
    doInit : function(component, event, helper) {
        helper.getAccountInfo(component, helper);
        /**/
    },
    handleEvtOrderCreated: function(component, event, helper){
        component.find('utils').log('Handling EvtOrderCreated Event: ' + event);
    },
    handleEvtAccountCreated: function(component, event, helper) {
        component.find('utils').log('Handling handleEvtAccountCreated Event: ', event);

        helper.getAccountInfo(component, helper);
    },
    handleEvtInstrumentInfo: function(component, event, helper) {
        component.find('utils').log('Handling EvtInstrumentInfo Event: ', event);

        //Instrument information will be used when order form is built
        component.set('v.instrument', event.getParam("instrument"));

        helper.showCreateMarketOrderForm(component, helper);
        helper.hideSearchSymbolForm(component, helper);
    },
    searchSymbol: function(component, event, helper) {
        //Show symbol search form
        helper.showSearchSymbolForm(component, helper);

        //Hide/Destroy market order form
        helper.hideCreateMarketOrderForm(component, helper);
    }

})