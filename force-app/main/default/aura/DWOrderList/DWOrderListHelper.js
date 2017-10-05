({
    getOrderList: function(component, helper) {
        var apexBridge = component.find("ApexBridge");
        apexBridge.callApex({
            component: component,
            data: {
                operation: "DWOrderList_Controller",
                input: {
                    AccountID: component.get('v.recordId'),
                    mode: 'getOrders'
                }
            },
            callBackMethod: function (data) {
                component.find('utils').log('DWOrderStatus.data: ', data);
                //component.set('v.orders', JSON.parse(data.output));


                if($A.util.isUndefined(data.output) || data.output.length <=0){
                    
                    var message = Array();
                    message.push(
                        ["ui:message", {
                            'severity': 'information',
                            'body': 'There are no previous orders'
                        }]
                    );

                    component.set('v.orders', []);

                    component.find('utils').createComponents(message, component.find('uiMessage'));
                }else{

                    var orders = [], key;
                    for ( key in data.output ) {
                        data.output[key].sfaip_fsc_dw__Executed_When__c = helper.dateFromSpecialString(data.output[key].sfaip_fsc_dw__Executed_When__c);
                        orders.push({value:data.output[key], key:key});
                    }
                    component.find('utils').log('DWOrderStatus.orders: ', orders);

                    component.set('v.orders', orders);

                    component.find('utils').destroyComponents(component.find('uiMessage'));
                }
            }
        });
    },
    dateFromSpecialString: function(str) {
        try {
            var dateObject = new Date(Date.parse(str));

            return dateObject.toDateString();
        }catch(err){}
        return str;
    },
    fetchStatus: function(component, helper, orderIndex){
        var orders = component.get('v.orders');


        var apexBridge = component.find("ApexBridge");
        apexBridge.callApex({
            component: component,
            data: {
                operation: "DWOrderList_Controller",
                input: {
                    OrderID: orders[orderIndex].key,
                    AccountID: component.get('v.recordId'),
                    mode: 'fetchStatus'
                }
            },
            callBackMethod: function (data) {
                component.find('utils').log('fetchStatus.data: ', data);
                //component.set('v.orders', data.output);

                if(data.output.length <=0 || data.output.code != null){
                    var message = Array();
                    message.push(
                        ["ui:message", {
                            'severity': 'error',
                            'body': 'Some error occured while fetching status'
                        }]
                    );

                    component.find('utils').createComponents(message, component.find('uiMessage'));
                }else{


                    var orders = component.get('v.orders');
                    orders[orderIndex].value.sfaip_fsc_dw__Order_Status__c = data.output.ordStatus;
                    orders[orderIndex].value.sfaip_fsc_dw__Executed_When__c = data.output.executedWhen;
                    component.set('v.orders', orders);

                    component.find('utils').destroyComponents(component.find('uiMessage'));
                }
            }
        });
    }
})