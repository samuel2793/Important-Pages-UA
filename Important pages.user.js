// ==UserScript==
// @name         Important pages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cvnet.cpd.ua.es/uacloud/home/indexverificado
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ua.es
// @grant        none
// @include  https://cvnet.cpd.ua.es/uacloud/home/indexverificado
// @include  https://cvnet.cpd.ua.es/uacloud/home/indexverificado#
// @include  https://cvnet.cpd.ua.es/uacloud/home/indexVerificado
// @include  https://cvnet.cpd.ua.es/uacloud/home/indexVerificado
// @include  https://cvnet.cpd.ua.es/uacloud/home/indexVerificado#
// ==/UserScript==

//Botón google drive
   //declarar elemento
amogus2 = '<div id="fichamov-ImportantPages" class="aplicacion mini mb-3 mr-3 "> <input type="hidden" class="idapp" value="ImportantPages"><a target="ImportantPages" href="https://samuel2793.github.io/Important-Pages-UA/index.html" data-container="body" data-placement="top" data-toggle="popover" data-html="true" data-trigger="hover" data-content="Permite acceder al Sistema de gestión del trabajo final de titulación."><span class="iconoApp"><i class="sinpadding icono  iconoSuperior iconouaproject fa-stack-1x "><img class="icono" alt="<b>GDrive</b>" src="https://spb49-ua.github.io/Personal-Page/icon.ico"></i></span><span class="nombreAppIcono"><b>ImportantPages</b></span></a><span class="numNotificacion badge mini" style="display: none;"></span></div>'
   //Añadir elemento
document.querySelector("#fichamov-UAPROYECT").outerHTML=document.querySelector("#fichamov-UAPROYECT").outerHTML+amogus2
