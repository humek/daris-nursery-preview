document.getElementById('enquiry-form').addEventListener('submit',function(event){
 event.preventDefault();
 if(!this.reportValidity())return;
 const data=new FormData(this);
 const body=['Hello Daris OEM team,','', 'Company: '+data.get('company'),'Approximate quantity: '+(data.get('quantity')||'To be confirmed'),'Destination: '+(data.get('destination')||'To be confirmed'),'','Requirements:',data.get('requirements'),'','Drawings or reference photos will be attached if available. Otherwise, please advise on standard-size options or help prepare a drawing based on the requirements above.'].join('\n');
 window.location.href='mailto:info@daris-oem.com?subject='+encodeURIComponent('Nursery trolley OEM enquiry — '+data.get('company'))+'&body='+encodeURIComponent(body);
 document.getElementById('form-status').textContent='Your email app should open with a draft. If it does not, email info@daris-oem.com directly. No enquiry has been sent by this website.';
});
