(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{XoyV:function(t,e,n){"use strict";n.r(e),n.d(e,"DashboardModule",function(){return L});var i=n("ofXK"),o=n("tyNb"),a=n("dgEK"),r=function(t){return t.light="theme-mdc-light-indigo",t.dark="theme-mdc-dark-indigo",t.vela="theme-vela-blue",t}({}),s=n("fXoL"),d=n("ETNk"),c=n("AytR"),h=n("tk/3");let b=(()=>{class t{constructor(t){this.http=t}getUserStatusCount(t){return this.http.post(`${c.a.urlBase}/api/users/getStatusCount`,{year:t})}getDocumentStatusCount(t){return this.http.post(`${c.a.urlBase}/api/documents/getStatusCount`,{year:t})}getEventsCount(t){return this.http.post(`${c.a.urlBase}/api/events/getCount`,{year:t})}getDocumentsCountMonthByYear(t){return this.http.post(`${c.a.urlBase}/api/documents/getCountMonthByYear`,{year:t})}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(h.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("arFO"),p=n("3Pt+"),l=n("+07z"),m=n("7zfz"),g=n("I5S5"),f=n("0ADX");function C(t,e){if(1&t&&(s.Tb(0,"div",25),s.Tb(1,"div"),s.Kc(2),s.Sb(),s.Sb()),2&t){const t=e.$implicit;s.Bb(2),s.Lc(t.name)}}const S=function(t){return["Tablero",t]};function v(t,e){if(1&t&&s.Ob(0,"app-mini-menu",26),2&t){const t=s.ec();s.lc("options",s.qc(2,S,""+(0==t.currentYear?"Hist\xf3rico":t.currentYear)))("icon","home")}}function y(t,e){if(1&t&&(s.Tb(0,"div",27),s.Tb(1,"h4",22),s.Kc(2,"\xa0"),s.Sb(),s.Ob(3,"p-chart",28),s.Sb()),2&t){const t=s.ec();s.Bb(3),s.lc("data",t.basicData)("options",t.basicOptions)("responsive",!0)}}function T(t,e){if(1&t&&(s.Tb(0,"div",27),s.Tb(1,"h4",22),s.Kc(2,"\xa0"),s.Sb(),s.Ob(3,"p-chart",28),s.Sb()),2&t){const t=s.ec();s.Bb(3),s.lc("data",t.basicData)("options",t.basicOptions)("responsive",!0)}}const B=function(){return{"max-height":"450px"}},D=function(){return{"max-height":"200px"}};let M=(()=>{class t{constructor(t,e){this.themeService=t,this.dashboardService=e,this.currentYear=(new Date).getFullYear(),this.years=[],this.months=[],this.monthsSelected=[],this.themeColor="#495057"}onResize(t){this.innerWidth=window.innerWidth}ngOnInit(){this.innerWidth=window.innerWidth,this.setMonths(),this.loadYears(),this.loadSettingsForCharLine(),this.setDataCharLine(),this.getEventsCount(),this.loadSettingsPie(),this.setPieUsersAndCount(),this.setPieDocsAndCount()}loadYears(){for(let t=2021;t<=this.currentYear;t++)this.years.push({name:`A\xf1o ${t.toString()}`,id:t});this.years.unshift({name:"Hist\xf3rico",id:0})}sortMonths(){this.monthsSelected.sort((t,e)=>t.id<e.id?-1:t.id>e.id?1:0)}setMonths(){this.months=[{id:1,name:"Enero"},{id:2,name:"Febrero"},{id:3,name:"Marzo"},{id:4,name:"Abril"},{id:5,name:"Mayo"},{id:6,name:"Junio"},{id:7,name:"Julio"},{id:8,name:"Agosto"},{id:9,name:"Septiembre"},{id:10,name:"Octubre"},{id:11,name:"Noviembre"},{id:12,name:"Diciembre"}],this.monthsSelected=[...this.months]}loadSettingsForCharLine(){this.themeColor=this.themeService.getTheme()==r.dark||this.themeService.getTheme()==r.vela?"#ffffff":"#000000",this.basicOptions={legend:{position:"bottom",labels:{fontColor:this.themeColor}},scales:{xAxes:[{ticks:{fontColor:this.themeColor}}],yAxes:[{ticks:{fontColor:this.themeColor}}]}}}setDataCharLine(){this.dashboardService.getDocumentsCountMonthByYear(this.currentYear).subscribe(t=>{let e=t.list||[];this.basicData={labels:this.prepareDataForLine(e).map(t=>t.name),datasets:[{label:"Documentos",data:this.prepareDataForLine(e).map(t=>t.count),fill:!0,borderColor:"#968bd3"}]}})}prepareDataForLine(t){const e=[];return this.monthsSelected.forEach(n=>{let i=t.find(t=>t.month==n.id);e.push(i?{name:n.name,count:i.count}:{name:n.name,count:0})}),e}loadSettingsPie(){this.options={legend:{position:"bottom",labels:{fontColor:this.themeColor}}}}setPieUsersAndCount(){this.dashboardService.getUserStatusCount(this.currentYear).subscribe(t=>{let e=t.list||[];this.usersCount=t.data,this.userStatus={labels:e.map(t=>t.status),datasets:[{data:e.map(t=>t.count),backgroundColor:["#50adf4","#aecde5"],hoverBackgroundColor:["#50adf4","#aecde5"]}]}})}setPieDocsAndCount(){this.dashboardService.getDocumentStatusCount(this.currentYear).subscribe(t=>{this.docsCount=t.data;let e=t.list||[];this.docStatus={labels:e.map(t=>t.status),datasets:[{data:e.map(t=>t.count),backgroundColor:["#a6b2f4","#f29898","#b3b3b3"],hoverBackgroundColor:["#a6b2f4","#f29898","#b3b3b3"]}]}})}getEventsCount(){this.dashboardService.getEventsCount(this.currentYear).subscribe(t=>{this.eventsCount=t.data})}yearChange(){0==this.currentYear&&this.setMonths(),this.setPieUsersAndCount(),this.setPieDocsAndCount(),this.getEventsCount(),0!==this.currentYear&&this.setDataCharLine()}listChange(){this.sortMonths(),this.setDataCharLine()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(d.a),s.Nb(b))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-index"]],hostBindings:function(t,e){1&t&&s.ac("resize",function(t){return e.onResize(t)},!1,s.Bc)},decls:44,vars:32,consts:[[1,"p-mt-2"],[1,"p-grid","p-formgrid","p-fluid"],[1,"p-field","p-col-12","p-md-3"],[1,"card","myCard","myBg",2,"margin-bottom","0"],[1,"p-text-left","myTitle",2,"margin-bottom","0"],["styleClass","p-mt-2","optionLabel","name","optionValue","id",3,"options","ngModel","ngModelChange","onChange"],[1,"p-grid","p-fluid"],[1,"p-col-12"],["optionLabel","name",1,"p-col-3",3,"disabled","options","ngModel","metaKeySelection","checkbox","filter","multiple","listStyle","onChange","ngModelChange"],["pTemplate","item"],[1,"p-field","p-col-12","p-md-9"],["class","miniMenu",3,"options","icon",4,"ngIf"],[1,"p-grid","p-formgrid","p-fluid","p-mt-2",2,"margin","0"],["class","p-field p-col-12 p-md-12 card myBg myCardChart p-mt-2 ",4,"ngIf"],[1,"p-field","p-col-12","p-md-4"],[1,"card","myCardChart",2,"background-color","#AECDE5"],[1,"p-text-center",2,"margin","0"],[1,"p-text-center",2,"margin","0","margin-bottom","5px"],[1,"card","myCardChart",2,"background-color","#A6B2F4"],[1,"card","myCardChart",2,"background-color","#bebebe"],[1,"p-field","p-col-12","p-md-6","p-mt-2"],[1,"card","myBg","myCardChart"],[1,"text-color","p-text-center",2,"margin","0","margin-bottom","10px"],["type","pie",3,"data","options"],["type","doughnut",3,"data","options"],[1,"country-item"],[1,"miniMenu",3,"options","icon"],[1,"p-field","p-col-12","p-md-12","card","myBg","myCardChart","p-mt-2"],["height","25rem","type","line",3,"data","options","responsive"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"div",2),s.Tb(3,"div",3),s.Tb(4,"h2",4),s.Kc(5,"Tablero "),s.Sb(),s.Tb(6,"p-dropdown",5),s.ac("ngModelChange",function(t){return e.currentYear=t})("onChange",function(){return e.yearChange()}),s.Sb(),s.Tb(7,"div",6),s.Tb(8,"div",7),s.Tb(9,"p-listbox",8),s.ac("onChange",function(){return e.listChange()})("ngModelChange",function(t){return e.monthsSelected=t}),s.Ic(10,C,3,1,"ng-template",9),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(11,"div",10),s.Ic(12,v,1,4,"app-mini-menu",11),s.Tb(13,"div",12),s.Ic(14,y,4,3,"div",13),s.Tb(15,"div",14),s.Tb(16,"div",15),s.Tb(17,"h1",16),s.Kc(18),s.Sb(),s.Tb(19,"h4",17),s.Kc(20," Usuarios registrados "),s.Sb(),s.Sb(),s.Sb(),s.Tb(21,"div",14),s.Tb(22,"div",18),s.Tb(23,"h1",16),s.Kc(24),s.Sb(),s.Tb(25,"h4",17),s.Kc(26," Documentos recibidos "),s.Sb(),s.Sb(),s.Sb(),s.Tb(27,"div",14),s.Tb(28,"div",19),s.Tb(29,"h1",16),s.Kc(30),s.Sb(),s.Tb(31,"h4",17),s.Kc(32," Eventos "),s.Sb(),s.Sb(),s.Sb(),s.Ic(33,T,4,3,"div",13),s.Tb(34,"div",20),s.Tb(35,"div",21),s.Tb(36,"h4",22),s.Kc(37,"Estado de los usuarios"),s.Sb(),s.Ob(38,"p-chart",23),s.Sb(),s.Sb(),s.Tb(39,"div",20),s.Tb(40,"div",21),s.Tb(41,"h4",22),s.Kc(42,"Estado de documentos"),s.Sb(),s.Ob(43,"p-chart",24),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Bb(6),s.lc("options",e.years)("ngModel",e.currentYear),s.Bb(3),s.lc("disabled",0==e.currentYear)("options",e.months)("ngModel",e.monthsSelected)("metaKeySelection",!1)("checkbox",!0)("filter",!0)("multiple",!0)("listStyle",e.innerWidth>767?s.pc(30,B):s.pc(31,D)),s.Bb(3),s.lc("ngIf",e.innerWidth>767),s.Bb(2),s.lc("ngIf",0!=e.currentYear&&!(e.innerWidth>767)),s.Bb(1),s.Gc(e.innerWidth>767?"padding: 0 5px 0 0;":"padding: 0;"),s.Bb(3),s.Mc(" ",e.usersCount," "),s.Bb(3),s.Gc(e.innerWidth>767?"padding: 0 5px 0 5px;":"padding: 0;"),s.Bb(3),s.Mc(" ",e.docsCount," "),s.Bb(3),s.Gc(e.innerWidth>767?"padding: 0 0 0 5px;":"padding: 0;"),s.Bb(3),s.Mc(" ",e.eventsCount," "),s.Bb(3),s.lc("ngIf",0!=e.currentYear&&e.innerWidth>767),s.Bb(1),s.Gc(e.innerWidth>767?"padding: 0 5px 0 0;":"padding: 0;"),s.Bb(4),s.lc("data",e.userStatus)("options",e.options),s.Bb(1),s.Gc(e.innerWidth>767?"padding: 0 0 0 5px;":"padding: 0;"),s.Bb(4),s.lc("data",e.docStatus)("options",e.options))},directives:[u.a,p.i,p.l,l.a,m.i,i.l,g.b,f.a],styles:[""]}),t})();var x=n("UKuc"),Y=n("zUwj");const k=[{path:"",children:[{path:"",component:M,canLoad:[a.a],canActivate:[a.a],data:{USER_ROLES:[x.a.USER_ADMIN],MODULE:Y.a.DASHBOARD}},{path:"**",redirectTo:""}]}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({imports:[[o.f.forChild(k)],o.f]}),t})();var K=n("uPqY"),E=n("V/fk");let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({imports:[[i.c,K.a,E.a,A]]}),t})()}}]);