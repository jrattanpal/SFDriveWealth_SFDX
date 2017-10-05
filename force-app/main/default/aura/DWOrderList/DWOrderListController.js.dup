({
    doInit: function(component, event, helper) {
        helper.getOrderList(component, helper);
    },
    fetchStatus: function(component, event, helper) {
        var orderIndex = event.getSource().get('v.value');
        helper.fetchStatus(component, helper, orderIndex);
    },
    handleEvtOrderCreated: function(component, event, helper) {
        //New order is created so refresh the list
        helper.getOrderList(component, helper);
    }


})