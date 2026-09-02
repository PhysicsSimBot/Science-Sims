/* =====================================================================
   ALL simulations for the site live here — one list.
   Every page reads what it needs from this file.

   Fields for each simulation:
     course : "sci10" | "phys20" | "phys30"   — which course it belongs to
     unit   : the unit it belongs to (used for grouping later)
     title  : the name students see
     desc   : one plain sentence
     file   : the .html filename/path in your repo, or null to show "Coming soon"
     img    : OPTIONAL thumbnail — a path or URL, e.g. "thumbs/projectiles.png"
              Leave it out entirely and a course-coloured placeholder is shown.

   Filenames and image paths are CASE-SENSITIVE on GitHub Pages —
   match them exactly (Projectiles.png and projectiles.png are different).

   A sim can appear in more than one course: just add another line with a
   different "course" but the SAME "file" path (see Significant Digits below).

   Multi-file sims (their own css/ and js/ folders) live in their OWN folder,
   and "file" points at that folder's index.html — e.g.
   "sims/physics30/collisionlab/index.html".

   Unit names (use these exact spellings so grouping stays tidy):
     Science 10 : "Chemistry"  "Physics"  "Biology"
     Physics 20 : "Skills & Measurement"  "Kinematics"  "Dynamics"  "Circular Motion"  "Oscillatory Motion & Waves"
     Physics 30 : "Review"  "Skills & Measurement"  "Momentum"  (more to be added as you build them out)

   TO ADD A SIMULATION: copy an existing line, paste it inside the [ ] brackets,
   and change the fields. Keep the comma at the end of each line.
   ===================================================================== */
const SIMS = [

  /* ---- Science 10 ---- */
  { course:"sci10",  unit:"Chemistry", title:"Chapters 1–2 Escape Room", desc:"Work through chemistry challenges from the first two chapters to break out.", file:"sims/science10/ch1-2escape.html" },
  { course:"sci10",  unit:"Physics", title:"Significant Digits", desc:"Practice reading and rounding to the correct number of significant figures.", file:"sims/physics20/sigdig.html" },

  /* ---- Physics 20 ---- */
  { course:"phys20", unit:"Skills & Measurement", title:"Significant Digits", desc:"Practice reading and rounding to the correct number of significant figures.", file:"sims/physics20/sigdig.html" },
  { course:"phys20", unit:"Kinematics", title:"Relative Motion: Riverboat", desc:"Combine boat and current velocities to predict the boat's path across a river.", file:"sims/physics20/relativemotionriverboat.html" },

  /* ---- Physics 30 ---- */
  { course:"phys30", unit:"Review", title:"Physics 20 Review", desc:"Brush up on key Physics 20 concepts before diving into Physics 30.", file:"sims/physics30/physics20review.html" },
  { course:"phys30", unit:"Momentum", title:"Collision Lab", desc:"Explore 2D disc collisions, momentum conservation, and restitution.", file:"sims/physics30/collisionlab.html" },
  { course:"phys30", unit:"Skills & Measurement", title:"Significant Digits", desc:"Practice reading and rounding to the correct number of significant figures.", file:"sims/physics20/sigdig.html" },

];
