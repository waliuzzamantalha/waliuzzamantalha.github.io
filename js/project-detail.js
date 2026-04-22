(function () {
  "use strict";

  var PROJECTS = {
    "inline-four-cranktrain": {
      title: "Inline-Four Crankshaft & Piston Assembly",
      meta: "Powertrain CAD · Assembly + component detail renders",
      image: "assets/project-inline4-cranktrain-assembly.png",
      imageAlt:
        "Isometric CAD render of an inline-four crankshaft with four pistons and connecting rods at different strokes",
      overview:
        "This is presented as one project: the hero image is the full cranktrain (crankshaft, four connecting rods, and four pistons) so the kinematics and assembly read clearly. The other two images are not molds or tooling—they are the same class of real engine hardware: a connecting rod and a piston, shown as separate high-quality part renders to highlight geometry, fits, and presentation. Together they read as assembly context plus component-level design study.",
      features: [
        "Full cranktrain assembly showing journals, crankpins, counterweights, and rod–piston stack-up",
        "Four pistons staged to suggest stroke / timing relationships for a four-cylinder inline layout",
        "Connecting rod detail: big end, cap bolt pattern, I-beam shank, small end for the piston pin",
        "Piston detail: crown, ring lands/grooves, skirt, and gudgeon pin bore",
        "Clean studio-style renders suitable for portfolio, reports, and client-facing decks",
      ],
      software:
        "SolidWorks or equivalent parametric CAD (parts, assembly, mates); realistic appearance via integrated or external rendering.",
      galleryHeading: "Component detail views",
      galleryLead:
        "Supporting renders from the same cranktrain project — standard engine hardware, not mold or die geometry.",
      gallery: [
        {
          src: "assets/project-inline4-connecting-rod.png",
          alt: "CAD render of an internal combustion engine connecting rod",
          caption:
            "Connecting rod — forged/machined style geometry with I-beam shank for stiffness-to-weight; big end split for crankpin assembly.",
        },
        {
          src: "assets/project-inline4-piston.png",
          alt: "CAD render of an internal combustion engine piston",
          caption:
            "Piston — combustion crown, ring grooves for compression and oil control, and bore for the wrist pin; typical cylinder component, not a mold cavity.",
        },
      ],
    },
    "tool-post-exploded": {
      title: "4-Way Lathe Tool Post — Exploded Assembly",
      meta: "Assembly documentation · Exploded view",
      image: "assets/project-exploded-view.png",
      imageAlt: "Exploded view of a 4-way lathe tool post assembly",
      overview:
        "This project documents a square 4-way lathe tool post as a fully constrained assembly. The exploded view communicates the build sequence, fastener layout, and relationships between the base, plates, clamp hardware, and operator handle—ideal for portfolios and technical packages.",
      features: [
        "Exploded presentation for manufacturing and assembly clarity",
        "Hardware and stack-up visible for review and quoting",
        "Consistent material finishes for client-facing renders",
        "Structured for future drawings and BOM export",
      ],
      software: "SolidWorks (assembly, mates, exploded view); rendering workflow compatible with PhotoView 360 / similar.",
    },
    "tool-post-iso": {
      title: "4-Way Lathe Tool Post — Isometric Render",
      meta: "Product visualization · Isometric",
      image: "assets/project-iso-view.png",
      imageAlt: "Isometric render of a 4-way lathe tool post",
      overview:
        "A polished isometric render of the assembled tool post, emphasizing realistic metals, coated hardware, and soft studio lighting. The goal is a premium, engineering-credible image suitable for proposals, LinkedIn, and freelance outreach.",
      features: [
        "High-contrast materials (satin plate, matte fasteners, chrome lever)",
        "Ground shadow and reflection for depth",
        "Clear read of clamp geometry and ergonomics",
        "Presentation-ready framing for web and PDF",
      ],
      software: "SolidWorks modeling with a dedicated rendering pass (PhotoView 360, Visualize, or comparable).",
    },
    "modular-minifigure-assembly": {
      title: "Modular Toy Minifigure — Assembly & Part Library",
      meta: "Product-style CAD · Complete assembly + component breakdown (Type: Complete project)",
      image: "assets/project-minifig-front.png",
      imageAlt:
        "Front view of a fully assembled stylized minifigure with hat, head, torso, arms, hands, and legs",
      overview:
        "Visually, this work packages as one consumer-product style project: a multi-body character built from distinct plastic-style parts (hat, head, torso, arms, C-grip hands, hip, and legs) mated into a complete assembly. Supplied images include principal assembly orientations (front, side, back, top, bottom) and individual part renders—consistent with design-for-assembly documentation rather than mold cavity design. No tooling or die geometry is shown.",
      features: [
        "Complete assembly with mate-ready interfaces (studs, sockets, shoulder joints, hip-to-leg stack-up)",
        "Multiple presentation views for design review and storytelling",
        "Part-level CAD for torso, head, hat, arm, hand, hip, and leg components",
        "Fillets, bosses, and cut features typical of molded toy aesthetics",
        "Portfolio-ready neutral studio lighting and soft shadows",
      ],
      software: "SolidWorks / Fusion 360–class parametric modeling; assemblies, mates, and shaded/realistic display.",
      galleryHeading: "Assembly views & part renders",
      galleryLead:
        "Alternate assembly orientations followed by individual components — all from the same modular character build (brick-style figurine aesthetic; original student geometry, not a commercial product file).",
      gallery: [
        {
          src: "assets/project-minifig-side.png",
          alt: "Side profile of assembled minifigure CAD model",
          caption: "Assembly · Side elevation — full stack-up from hat through legs.",
        },
        {
          src: "assets/project-minifig-back.png",
          alt: "Rear view of assembled minifigure",
          caption: "Assembly · Rear view — hip–leg interface and back silhouette.",
        },
        {
          src: "assets/project-minifig-top.png",
          alt: "Top view of minifigure assembly",
          caption: "Assembly · Plan / top view — hat, shoulders, and gripper hands.",
        },
        {
          src: "assets/project-minifig-bottom.png",
          alt: "Top-down CAD view of minifigure upper body and shoulders",
          caption:
            "Assembly · Top-down detail — shoulders, C-grip hands, and rear-mounted utility geometry (plan-style read).",
        },
        {
          src: "assets/part-minifig-torso.png",
          alt: "CAD part model of blue minifigure torso",
          caption: "Part · Torso — shoulder sockets, neck stud, injection-style wall thickness and fillets.",
        },
        {
          src: "assets/part-minifig-head.png",
          alt: "CAD part model of green minifigure head with face cutouts",
          caption: "Part · Head — cylindrical body, top stud, cut features for eyes and mouth.",
        },
        {
          src: "assets/part-minifig-hat.png",
          alt: "CAD part model of blue wide-brim hat",
          caption: "Part · Headwear — brim and crown volume suitable for mating to the head.",
        },
        {
          src: "assets/part-minifig-arm.png",
          alt: "CAD part model of blue minifigure arm",
          caption: "Part · Arm — limb segment for shoulder attachment.",
        },
        {
          src: "assets/part-minifig-hand.png",
          alt: "CAD part model of green C-shaped gripper hand",
          caption: "Part · Hand — classic C-grip geometry for accessories.",
        },
        {
          src: "assets/part-minifig-hip.png",
          alt: "CAD part model of hip joint piece",
          caption: "Part · Hip / waist — junction between torso and dual-leg build.",
        },
        {
          src: "assets/part-minifig-leg.png",
          alt: "CAD part model of minifigure leg",
          caption: "Part · Leg — lower limb block for hip mate and stance.",
        },
      ],
    },
    "plug-product-and-injection-mold": {
      title: "Ergonomic Two-Pin Plug — Product CAD & Injection Mold Tooling",
      meta: "Consumer assembly + Mold / tooling (IPE) · Single integrated study",
      image: "assets/project-plug-hero.png",
      imageAlt:
        "High-fidelity CAD render of a two-prong power plug with ergonomic housing, grip texture, and metal pins",
      overview:
        "One coordinated portfolio entry: the upper images document a finished two-pin (Type A–style) plug assembly—ergonomic housing, patterned grip, dark faceplate, polished pins, and cord-entry relief. The lower set documents injection-mold tooling for the same class of bulbous, perforated housing geometry: exploded cavity/core stacks with guide pins, a split-cavity variant for tapered ribs, a transparent mold block showing runners/cooling channels, and a plate-level detail typical of mold bases. Together this reads as product design linked to manufacturing-ready tooling—exactly the story an IPE / mechanical portfolio should tell.",
      features: [
        "Complete plug assembly visualization (multiple isometrics, including a ghosted iteration study view)",
        "Industrial design details: loft-like body transitions, knurled or patterned grip, strain-relief neck",
        "Exploded mold assemblies showing core, cavity halves, alignment pins, and side-action logic",
        "Transparent mold study for internal cavity, perforation strategy, and feed path visibility",
        "Mold plate / block detail highlighting precision holes and parting-line discipline",
      ],
      software:
        "SolidWorks or Fusion 360 for surfacing, assemblies, and mold tools; integrated or external rendering for product shots.",
      galleryHeading: "Product views & mold documentation",
      galleryLead:
        "Alternate plug renders first; then mold exploded layouts, transparent stack-up, and plate detail — all grouped as one product-to-tooling workflow.",
      gallery: [
        {
          src: "assets/project-plug-iso-1.png",
          alt: "Isometric CAD render of two-pin electrical plug",
          caption: "Product · Isometric view A — housing, faceplate, and parallel blade pins.",
        },
        {
          src: "assets/project-plug-iso-ghost.png",
          alt: "Plug CAD render with semi-transparent duplicate for design communication",
          caption: "Product · Presentation variant — ghosted second body for depth / motion-style storytelling.",
        },
        {
          src: "assets/project-plug-mold-exploded-1.png",
          alt: "Exploded injection mold assembly with central perforated housing part",
          caption:
            "Tooling · Exploded mold #1 — cavity/core plates, side features, and finished part context (perforated ergonomic shell).",
        },
        {
          src: "assets/project-plug-mold-exploded-2.png",
          alt: "Exploded split-cavity injection mold with tapered core",
          caption:
            "Tooling · Exploded mold #2 — split cavity blocks, tapered core, and dowel-style alignment holes.",
        },
        {
          src: "assets/project-plug-mold-transparent.png",
          alt: "Transparent mold block showing internal cavity and channels",
          caption:
            "Tooling · Transparent layout — internal negative geometry, perforation detail, and runner / channel visibility.",
        },
        {
          src: "assets/project-plug-mold-plate.png",
          alt: "CAD model of mold base plate or tooling block",
          caption: "Tooling · Plate / block detail — parting seam, precision bores, and robust mold-base style massing.",
        },
      ],
    },
    "lamp-housing-mold-suite": {
      title: "Lamp Housing — Shell Geometry & Multi-Section Mold Plates",
      meta: "Mold / tooling design · Body, extension & end-cap stack (IPE)",
      image: "assets/project-lamp-housing-parts.png",
      imageAlt:
        "CAD layout of lamp housing plastic parts: main shell, trim base, and contoured lower component",
      overview:
        "Filenames and geometry read as one lighting product study: consumer-style lamp housings modeled as separate shells (main body with switch/display cutouts, perimeter trim, and a contoured base / shade-related piece). The companion images are manufacturing plates—upper molds with mandrel-style cores plus matching lower cavities for the main body, an intermediate “extend” region, and a down-cap zone—together describing a segmented tool strategy for a tall or multi-stack lamp. A final plate shows a balanced two-cavity layout with a Y-runner and corner mounting bores, typical of production-minded mold design.",
      features: [
        "Product-side CAD: multi-body housing family with drafted walls, fillets, and interface recesses",
        "Body mold pair: upper mandrel/core plate and lower cavity plate for the primary shell",
        "Extend mold pair: upper and lower plates for an intermediate housing section",
        "Down-cap mold pair: upper mandrel and lower cavity for the lower lamp stack / cap region",
        "Two-cavity plate with runner routing and pin bores — throughput and alignment discipline",
      ],
      software:
        "SolidWorks or Fusion 360 — part and assembly modeling, mold design / cavity tools, and shaded technical views.",
      galleryHeading: "Mold plates & production layout",
      galleryLead:
        "Upper/lower (and mandrel) pairs sequenced body → extend → down-cap, closing with the dual-cavity runner plate.",
      gallery: [
        {
          src: "assets/project-lamp-mold-body-upper.png",
          alt: "Upper mold plate with mandrel for lamp body cavity",
          caption: "Tooling · Body — upper / mandrel plate: core geometry and drafted internal surfaces.",
        },
        {
          src: "assets/project-lamp-mold-body-lower.png",
          alt: "Lower mold plate with cavity for lamp body",
          caption: "Tooling · Body — lower cavity plate: negative of main housing including interface pockets.",
        },
        {
          src: "assets/project-lamp-mold-extend-upper.png",
          alt: "Upper mold for lamp extend section",
          caption: "Tooling · Extend — upper plate for the mid-stack housing section.",
        },
        {
          src: "assets/project-lamp-mold-extend-lower.png",
          alt: "Lower mold for lamp extend section",
          caption: "Tooling · Extend — lower cavity plate mating the extend upper.",
        },
        {
          src: "assets/project-lamp-mold-downcap-upper.png",
          alt: "Upper mold mandrel for lamp down cap",
          caption: "Tooling · Down cap — upper / mandrel: end-of-stack form and core detail.",
        },
        {
          src: "assets/project-lamp-mold-downcap-lower.png",
          alt: "Lower mold cavity for lamp down cap",
          caption: "Tooling · Down cap — lower cavity plate completing the cap region stack-up.",
        },
        {
          src: "assets/project-lamp-mold-two-cavity-runner.png",
          alt: "Two-cavity injection mold plate with Y runner",
          caption:
            "Tooling · Dual-cavity plate — balanced Y-runner, mirrored cavities with pin grid detail, corner through-holes for guide posts / clamping.",
        },
      ],
    },
    "plug-body-mold-drawing-package": {
      title: "Two-Pin Plug Body — Split Mold, Mandrel Core & 2D Drawing Package",
      meta: "Mold / tooling + molded part + technical drawing (Complete release-style study)",
      image: "assets/project-plug-v2-exploded.png",
      imageAlt:
        "Exploded CAD view of a three-block injection mold with split cavity halves and top core for a hollow plug-style housing",
      overview:
        "This entry ties one molded consumer shell to its manufacturing package: an exploded mold stack shows split lower cavity halves plus an upper core block forming internal voids and the tapered neck typical of a two-pin plug housing. Named assets (Lower_Mold Left/Right, Mandrel, 2_pin_Plug_Body) reinforce the same storyline. A formal 2D drawing sheet captures orthographic definition and key dimensions for release to tool build or inspection. The additional sub-assembly render (ghosted continuation) reads as press / fixture context supporting the tool stack—documented here as supporting mechanical context rather than a separate unrelated product.",
      features: [
        "Exploded mold assembly communicating parting strategy, core vs cavity roles, and alignment bores",
        "Isometric CAD of the molded plug body — hollow shell, internal rib/pocket, and drafted neck for assembly",
        "Lower mold left and right cavity halves with gate/runner access and mirrored negative geometry",
        "Mandrel / core-on-base stack with keyed body, taper, and mounting interface for machine integration",
        "2D drawing package: top, bottom, and profile views with dimensioned radii, pockets, and overall height",
        "Optional sub-assembly block view highlighting modular plates and fastener pattern in the tool surround",
      ],
      software:
        "SolidWorks or Fusion 360 (3D parts, assemblies, mold tools); AutoCAD or drawing workspace for 2D documentation.",
      galleryHeading: "Part, drawing & cavity documentation",
      galleryLead:
        "Molded housing first, then drawing release, then cavity halves, mandrel stack, and supporting assembly context.",
      gallery: [
        {
          src: "assets/project-plug-v2-body.png",
          alt: "Isometric CAD of hollow two-pin plug plastic body",
          caption: "Product · Molded plug body — contoured shell, open top, internal feature, and tapered base.",
        },
        {
          src: "assets/project-plug-v2-drawing.png",
          alt: "Technical drawing sheet with orthographic views of plug body",
          caption: "Documentation · 2D drawing — plan, bottom, and elevation with critical dimensions and radii.",
        },
        {
          src: "assets/project-plug-v2-mold-left.png",
          alt: "Lower injection mold left cavity half with organic cavity",
          caption: "Tooling · Lower mold — left half: cavity impression, runner approach, ghosted mate for context.",
        },
        {
          src: "assets/project-plug-v2-mold-right.png",
          alt: "Lower injection mold right cavity half",
          caption: "Tooling · Lower mold — right half: complementary cavity and alignment features.",
        },
        {
          src: "assets/project-plug-v2-mandrel.png",
          alt: "Mandrel or core assembly on mounting base",
          caption: "Tooling · Mandrel stack — base plate, slotted core body, and tapered tip for internal void formation.",
        },
        {
          src: "assets/project-plug-v2-subassembly.png",
          alt: "CAD sub-assembly of modular plates with ghosted extension",
          caption: "Context · Modular block sub-assembly — mounting holes and ghosted stack suggesting larger press/fixture surround.",
        },
      ],
    },
    "lug-butterfly-valve-assembly": {
      title: "Industrial Lug-Style Butterfly Valve — Full Assembly CAD",
      meta: "Fluid handling · Complete assembly · Shaded + technical display",
      image: "assets/project-butterfly-valve-shaded.png",
      imageAlt:
        "Isometric render of a lug-style butterfly valve with blue body, disc, elastomer seat, gearbox, and handwheel; ghosted duplicate behind",
      overview:
        "Two views of the same valve: a shaded portfolio render highlights material separation—cast or ductile-iron style blue lug body with drilled lugs for wafer/lug bolting to flanges, resilient black seat ring, metallic disc on stem in a partially open attitude, grey gear operator housing, and top handwheel for manual torque multiplication. A second isometric uses a non-shaded / edge-emphasis display to read bore geometry, lug pattern, and interface edges for documentation or design review. Together they present a complete quarter-turn isolation valve typical of water, HVAC, or light process piping portfolios.",
      features: [
        "Lug-style body with perimeter bolt holes for line installation without downstream blind flanges (lug pattern)",
        "Quarter-turn disc and stem stack-up with visible seat interface for shutoff / throttling narrative",
        "Manual gear operator and handwheel for high-torque closure without powered actuator",
        "Ghosted twin in render for depth and optional orientation comparison",
        "Alternate display mode for crisp edges and technical communication",
      ],
      software:
        "SolidWorks or Fusion 360 — multi-body assembly, mates, appearances, and RealView-style or ray-traced rendering.",
      galleryHeading: "Technical display variant",
      galleryLead:
        "Same assembly with edge-forward shading for geometry review alongside the primary shaded hero.",
      gallery: [
        {
          src: "assets/project-butterfly-valve-edges.png",
          alt: "Butterfly valve CAD isometric with edge emphasis and reduced shading",
          caption: "Detail view · Shaded-with-edges / technical style — lug holes, bore, and operator interfaces read clearly.",
        },
      ],
    },
  };

  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var data = id && PROJECTS[id];

  var empty = document.getElementById("detail-empty");
  var content = document.getElementById("detail-content");
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (!data) {
    if (empty) empty.classList.remove("hidden");
    return;
  }

  if (empty) empty.classList.add("hidden");
  if (content) content.classList.remove("hidden");

  document.getElementById("detail-title").textContent = data.title;
  document.getElementById("detail-meta").textContent = data.meta;
  var img = document.getElementById("detail-image");
  img.src = data.image;
  img.alt = data.imageAlt;
  document.getElementById("detail-overview").textContent = data.overview;

  var ul = document.getElementById("detail-features");
  ul.innerHTML = "";
  data.features.forEach(function (f) {
    var li = document.createElement("li");
    li.textContent = f;
    ul.appendChild(li);
  });

  document.getElementById("detail-software").textContent = data.software;
  document.title = data.title + " | Walliuzzaman Talha";

  var gallerySection = document.getElementById("detail-gallery-section");
  var galleryRoot = document.getElementById("detail-gallery");
  var galleryHeadingEl = document.getElementById("detail-gallery-heading");
  var galleryLeadEl = document.getElementById("detail-gallery-lead");
  if (gallerySection && galleryRoot) {
    galleryRoot.innerHTML = "";
    if (data.gallery && data.gallery.length) {
      gallerySection.classList.remove("hidden");
      if (galleryHeadingEl) {
        galleryHeadingEl.textContent = data.galleryHeading || "Supporting imagery";
      }
      if (galleryLeadEl) {
        galleryLeadEl.textContent =
          data.galleryLead || "Additional views and details from this project.";
        galleryLeadEl.classList.remove("hidden");
      }
      data.gallery.forEach(function (item) {
        var fig = document.createElement("figure");
        fig.className = "detail-gallery-item glass reveal";
        var im = document.createElement("img");
        im.src = item.src;
        im.alt = item.alt || "";
        im.width = 900;
        im.height = 600;
        im.loading = "lazy";
        fig.appendChild(im);
        if (item.caption) {
          var cap = document.createElement("figcaption");
          cap.textContent = item.caption;
          fig.appendChild(cap);
        }
        galleryRoot.appendChild(fig);
      });
    } else {
      gallerySection.classList.add("hidden");
      if (galleryLeadEl) {
        galleryLeadEl.textContent = "";
        galleryLeadEl.classList.add("hidden");
      }
    }
  }

  function runReveals() {
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
      );
      document.querySelectorAll(".detail-article .reveal").forEach(function (el) {
        io.observe(el);
      });
    } else {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  requestAnimationFrame(function () {
    requestAnimationFrame(runReveals);
  });
})();
