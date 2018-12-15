(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c82ad4e"],{a198:function(e,i,t){},aeaf:function(e,i,t){"use strict";var n=t("a198"),a=t.n(n);a.a},c5d3:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"new-listing"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"page-title"},[e._v("\n      Add a new item\n    ")]),t("div",{staticClass:"col-container"},[t("div",{staticClass:"col-1 pt-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name.value,expression:"name.value"}],ref:"name",class:e.name.invalid?"invalid":"valid",attrs:{type:"text",placeholder:"Item Name"},domProps:{value:e.name.value},on:{blur:function(i){e.name.validate()},keyup:[function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;e.submitForm()},function(i){if(!("button"in i)&&e._k(i.keyCode,"delete",[8,46],i.key,["Backspace","Delete"]))return null;e.resetField(e.name)}],keypress:function(i){e.resetField(e.name)},input:function(i){i.target.composing||e.$set(e.name,"value",i.target.value)}}}),e.name.invalid?t("span",{staticClass:"error-msg"},[e._v("\n          Please enter a valid name\n        ")]):e._e()]),t("div",{staticClass:"col-1 pt-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.zipCode.value,expression:"zipCode.value"}],ref:"zipCode",class:e.zipCode.invalid?"invalid":"valid",attrs:{type:"text",placeholder:"Zip Code"},domProps:{value:e.zipCode.value},on:{blur:function(i){e.zipCode.validate()},keyup:[function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;e.submitForm()},function(i){if(!("button"in i)&&e._k(i.keyCode,"delete",[8,46],i.key,["Backspace","Delete"]))return null;e.resetField(e.name)}],keypress:function(i){e.resetField(e.name)},input:function(i){i.target.composing||e.$set(e.zipCode,"value",i.target.value)}}}),e.zipCode.invalid?t("span",{staticClass:"error-msg"},[e._v("\n          Please enter a valid zip code\n        ")]):e._e()])]),t("div",{staticClass:"col-container"},[t("div",{staticClass:"col-2 pt-input"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description.value,expression:"description.value"}],class:e.description.invalid?"invalid":"valid",attrs:{placeholder:"Description"},domProps:{value:e.description.value},on:{keyup:[function(i){e.description.validate()},function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;e.submitForm()}],blur:function(i){e.description.validate()},input:function(i){i.target.composing||e.$set(e.description,"value",i.target.value)}}}),t("span",{class:"char-remaining "+(e.description.invalid?"error-msg":"")},[e._v("\n          "+e._s(500-e.description.value.length)+" characters remaining\n        ")])])]),t("div",{staticClass:"col-container"},[t("div",{staticClass:"col-2 pt-input"},[t("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(i){e.uploadFile()}}})])]),t("div",{staticClass:"btn-wrapper"},[t("LButton",{attrs:{btnId:"listing-btn",btnClass:"primary",btnLabel:"Add Listing",spinning:e.isLoading},on:{buttonClick:function(i){e.submitForm()}}})],1)])])},a=[],l=(t("7f7f"),t("d4ec")),s=t("bee2"),o=t("99de"),d=t("7e84"),r=t("262e"),c=t("9ab4"),u=t("60a3"),v=t("9459"),p=t("bc3a"),f=t.n(p),m=function(e){function i(){var e;return Object(l["a"])(this,i),e=Object(o["a"])(this,Object(d["a"])(i).call(this)),e.allRefs=e.$refs,e.listingError=!1,e.isLoading=!1,e.name={invalid:!1,value:"",validate:function(){e.name.invalid=!(e.name.value.length<40&&e.name.value.length>2)}},e.description={invalid:!1,value:"",validate:function(){e.description.invalid=e.description.value.length>500}},e.zipCode={invalid:!1,value:"",validate:function(){e.zipCode.invalid=!/^\d{5}(-\d{4})?$/.test(e.zipCode.value)}},e}return Object(r["a"])(i,e),Object(s["a"])(i,[{key:"resetField",value:function(e){e.invalid=!1,this.listingError=!1}},{key:"submitForm",value:function(){var e=this;if(this.validateAll(),this.listingError||this.name.invalid||this.description.invalid||this.zipCode.invalid)this.focusOnFirstField();else{this.isLoading=!0;var i={name:this.name.value,file:this.file,zipCode:this.zipCode.value,description:this.description.value},t={Authorization:this.$cookies.get("token")};f.a.post("https://borrowing-svc-api.appspot.com/item/add",i,{headers:t}).then(function(i){i.data.id&&e.$router.push("/item/".concat(i.data.id))}).catch(function(e){console.log(e)}).finally(function(){e.isLoading=!1})}}},{key:"uploadFile",value:function(){this.allRefs.file.files&&(this.file=this.allRefs.file.files[0])}},{key:"validateAll",value:function(){this.name.validate(),this.description.validate(),this.zipCode.validate()}},{key:"focusOnFirstField",value:function(){this.name.invalid?this.allRefs.name.focus():this.description.invalid?this.allRefs.description.focus():this.zipCode.invalid&&this.allRefs.zipCode.focus()}}]),i}(u["c"]);m=c["a"]([Object(u["a"])({components:{LButton:v["a"]}})],m);var h=m,C=h,g=(t("aeaf"),t("2877")),b=Object(g["a"])(C,n,a,!1,null,"51485988",null);b.options.__file="NewListing.vue";i["default"]=b.exports}}]);
//# sourceMappingURL=chunk-7c82ad4e.0c513342.js.map