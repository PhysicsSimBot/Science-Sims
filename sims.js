/* =====================================================================
   ALL simulations for the site live here — one list.
   Every page reads what it needs from this file.

   Fields for each simulation:
     course : "sci10" | "phys20" | "phys30"   — which course it belongs to
     title  : the name students see
     desc   : one plain sentence
     file   : the .html filename in your repo, or null to show "Coming soon"
     img    : OPTIONAL thumbnail — a path or URL, e.g. "thumbs/projectiles.png"
              Leave it out entirely and a course-coloured placeholder is shown.

   Filenames and image paths are CASE-SENSITIVE on GitHub Pages —
   match them exactly (Projectiles.png and projectiles.png are different).

   To add a simulation: copy a line, change the fields. That's it.
   ===================================================================== */
const SIMS = [

  /* ---------------- Science 10 ---------------- */
  { course:"sci10",  title:"Energy Transfer & Efficiency", desc:"Trace energy through a system and see where it's lost.", file:"sci10-energy-efficiency.html" },
  { course:"sci10",  title:"Heat Transfer",                desc:"Conduction, convection, and radiation in action.",       file:"sci10-heat-transfer.html" },
  { course:"sci10",  title:"Radiation Balance",            desc:"How energy flows in and out of Earth's systems.",        file:null },

  /* ---------------- Physics 20 ---------------- */
  { course:"phys20", title:"Projectile Motion",            desc:"Set the launch angle and speed, then watch the arc.",    file:"phys20-projectiles.html" },
  { course:"phys20", title:"Forces & Free-Body Diagrams",  desc:"Build the forces, then predict the motion.",             file:"phys20-dynamics.html" },
  { course:"phys20", title:"Uniform Circular Motion",      desc:"Speed, radius, and the pull toward the centre.",         file:"phys20-circular-motion.html" },
  { course:"phys20", title:"Simple Harmonic Motion",       desc:"Springs and pendulums oscillating in time.",             file:"phys20-shm.html" },
  { course:"phys20", title:"Waves & Sound",                desc:"Frequency, wavelength, and interference.",               file:null },

  /* ---------------- Physics 30 ---------------- */
  { course:"phys30", title:"Collisions & Momentum",        desc:"Elastic and inelastic collisions in one dimension.",     file:"phys30-momentum.html" },
  { course:"phys30", title:"Electric Fields",              desc:"Map the field around one or more charges.",              file:"phys30-electric-fields.html" },
  { course:"phys30", title:"Magnetic Fields & Motors",     desc:"Current, field, and the force between them.",            file:"phys30-magnetism.html" },
  { course:"phys30", title:"The Photoelectric Effect",     desc:"Light, energy, and ejected electrons.",                  file:null },
  { course:"phys30", title:"Bohr Model & Spectra",         desc:"Energy levels and emission lines.",                      file:null },

];

