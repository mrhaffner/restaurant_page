(()=>{"use strict";const e=(e,l,n,t,u)=>{const o=document.createElement(l),r=document.createTextNode(u);null!==n&&(o.id=n),null!==t&&(o.className=t),o.appendChild(r),e.appendChild(o)},l=document.getElementById("content"),n=document.createElement("div");n.id="divContainer";const t=document.createElement("div");t.id="cont";const u=()=>{e(t,"p",null,null,"Future Burger is home of the Jucy Lucy - a burger that is so mouth wateringly delicious that's it's almost as though you were biting into pure flavor crystals.");const l=new Image;l.src="burger.jpg",t.appendChild(l)};function o(){for(;cont.firstChild;)cont.removeChild(cont.firstChild)}(()=>{const u=document.createElement("ul");l.appendChild(u),e(u,"li","home_btn","nav_btn","Home"),e(u,"li","menu_btn","nav_btn","Menu"),e(u,"li","contact_btn","nav_btn","Contact");const o=document.createElement("header");l.appendChild(o),e(o,"h1",null,null,"Future Burger"),l.appendChild(n),n.appendChild(t)})(),document.getElementById("home_btn").addEventListener("click",(()=>{o(),u()})),document.getElementById("menu_btn").addEventListener("click",(()=>{o(),e(t,"h2",null,null,"Menu"),e(t,"h3",null,null,"Jucy Lucy Burgers"),e(t,"p",null,null,"Ameriburger"),e(t,"p",null,null,"A burger stuffed inside a burger"),e(t,"p",null,null,"The Angry Goat"),e(t,"p",null,null,"Creamy Goat Cheese explodes into your mouth with every bite "),e(t,"p",null,null,"Aspen Burger"),e(t,"p",null,null,"Fried Egg on top of Guacamole - Cheddar Cheese in the middle"),e(t,"p",null,null,"Bacon BBQ"),e(t,"p",null,null,"Comes with Extra Bacon and more than enough Spice"),e(t,"h3",null,null,"Sides"),e(t,"p",null,null,"American Fries"),e(t,"p",null,null,"Fried in lard, coated in salt - as it was meant to be"),e(t,"p",null,null,"Sweet Potato Fries"),e(t,"p",null,null,"The more colorful brother of the American Fries"),e(t,"h3",null,null,"Beer"),e(t,"p",null,null,"High Hops IPA"),e(t,"p",null,null,"This microbrew's hops cont is outnull, null,  of this world"),e(t,"p",null,null,"Obscure Reference Lager"),e(t,"p",null,null,"It's definitely cooler if no one has heard of your favorite brew")})),document.getElementById("contact_btn").addEventListener("click",(()=>{o(),e(t,"h2",null,null,"Contact"),e(t,"p",null,null,"612 Wharf Ave"),e(t,"p",null,null,"Burger Town, NY 12345"),e(t,"p",null,null,"(784) 555-5555"),e(t,"p",null,null,"futureburger@fakemail.com")})),u()})();