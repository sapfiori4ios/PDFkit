/*!
 * PSPDFKit for Web 2022.5.1 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2022 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(globalThis.webpackChunkPSPDFKit=globalThis.webpackChunkPSPDFKit||[]).push([[6377],{89930:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var s=n(70545),i=n(14968);var o=n(97921),a=n(47003),r=n(19491),d=n(50893),c=n(89595),l=n(35369),h=n(80614),u=n(89777),m=n(85596),p=n(41371),f=n(12130);var g=n(51534),w=n(1367),P=n(49029);class y extends(l.WV({authPayload:null,serverUrl:null,hostedBaseUrl:null,documentId:null,backendPermissions:null,documentURL:null,imageToken:null,instantSettings:null,token:null,features:(0,l.aV)(),signatureFeatureAvailability:P.H.NONE,isFormsEnabled:!0,minSearchQueryLength:1,documentHandle:null,isDocumentHandleOutdated:!1,digitalSignatures:null,defaultGroup:void 0,hasCollaborationPermissions:!1,forceLegacySignaturesFeature:!1})){}var S=n(11278),v=n(50809),_=n(16396);const b="The image can not be rendered because of an unknown error.";class A{constructor(e){let{identifier:t,url:n,token:s,payload:i,doNotRequestWebP:o=!1}=e;this.identifier=t,this.url=n,this.token=s,this.payload=i,this.doNotRequestWebP=o}abort(){this.httpRequest&&this.httpRequest.abort()}request(){return new Promise(((e,t)=>{const n=new XMLHttpRequest;this.httpRequest=n,n.open(this.payload?"POST":"GET",this.url,!0),n.setRequestHeader("X-PSPDFKit-Image-Token",this.token),n.setRequestHeader("PSPDFKit-Platform","web"),n.setRequestHeader("PSPDFKit-Version",(0,i.oM)()),v.Zy&&!this.doNotRequestWebP&&n.setRequestHeader("Accept","image/webp,*/*"),n.responseType="blob",n.onreadystatechange=(async()=>{if(4!==n.readyState)return;if(n.response&&n.response.type.startsWith("application/json")){const i=new FileReader;return i.onload=n=>{var i;const o=JSON.parse(null===(i=n.target)||void 0===i?void 0:i.result);o.attachments_not_found?e({attachmentsNotFound:o.attachments_not_found}):o.error?t(new s.p2(`The server could not render the requested image (${o.error})`)):t(new s.p2(b))},i.onerror=()=>t(new s.p2(b)),void i.readAsText(n.response)}if(!(0,S.vu)(n.status))return void t(new s.p2(b));const i=n.response,o=URL.createObjectURL(i),a=new Image;a.onerror=()=>t(new s.p2(b)),a.src=o;const r="function"==typeof a.decode?a.decode():new Promise((e=>setTimeout(e,200)));await r,e(new _.Z(a,(()=>URL.revokeObjectURL(o))))}).bind(this),n.send(this.payload)}))}}var R=n(34997),F=n(94290),k=n(47291),x=n(67117),E=n(63880),q=n(29412),T=n(42457),$=n(24956),D=n(5164),I=n(14651),U=n(36091);class j extends q.W{_password=null;type="SERVER";constructor(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;if(super(),"object"!=typeof e.authPayload)throw new s.p2("authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`");const o=null===(t=e.authPayload)||void 0===t?void 0:t.accessToken;let a=null,r=null,d=null;if(o)d=e.hostedBaseUrl||"https://api.pspdfkit.com/",(0,S.sf)(d),function(e){if("string"!=typeof e)throw new s.p2("`accessToken` must be of type string.")}(o);else{if(a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;const n=e.serverUrl||(0,i.SV)(t.document);if("/"!==n.substr(-1))throw new s.p2("`serverUrl` must have a slash at the end (e.g. `https://pspdfkit.example.com/`).");if(!e.serverUrl){if(n===`${t.location.protocol}//${t.location.host}/`)throw new s.p2('PSPDFKit automatically infers the URL of PSPDFKit Server from the current `<script>` tag.\nIn the current case, this URL is set to the same as the current browser\'s location.\nThis can happen when you bundle pspdfkit.js with your custom JavaScript for example.\n\nTo make sure everything works as expected, please set the `serverUrl` to the URL of PSPDFKit Server:\n\nPSPDFKit.load({\n  serverUrl: "https://pspdfkit-server.example.com/",\n  ...,\n});')}return n}(e,n),"string"!=typeof e.documentId)throw new s.p2("`documentId` must be of type string.");if(r=`${a}i/d/${e.documentId}`,"object"!=typeof e.authPayload||!("jwt"in e.authPayload)||"string"!=typeof e.authPayload.jwt)throw new s.p2("authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`");!function(e){const t="The supplied JWT is invalid. Please refer to our guides on how to set up authentication:\n  https://pspdfkit.com/guides/web/current/server-backed/client-authentication/";if(-1!==e.indexOf('{"internal":'))return;let n;(0,s.kG)("string"==typeof e&&3===e.split(".").length,t);try{const t=f.Base64.decode(e.split(".")[1]);n=JSON.parse(t)}catch(e){throw new s.p2(t)}(0,s.kG)("string"==typeof n.document_id,"The supplied JWT is invalid. The field 'document_id' has to be a string value.\n  Please refer to our guides for further information: https://pspdfkit.com/guides/web/current/server-backed/client-authentication/")}(e.authPayload.jwt)}!function(e){let t="";if("boolean"!=typeof e&&((0,s.PO)(e)?(e.hasOwnProperty("clientsPresenceEnabled")&&"boolean"!=typeof e.clientsPresenceEnabled&&(t+="`clientsPresenceEnabled` in instance settings is not valid. Must be `true` or `false`.\n"),e.hasOwnProperty("listenToServerChangesEnabled")&&"boolean"!=typeof e.listenToServerChangesEnabled&&(t+="`listenToServerChangesEnabled` in instance settings is not valid. Must be `true` or `false`.\n")):t="`instant` flag must either be set to `true` or `false`\n",t))throw new s.p2(`${t}\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/`)}(e.instant);let c=null;if(e.instant)if((0,s.PO)(e.instant)){const t=e.instant;c={clientsPresenceEnabled:!1!==t.clientsPresenceEnabled,listenToServerChangesEnabled:!1!==t.listenToServerChangesEnabled}}else c=k.q;this._requestQueue=new w.Z(h.Qc);const l=!!e.electronicSignatures&&Boolean(e.electronicSignatures.forceLegacySignaturesFeature);this._state=new y({serverUrl:a,hostedBaseUrl:d,documentId:e.documentId,instantSettings:c,documentURL:r,authPayload:e.authPayload,isFormsEnabled:!e.disableForms,forceLegacySignaturesFeature:l}),e.trustedCAsCallback&&(0,s.ZK)("PSPDFKit.Configuration#trustedCAsCallback is only used on Standalone deployments. On a Server-backed deployment, please follow the instructions at https://pspdfkit.com/guides/web")}isUsingInstantProvider(){return null!=this._state.instantSettings}hasClientsPresence(){const e=this._state.instantSettings;return null!=e&&!1!==e.clientsPresenceEnabled}async load(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await this.tryAuthenticateHostedViewer();const{imageToken:t,token:n,permissions:a,features:r,signatureFeatureAvailability:d,hasPassword:c,minSearchQueryLength:h,layerHandle:u,allowedTileScales:m,digitalSignatures:f,defaultGroup:g,collaborationPermissions:w,creatorName:y}=await async function(e,t,n){const o=await fetch(`${e}/auth`,{method:"POST",headers:{"Content-Type":"application/json","PSPDFKit-Platform":"web","PSPDFKit-Version":(0,i.oM)()},body:JSON.stringify({jwt:t.jwt,origin:window.location.href,password:n}),credentials:"include"});return o.ok?o.json():o.text().then((e=>{throw"INVALID_PASSWORD"===e?new s.p2(e):new s.p2(`An error occurred while connecting to PSPDFKit Server: ${e||o.statusText}`)}))}(`${this._state.serverUrl}i/d/${this._state.documentId}`,this._state.authPayload,e.password);if(this._password=e.password,this._state.instantSettings&&!r.includes(I.q.INSTANT))throw new s.p2("Instant feature is not enabled on this server. Please set `instant` to `false`.\n\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/");const S=d===P.H.ELECTRONIC_SIGNATURES&&(0,U.Vz)(r)&&this._state.forceLegacySignaturesFeature?P.H.LEGACY_SIGNATURES:d;if(this._state=this._state.withMutations((e=>e.set("imageToken",t).set("token",n).set("features",(0,l.aV)(r)).set("signatureFeatureAvailability",S).set("backendPermissions",new o.Z({readOnly:-1===a.indexOf("write"),downloadingAllowed:a.indexOf("download")>=0})).set("documentURL",`${this._state.serverUrl}i/d/${this._state.documentId}/h/${u}`).set("documentHandle",u).set("isDocumentHandleOutdated",!1).set("digitalSignatures",(0,p.rS)(f)))),w&&!this._state.instantSettings)throw new s.p2("Collaboration Permissions is not supported when `instant` is disabled. Please make sure `configuration#instant` is set to `true`.");return this._state=this._state.withMutations((e=>{e.defaultGroup=g,e.hasCollaborationPermissions=Boolean(w)})),this.provider&&this.provider.destroy(),this.provider=await this._initProvider(),this._state.instantSettings&&this.provider.setDocumentHandleConflictCallback(this.handleDocumentHandleConflict),{features:this._state.features,signatureFeatureAvailability:this._state.signatureFeatureAvailability,hasPassword:c,minSearchQueryLength:h,allowedTileScales:m,creatorName:y,defaultGroup:g}}async tryAuthenticateHostedViewer(){if("accessToken"in this._state.authPayload){const{hostedBaseUrl:e}=this._state,t=this._state.authPayload.accessToken,{serverUrl:n,serverId:s,jwt:i}=await async function(e,t){const n=await fetch(`${e}i/documents/auth`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","PSPDFKit-Platform":"web","PSPDFKit-Version":"cloud-protocol=1, server-protocol=4, client=2022.5.1, client-git=0abe0a162a"},body:JSON.stringify({accessToken:t})});if(n.ok)return n.json();throw new Error(`An error occurred while connecting to PSPDFKit API: ${await n.text()}`)}(e,t);this._state=this._state.withMutations((e=>{e.set("serverUrl",n).set("documentId",s).set("documentURL",`${n}i/d/${s}`).set("authPayload",{jwt:i})}))}}async _initProvider(){if(this._state.instantSettings){const e=`${this._state.serverUrl}i/d/${this._state.documentId}/h/${this._state.documentHandle}`,{InstantProvider:t}=await n.e(2333).then(n.bind(n,20251));return new t(`${this._state.serverUrl}i/d/${this._state.documentId}`,e,{auth_token:this._state.token},this._state.instantSettings)}{const e=this._state.isFormsEnabled&&this._state.features.includes(I.q.FORMS),{RESTProvider:t}=await n.e(4099).then(n.bind(n,82450));return new t(this._state.documentURL,{token:this._state.token},{isFormsEnabled:e})}}destroy(){this._destroyProvider(),this._requestQueue&&this._requestQueue.destroy()}documentInfo(){return this._fetch(`${this._state.documentURL}/document.json`).then((e=>e.json())).then((e=>e.data))}getFormJSON(){return this._fetch(`${this._state.documentURL}/form.json`).then((e=>403===e.status?{v:1,type:"pspdfkit/form",annotations:[],fields:[]}:e.json().then((e=>e.data))))}async evalFormValuesActions(){throw new Error("not implemented")}async evalScript(){throw new Error("not implemented")}async setFormJSONUpdateBatchMode(){throw new Error("not implemented")}permissions(){return Promise.resolve(this._state.backendPermissions)}getDefaultGroup(){return this._state.defaultGroup}isCollaborationPermissionsEnabled(){return this._state.hasCollaborationPermissions}textForPageIndex(e){const t=`${this._state.documentURL}/page-${e}-text`,n=new(this._getJSONRequestHandler())(t,this._state.token),s=this._requestQueue.enqueue(n,!0);return{promise:s.promise.then((t=>(0,c.T)(t,e))),cancel:()=>{s.cancel()}}}getTextFromRects(e,t){const n=encodeURIComponent(JSON.stringify(t.map(m.u).toArray()));return this._fetch(`${this._state.documentURL}/page-${e}-highlighted?rects=${n}`).then((e=>e.json())).then((e=>e.text))}_getJSONRequestHandler(){return g.Z}renderTile(e,t,n,i,o,a){var r=this;if(this._state.isDocumentHandleOutdated)return{promise:new Promise((()=>{})),cancel:()=>{}};const c=`${this._state.documentURL}/page-${e}-dimensions-${t.width}-${t.height}-tile-${n.left}-${n.top}-${n.width}-${n.height}${i?"-print":""}`,l=t.width===n.width&&t.height===n.height,u=n.width>h.pt||n.height>h.pt;let m,f,g=!1,w=!1,P=[],y=[];const S=new Promise(((e,t)=>{m=e,f=t})),v=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(a){const n=new FormData;n.append("data",JSON.stringify({annotations:a.annotations.filter(d.d).map(p.Hs).toJS().map((e=>({content:e}))),formFieldValues:a.formFieldValues.map(p.kr).toJS(),formFields:a.formFields.map(p.vD).toJS(),signatures:a.signatures||[]})),t.length>0&&t.forEach((e=>{const t=a.attachments.get(e);(0,s.kG)(t&&t.data,"Attachment data could not be found."),n.append(e,t.data)})),e=new A({identifier:c,url:c,token:r._state.imageToken,payload:n,doNotRequestWebP:u})}else e=new A({identifier:c,url:c,token:r._state.imageToken,doNotRequestWebP:u});y.push(e);const n=r._requestQueue.enqueue(e,l);n.promise.then((e=>{if(!g)return e.attachmentsNotFound&&!w?(w=!0,void v(e.attachmentsNotFound)):void(e.attachmentsNotFound?f(new s.p2("Attachment could not be found.")):m(e))})).catch((e=>{g||f(e)})),P.push(n)};return v(),{promise:S,cancel:()=>{g=!0,y.forEach((e=>{e.abort&&"function"==typeof e.abort&&e.abort()})),P.forEach((e=>{e.cancel()}))}}}_requestRenderAnnotation=(e,t,n,i,o,a)=>{var r=this;const d=`${this._state.documentURL}/render_annotation`,c=`render-annotation-${a?(0,R.SK)():e.id}`,l=JSON.stringify({data:(0,p.Hs)(e),width:i,height:o,detached:a||void 0,formFieldValue:t?(0,p.kr)(t):void 0});let u,m,f=!1,g=[];const w=new Promise(((e,t)=>{u=e,m=t})),P=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const a=new FormData;a.append("render",l),t.length>0&&e.imageAttachmentId&&n&&a.append(e.imageAttachmentId,n);const p=new A({identifier:c,url:d,token:r._state.imageToken,payload:a,doNotRequestWebP:i>h.pt||o>h.pt}),w=r._requestQueue.enqueue(p,!1);w.promise.then((e=>{f||(e.attachmentsNotFound?P(e.attachmentsNotFound):e.attachmentsNotFound?m(new s.p2("Attachment could not be found.")):u(e))})).catch((e=>{f||m(e)})),g.push(w)};return P(),{promise:w,cancel:()=>{f=!0,g.forEach((e=>{e.cancel()}))}}};_requestRenderAnnotations=(e,t,n,s,i)=>{const o=`${this._state.documentURL}/render_annotations`,a=JSON.stringify({annotations:t.map(((t,i)=>({pageIndex:e,pdfObjectId:t,width:n[i],height:s[i]}))),formFieldValues:i});let r,d,c=!1;const l=new Promise(((e,t)=>{r=e,d=t}));return this._fetch(o,{method:"post",body:a,credentials:"include",headers:{"X-PSPDFKit-Image-Token":this._state.imageToken,"Content-Type":"application/json",Accept:"multipart/form-data"}}).then((e=>e.formData())).then((e=>{c||r(Array.from(e.values()))})).catch((e=>{c||d(e)})),{promise:l,cancel:()=>{c=!0}}};renderAnnotation(e,t,n,s,i){return this._requestRenderAnnotation(e,t,n,s,i)}async renderPageAnnotations(e,t,n){if(!v.Rh){const t=Promise.resolve();return this.pageAPStreamsPromises=this.pageAPStreamsPromises.set(e,t),t}const s=this.provider,i=t.some((e=>e instanceof a.Z));i&&await s._setReadStateCallbacksPromise;const o=[],r=t.filter((e=>{const t=i?s._readStateCallbacks.getAnnotationWithFormField(e.id):null,n=null==t?void 0:t.formField,a=(0,d._R)(e,n);if(a&&n&&"number"==typeof e.pdfObjectId){o.find((e=>e.name===n.name))||o.push((0,p.kr)((0,D.CH)(n)))}return a&&"number"==typeof e.pdfObjectId}));if(0===r.size&&0===o.length)return Promise.resolve();const c=new Promise(((t,s)=>{const{promise:i,cancel:a}=this._requestRenderAnnotations(e,r.map((e=>e.pdfObjectId)).toArray(),r.map((e=>Math.floor(e.boundingBox.width*n))).toArray(),r.map((e=>Math.floor(e.boundingBox.height*n))).toArray(),o);i.then((e=>{const n=e.map((e=>e&&(0,$.R4)(e)));n.forEach((async(e,t)=>{const n=await e,s=r.get(t);if(s){const e=this.annotationAPStreamPromises.get(s.id);e&&(this.annotationAPStreamPromises=this.annotationAPStreamPromises.delete(s.id),e(n)),n&&this.cacheAPStream(n,s)}})),Promise.all(n).then((()=>t()))})).catch((e=>{a(),s(e)}))}));return this.pageAPStreamsPromises=this.pageAPStreamsPromises.set(e,c),c}renderDetachedAnnotation(e,t,n,s){return this._requestRenderAnnotation(e,null,t,n,s,!0)}async getAttachment(e){try{const t=await this._fetch(`${this._state.documentURL}/attachments/${e}`);switch(t.status){case 404:throw new s.p2("Attachment not Found.");case 200:return await t.blob();default:throw new s.p2("Bad Request.")}}catch(e){throw new s.p2(`Could not fetch attachment from PSPDFKit Server. ${e}`)}}async search(e,t,n,s){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:E.S.TEXT;const a=`q=${o===E.S.PRESET?e.replace(/_/g,"-"):encodeURIComponent(e)}&start=${t}&limit=${n}&type=${o}&include_annotations=${i.toString()}&case_sensitive=${s.toString()}`,r=`${this._state.documentURL}/search?${a}`,d=await new g.Z(r,this._state.token).request();return(0,u.E)(d.data)}async getMeasurementSnappingPoints(e){}async searchAndRedact(e,t){const{searchType:n,annotationPreset:s,searchInAnnotations:i,caseSensitive:o}=t,{color:a,fillColor:r,outlineColor:d,...c}=s,h=await this._fetch(`${this._state.documentURL}/redactions`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({strategy:n,strategyOptions:{[n]:n===E.S.PRESET?e.replace(/_/g,"-"):e,includeAnnotations:i,caseSensitive:o},content:{...c,color:a&&a.toHex(),fillColor:r&&r.toHex(),outlineColor:d&&d.toHex()}})}),{data:u}=await h.json();return(0,l.aV)(u&&u.annotations?u.annotations.map((e=>x.Z.fromJSON(e.id,e.content))):[])}exportPDF(){let{flatten:e=!1,includeComments:t=!0,excludeAnnotations:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const s=`${this._state.documentURL}/pdf?token=${this._state.token}&flatten=${String(e)}&comments=${String(t)}&render_ap_streams=${String(!e)}&remove_annotations=${String(n)}`;return fetch(s,{method:"GET",credentials:"include"}).then((e=>e.arrayBuffer()))}exportXFDF(){return this._fetch(`${this._state.documentURL}/document.xfdf`).then((e=>e.text()))}exportInstantJSON(){return this._fetch(`${this._state.documentURL}/instant.json`).then((e=>e.json()))}getPDFURL(){let{includeComments:e=!0,excludeAnnotations:t=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{promise:Promise.resolve(`${this._state.documentURL}/pdf?token=${this._state.token}&flatten=true&comments=${String(e)}&remove_annotations=${String(t)}`),revoke:()=>{}}}generatePDFObjectURL(){let e,{includeComments:t=!0,excludeAnnotations:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=!1;return{promise:new Promise((i=>{this.exportPDF({flatten:!0,includeComments:t,excludeAnnotations:n}).then((t=>{if(s)return;const n=new Blob([t],{type:"application/pdf"});e=window.URL.createObjectURL(n),i(e)}))})),revoke:()=>{e&&window.URL.revokeObjectURL(e),s=!0}}}async getDocumentOutline(){let e;try{e=(await this._fetch(`${this._state.documentURL}/outline.json`).then((e=>e.json()))).data}catch(t){e={}}const t=Array.isArray(e.outline)?e.outline:[];return(0,l.aV)(t.map(r.i))}onKeystrokeEvent(){throw new Error("not implemented")}async applyOperationsAndReload(e){try{const t=await O(e);this._destroyProvider(),await this._fetch(`${this._state.documentURL}/apply-operations`,{method:"post",body:t,credentials:"include"})}catch(e){throw new s.p2(`Applying operations failed: ${e}`)}return this.reloadDocument()}async applyRedactionsAndReload(){try{return this._destroyProvider(),await this._fetch(`${this._state.documentURL}/redact`,{method:"post",credentials:"include"}),this.reloadDocument()}catch(e){throw this.provider.load(),new s.p2(`Applying redactions failed: ${e}`)}}async reloadDocument(){try{return await this.load({password:this._password})}catch(e){throw new s.p2(`Reloading the document failed: ${e}`)}}async exportPDFWithOperations(e){try{const t=await O(e);return this._fetch(`${this._state.documentURL}/pdf-with-operations`,{method:"post",body:t,credentials:"include"}).then((e=>e.arrayBuffer()))}catch(e){throw new s.p2(`Exporting PDF with operations failed: ${e}`)}}async getSignaturesInfo(){return this._refreshSignaturesInfoPromise&&await this._refreshSignaturesInfoPromise,this._state.digitalSignatures}refreshSignaturesInfo(){return this._refreshSignaturesInfoPromise||(this._refreshSignaturesInfoPromise=new Promise(((e,t)=>{this._fetch(`${this._state.documentURL}/signatures`,{method:"get",credentials:"include"}).then((e=>e.json())).then((t=>{let{data:n}=t;this._state=this._state.set("digitalSignatures",(0,p.rS)(n)),this._refreshSignaturesInfoPromise=null,e()})).catch((e=>{this._state=this._state.set("digitalSignatures",null),this._refreshSignaturesInfoPromise=null,t(e)}))}))),this._refreshSignaturesInfoPromise}async signDocumentAndReload(e,t){try{if(void 0!==t&&"object"!=typeof t)throw new s.p2("Signing service data must be an object if specified.");const n={};e&&"placeholderSize"in e&&(n.signerDataSource={estimatedSize:e.placeholderSize}),e&&"flatten"in e&&(n.flatten=e.flatten);const i={...t?{signingToken:t.signingToken}:null,...n};this._destroyProvider(),await this._fetch(`${this._state.documentURL}/sign`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),credentials:"include"}),await this.reloadDocument()}catch(e){throw this.provider.load(),new s.p2(`Adding digital signature failed: ${e.message||e}`)}}handleDocumentHandleConflict=()=>{this._state=this._state.set("isDocumentHandleOutdated",!0),this.cancelRequests(),this._destroyProvider()};getDocumentHandle(){return this._state.documentHandle}async getEmbeddedFiles(){var e,t;const n=await this._fetch(`${this._state.documentURL}/embedded-files`,{method:"get",credentials:"include"}),s=await n.json();return(0,l.aV)(null!=s&&null!==(e=s.data)&&void 0!==e&&null!==(t=e.embeddedFiles)&&void 0!==t&&t.length?s.data.embeddedFiles.map((e=>{let{id:t,content:n}=e;return(0,T.i)(t,n)})):[])}cancelRequests(){this._requestQueue.cancelAll()}_destroyProvider(){this.provider&&(this.provider._clients&&this.provider._clients.disconnect(),this.provider.destroy())}async _fetch(e,t){const n=await fetch(e,{...t,headers:{...null==t?void 0:t.headers,"X-PSPDFKit-Token":this._state.token,"PSPDFKit-Platform":"web","PSPDFKit-Version":(0,i.oM)()}});if(!n.ok){let e=await function(e){return e.clone().json().catch((()=>e.text()))}(n);e="object"==typeof e?e.reason:e;const t=e||`${n.status} ${n.statusText}`;throw new s.p2(t)}return n}syncChanges(){return this.provider.syncChanges()}async clearAPStreamCache(){}async runPDFFormattingScripts(){return[]}async lazyLoadPages(){}async contentEditorEnter(){throw new Error("not implemented")}async contentEditorExit(){throw new Error("not implemented")}async contentEditorGetTextBlocks(e){throw new Error("not implemented")}async contentEditorRenderTextBlock(e,t,n){throw new Error("not implemented")}contentEditorSetTextBlockCursor(e,t,n,s){throw new Error("not implemented")}contentEditorMoveTextBlockCursor(e,t,n,s){throw new Error("not implemented")}contentEditorInsertTextBlockString(e,t,n){throw new Error("not implemented")}async contentEditorDeleteTextBlockString(e,t,n){throw new Error("not implemented")}async contentEditorTextBlockUndo(e,t){throw new Error("not implemented")}async contentEditorTextBlockRedo(e,t){throw new Error("not implemented")}async contentEditorTextBlockApplyFormat(e,t,n){throw new Error("not implemented")}async contentEditorSave(e){throw new Error("not implemented")}async contentEditorGetAvailableFaces(){throw new Error("not implemented")}async contentEditorResolveFace(e,t){throw new Error("not implemented")}async contentEditorSaveAndReload(e){throw new Error("not implemented")}}async function O(e){const t={},n=new WeakMap,i=await Promise.all(e.map((async(e,i)=>{if("importDocument"===e.type){const o=e.document;return(0,s.kG)(o instanceof File||o instanceof Blob,"Wrong `importDocument` operation `document` value: it must be a File or a Blob"),(0,F.M)(n,t,o,e,i,"document")}if("applyInstantJson"===e.type){const o=e.instantJson;(0,s.kG)("object"==typeof o&&null!==o,"Wrong `applyInstantJson` operation `instantJson` value: it must be an object");const a=JSON.stringify(o),r=new Blob([a],{type:"application/json"});return(0,F.M)(n,t,r,e,i,"dataFilePath")}if("applyXfdf"===e.type){const o=e.xfdf;(0,s.kG)("string"==typeof o,"Wrong `applyXfdf` operation `xfdf` value: it must be a string");const a=new Blob([o],{type:"application/vnd.adobe.xfdf"});return(0,F.M)(n,t,a,e,i,"dataFilePath")}return e}))),o=new FormData;o.append("operations",JSON.stringify({operations:i}));for(const e in t)o.append(e,t[e]);return o}},29412:(e,t,n)=>{n.d(t,{W:()=>r});var s=n(35369),i=n(33502),o=n(70545),a=n(50893);class r{cachedAPStreams=(0,s.D5)();pageAPStreamsPromises=(0,s.D5)();annotationAPStreamPromises=(0,s.D5)();cachedRenderAnnotation(e,t,n,s,r){var d;const c=this.provider;(0,o.kG)(c instanceof c.constructor,"Backend can only use backend annotation provider");const l=e instanceof i.x_?null===(d=c._readStateCallbacks)||void 0===d?void 0:d.getFormFieldByName(e.formFieldName):null,h=!l||l instanceof i.Yo?null:new i.KD({name:l.name,value:void 0!==l.formattedValue?l.formattedValue:"string"==typeof l.value?l.value:l.values});if(!(0,a._R)(e,l))return this.renderAnnotation(e,h,t,n,s,r);let u=!1,m=()=>{u=!0};return{promise:new Promise((async(i,o)=>{const a=t=>{const n=this.annotationAPStreamPromises.get(e.id);n&&(this.annotationAPStreamPromises=this.annotationAPStreamPromises.delete(e.id),n(t))},d=this.annotationAPStreamPromises.get(e.id);this.annotationAPStreamPromises=this.annotationAPStreamPromises.set(e.id,i),d&&d(null);try{const o=this.pageAPStreamsPromises.get(e.pageIndex);if(!o){const t=new Promise((t=>{this.annotationAPStreamPromises=this.annotationAPStreamPromises.set(e.id,t)}));return void i(await t)}await o;const d=this.cachedAPStreams.get(e.pageIndex);if(d&&!r){const t=d?d.get(e.id):null;if(t)return void a(t)}const{promise:c,cancel:l}=this.renderAnnotation(e,h,t,n,s,r);if(u)a(null);else{m=l;const t=await c;a(t),t&&!r&&this.cacheAPStream(t,e)}}catch(e){o(e)}})),cancel:m}}cacheAPStream(e,t){let n=this.cachedAPStreams.get(t.pageIndex);n||(this.cachedAPStreams=this.cachedAPStreams.set(t.pageIndex,(0,s.D5)()),n=this.cachedAPStreams.get(t.pageIndex)),(0,o.kG)(n),this.cachedAPStreams=this.cachedAPStreams.setIn([t.pageIndex,t.id],e)}clearAllPageAPStreams(e){const t=this.cachedAPStreams.get(e);t&&(t.forEach((e=>{e.release()})),this.cachedAPStreams=this.cachedAPStreams.delete(e)),this.pageAPStreamsPromises=this.pageAPStreamsPromises.delete(e)}clearPageAPStreams(e,t){const n=this.cachedAPStreams.get(e);n&&(n.filter(((e,n)=>t.has(n))).forEach((e=>{e.release()})),this.cachedAPStreams=this.cachedAPStreams.updateIn([e],(e=>e.filter(((e,n)=>!t.has(n))))))}}},1367:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(35369),i=n(46232);function o(){return!0}class a{constructor(e){this.queue=(0,s.zN)(),this.priorityQueue=(0,s.zN)(),this.inFlightRequests=(0,s.D5)(),this.inflightRequestLimit=e,this.isDestroyed=!1}enqueue(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.isDestroyed)return{promise:new Promise((()=>{})),cancel:()=>{}};let n=null,i=null;const o=new Promise(((e,t)=>{n=e,i=t})),a=t?this.priorityQueue:this.queue,r=(0,s.t8)(a,e,{promise:o,resolve:n,reject:i});return t?this.priorityQueue=r:this.queue=r,t?this.next():setTimeout((()=>this.next()),35),{promise:o,cancel:()=>this._cancel(e)}}_cancel(e){this.queue.has(e)&&(this.queue=this.queue.delete(e)),this.priorityQueue.has(e)&&(this.priorityQueue=this.priorityQueue.delete(e)),this.inFlightRequests.has(e)&&(this.inFlightRequests=this.inFlightRequests.delete(e))}cancelAll(){this.queue=(0,s.zN)(),this.priorityQueue=(0,s.zN)(),this.inFlightRequests=(0,s.D5)()}_requestFinished(e,t){if(this.isDestroyed)return;const n=this.inFlightRequests.get(e);n&&(n.resolve(t),this.inFlightRequests=this.inFlightRequests.delete(e)),this.next()}_requestFailed(e,t){if(this.isDestroyed)return;const n=this.inFlightRequests.get(e);n&&(n.reject(t),this.inFlightRequests=this.inFlightRequests.delete(e)),this.next()}next(){if(!(this.isDestroyed||this.inFlightRequests.size>=this.inflightRequestLimit)){if(this.priorityQueue.size>=1){const e=this.priorityQueue.findLastEntry(o);(0,i.k)(e);const[t,n]=e;return this.priorityQueue=this.priorityQueue.delete(t),this.inFlightRequests=this.inFlightRequests.set(t,n),void t.request().then((e=>this._requestFinished(t,e))).catch((e=>this._requestFailed(t,e)))}if(this.queue.size>=1){const e=this.queue.findEntry(o);(0,i.k)(e);const[t,n]=e;this.queue=this.queue.delete(t),this.inFlightRequests=this.inFlightRequests.set(t,n),t.request().then((e=>this._requestFinished(t,e))).catch((e=>this._requestFailed(t,e)))}}}destroy(){this.isDestroyed=!0}}},42457:(e,t,n)=>{n.d(t,{i:()=>r});var s=n(35369);class i extends(s.WV({id:"",attachmentId:"",description:null,fileName:null,fileSize:null,updatedAt:null})){}var o=n(55090);function a(e,t){return t}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a(0,n)?new i({id:(0,o.C)(),description:t.fileDescription,attachmentId:e,fileName:t.fileName||null,fileSize:t.fileSize||null,updatedAt:t.modificationDate?new Date(t.modificationDate):null}):new i({id:e,description:t.description,attachmentId:t.fileAttachmentId,fileName:t.fileName||null,fileSize:t.fileSize||null,updatedAt:new Date(t.updatedAt)||null})}},47291:(e,t,n)=>{n.d(t,{q:()=>s});const s={clientsPresenceEnabled:!0,listenToServerChangesEnabled:!0}},94290:(e,t,n)=>{function s(e,t,n,s,i,o){let a;return e.has(n)?a=e.get(n):(a=i.toString(),t[a]=n,e.set(n,a)),{...s,[o]:a}}n.d(t,{M:()=>s})},89777:(e,t,n)=>{n.d(t,{E:()=>r});var s=n(85596),i=n(35369),o=n(70545),a=n(51908);function r(e){return(0,o.kG)(Array.isArray(e),"Wrong `json` field"),(0,i.aV)(e.map((e=>((0,o.kG)("number"==typeof e.pageIndex,"Wrong `pageIndex` field"),(0,o.kG)("string"==typeof e.previewText,"Wrong `previewText` field"),(0,o.kG)(Array.isArray(e.rangeInPreview),"Wrong `rangeInPreview` field"),(0,o.kG)(Array.isArray(e.rectsOnPage),"Wrong `rectsOnPage` field"),new a.Z({pageIndex:e.pageIndex,previewText:e.previewText,locationInPreview:e.rangeInPreview[0],lengthInPreview:e.rangeInPreview[1],rectsOnPage:(0,i.aV)(e.rectsOnPage).map((e=>(0,s.k)(e))),isAnnotation:!!e.isAnnotation,annotationRect:e.annotationRect?(0,s.k)(e.annotationRect):null})))).filter(Boolean))}}}]);