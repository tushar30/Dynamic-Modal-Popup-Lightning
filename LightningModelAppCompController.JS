({
    handleShowModal : function (component, event, helper) {
        var modalBody;
        var modalFooter;
        $A.createComponents([
            [component.get("v.bodyComponent"),{messageBody : component.get("v.bodyMessage"),}],
            [component.get("v.FooterComponent"),{}]
        ],
                            function(components, status){
                                if (status === "SUCCESS") {
                                    modalBody = components[0];
                                    modalFooter = components[1];
                                    component.find('overlayLib').showCustomModal({
                                        header: component.get("v.titleMessage"),
                                        body: modalBody, 
                                        footer: modalFooter,
                                        showCloseButton: true,
                                        cssClass: "my-modal",//my-custom-class,my-other-class",
                                        closeCallback: function() {
                                            alert('You closed the alert!');
                                        }
                                    })
                                }
                            }
                           );
    },
    /* $A.createComponents([
            [component.get("v.bodyComponent"),{"component":component.get("v.bodyComponent"),}],
            ["c:LightningModelFooterComp",{}]
        ],*/
})
