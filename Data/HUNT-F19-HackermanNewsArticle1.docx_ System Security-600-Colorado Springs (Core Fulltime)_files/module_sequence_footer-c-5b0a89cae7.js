(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[392,626,628,683],{"0crz":function(e,t,n){"use strict"
var s=n("ouhR")
var r=n.n(s)
var a=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var o=a["default"].scoped("lib.text_helper")
var l=n("5Ky4")
var u,c,_
u="LINK-PLACEHOLDER"
c=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=_={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(o.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+r.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,s,r,a,i,o,d
r=[]
a=[]
e=e.replace(c,(function(e,t){var n
a.push(e===u?u:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),r.push(n),"<a href='"+Object(l["a"])(n)+"'>"+Object(l["a"])(e)+"</a>"))
return u}))
e=Object(l["a"])(e)
e=e.replace(new RegExp(u,"g"),(function(e,t){return a.shift()}))
e=e.replace(/\n/g,"<br />\n")
i=[]
o=[]
d=e.split("\n")
for(t=0,n=d.length;t<n;t++){s=d[t]
if(s.match(/^(&gt;|>)/))o.push(s)
else{o.length&&i.push(_.quoteClump(o))
o=[]
i.push(s)}}o.length&&i.push(_.quoteClump(o))
return i.join("\n")},delimit:function(e){var t,n,s,r,a
if(isNaN(e))return String(e)
a=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
r=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){s=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
r=s+r}return a+String(n)+r},truncateText:function(e,t){var n,s,r,a,i,l
null==t&&(t={})
s=null!=(a=t.max)?a:30
n=o.t("ellipsis","...")
l=o.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=s)return e
i=0
while(true){r=e.indexOf(l,i+1)
if(r<0||r>s-n.length)break
i=r}i||(i=s-n.length)
return e.substring(0,i)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},B1vq:function(e,t,n){"use strict"
var s=n("ouhR")
var r=n.n(s)
n("s/PJ")
r.a.fn.scrollToVisible=function(e){const t={}
const n=r()(e)
if(0===n.length)return
let s=n.offset(),a=n.outerWidth(),i=n.outerHeight(),o=s.top,l=o+i,u=s.left,c=u+a,_="html,body"==this.selector?r.a.windowScrollTop():this.scrollTop(),d=this.scrollLeft(),p=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=r()("body").offset()
this.each((function(){try{e=r()(this).offset()
return false}catch(e){}}))
o-=e.top
l-=e.top
u-=e.left
c-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=r()(window).height()
r()("#wizard_box:visible").length>0&&(p-=r()("#wizard_box:visible").height())
f=r()(window).width()
o-=_
u-=d
l-=_
c-=d}o<0||p<i&&l>p?t.scrollTop=o+_:l>p&&(t.scrollTop=l+_-p+20)
u<0?t.scrollLeft=u+d:c>f&&(t.scrollLeft=c+d-f+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"i+HM":function(e,t,n){"use strict"
var s=n("An8g")
var r=n("VTBJ")
var a=n("q1tI")
var i=n.n(a)
n("17x9")
var o=n("5Shj")
var l=n("EcmN")
function u(e){return i.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function c(e){const t=e.className?"icon-speed-grader ".concat(e.className):"icon-speed-grader"
let n={className:t,href:e.href}
e.disabled&&(n=Object(r["a"])({},n,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(s["a"])(o["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,u(n)):u(n)}t["a"]=c},"m+tm":function(e,t,n){"use strict"
n.r(t)
var s=n("ouhR")
var r=n.n(s)
n("/j35")
var a=n("An8g")
var i=n("x1Tw")
var o=n("pQTu")
var l=n("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"يجب تحديد مجموعة طلاب أولاً","select_group_to_grade_6df28d80":"حدد مجموعة للدرجة"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grŵp myfyrwyr i ddechrau","select_group_to_grade_6df28d80":"Dewis Grŵp i\'w Raddio"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en studiegruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal have karakter"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en elevgruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal vurderes"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar"},"fi":{"must_select_a_student_group_first_15c6a3cb":"Täytyy valita ensin opiskelijaryhmä","select_group_to_grade_6df28d80":"Valitse arvosteltava ryhmä"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sélectionner un groupe d\'élèves","select_group_to_grade_6df28d80":"Sélectionnez un groupe à noter"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sélectionner un groupe d\'étudiants","select_group_to_grade_6df28d80":"Sélectionner le groupe à classer"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabò seleksyone yon gwoup elèv","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja þarf nemendahóp fyrst","select_group_to_grade_6df28d80":"Veldu hóp til að gefa einkunnir"},"it":{"must_select_a_student_group_first_15c6a3cb":"È necessario selezionare prima un gruppo di studenti","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto"},"ja":{"must_select_a_student_group_first_15c6a3cb":"受講生グループを先に選択してください","select_group_to_grade_6df28d80":"採点するグループを選択する"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tīpakohia te ākonga rōpu i te tuatahi","select_group_to_grade_6df28d80":"Tīpako Rōpu ki te Kōeke"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for karaktersetting"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for vurdering"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling"},"nn":{"must_select_a_student_group_first_15c6a3cb":"Må først velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe å vurdere"},"pl":{"must_select_a_student_group_first_15c6a3cb":"Należy najpierw wybrać grupę uczestników","select_group_to_grade_6df28d80":"Wybierz grupę do oceny"},"pt":{"must_select_a_student_group_first_15c6a3cb":"É necessário selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para nota"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Сначала необходимо выбрать группу студентов","select_group_to_grade_6df28d80":"Выберите группу для оценки"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en studentgrupp","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"必须先选择一个学生组","select_group_to_grade_6df28d80":"选择要评分的组"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"必須先選擇學生群組","select_group_to_grade_6df28d80":"選擇要評分的群組"}}'))
n("jQeR")
n("0sPK")
var u=o["default"].scoped("module_sequence_footer")
var c=n("q1tI")
var _=n.n(c)
var d=n("i8i4")
var p=n.n(d)
var f=n("i+HM")
var g=n("mKSb")
class h extends c["Component"]{constructor(e){super(e)
this.state={selectedStudentGroupId:e.selectedStudentGroupId||"0"}
this.onStudentGroupSelected=this.onStudentGroupSelected.bind(this)}onStudentGroupSelected(e){if("0"!==e){i["a"].put("/api/v1/courses/".concat(this.props.courseId,"/gradebook_settings"),{gradebook_settings:{filter_rows_by:{student_group_id:e}}})
this.setState({selectedStudentGroupId:e})}}render(){const e=this.props.filterSpeedGraderByStudentGroup&&"0"===this.state.selectedStudentGroupId
return _.a.createElement(_.a.Fragment,null,this.props.filterSpeedGraderByStudentGroup&&Object(a["a"])(g["a"],{categories:this.props.groupCategories,label:u.t("Select Group to Grade"),onChange:this.onStudentGroupSelected,value:this.state.selectedStudentGroupId}),Object(a["a"])(f["a"],{className:"btn button-sidebar-wide",disabled:e,disabledTip:u.t("Must select a student group first"),href:this.props.speedGraderUrl}))}}function m(){if(ENV.speed_grader_url){const e=document.getElementById("speed_grader_link_container")
p.a.render(Object(a["a"])(h,{courseId:ENV.COURSE_ID,filterSpeedGraderByStudentGroup:ENV.SETTINGS.filter_speed_grader_by_student_group,groupCategories:ENV.group_categories||[],selectedStudentGroupId:ENV.selected_student_group_id,speedGraderUrl:ENV.speed_grader_url}),e)}}r()(m)},mKSb:function(e,t,n){"use strict"
var s=n("An8g")
n("17x9")
var r=n("sTNg")
var a=n("EcmN")
n("q1tI")
function i(e){return Object(s["a"])("option",{value:e.id},e.id,e.name)}function o(e){return Object(s["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>i(e)))}function l(e){return Object(s["a"])(r["a"],{id:"student-group-filter",label:e.label},void 0,Object(s["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(s["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",a["a"].t("Select One")),e.categories.map(e=>o(e))))}t["a"]=l},p6Wi:function(e,t,n){"use strict"
var s=n("pQTu")
var r=n("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Radera"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Är du säker på att du vill radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var a=s["default"].scoped("instructure_misc_plugins")
var i=n("ouhR")
var o=n.n(i)
var l=n("5Ky4")
var u=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
o.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(n))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const s=t.innerWidth()
e.remove()
return n-s}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let s=true
e.noMessage=e.noMessage||e.no_message
const r=function(){if(!s){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const s=e.prepareData?e.prepareData.call(t,n):{}
s.authenticity_token=Object(u["a"])()
o.a.ajaxJSON(e.url,"DELETE",s,n=>{e.success.call(t,n)},(n,s,r,a)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,n,s,r,a):o.a.ajaxJSON.unhandledXHRs.push(s)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){s=false
const t="object"===typeof e.dialog?e.dialog:{}
n=o()(e.message).dialog(o.a.extend({},{modal:true,close:r,buttons:[{text:a.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:"btn-primary",click(){s=true
o()(this).dialog("close")}}]},t))
return}s=confirm(e.message)}r()}
o.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let s=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(s="#"+e.substring(5))}this.bind("document_fragment_change",e)
const r=this
let a=false
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){const e=o.a._checkFragments.fragmentList[t]
e.doc[0]==r[0]&&(a=true)}a||o.a._checkFragments.fragmentList.push({doc:r,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{s&&s.length>0?r.triggerHandler("document_fragment_change",s):r&&r[0]&&r[0].location&&r[0].location.hash.length>0&&r.triggerHandler("document_fragment_change",r[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const s=n.doc
if(s[0].location.hash!=n.fragment){s.triggerHandler("document_fragment_change",s[0].location.hash)
n.fragment=s[0].location.hash
o.a._checkFragments.fragmentList[t]=n}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each((function(t){o()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const s=this.width()
const r=this.height()
const a=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:s+6,height:r+6,top:n.top-3,left:n.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),n=o()(this),s=o()("#wrapper"),r=o()("#main"),a=o()("#not_right_side"),i=o()(window),l=o()(this).add(t.alsoResize)
function u(){l.height(0)
const e=i.height()-(s.offset().top+s.outerHeight())+(r.height()-a.height()),u=Math.max(400,e)
l.height(u)
o.a.isFunction(t.onResize)&&t.onResize.call(n,u)}u()
i.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),n="",s=o()(this),r=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:s.css("fontSize"),fontFamily:s.css("fontFamily"),fontWeight:s.css("fontWeight"),letterSpacing:s.css("letterSpacing"),whiteSpace:"nowrap"}),a=function(){setTimeout(()=>{if(n===(n=s.val()))return
r.text(n)
const a=r.width(),i=a+e.comfortZone>=t?a+e.comfortZone:t,o=s.width(),l=i<o&&i>=t||i>t&&i<e.maxWidth
l&&s.width(i)})}
r.insertAfter(s)
o()(this).bind("keyup keydown blur update change",a)}))
return this}
o.a},ppAs:function(e,t,n){"use strict"
var s=n("ouhR")
var r=n.n(s)
var a=n("GLiE")
var i=n.n(a)
var o=n("5Ky4")
var l=n("pQTu")
var u=n("m0r6")
Object(u["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var c=l["default"].scoped("user_content")
const _={translateMathmlForScreenreaders(e){const t=r()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=r()('<span class="hidden-readable"></span>')
n.html(t)
return n},toMediaCommentLink(e){const t=r()("<a\n        id='media_comment_".concat(Object(o["a"])(r()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(o["a"])(r()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(o["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(o["a"])(r()(e).attr("data-alt")),"'\n      />"))
t.html(r()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=r()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return _.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=r()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=i.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const s=r()("<form\n            action='".concat(Object(o["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(o["a"])(t),"'\n            id='form-").concat(Object(o["a"])(t),"'\n          />"))
s.append(r()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
s.append(r()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
r()("body").append(s)
setTimeout(()=>s.submit(),0)
return r()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(o["a"])(t),"'\n            style='width: ").concat(Object(o["a"])(e.data("uc_width")),"; height: ").concat(Object(o["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(o["a"])(c.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((e,t)=>{const n=r()(t)
const s=_.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(s)})}return n.html()}}
t["a"]=_}}])

//# sourceMappingURL=module_sequence_footer-c-5b0a89cae7.js.map