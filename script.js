var SV = [
    ["Book Publishing & Amazon KDP", "ISBN registration, eBook conversion, print-on-demand set-up and Amazon KDP publishing, with category and keyword research. Wide distribution to Amazon, Apple Books, Kobo, Google Play Books and IngramSpark."],
    ["Editing & Proofreading", "Developmental editing, line editing, copy editing and proofreading in English and Arabic, with tracked changes so you see every improvement."],
    ["Book Cover Design & Formatting", "Custom covers for your genre and a clean interior layout for print and eBook, with right-to-left formatting for Arabic titles."],
    ["Book Writing & Ghostwriting", "Professional writers who capture your voice, from non-fiction and memoir to fiction. You keep full credit and full ownership, and we will sign a confidentiality agreement if you ask."],
    ["Book Printing", "Print-on-demand and short runs in paperback and hardcover for authors across the GCC, with printed proofs before you approve. [Confirm delivery coverage by country]"],
    ["Book Marketing & Author Websites", "Launch plans, Amazon ads, review outreach, email lists and an author website that sends readers to your books."],
    ["Audiobook Production", "Professional narration, editing and mastering, delivered in the formats audiobook platforms require, so your book reaches listeners as well as readers."],
    ["Children’s Book Publishing", "Illustration, layout and publishing for picture books and early readers, in Arabic, English or bilingual editions."],
    ["Corporate & Institutional Books", "Company histories, anniversary books, reports and institutional publications for businesses, schools and organisations, produced to your brand guidelines with print runs and distribution."]
];
var GC = [
    ["Book Publisher UAE: Dubai, Abu Dhabi and Sharjah", "UAE", "Writing in the Emirates? We take care of your ISBN application with the National Library and Archives and the deposit copies that follow, then build your launch around the Sharjah and Abu Dhabi International Book Fairs.", "Emirates we work with: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah."],
    ["Saudi Arabia: Arabic-First, Print-Ready", "Saudi Arabia", "Looking for a book publisher Saudi Arabia authors can work with from Riyadh, Jeddah or Dammam? We lead with Arabic editing and print on demand, guide you through the deposit number and legal deposit at King Fahd National Library, and plan your launch around the Riyadh International Book Fair."],
    ["Qatar: Arabic and English from Doha", "Qatar", "Authors in Doha, Al Khor and Al Wakrah can publish in either language, or both. We handle your ISBN and legal deposit with Qatar National Library, then time the launch around the Doha International Book Fair."],
    ["Kuwait: From Edit to Print in One Place", "Kuwait", "From Kuwait City to Al Ahmadi, one team handles editing, design, printing and distribution. We walk you through ISBN and deposit with the National Library of Kuwait and plan around the Kuwait International Book Fair."],
    ["Children’s and Educational Titles: Book Publisher Bahrain", "Bahrain", "We support authors in Manama and across the Kingdom, and we explain Bahrain’s legal deposit requirements before you go to print so nothing surprises you after launch."],
    ["Oman: Muscat, Salalah and Sohar", "Oman", "Authors across Oman get editing, design, ISBN and distribution from a Gulf-based team, with guidance on legal deposit under Oman’s publishing law and a launch planned around the Muscat International Book Fair."]
];
var OC = ["Jordan", "India", "Egypt", "Nigeria", "Bangladesh", "Iraq", "Other country"];
var GD = [
    ["How Much Does It Cost to Publish a Book in the UAE?", "A guide in AED with real cost factors"],
    ["Do You Need an ISBN to Publish a Book in the Gulf?", "What it is, who issues it and what it costs"],
    ["How to Publish on Amazon KDP from the UAE, Saudi Arabia or Qatar", "Accounts, tax forms and payouts"],
    ["Self-Publishing vs Traditional Publishing in the Gulf", "Which route fits your book"],
    ["How to Choose a Book Publisher in the Gulf, and the Warning Signs to Avoid", "A checklist before you pay anyone"],
    ["How to Publish an Arabic Book", "Editing, right-to-left formatting and distribution"],
    ["Legal Deposit and Book Registration in the GCC", "What each country requires after you publish"]
];
var FQ = [
    ["How do I publish a book in the UAE?", "Start with a free consultation, then editing, cover design, formatting and ISBN registration, followed by platform set-up on Amazon KDP and other retailers and a printed proof. A full-service publisher such as Gulf Books Publisher manages each step and sends a written quote and timeline first. You keep your rights throughout."],
    ["How much does it cost to publish a book in the UAE or Saudi Arabia?", "Cost depends on word count, editing depth, cover and interior complexity, illustrations, print format and marketing. Our starting prices are AED 1,500 to publish an eBook, AED 2,000 to edit, design and publish, and AED 3,500 for full publishing and launch. Your quote itemises every service, so you only pay for what your book needs. See our cost guide for a full breakdown."],
    ["Do I need an ISBN to publish my book?", "An ISBN is how bookstores, libraries and most online retailers identify your book, so you will need one for those channels. If you are selling only an eBook on Amazon, its own ASIN may be sufficient. We register your ISBNs under your name as publisher and explain the steps for your country."],
    ["Do I have to deposit copies of my book with a national library?", "Legal deposit rules exist across the GCC, usually requiring a small number of free copies to go to the national library, and in several countries the deposit is linked to ISBN registration. The receiving body and the rules differ by country: for example, the UAE uses the National Library and Archives and Saudi Arabia uses King Fahd National Library. We tell you what applies to your book and guide you through the paperwork."],
    ["How long does it take to publish a book?", "Our typical timeline is about 2 weeks. It depends on your manuscript and the services you choose, and longer books, heavier editing, illustrations or printed proofs can add time. We agree a schedule in writing before work begins, and we do not promise unrealistic turnaround times."],
    ["Can you publish my book on Amazon KDP and let me keep my rights?", "Yes. The KDP account is opened in your name, so the rights and the royalties remain yours. Our part is the hands-on work: formatting, metadata, categories and price set-up."],
    ["Do you publish Arabic books?", "Yes, in Arabic, English or both, with native Arabic writers and editors in-house and right-to-left formatting for print and eBook. See the Arabic and English section above or visit the Arabic site."],
    ["Can authors outside the UAE use your services?", "Yes. We work with authors in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. You can speak to us by video call or phone, send your manuscript through a secure upload, and receive your quote in your local currency."],
    ["Can I publish with a Gulf-based publisher if I live outside the Gulf?", "Yes. Authors in Jordan, India, Egypt, Nigeria, Bangladesh, Iraq and other countries publish with us entirely online. We handle editing, design, formatting and platform set-up, explain which ISBN and registration route suits your country, and plan your launch so your book can reach readers in the Gulf as well as at home."],
    ["Is the consultation really free?", "Yes. The first half-hour call costs nothing and carries no obligation. We go through your manuscript and goals, send you an itemised quote, and you pay only if you choose to proceed. A free cover concept and a short sample edit of your opening pages are included, so you can judge our work first."],
    ["What is your refund policy?", "Our packages are covered by a 100% refund policy. [Add the exact conditions: stage, timeframe and how to claim] The full terms are on the refund policy page. [Link]"],
    ["Is Gulf Books Publisher the same company as Gulf Book Publishers, Gulf Publisher or other similar names?", "No. Gulf Books Publisher operates only from gulfbookspublisher.com and is not affiliated with other companies that have similar names. Our registered details are on the About page: [company name and licence number]. Always check a publisher’s registration before you pay."]
];
var $ = function(i) { return document.getElementById(i) };
var IC = { tag: "M3 12V4h8l10 10-8 8zM7.5 8.5h.01", globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18", shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 5-5", lock: "M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3", book: "M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5zM4 19.5A1.5 1.5 0 0 0 5.5 21H19v-3", edit: "M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4", layout: "M4 4h16v16H4zM4 9h16M9 9v11", quill: "M12 3l5 7-5 11-5-11zM12 10v3", print: "M7 9V4h10v5M7 17H5v-6h14v6h-2M7 14h10v6H7z", mega: "M4 10v4h3l8 4V6L7 10zM18 9a4 4 0 0 1 0 6", head: "M4 15v-3a8 8 0 0 1 16 0v3M4 15h3v5H4zM17 15h3v5h-3z", star: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7z", build: "M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3", tablet: "M7 3h10v18H7zM11 18h2", up: "M12 20V6M6 12l6-6 6 6M5 20h14", pin: "M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0", doc: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7", check: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12l3 3 5-6", spark: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z", search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM16 16l5 5", mark: "M6 3h12v18l-6-4-6 4z", chat: "M4 5h16v11H9l-5 4zM8 9h8M8 12.5h5", docedit: "M6 3h8l4 4v4M14 3v4h4M6 3v18h5M9 11h6M9 15h2M13 21l.8-3.2 6-6 2.4 2.4-6 6z", cover: "M6 3h12v18H6zM9 7h6M9 10h4M9 15v3M11 15v3M13 15v3M15 15v3", laptop: "M4 5h16v11H4zM2 19.5h20M9 10.5l2 2 4-4.5", rocket: "M12 3c3.5 2 5 5.5 5 9l-2 3H9l-2-3c0-3.5 1.5-7 5-9zM12 11.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zM9 15l-3 3 3.2-.6M15 15l3 3-3.2-.6M12 17.5V21" };

function ic(n) { return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="' + IC[n] + '"/></svg>' }

function st(a, b, c) { return '<rect width="40" height="13.4" fill="' + a + '"/><rect y="13.3" width="40" height="13.4" fill="' + b + '"/><rect y="26.6" width="40" height="13.4" fill="' + c + '"/>' }
var FL = { "UAE": st('#00732f', '#fff', '#111') + '<rect width="11" height="40" fill="#ce1126"/>', "Saudi Arabia": '<rect width="40" height="40" fill="#005430"/>', "Qatar": '<rect width="40" height="40" fill="#8a1538"/><polygon points="0,0 13,0 20,4 13,8 20,12 13,16 20,20 13,24 20,28 13,32 20,36 13,40 0,40" fill="#fff"/>', "Kuwait": st('#007a3d', '#fff', '#ce1126') + '<polygon points="0,0 12,13.3 12,26.7 0,40" fill="#111"/>', "Bahrain": '<rect width="40" height="40" fill="#ce1126"/><polygon points="0,0 14,0 22,5 14,10 22,15 14,20 22,25 14,30 22,35 14,40 0,40" fill="#fff"/>', "Oman": st('#fff', '#db161b', '#008000') + '<rect width="12" height="40" fill="#db161b"/>', "Jordan": st('#111', '#fff', '#007a3d') + '<polygon points="0,0 20,20 0,40" fill="#ce1126"/>', "India": st('#ff9933', '#fff', '#138808') + '<circle cx="20" cy="20" r="4.5" fill="none" stroke="#000080" stroke-width="1.2"/>', "Egypt": st('#ce1126', '#fff', '#111') + '<circle cx="20" cy="20" r="3" fill="#c09300"/>', "Nigeria": '<rect width="40" height="40" fill="#fff"/><rect width="13.4" height="40" fill="#008751"/><rect x="26.6" width="13.4" height="40" fill="#008751"/>', "Bangladesh": '<rect width="40" height="40" fill="#006a4e"/><circle cx="18" cy="20" r="10" fill="#f42a41"/>', "Iraq": st('#ce1126', '#fff', '#111') + '<path d="M12 20h4M18 20h4M24 20h4" stroke="#007a3d" stroke-width="2"/>' };

function flag(n) { return '<span class="fl" title="' + n + '">' + (FL[n] ? (FL[n].indexOf('data:') == 0 ? '<img src="' + FL[n] + '" alt="">' : '<svg viewBox="0 0 40 40" aria-hidden="true">' + FL[n] + '</svg>') : ic('globe')) + '</span>' }
var IM = { "Prices you can see": "tag", "Arabic and English publishing": "globe", "A team you can verify": "shield", "You keep control": "lock", "Book Publishing & Amazon KDP": "book", "Editing & Proofreading": "edit", "Book Cover Design & Formatting": "layout", "Book Writing & Ghostwriting": "quill", "Book Printing": "print", "Book Marketing & Author Websites": "mega", "Audiobook Production": "head", "Children’s Book Publishing": "star", "Corporate & Institutional Books": "build", "Publish my eBook": "tablet", "Edit, design and publish": "edit", "Full publishing and launch": "up", "Registered business": "build", "Office and local contact": "pin", "Named team": "user", "Written contract": "doc", "Honest claims": "check" };
var PL = ["Amazon Kindle", "IngramSpark", "Draft2Digital", "Lulu", "PublishDrive"];

function ph(t) { return t.replace(/\[[^\]]+\]/g, function(m) { return '<span class="ph">' + m + '</span>' }) }

function fill(sel, opts, first) { sel.innerHTML = (first ? '<option value="">' + first + '</option>' : '') + opts.map(function(o) { return '<option>' + o + '</option>' }).join('') }

/* ---------------- MAIN EXECUTION ---------------- */
$('gc').innerHTML = GC.map(function(g) {
    var slug = g[1].toLowerCase().replace(/\s+/g, '-');
    return '<div class="card">' + flag(g[1]) +
        '<h3>' + g[0] + '</h3><p>' + g[2] + '</p>' +
        (g[3] ? '<p><b>' + g[3] + '</b></p>' : '') +
        '<a class="go" href="book-publishing-and-printing-' + slug + '.html">Publish in ' + g[1] + ' →</a></div>';
}).join('');

$('oc').innerHTML = OC.map(function(c) { return '<li>' + flag(c) + c + '</li>' }).join('');

/* FIX: #gd does not exist in HTML (commented out) — guard it */
var gdEl = $('gd');
if (gdEl) {
    gdEl.innerHTML = '<ul class="rs">' + GD.map(function(g) { return '<li><a href="#guides">' + g[0] + '</a><span>' + g[1] + '</span></li>' }).join('') + '</ul>';
}

$('fq').innerHTML = FQ.map(function(f) { return '<details><summary>' + f[0] + '</summary><p>' + ph(f[1]) + '</p></details>' }).join('');

var C = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"].concat(OC);
fill($('c'), C);
fill($('g'), ["Fiction", "Non-fiction", "Memoir and biography", "Children’s and educational", "Business and corporate", "Poetry", "Religious and Islamic", "Academic and self-help", "Other"], 'Select Genre');

var PRE = {};
document.addEventListener('click', function(e) {
    var b = e.target.closest('[data-s],[data-c]');
    if (!b) return;
    PRE = { s: b.dataset.s ? b.dataset.s.replace('&amp;', '&') : '', c: b.dataset.c || '' };
    location.hash = 'get-quote'
});

$('qf').addEventListener('submit', function(e) {
    e.preventDefault();
    var n = $('n').value.trim(),
        m = $('e').value.trim(),
        p = $('p').value.trim();
    $('en').textContent = n ? '' : 'Enter your full name.';
    var good = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m);
    $('ee').textContent = good ? '' : 'Enter a valid email address.';
    var pg = !p || /^[+()\d][\d\s()+-]{6,}$/.test(p);
    $('ep').textContent = pg ? '' : 'Enter a valid phone number.';
    if (!n || !good || !pg) return;
    $('qf').style.display = 'none';
    var o = $('ok'),
        t = $('t').value.trim();
    o.style.display = 'block';
    o.textContent = 'Thank you, ' + n + '. We have received your request' + (t ? ' for \u201c' + t + '\u201d' : '') + ($('f').files.length ? ' and your manuscript' : '') + '. We will reply to ' + m + ' with an itemised quote.'
});

document.querySelectorAll('#why .card').forEach(function(card, i) {
    var icons = ['tag', 'globe', 'build', 'lock'];
    var s = document.createElement('span');
    s.className = 'ib';
    s.innerHTML = ic(icons[i]);
    card.insertBefore(s, card.querySelector('h3'));
});

document.querySelectorAll('.qs li').forEach(function(li) {
    var d = document.createElement('div');
    d.className = 'si';
    d.innerHTML = ic(li.dataset.ic);
    li.insertBefore(d, li.firstChild)
});

document.querySelectorAll('.steps:not(.qs) li').forEach(function(li, i) {
    var d = document.createElement('div');
    d.className = 'si';
    d.innerHTML = ic(["chat", "docedit", "cover", "laptop", "rocket"][i]);
    li.insertBefore(d, li.firstChild)
});

/* FIX: #mt was replaced by .platform-marquee in HTML — guard it */
var pr = PL.map(function(p) { return '<div class="pl"><span>' + p + '</span></div>' }).join('');
var mtEl = $('mt');
if (mtEl) { mtEl.innerHTML = pr + pr + pr + pr; }

/* ---------- COVERS (this now runs!) ---------- */
var CV = [
    ["The Dreamer’s Path: A Magical Journey", "Children’s fantasy", "images/The Dreamer’s Path_ A Magical Journey.webp"],
    ["The Dreaming Arts", "Literary fiction", "images/The Dreaming Arts.webp"],
    ["The Enigma of Blackwood Manor", "Mystery", "images/The Enigma of Blackwood Manor.webp"],
    ["The Mild Edges: A Haunted Forest", "Middle grade horror", "images/The Mild Edges_ A Haunted Forest.webp"],
    ["The Mild Edges: A Magical Adventure", "Middle grade fantasy", "images/The Mild Edges_ A Magical Adventure.webp"],
    ["The Ocean and Moon: Mystery by Moonlight", "Mystery romance", "images/The Ocean and Moon_ Mystery by Moonlight.webp"]
];

$('cv').innerHTML = CV.map(function(c, i) {
    return '<button data-k="' + i + '"><img src="' + c[2] + '" alt="' + c[0] + '" loading="lazy">' + c[1] + '</button>'
}).join('');

$('cv').addEventListener('click', function(e) {
    var b = e.target.closest('button');
    if (!b) return;
    var c = CV[b.dataset.k],
        l = $('lb');
    l.firstChild.src = c[2];
    l.firstChild.alt = c[0];
    l.classList.add('on')
});

$('lb').addEventListener('click', function() { this.classList.remove('on') });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') $('lb').classList.remove('on') });

/* ---------- WhatsApp icons ---------- */
var WA = '<svg class="wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.52.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.315 1.262.495 1.694.63.712.227 1.36.195 1.871.12.571-.09 1.758-.72 2.006-1.41.248-.69.248-1.275.173-1.41-.074-.135-.272-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>';
document.querySelectorAll('a[href*="wa.me"]').forEach(function(a) { a.insertAdjacentHTML('afterbegin', WA) });

/* ---------- Popup form country-code ---------- */
var CCS = [
        ["UAE", "+971"],
        ["Saudi Arabia", "+966"],
        ["Qatar", "+974"],
        ["Kuwait", "+965"],
        ["Bahrain", "+973"],
        ["Oman", "+968"],
        ["Jordan", "+962"],
        ["India", "+91"],
        ["Egypt", "+20"],
        ["Nigeria", "+234"],
        ["Bangladesh", "+880"],
        ["Iraq", "+964"]
    ],
    cur = 0;

function ccSet(i) {
    cur = i;
    $('ccb').innerHTML = flag(CCS[i][0]) + '<span>' + CCS[i][1] + '</span><i></i>';
    $('ccl').hidden = true;
    $('ccb').setAttribute('aria-expanded', 'false')
}
$('ccl').innerHTML = CCS.map(function(c, i) { return '<li role="option" data-i="' + i + '">' + flag(c[0]) + '<span>' + c[0] + '</span><b>' + c[1] + '</b></li>' }).join('');
ccSet(0);
$('ccb').addEventListener('click', function() {
    var h = $('ccl').hidden;
    $('ccl').hidden = !h;
    this.setAttribute('aria-expanded', h)
});
$('ccl').addEventListener('click', function(e) { var l = e.target.closest('li'); if (l) ccSet(+l.dataset.i) });

/* ---------- Popup show/hide ---------- */
var pu = $('pu'),
    pshown = false,
    pseen = false;
try { pseen = sessionStorage.getItem('pu') } catch (x) {}

function openP() {
    if (pshown || pseen || !$('qv').hidden) return;
    pshown = true;
    pu.hidden = false;
    $('pn').focus()
}

function closeP() { pu.hidden = true; try { sessionStorage.setItem('pu', '1') } catch (x) {} }
setTimeout(openP, 9000);
document.addEventListener('mouseout', function(e) { if (e.clientY <= 0 && !e.relatedTarget) openP() });
$('px').addEventListener('click', closeP);
pu.addEventListener('click', function(e) { if (e.target === pu) closeP() });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && !pu.hidden) closeP() });

$('pf').addEventListener('submit', function(e) {
    e.preventDefault();
    var n = $('pn').value.trim(),
        m = $('pe').value.trim(),
        p = $('pp').value.trim();
    $('pen').textContent = n ? '' : 'Enter your name.';
    var g = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m);
    $('pee').textContent = g ? '' : 'Enter a valid email address.';
    var pg = /^[\d\s()-]{6,}$/.test(p);
    $('pep').textContent = pg ? '' : 'Enter a valid phone number.';
    if (!n || !g || !pg) return;
    $('pf').style.display = 'none';
    var o = $('pok');
    o.style.display = 'block';
    o.textContent = 'Thank you, ' + n + '. We have your details and will contact you on ' + CCS[cur][1] + ' ' + p + ' about your 30% discount.';
    try { sessionStorage.setItem('pu', '1') } catch (x) {}
});

/* ---------- Quote view country code ---------- */
function mkcc(b, l) {
    /* FIX: mark as ready so the inline safety script doesn't double-bind */
    if (b.getAttribute('data-cc-ready') === '1') return function() { return CCS[0] };
    b.setAttribute('data-cc-ready', '1');

    var cu = 0;

    function set(i) {
        cu = i;
        b.innerHTML = flag(CCS[i][0]) + '<span>' + CCS[i][1] + '</span><i></i>';
        l.hidden = true;
        b.setAttribute('aria-expanded', 'false')
    }
    l.innerHTML = CCS.map(function(c, i) { return '<li role="option" data-i="' + i + '">' + flag(c[0]) + '<span>' + c[0] + '</span><b>' + c[1] + '</b></li>' }).join('');
    set(0);
    b.onclick = function() {
        var h = l.hidden;
        l.hidden = !h;
        b.setAttribute('aria-expanded', h)
    };
    l.onclick = function(e) { var x = e.target.closest('li'); if (x) set(+x.dataset.i) };
    return function() { return CCS[cu] }
}
var qcc = mkcc($('qcb'), $('qcl'));
fill($('qc'), C);
fill($('qg'), ["Fiction", "Romance", "Mystery and thriller", "Fantasy and science fiction", "Historical fiction", "Literary fiction", "Non-fiction", "Memoir and biography", "Self-help and personal development", "Business and leadership", "Religion and spirituality", "Poetry", "Children\u2019s and picture books", "Educational and academic", "Cookbooks", "Other"], 'Select genre');
fill($('qw'), ["Under 20,000 words", "20,000 to 50,000 words", "50,000 to 80,000 words", "Over 80,000 words", "Not sure yet"], 'Approximate word count');
fill($('qm'), ["My manuscript is complete", "I am still writing", "I only have an idea"], 'Manuscript status');

$('qs').innerHTML = SV.map(function(v) { return '<button type="button" aria-pressed="false">' + v[0].replace(/&/g, '&amp;') + '</button>' }).join('');
$('qs').addEventListener('click', function(e) { var b = e.target.closest('button'); if (b) b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true') });
$('qfi').addEventListener('change', function() { $('qfn').textContent = this.files.length ? this.files[0].name : 'Word, PDF or text file. Optional.' });
['dragenter', 'dragover'].forEach(function(t) { $('dz').addEventListener(t, function() { this.classList.add('on') }) });
['dragleave', 'drop'].forEach(function(t) { $('dz').addEventListener(t, function() { this.classList.remove('on') }) });

$('qq').addEventListener('submit', function(e) {
    e.preventDefault();
    var n = $('qn').value.trim(),
        m = $('qe').value.trim(),
        p = $('qp').value.trim();
    $('qen').textContent = n ? '' : 'Enter your full name.';
    var g = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m);
    $('qee').textContent = g ? '' : 'Enter a valid email address.';
    var pg = /^[\d\s()-]{6,}$/.test(p);
    $('qep').textContent = pg ? '' : 'Enter a valid phone number.';
    if (!n || !g || !pg) return;
    var sv = [].slice.call($('qs').querySelectorAll('[aria-pressed=true]')).map(function(x) { return x.textContent });
    $('qq').style.display = 'none';
    var o = $('qok');
    o.style.display = 'block';
    o.innerHTML = '<b>Thank you, </b>';
    o.firstChild.textContent = 'Thank you, ' + n + '. ';
    o.appendChild(document.createTextNode('We have your request' + (sv.length ? ' for ' + sv.join(', ') : '') + '. Our team will contact you on ' + qcc()[1] + ' ' + p + ' or at ' + m + ' with an itemised quote. '));
    var a = document.createElement('a');
    a.href = '#top';
    a.textContent = 'Back to home';
    o.appendChild(a)
});

/* ---------- Hash routing ---------- */
var T0 = document.title;
var lastY = 0,
    inQ = false,
    prevH = location.hash,
    preQ = '';

function route() {
    var q = location.hash === 'free-quotea.html';
    if (q && !inQ) {
        lastY = window.scrollY;
        preQ = prevH
    }
    $('qv').hidden = !q;
    $('top').hidden = q;
    document.title = q ? 'Get Your Free Quote | Gulf Books Publisher' : T0;
    var de = document.documentElement;
    if (q) {
        if (PRE.c) $('qc').value = PRE.c;
        if (PRE.s) {
            var hit = 0;
            [].forEach.call($('qs').children, function(b) {
                if (b.textContent === PRE.s) {
                    b.setAttribute('aria-pressed', 'true');
                    hit = 1
                }
            });
            if (!hit && !$('qd').value) $('qd').value = 'Package: ' + PRE.s
        }
        PRE = {};
        de.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        de.style.scrollBehavior = ''
    } else {
        var h = location.hash;
        if (inQ && (h === '' || h === '#top' || h === preQ)) {
            de.style.scrollBehavior = 'auto';
            window.scrollTo(0, lastY);
            de.style.scrollBehavior = ''
        } else if (h.length > 1) { var el = document.getElementById(h.slice(1)); if (el) el.scrollIntoView() }
    }
    inQ = q;
    prevH = location.hash
}
addEventListener('hashchange', route);
route();

/* ---------- Floating WhatsApp button ---------- */
var wf = document.createElement('a');
wf.className = 'wf';
wf.href = 'https://wa.me/971581969313';
wf.target = '_blank';
wf.rel = 'noopener';
wf.setAttribute('aria-label', 'Start WhatsApp chat on +971 58 196 9313');
wf.innerHTML = '<span class="wi">' + WA + '</span><span class="wt"><b>Start WhatsApp chat</b><small>+971 58 196 9313</small></span>';
document.body.appendChild(wf);

/* FIX: #nav does not exist (nav is #navLinks, already handled by inline script) — guard it */
var navEl = $('nav');
var menuEl = $('menu');
if (navEl && menuEl) {
    menuEl.addEventListener('click', function() {
        var o = navEl.classList.toggle('open');
        this.setAttribute('aria-expanded', o)
    });
    navEl.addEventListener('click', function(e) {
        if (e.target.classList.contains('l')) navEl.classList.remove('open')
    });
}