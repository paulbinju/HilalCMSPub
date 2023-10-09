"use strict";(self.webpackChunklorax=self.webpackChunklorax||[]).push([[966],{8966:(q,x,r)=>{r.d(x,{H8:()=>Z,Is:()=>J,WI:()=>B,ZT:()=>X,so:()=>m,uh:()=>$,uw:()=>D,xY:()=>Q});var u=r(9776),h=r(7429),a=r(5e3),E=r(508),O=r(226),g=r(7579),F=r(9770),I=r(9646),p=r(9300),C=r(5698),k=r(8675),v=r(925),R=r(9808),c=r(1777),y=r(5664),T=r(1159),w=r(6360);function S(i,o){}class M{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const W={dialogContainer:(0,c.X$)("dialogContainer",[(0,c.SB)("void, exit",(0,c.oB)({opacity:0,transform:"scale(0.7)"})),(0,c.SB)("enter",(0,c.oB)({transform:"none"})),(0,c.eR)("* => enter",(0,c.ru)([(0,c.jt)("150ms cubic-bezier(0, 0, 0.2, 1)",(0,c.oB)({transform:"none",opacity:1})),(0,c.IO)("@*",(0,c.pV)(),{optional:!0})])),(0,c.eR)("* => void, * => exit",(0,c.ru)([(0,c.jt)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",(0,c.oB)({opacity:0})),(0,c.IO)("@*",(0,c.pV)(),{optional:!0})]))])};let j=(()=>{class i extends h.en{constructor(t,e,n,s,l,d,_,f){super(),this._elementRef=t,this._focusTrapFactory=e,this._changeDetectorRef=n,this._config=l,this._interactivityChecker=d,this._ngZone=_,this._focusMonitor=f,this._animationStateChanged=new a.vpe,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=A=>(this._portalOutlet.hasAttached(),this._portalOutlet.attachDomPortal(A)),this._ariaLabelledBy=l.ariaLabelledBy||null,this._document=s}_initializeWithAttachedContent(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,v.ht)())}attachComponentPortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachTemplatePortal(t)}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const n=()=>{t.removeEventListener("blur",n),t.removeEventListener("mousedown",n),t.removeAttribute("tabindex")};t.addEventListener("blur",n),t.addEventListener("mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const e=(0,v.ht)(),n=this._elementRef.nativeElement;(!e||e===this._document.body||e===n||n.contains(e))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,v.ht)();return t===e||t.contains(e)}}return i.\u0275fac=function(t){return new(t||i)(a.Y36(a.SBq),a.Y36(y.qV),a.Y36(a.sBO),a.Y36(R.K0,8),a.Y36(M),a.Y36(y.ic),a.Y36(a.R0b),a.Y36(y.tE))},i.\u0275dir=a.lG2({type:i,viewQuery:function(t,e){if(1&t&&a.Gf(h.Pl,7),2&t){let n;a.iGM(n=a.CRH())&&(e._portalOutlet=n.first)}},features:[a.qOj]}),i})(),Y=(()=>{class i extends j{constructor(){super(...arguments),this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?(this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})):"exit"===t&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:e}))}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):("exit"===t||"void"===t)&&this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_initializeWithAttachedContent(){super._initializeWithAttachedContent(),this._config.delayFocusTrap||this._trapFocus()}}return i.\u0275fac=function(){let o;return function(e){return(o||(o=a.n5z(i)))(e||i)}}(),i.\u0275cmp=a.Xpm({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(t,e){1&t&&a.WFA("@dialogContainer.start",function(s){return e._onAnimationStart(s)})("@dialogContainer.done",function(s){return e._onAnimationDone(s)}),2&t&&(a.Ikx("id",e._id),a.uIk("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),a.d8E("@dialogContainer",e._state))},features:[a.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&a.YNc(0,S,0,0,"ng-template",0)},directives:[h.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[W.dialogContainer]}}),i})(),G=0;class m{constructor(o,t,e="mat-dialog-"+G++){this._overlayRef=o,this._containerInstance=t,this.id=e,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new g.x,this._afterClosed=new g.x,this._beforeClosed=new g.x,this._state=0,t._id=e,t._animationStateChanged.pipe((0,p.h)(n=>"opened"===n.state),(0,C.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe((0,p.h)(n=>"closed"===n.state),(0,C.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),o.keydownEvents().pipe((0,p.h)(n=>n.keyCode===T.hY&&!this.disableClose&&!(0,T.Vb)(n))).subscribe(n=>{n.preventDefault(),b(this,"keyboard")}),o.backdropClick().subscribe(()=>{this.disableClose?this._containerInstance._recaptureFocus():b(this,"mouse")})}close(o){this._result=o,this._containerInstance._animationStateChanged.pipe((0,p.h)(t=>"closing"===t.state),(0,C.q)(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._afterClosed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(o){let t=this._getPositionStrategy();return o&&(o.left||o.right)?o.left?t.left(o.left):t.right(o.right):t.centerHorizontally(),o&&(o.top||o.bottom)?o.top?t.top(o.top):t.bottom(o.bottom):t.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(o="",t=""){return this._overlayRef.updateSize({width:o,height:t}),this._overlayRef.updatePosition(),this}addPanelClass(o){return this._overlayRef.addPanelClass(o),this}removePanelClass(o){return this._overlayRef.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._overlayRef.dispose()}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}function b(i,o,t){return void 0!==i._containerInstance&&(i._containerInstance._closeInteractionType=o),i.close(t)}const B=new a.OlP("MatDialogData"),U=new a.OlP("mat-dialog-default-options"),L=new a.OlP("mat-dialog-scroll-strategy"),V={provide:L,deps:[u.aV],useFactory:function H(i){return()=>i.scrollStrategies.block()}};let K=(()=>{class i{constructor(t,e,n,s,l,d,_,f,A,it){this._overlay=t,this._injector=e,this._defaultOptions=n,this._parentDialog=s,this._overlayContainer=l,this._dialogRefConstructor=_,this._dialogContainerType=f,this._dialogDataToken=A,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new g.x,this._afterOpenedAtThisLevel=new g.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,F.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,k.O)(void 0))),this._scrollStrategy=d}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){e=function z(i,o){return Object.assign(Object.assign({},o),i)}(e,this._defaultOptions||new M),e.id&&this.getDialogById(e.id);const n=this._createOverlay(e),s=this._attachDialogContainer(n,e),l=this._attachDialogContent(t,s,n,e);return this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(l),l.afterClosed().subscribe(()=>this._removeOpenDialog(l)),this.afterOpened.next(l),s._initializeWithAttachedContent(),l}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_createOverlay(t){const e=this._getOverlayConfig(t);return this._overlay.create(e)}_getOverlayConfig(t){const e=new u.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachDialogContainer(t,e){const s=a.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:M,useValue:e}]}),l=new h.C5(this._dialogContainerType,e.viewContainerRef,s,e.componentFactoryResolver);return t.attach(l).instance}_attachDialogContent(t,e,n,s){const l=new this._dialogRefConstructor(n,e,s.id);if(t instanceof a.Rgc)e.attachTemplatePortal(new h.UE(t,null,{$implicit:s.data,dialogRef:l}));else{const d=this._createInjector(s,l,e),_=e.attachComponentPortal(new h.C5(t,s.viewContainerRef,d,s.componentFactoryResolver));l.componentInstance=_.instance}return l.updateSize(s.width,s.height).updatePosition(s.position),l}_createInjector(t,e,n){const s=t&&t.viewContainerRef&&t.viewContainerRef.injector,l=[{provide:this._dialogContainerType,useValue:n},{provide:this._dialogDataToken,useValue:t.data},{provide:this._dialogRefConstructor,useValue:e}];return t.direction&&(!s||!s.get(O.Is,null,a.XFs.Optional))&&l.push({provide:O.Is,useValue:{value:t.direction,change:(0,I.of)()}}),a.zs3.create({parent:s||this._injector,providers:l})}_removeOpenDialog(t){const e=this.openDialogs.indexOf(t);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,s)=>{n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let s=e[n];s!==t&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return i.\u0275fac=function(t){a.$Z()},i.\u0275dir=a.lG2({type:i}),i})(),D=(()=>{class i extends K{constructor(t,e,n,s,l,d,_,f){super(t,e,s,d,_,l,m,Y,B,f)}}return i.\u0275fac=function(t){return new(t||i)(a.LFG(u.aV),a.LFG(a.zs3),a.LFG(R.Ye,8),a.LFG(U,8),a.LFG(L),a.LFG(i,12),a.LFG(u.Xj),a.LFG(w.Qb,8))},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac}),i})(),N=0,X=(()=>{class i{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=P(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){b(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return i.\u0275fac=function(t){return new(t||i)(a.Y36(m,8),a.Y36(a.SBq),a.Y36(D))},i.\u0275dir=a.lG2({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&a.NdJ("click",function(s){return e._onButtonClick(s)}),2&t&&a.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[a.TTD]}),i})(),$=(()=>{class i{constructor(t,e,n){this._dialogRef=t,this._elementRef=e,this._dialog=n,this.id="mat-dialog-title-"+N++}ngOnInit(){this._dialogRef||(this._dialogRef=P(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return i.\u0275fac=function(t){return new(t||i)(a.Y36(m,8),a.Y36(a.SBq),a.Y36(D))},i.\u0275dir=a.lG2({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&a.Ikx("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),i})(),Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=a.lG2({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=a.lG2({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"]}),i})();function P(i,o){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-dialog-container");)t=t.parentElement;return t?o.find(e=>e.id===t.id):null}let J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({providers:[D,V],imports:[[u.U8,h.eL,E.BQ],E.BQ]}),i})()}}]);