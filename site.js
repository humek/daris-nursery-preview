document.getElementById('enquiry-form').addEventListener('submit',function(event){
 event.preventDefault();
 if(!this.reportValidity())return;
 const data=new FormData(this);
 const body=['Hello Daris OEM team,','', 'Company: '+data.get('company'),'Approximate quantity: '+(data.get('quantity')||'To be confirmed'),'Destination: '+(data.get('destination')||'To be confirmed'),'','Requirements:',data.get('requirements'),'','Drawings or reference photos will be attached if available. Otherwise, please advise on standard-size options or help prepare a drawing based on the requirements above.'].join('\n');
 window.location.href='mailto:info@daris-oem.com?subject='+encodeURIComponent('Nursery trolley OEM enquiry — '+data.get('company'))+'&body='+encodeURIComponent(body);
 document.getElementById('form-status').textContent='Your email app should open with a draft. If it does not, email info@daris-oem.com directly. No enquiry has been sent by this website.';
});

(function(){
 const carousel=document.querySelector('[data-carousel]');
 if(!carousel)return;
 const slides=Array.from(carousel.querySelectorAll('.hero-slide'));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,timer,hovered=false,focused=false;
 function stop(){clearInterval(timer);}
 function show(index){current=index%slides.length;slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===current);slide.setAttribute('aria-hidden',String(i!==current));slide.inert=i!==current;});}
 function start(){stop();if(!reduced.matches&&!document.hidden&&!hovered&&!focused)timer=setInterval(()=>show(current+1),6500);}
 carousel.addEventListener('mouseenter',()=>{hovered=true;stop();});carousel.addEventListener('mouseleave',()=>{hovered=false;start();});
 carousel.addEventListener('focusin',()=>{focused=true;stop();});carousel.addEventListener('focusout',event=>{focused=carousel.contains(event.relatedTarget);start();});
 document.addEventListener('visibilitychange',start);reduced.addEventListener('change',start);
 show(0);start();
})();
