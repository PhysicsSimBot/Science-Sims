/* =====================================================================
   ALL simulations for the site live here — one list.
   Every page reads what it needs from this file.

   Fields for each simulation:
     course : "sci10" | "phys20" | "phys30"   — which course it belongs to
     title  : the name students see
     desc   : one plain sentence
     file   : the .html filename/path in your repo, or null to show "Coming soon"
     img    : OPTIONAL thumbnail — a path or URL, e.g. "thumbs/projectiles.png"
              Leave it out entirely and a course-coloured placeholder is shown.

   Filenames and image paths are CASE-SENSITIVE on GitHub Pages —
   match them exactly (Projectiles.png and projectiles.png are different).

   TO ADD A SIMULATION: copy an existing line, paste it inside the [ ] brackets,
   and change the fields. Keep the comma at the end of each line.
   ===================================================================== */
const SIMS = [

  { course:"phys20", title:"Significant Digits", desc:"Practice reading and rounding to the correct number of significant figures.", file:"sims/physics20/sigdig.html" },

];
