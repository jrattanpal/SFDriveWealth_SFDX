({
    doInit: function(component, event, helper) {
        var acc = component.get('v.acc');
        var dworder = component.get('v.dworder');

        component.find('utils').log('acc:', acc);
        
        //Pre-set DW Account List value so that first record is selected
        //This is because lightning:select doesn't fire onchange on the first record if it's pre-selected
        if(acc.sfaip_fsc_dw__DW_Accounts__r.records.length >0 ){
            dworder.sfaip_fsc_dw__DW_Account__c =    acc.sfaip_fsc_dw__DW_Accounts__r.records[0].Id;
        }

    },
    submitOrder: function(component, event, helper) {
        helper.submitOrder(component, helper);
    }
})