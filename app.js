/* =====================================================================
   Shared plumbing for every page. You shouldn't need to edit this.
   It builds simulation tiles and handles search filtering.
   ===================================================================== */

/* ---- Google Analytics (loads on every page that includes app.js) ----
   To change or remove tracking, edit or delete this one block.
   Measurement ID: G-PGQ0J12QNB                                        */
(function(){
  var GA_ID = "G-PGQ0J12QNB";
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
})();

var ARROW = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* map a course id to its accent colour variable */
function accentVar(course){
  if(course === "sci10")  return "var(--sci10)";
  if(course === "phys20") return "var(--phys20)";
  if(course === "phys30") return "var(--phys30)";
  return "var(--muted)";
}

/* thumbnail: real image if provided, otherwise a course-coloured placeholder */
function thumbHTML(s){
  if(s.img){
    return '<div class="thumb"><img src="' + s.img + '" alt="" loading="lazy"></div>';
  }
  var letter = (s.title || "?").trim().charAt(0).toUpperCase();
  return '<div class="thumb placeholder"><span class="monogram">' + letter + '</span></div>';
}

/* build one tile element for a simulation */
function makeTile(s){
  var live = !!s.file;
  var el = document.createElement(live ? "a" : "div");
  el.className = "tile" + (live ? "" : " soon");
  el.style.setProperty("--accent", accentVar(s.course));
  if(live) el.href = s.file;

  var body = '<div class="tile-body"><h3>' + s.title + '</h3><p>' + s.desc + '</p>' +
    (live
      ? '<span class="go">Open simulation' + ARROW + '</span>'
      : "<span class='soon-tag'>Coming soon</span>") +
    '</div>';

  el.innerHTML = thumbHTML(s) + body;
  return el;
}

/* does a simulation match the search text? */
function matches(s, q){
  if(!q) return true;
  q = q.toLowerCase();
  return (s.title + " " + s.desc).toLowerCase().indexOf(q) > -1;
}

/* render a list of simulations into a container (with empty-state message) */
function renderInto(container, list){
  container.innerHTML = "";
  if(!list.length){
    container.innerHTML = '<p class="empty">No simulations match your search.</p>';
    return;
  }
  list.forEach(function(s){ container.appendChild(makeTile(s)); });
}

/* wire a search box to a container, filtering a given list live (flat) */
function wireSearch(box, container, list){
  function run(){ renderInto(container, list.filter(function(s){ return matches(s, box.value); })); }
  box.addEventListener("input", run);
  run();
}

/* render simulations grouped under unit headings, in a given unit order */
function renderGrouped(container, list, order){
  container.innerHTML = "";
  if(!list.length){
    container.innerHTML = '<p class="empty">No simulations match your search.</p>';
    return;
  }
  var groups = {};
  list.forEach(function(s){
    var u = s.unit || "Other";
    (groups[u] = groups[u] || []).push(s);
  });
  var units = [];
  (order || []).forEach(function(u){ if(groups[u]) units.push(u); });      // listed order first
  Object.keys(groups).sort().forEach(function(u){                          // any leftovers, alphabetical
    if(units.indexOf(u) < 0) units.push(u);
  });
  units.forEach(function(u){
    var section = document.createElement("section");
    section.className = "unit-group";
    var h = document.createElement("h2");
    h.className = "unit-heading";
    h.textContent = u;
    section.appendChild(h);
    var grid = document.createElement("div");
    grid.className = "tiles";
    groups[u].forEach(function(s){ grid.appendChild(makeTile(s)); });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

/* wire a search box to a course container, grouping results by unit */
function wireCourse(box, container, list, order){
  function run(){ renderGrouped(container, list.filter(function(s){ return matches(s, box.value); }), order); }
  box.addEventListener("input", run);
  run();
}
