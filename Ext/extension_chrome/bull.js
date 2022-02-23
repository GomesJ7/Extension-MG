    // Components ###########################################################


    const hover = document.createElement("div");
    const extensionContainer = document.createElement("div");
    const bubbleHover = document.createElement("div");
    var bublleDefaultOpen = document.createElement("img");
    bublleDefaultOpen.src = chrome.runtime.getURL("images/vectorOpen.png");
    var bublleDefaultClose = document.createElement("img");
    bublleDefaultClose.src = chrome.runtime.getURL("images/vectorClose.png");
    var newLink = document.createElement("img");
    newLink.src = chrome.runtime.getURL("images/new-link.png");
    var openBook = document.createElement("img");
    openBook.src = chrome.runtime.getURL("images/open-book.png");
    var contact = document.createElement("img");
    contact.src = chrome.runtime.getURL("images/contact.png");
    var settings = document.createElement("img");
    settings.src = chrome.runtime.getURL("images/settings.png");
    const item1 = document.createElement("div");
        item1.id = "item1";
    const item1C = document.createElement("div");
        item1C.id = "item1C";
    const item2 = document.createElement("div");
    const item3 = document.createElement("div");
    
        // Hover #################################################################
    
    function displayHover () {
        hover.id = "hover";
        hover.className = "hover";
        hover.addEventListener("mouseleave", () => {extensionContainer.style.display = "none";});
        document.body.appendChild(hover);
    } displayHover ();
    
        // Bublle ################################################################
    
    function displayBubbleHover () {
        bubbleHover.id = "bubbleHover";
        bubbleHover.className = "bubbleHover";
        hover.appendChild(bubbleHover);
    } displayBubbleHover ();
    
    function displayBublleDefaultOpen () {
        bublleDefaultOpen.id = "bublleDefault";
        bublleDefaultOpen.className = "bublleDefault";
        bublleDefaultOpen.addEventListener("mouseenter", () => {extensionContainer.style.display = "block";});
        bubbleHover.appendChild(bublleDefaultOpen);
    } displayBublleDefaultOpen ();
    
    function displayBublleDefaultClose () {
        bublleDefaultClose.id = "bublleDefault";
        bublleDefaultClose.className = "bublleDefault";
        bublleDefaultClose.style.display = "none";
        bublleDefaultClose.addEventListener("click", () => {
            extensionContainer.style.display = "block";
            bublleDefaultOpen.style.display = "block";
            bublleDefaultClose.style.display = "none";
            CandForm.style.display = "none";
            ContForm.style.display = "none";
            params.style.display = "none";
        });
        bubbleHover.appendChild(bublleDefaultClose);
    } displayBublleDefaultClose ();
    
        // Menu ###################################################################
    
    function displayExtensionContainer () {
        extensionContainer.id = "extensionContainer";
        extensionContainer.className = "extensionContainer";
        extensionContainer.style.display = "none";
        hover.appendChild(extensionContainer);
    } displayExtensionContainer ();
    
        // Items Menu #############################################################
    
        function verifyURL() {
            if (window.location.href.indexOf("linkedin") > -1) {
                function displayitem1C () {
                    item1C.className = "item";
                    item1C.textContent = "Ajouter à Mes Contacts"
                    item1C.addEventListener('click', addContact);
                    item1C.addEventListener("click", () => {
                        ContForm.style.display = "block";
                        bublleDefaultClose.style.display = "block";
                        extensionContainer.style.display = "none";
                        bublleDefaultOpen.style.display = "none";
                        
                    });
                    extensionContainer.appendChild(item1C);
                } displayitem1C ();
            }
            else {
                function displayitem1 () {
                    item1.className = "item";
                    item1.textContent = "Ajouter à Mes Candidatures"
                    item1.addEventListener("click", () => {
                        CandForm.style.display = "block";
                        bublleDefaultClose.style.display = "block";
                        extensionContainer.style.display = "none";
                        bublleDefaultOpen.style.display = "none";
                        
                    });
                    extensionContainer.appendChild(item1);
                } displayitem1 (); 
            }
          }verifyURL();
    
        function displayitem2 () {
            item2.id = "item2";
            item2.className = "item";
            item2.textContent = "Accéder à Mes candidatures";
            item2.addEventListener("click", () => {window.open('https://mentorgoal.com/', '_blank');});
            extensionContainer.appendChild(item2);
        } displayitem2 (); 
    
        function displayitem3 () {
            item3.id = "item3";
            item3.className = "item";
            item3.textContent = "Paramètres"
            item3.addEventListener("click", () => {
                params.style.display = "block";
                bublleDefaultClose.style.display = "block";
                extensionContainer.style.display = "none";
                bublleDefaultOpen.style.display = "none";
            });
            extensionContainer.appendChild(item3);
        } displayitem3 (); 
    
        // Icones Items #############################################################
    
        function displayNewLink () {
            newLink.id = "newLink";
            newLink.className = "listIcon"
            item1.appendChild(newLink);
        } displayNewLink () ;
    
        function displayContact () {
            contact.id = "contact";
            contact.className = "listIcon"
            item1C.appendChild(contact);
        } displayContact () ;
    
        function displayOpenBook () {
            openBook.id = "openBook";
            openBook.className = "listIcon"
            item2.appendChild(openBook);
        } displayOpenBook () ;
    
        function displaySettings () {
            settings.id = "settings";
            settings.className = "listIcon"
            item3.appendChild(settings);
        } displaySettings () ;
    
    
        // Formulaire d'ajout de Candidature #######################################
    
        const CandForm = document.createElement("div");
    
        function displayForm () {
            CandForm.id = "CandForm";
            CandForm.className = "CandForm";
            CandForm.style.display = "none";
            CandForm.innerHTML = ('\
                <header>\
                    <h3>Ajouter à Mes Candidature</h3>\
                </header>\
                <hr class="hr">\
                <div class="input-space">\
                    <label for="input">Entreprise</label>\
                    <input type="text" id="input1" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">Poste</label>\
                    <input type="text" id="input2" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">Lieu</label>\
                    <input type="text" id="input3" class="input" placeholder="">\
                </div>\
                <div class="input-space">\
                    <label for="input">URL de l\'offre</label>\
                    <input type="text" id="input4" class="input" placeholder="">\
                </div>\
                <div class="input-space">\
                    <label for="input">Type</label>\
                    <select name="type" class="input" style="background: #F6F8F9">\
                        <option value="alternance">Alternance</option>\
                        <option value="stage">Stage</option>\
                        <option value="cdi">CDI</option>\
                        <option value="cdd">CDD</option>\
                        <option value="graduateProgram">Graduate Program</option>\
                        <option value="vieVia">VIE / VIA</option>\
                    </select>\
                </div>\
                <div class="input-space">\
                    <label for="input">Status</label>\
                    <select name="type" class="input" style="background: #F6F8F9">\
                        <option value="Patron">Patron</option>\
                        <option value="Stagiaire">Stagiaire</option>\
                        <option value="Boss">Boss</option>\
                    </select>\
                </div>\
                <div class="input-space">\
                    <label for="input">Description</label>\
                    <textarea  id="input5" cols="39" rows="10"></textarea>\
                </div>\
                <hr>\
                <div class="bottom">\
                    <button class="button">Ajouter</button>\
                </div>\
            ');
            hover.appendChild(CandForm);
        } displayForm () ;
    
        // Formulaire d'ajout de Contact #######################################
    
        const ContForm = document.createElement("div");
    
        function displayFormC () {
            ContForm.id = "ContForm";
            ContForm.className = "ContForm";
            ContForm.style.display = "none";
            ContForm.innerHTML = ('\
                <header>\
                    <h3>Ajouter le contact</h3>\
                </header>\
                <hr class="hr">\
                <div class="input-space">\
                    <label for="input">Prénom</label>\
                    <input type="text" id="input10" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">Nom</label>\
                    <input type="text" id="input11" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">Poste occupé</label>\
                    <input type="text" id="input12" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">Entreprise</label>\
                    <input type="text" id="input4" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">URL du profil Linkedin</label>\
                    <input type="text" id="input13" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">Adresse Email</label>\
                    <input type="text" id="input14" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <div class="input-space">\
                    <label for="input">Téléphone</label>\
                    <input type="text" id="input4" class="input" placeholder="" style="background: #F6F8F9">\
                </div>\
                <hr>\
                <div class="bottom">\
                    <button class="button">Ajouter</button>\
                </div>\
            ');
            hover.appendChild(ContForm);
        } displayFormC () ;
            
        // Paramètres #############################################################
    
    const params = document.createElement("div");
    
    function displayParams () {
        params.id = "params";
        params.className = "params";
        params.style.display = "none";
        params.innerHTML = ('\
        <header>\
            <h3>Paramètres</h3>\
        </header>\
        <hr class="hr">\
        <div class="input-space">\
            <label for="input">Statut par défault pour l\'ajout de candidature</label>\
            <select name="type" class="input" style="background: #F6F8F9">\
                <option value="alternance">Prêt à postuler</option>\
            </select>\
        </div>\
        <div class="input-space">\
            <label for="input">Type de contract par défault</label>\
            <select name="type" class="input" style="background: #F6F8F9">\
                <option value="alternance">Alternance</option>\
                <option value="stage">Stage</option>\
                <option value="cdi">CDI</option>\
                <option value="cdd">CDD</option>\
                <option value="graduateProgram">Graduate Program</option>\
                <option value="vieVia">VIE / VIA</option>\
            </select>\
        </div>\
        <div class="input-space">\
            <label for="input" class="email">Email associé</label>\
            <input type="text" id="input1" class="input" placeholder="email@gmail.com " style="background: #F6F8F9">\
        </div>\
        <hr>\
        <div class="bottom">\
            <button class="button">Déconnexion</button>\
        </div>\
        ');
        hover.appendChild(params);
    } displayParams ();
    
        //Web scraping Indeed
    
    document.getElementById('item1').addEventListener('click', addCandidature);
    
    function addCandidature() {
        let company_name = document.querySelector("#viewJobSSRRoot > div > div.icl-Container--fluid.fs-unmask.jobsearch-ViewJobLayout-fluidContainer.is-FR.icl-u-xs-p--sm > div.icl-Grid.jobsearch-ViewJobLayout-content.jobsearch-ViewJobLayout-mainContent.icl-u-lg-mt--md > div > div > div.jobsearch-ViewJobLayout-jobDisplay.icl-Grid-col.icl-u-xs-span12.icl-u-lg-span7 > div.jobsearch-JobComponent.icl-u-xs-mt--sm.jobsearch-JobComponent-bottomDivider > div.jobsearch-DesktopStickyContainer > div:nth-child(1) > div.jobsearch-CompanyInfoWithoutHeaderImage.jobsearch-CompanyInfoWithReview > div > div > div.jobsearch-InlineCompanyRating.icl-u-xs-mt--xs.jobsearch-DesktopStickyContainer-companyrating > div.icl-u-lg-mr--sm.icl-u-xs-mr--xs").textContent;
        let job = document.querySelector("#viewJobSSRRoot > div > div.icl-Container--fluid.fs-unmask.jobsearch-ViewJobLayout-fluidContainer.is-FR.icl-u-xs-p--sm > div.icl-Grid.jobsearch-ViewJobLayout-content.jobsearch-ViewJobLayout-mainContent.icl-u-lg-mt--md > div > div > div.jobsearch-ViewJobLayout-jobDisplay.icl-Grid-col.icl-u-xs-span12.icl-u-lg-span7 > div.jobsearch-JobComponent.icl-u-xs-mt--sm.jobsearch-JobComponent-bottomDivider > div.jobsearch-DesktopStickyContainer > div:nth-child(1) > div.jobsearch-JobInfoHeader-title-container").textContent;
        let location = document.querySelector("#viewJobSSRRoot > div > div.icl-Container--fluid.fs-unmask.jobsearch-ViewJobLayout-fluidContainer.is-FR.icl-u-xs-p--sm > div.icl-Grid.jobsearch-ViewJobLayout-content.jobsearch-ViewJobLayout-mainContent.icl-u-lg-mt--md > div > div > div.jobsearch-ViewJobLayout-jobDisplay.icl-Grid-col.icl-u-xs-span12.icl-u-lg-span7 > div.jobsearch-JobComponent.icl-u-xs-mt--sm.jobsearch-JobComponent-bottomDivider > div.jobsearch-DesktopStickyContainer > div:nth-child(1) > div.jobsearch-CompanyInfoWithoutHeaderImage.jobsearch-CompanyInfoWithReview > div > div > div:nth-child(2)").textContent;
        let description = document.querySelector("#jobDescriptionText").textContent;
        let url = window.location.href;
        fill_candidature(company_name, job, location, url, description);
      }
    
    function fill_candidature(company_name, job, location, url, description) {
        document.getElementById("input1").value = company_name;
        document.getElementById("input2").value = job;
        document.getElementById("input3").value = location;
        document.getElementById("input4").value = url;
        document.getElementById("input5").value = description;
    }
    
    //document.getElementById('item1C').addEventListener('click', addContact);
    
    function addContact() {
        let name = document.querySelector("#ember41 > div.ph5 > div.mt2.relative > div:nth-child(1) > div:nth-child(1) > h1").textContent.split(" ");
        let first_name = name[0];
        let last_name = name[1];
        let urlprofile = window.location.href;
        let job = document.querySelector("#ember41 > div.ph5.pb5 > div.mt2.relative > div:nth-child(1) > div.text-body-medium.break-words").textContent.trim();
        //let email = document.querySelector("div > section.pv-contact-info__contact-type.ci-email > div > a").textContent.trim();
        console.log(first_name, last_name, urlprofile, job);
        fill_contact(first_name, last_name, urlprofile, job);
      }
      
    function fill_contact(first_name, last_name, urlprofile, job) {
        document.getElementById("input10").value = first_name;
        document.getElementById("input11").value = last_name;
        document.getElementById("input12").value = job;
        document.getElementById("input13").value = urlprofile;
        //document.getElementById("input14").value = email;
    }
    
    