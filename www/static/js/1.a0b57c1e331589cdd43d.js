webpackJsonp([1],{QK3K:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add"},[a("div",{staticClass:"fleche"},[a("router-link",{attrs:{to:"/livres"}},[a("i",{staticClass:"fas fa-arrow-left"})])],1),t._v(" "),a("h3",[t._v("Ajouter un livre")]),t._v(" "),a("label",{staticClass:"spacing"},[t._v("Titre")]),t._v(" "),a("input",{attrs:{name:"titre",type:"text"}}),t._v(" "),a("label",{staticClass:"spacing"},[t._v("Auteur")]),t._v(" "),a("input",{attrs:{name:"auteur",type:"text"}}),t._v(" "),a("label",{staticClass:"spacing"},[t._v("Date de parution")]),t._v(" "),a("input",{attrs:{name:"dateParution",type:"date"}}),t._v(" "),a("label",{staticClass:"spacing"},[t._v("Couverture")]),t._v(" "),a("input",{attrs:{name:"couverture",type:"file"}}),t._v(" "),a("label",{staticClass:"spacing"},[t._v("Categorie(s)")]),t._v(" "),a("div",{staticClass:"row"},t._l(t.categories,function(e){return a("div",{key:e.id,staticClass:"check col-6 col-md-4 col-xl-3"},[a("input",{attrs:{type:"checkbox",id:e.id,name:e.id}}),t._v(" "),a("label",{attrs:{for:e.id}},[t._v(t._s(e.name))])])}),0),a("br"),t._v(" "),t._m(0),t._v(" "),a("label",{staticClass:"spacing"},[t._v("Date d'achat")]),t._v(" "),a("input",{attrs:{name:"dateAchat",type:"date"}}),t._v(" "),a("label",{staticClass:"spacing"},[t._v("A qui ?")]),t._v(" "),a("input",{attrs:{name:"aQui",type:"text"}}),t._v(" "),a("label",{staticClass:"spacing"},[t._v("Emplacement")]),t._v(" "),a("input",{staticClass:"spacing",attrs:{name:"piece",type:"text",placeholder:"Pièce"}}),t._v(" "),a("input",{staticClass:"spacing",attrs:{name:"etagere",type:"text",placeholder:"Etagère"}}),t._v(" "),a("input",{staticClass:"spacing",attrs:{name:"rangee",type:"text",placeholder:"Rangée"}}),t._v(" "),a("button",{staticClass:"btn btn-dark",attrs:{type:"submit"},on:{click:function(e){return t.connect()}}},[t._v("Valider")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"radio"},[e("div",[e("input",{attrs:{name:"type",type:"radio",value:"Acheté"}}),this._v(" "),e("label",{attrs:{for:"Acheté"}},[this._v("Acheté")])]),this._v(" "),e("div",[e("input",{attrs:{name:"type",type:"radio",value:"Emprunté"}}),this._v(" "),e("label",{attrs:{for:"Emprunté"}},[this._v("Emprunté")])])])}]};var i={name:"addLivre",components:{AddLivreComp:a("VU/8")({name:"AddLivreComp",data:function(){return{categories:[{id:"1",name:"Drame"},{id:"2",name:"Policier"},{id:"3",name:"Science-fiction"},{id:"4",name:"Fantasy"},{id:"5",name:"Dystopie"},{id:"6",name:"Psychologie"}]}}},s,!1,function(t){a("c2Ch")},null,null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"addlivre"},[e("AddLivreComp",{attrs:{msg:"Liste des entrées"}})],1)},staticRenderFns:[]},r=a("VU/8")(i,n,!1,null,null,null);e.default=r.exports},c2Ch:function(t,e){}});
//# sourceMappingURL=1.a0b57c1e331589cdd43d.js.map