/* ==========================================================================
   Brammuda Darwan Pradana — portfolio
   Project index, case sheets, lightbox, filters, and navigation.
   ========================================================================== */

const PROJECTS = [
  {
    id: "vmt",
    engine: "unity",
    engineLabel: "Unity",
    category: "Professional · Interactive Training",
    title: "Virtual Maintenance Training",
    period: "2017 — 2026",
    meta: ["Lead Programmer · Segaris Media Teknologi", "Unity · C#", "Desktop · VR · Touch"],
    tags: ["Unity", "C#", "VR", "Multiplayer", "Editor Tools"],
    short: "A configurable Desktop/VR framework behind interactive maintenance training — component exploration, step-based procedures, branching troubleshooting, and assessment.",
    description: "As Lead Programmer at Segaris Media Teknologi, I coordinate implementation and build the engineering foundation for a family of interactive maintenance training applications. The work spans a reusable Desktop/VR framework, 3D visualization, multiplayer features, backend reporting, and a full content-authoring toolchain used across projects. The content editors let the training team assemble a lesson from reusable parts — materials, maintenance and remove/install steps, branching troubleshooting, animations, virtual controls, and assessment questions — then preview and publish it without code changes.",
    highlights: [
      "Coordinate implementation and maintain consistency with the agreed software structure.",
      "Designed ScriptableObject-based App Config and App Mode profiles for Desktop/VR, combining UI, player, model, content, and behavior settings.",
      "Built interactive component exploration, maintenance and remove/install procedures, branching troubleshooting, and step-based training animations.",
      "Implemented maintenance, remove, and install procedure workflows with tool and component validation, timers, progress tracking, and assessment results.",
      "Added 3D inspection features: cutaway, X-ray, highlighting, component callouts, and detail camera views.",
      "Developed multiplayer feature and UI synchronization with Mirror and Netcode for GameObjects, including LAN host discovery and shared drawing.",
      "Integrated authentication, learning progress, course and assessment reports, xAPI activity reporting, and instructor monitoring with backend services.",
      "Created model preparation and content authoring tools with modular loading through Addressables and additive scenes.",
      "Built content authoring editors: ScriptableObject-backed databases and tree/graph editors for materials, maintenance and remove/install procedures, troubleshooting, animations, and virtual controls.",
      "Extended authoring with custom Visual Scripting nodes and Timeline clips for interaction, camera movement, and procedure flow, so lessons are composed by the training team rather than programmed per project."
    ],
    cover: "vmt-01",
    coverFit: "cover",
    images: [
      ["vmt-01", "Jet engine overview with labeled components"],
      ["vmt-02", "Fuel control system and component information"],
      ["vmt-03", "Transparent assembly view with a component list"],
      ["vmt-04", "Labeled assembly with linked component information"],
      ["vmt-05", "Component inspection and manipulation tools"],
      ["vmt-06", "Hydraulic equipment preview and troubleshooting diagram"],
      ["vmt-07", "Aircraft system troubleshooting with a decision flowchart"],
      ["vmt-08", "Training assessment and multiple-choice questions"],
      ["vmt-09", "Aircraft systems selection interface"],
      ["vmt-10", "Aircraft system overview and technical description"],
      ["vmt-11", "Aircraft component inspection and cutaway view"],
      ["vmt-12", "Aircraft component overview in the 3D training environment"],
      ["vmt-13", "Landing gear component labels and technical information"],
      ["vmt-14", "Fuel system schematic alongside the 3D aircraft model"],
      ["vmt-15", "Labeled fuel storage and distribution system"],
      ["vmt-16", "Aircraft cockpit and system visualization"]
    ]
  },
  {
    id: "legrand",
    engine: "unity",
    engineLabel: "Unity",
    category: "PC Game · Professional",
    title: "LEGRAND LEGACY: Tale of the Fatebounds",
    period: "2015 — 2017",
    meta: ["Game Programmer · Tinker Games & SEMISOFT", "Unity · C#", "PC"],
    tags: ["Unity", "C#", "PC", "Tools"],
    short: "Game programmer across Tinker Games and SEMISOFT — designer-facing data tools, map connections, minigames, and puzzles.",
    description: "LEGRAND LEGACY: Tale of the Fatebounds is a PC role-playing game built in Unity. Across Tinker Games and SEMISOFT I worked on the tools and gameplay that supported designers and artists throughout production.",
    highlights: [
      "Built tools for game designers to create and manage player statistics, items, skills, and other game data.",
      "Developed map connection tools to support game development.",
      "Implemented minigames and puzzles.",
      "Worked with artists to build in-game environments."
    ],
    cover: "legrand-01",
    coverFit: "cover",
    images: [
      ["legrand-01", "LEGRAND LEGACY title screen"],
      ["legrand-02", "In-game environment and characters"]
    ]
  },
  {
    id: "rescue",
    engine: "unity",
    engineLabel: "Unity",
    category: "Mobile Game · Freelance",
    title: "Rescue Puppy",
    period: "2016",
    meta: ["Freelance Programmer", "Unity 5.4.1f1", "Mobile"],
    tags: ["Unity", "Mobile", "Freelance"],
    short: "Freelance programming contribution to a mobile game built with Unity — main menu, gameplay, and results flow.",
    description: "A freelance programming contribution to Rescue Puppy, a mobile game built with Unity 5.4.1f1 — covering the main menu, the core gameplay loop, and the results screens.",
    highlights: [],
    cover: "rescue-01",
    coverFit: "contain",
    images: [
      ["rescue-01", "Rescue Puppy main menu"],
      ["rescue-02", "Gameplay screen"],
      ["rescue-03", "Results screen"]
    ]
  },
  {
    id: "bus",
    engine: "unity",
    engineLabel: "Unity",
    category: "Mobile Game · Freelance",
    title: "Bus Simulator Indonesia",
    period: "2017",
    meta: ["Freelance Programmer", "Unity 5.4.1f1", "Mobile"],
    tags: ["Unity", "Mobile", "Freelance"],
    short: "Freelance programming on a mobile game project — bus preview and garage, route selection, and customization interfaces.",
    description: "A freelance programming contribution to Bus Simulator Indonesia, a mobile game built with Unity 5.4.1f1. Work covered the bus preview and garage interface, route selection, and bus customization screens.",
    highlights: [],
    cover: "bus-01",
    coverFit: "cover",
    images: [
      ["bus-01", "Bus preview and garage interface"],
      ["bus-02", "Route selection screen"],
      ["bus-03", "Bus customization screen"]
    ]
  },
  {
    id: "icd",
    engine: "unity",
    engineLabel: "Unity",
    category: "Educational App · Freelance",
    title: "ICD (I Can Do)",
    period: "2019",
    meta: ["Freelance Project", "Unity 2017.4.20f2", "Mobile · Education"],
    tags: ["Unity", "Mobile", "Education"],
    short: "An educational mobile application with character-led activities, built as a freelance project in Unity.",
    description: "ICD (I Can Do) is an educational mobile application built with Unity 2017.4.20f2. The app pairs a friendly character with step-by-step learning activities for children, including interactive numbered choices and everyday routines such as toothbrushing.",
    highlights: [],
    cover: "icd-01",
    coverFit: "cover",
    images: [
      ["icd-01", "Character introduction and learning dialogue"],
      ["icd-02", "Interactive learning activity with numbered choices"],
      ["icd-03", "Toothbrushing activity interface"]
    ]
  },
  {
    id: "beetle",
    engine: "unity",
    engineLabel: "Unity",
    category: "Game Prototype · Personal",
    title: "Beetlebomb",
    period: "2019",
    meta: ["Personal Project", "Unity 2019.4.9f1", "Mobile"],
    tags: ["Unity", "Mobile", "Prototype"],
    short: "An unreleased single-player mobile game prototype developed with prototype scenes and custom development tools.",
    description: "Beetlebomb is an unreleased single-player mobile game prototype built in Unity 2019.4.9f1, developed alongside prototype scenes and the development tools used to iterate on the gameplay.",
    highlights: [],
    cover: "beetle-01",
    coverFit: "cover",
    images: [
      ["beetle-01", "Beetlebomb prototype in the Unity editor"],
      ["beetle-02", "Prototype scenes and development tools"]
    ]
  },
  {
    id: "fishing",
    engine: "unreal",
    engineLabel: "Unreal Engine",
    category: "Prototype · Personal",
    title: "Mini Fishing",
    period: "2024",
    meta: ["Personal Project", "Unreal Engine 4.27", "Prototype"],
    tags: ["Unreal Engine", "Blueprint", "Prototype"],
    short: "A fishing game prototype in Unreal Engine 4.27, with a player character, environment, and a power-meter casting interaction.",
    description: "Mini Fishing is a personal fishing game prototype built in Unreal Engine 4.27. It includes a prototype environment and player character, plus a fishing interaction driven by an on-screen power meter.",
    highlights: [],
    cover: "fishing-01",
    coverFit: "cover",
    images: [
      ["fishing-01", "Prototype environment and player character"],
      ["fishing-02", "Fishing interaction with an on-screen power meter"],
      ["fishing-03", "Fishing prototype during gameplay"]
    ]
  },
  {
    id: "boids",
    engine: "unity",
    engineLabel: "Unity",
    category: "Learning Project · Simulation",
    title: "Boids",
    period: "2026",
    meta: ["Learning Project", "Unity 6 · DOTS · Compute", "Flocking · Benchmarking"],
    tags: ["Unity", "DOTS", "ECS", "Compute Shaders", "Burst"],
    short: "The same flocking rules built five ways — MonoBehaviours, Burst jobs, ECS/DOTS, and GPU compute — benchmarked from 1,000 to 3,000,000 agents.",
    description: "Boids is a personal learning project about one simulation at different levels of the Unity stack. Starting from object-oriented MonoBehaviours, the flocking rules are reimplemented as a single update loop, then with the C# Job System and Burst, then in ECS/DOTS with parallel IJobEntity systems and spatial hashing, and finally as GPU compute kernels — brute force, structure-of-arrays, prefix-sum neighbour search, bitonic sort, and skinned bird animation. Each variant is benchmarked and logged, so the trade-offs between simplicity, CPU multithreading, and GPU throughput are measured rather than assumed.",
    highlights: [
      "Implemented classic object-oriented boids, a single-loop version, and a Burst-compiled Job System version to isolate per-boid overhead.",
      "Rebuilt the simulation in ECS/DOTS with IJobEntity and parallel IJobEntity systems, then added spatial hashing to reduce neighbour-search cost.",
      "Wrote GPU compute paths for brute force, structure-of-arrays, prefix-sum neighbour search, and bitonic sort.",
      "Added skinned flocking with GPU instancing and texture-based animation to render 500,000 animated birds.",
      "Logged 55 benchmark configurations, from 1,000 OOP boids at ~90 fps to 3,000,000 render-only agents."
    ],
    cover: "boids-02",
    coverFit: "cover",
    images: [
      ["boids-02", "1,000,000 boids driven by a GPU prefix-sum simulation"],
      ["boids-01", "500,000 skinned birds with GPU-instanced flocking"]
    ]
  },
  {
    id: "coop",
    engine: "unreal",
    engineLabel: "Unreal Engine",
    category: "Learning Project · Multiplayer",
    title: "Co-op Game Prototype",
    period: "2023",
    meta: ["Learning Project", "Unreal Engine 5.3", "Epic Online Services"],
    tags: ["Unreal Engine", "Multiplayer", "EOS"],
    short: "A co-op prototype exploring Epic Online Services login, lobby creation and search, equipment interaction, and camera views.",
    description: "A learning prototype built in Unreal Engine 5.3 that implements Epic Online Services account login and multiplayer lobby creation and search. It also explores first-person and third-person equipment interactions, external camera and CCTV views, and scene capture features.",
    highlights: [],
    cover: "coop-01",
    coverFit: "cover",
    images: [
      ["coop-01", "Multiplayer lobby creation interface"],
      ["coop-02", "Equipment interaction in first-person view"],
      ["coop-03", "External camera and CCTV view"]
    ]
  },
  {
    id: "astar",
    engine: "unity",
    engineLabel: "Unity",
    category: "Visualization · Personal",
    title: "A* Algorithm Visualization",
    period: "2022",
    meta: ["Personal Project", "Unity 2021.3.37f1", "Algorithms"],
    tags: ["Unity", "Algorithms", "Visualization"],
    short: "A Unity project that visualizes the A* pathfinding algorithm on a grid, built to make search behavior easy to inspect.",
    description: "A personal project in Unity 2021.3.37f1 that visualizes the A* pathfinding algorithm on a grid, making frontier expansion, path costs, and the resulting route easy to inspect.",
    highlights: [],
    cover: "astar-01",
    coverFit: "contain",
    images: [
      ["astar-01", "Pathfinding visualization state — grid and costs"],
      ["astar-02", "Pathfinding visualization state — resulting route"]
    ]
  },
  {
    id: "tank",
    engine: "unreal",
    engineLabel: "Unreal Engine",
    category: "Learning Project · Unreal",
    title: "Tank Game",
    period: "2019",
    meta: ["Learning Project", "Unreal Engine 4.21"],
    tags: ["Unreal Engine", "Learning"],
    short: "A tank game learning project built in Unreal Engine 4.21.",
    description: "A tank game learning project built in Unreal Engine 4.21, focused on environment setup and player vehicle control.",
    highlights: [],
    cover: "tank-01",
    coverFit: "cover",
    images: [["tank-01", "Tank game environment and player vehicle"]]
  },
  {
    id: "fps",
    engine: "unreal",
    engineLabel: "Unreal Engine",
    category: "Learning Project · Unreal",
    title: "FPS with a Procedural World",
    period: "2019",
    meta: ["Learning Project", "Unreal Engine 4.21"],
    tags: ["Unreal Engine", "Procedural"],
    short: "A single-player first-person shooter learning project with a procedurally generated world.",
    description: "A single-player first-person shooter learning project built in Unreal Engine 4.21, featuring a procedural world and first-person gameplay.",
    highlights: [],
    cover: "fps-01",
    coverFit: "cover",
    images: [
      ["fps-01", "First-person gameplay view"],
      ["fps-02", "Procedural world environment overview"]
    ]
  },
  {
    id: "sync",
    engine: "unreal",
    engineLabel: "Unreal Engine",
    category: "Learning Project · Multiplayer",
    title: "Multiplayer Object Movement Sync",
    period: "2019",
    meta: ["Learning Project", "Unreal Engine 4.22"],
    tags: ["Unreal Engine", "Multiplayer"],
    short: "Explored multiplayer movement synchronization, car movement client prediction, and moving platforms in Unreal Engine 4.22.",
    description: "A learning project in Unreal Engine 4.22 exploring multiplayer movement synchronization — car movement with client prediction and moving platforms across multiple test windows.",
    highlights: [],
    cover: "sync-01",
    coverFit: "cover",
    images: [
      ["sync-01", "Car movement synchronization across multiplayer views"],
      ["sync-02", "Moving platform synchronization in multiplayer test windows"]
    ]
  },
  {
    id: "shooter",
    engine: "unreal",
    engineLabel: "Unreal Engine",
    category: "Learning Project · Multiplayer",
    title: "Multiplayer Shooter",
    period: "2023",
    meta: ["Learning Project", "Unreal Engine 5.2"],
    tags: ["Unreal Engine", "Multiplayer"],
    short: "A multiplayer shooter learning project in Unreal Engine 5.2 with third-person combat and scoped aiming.",
    description: "A multiplayer shooter learning project built in Unreal Engine 5.2, running across multiple player windows with third-person gameplay, combat interfaces, and scoped aiming.",
    highlights: [],
    cover: "shooter-01",
    coverFit: "cover",
    images: [
      ["shooter-01", "Multiplayer shooter running in multiple player windows"],
      ["shooter-02", "Third-person gameplay and combat interface"],
      ["shooter-03", "Scoped aiming view"]
    ]
  },
  {
    id: "cpp",
    engine: "cpp",
    engineLabel: "C++",
    category: "Console Games · Personal",
    title: "C++ Console Game Projects",
    period: "2018",
    meta: ["Personal Projects", "C++", "olcPixelGameEngine"],
    tags: ["C++", "Games", "olcPixelGameEngine"],
    short: "Free-time C++ projects recreating Tetris, Snake, and Conway's Game of Life with olcPixelGameEngine.",
    description: "Free-time programming projects built in C++ with olcPixelGameEngine — recreations of Tetris and Snake, plus a Conway's Game of Life simulation.",
    highlights: [],
    cover: "tetris-01",
    coverFit: "contain",
    images: [
      ["tetris-01", "Tetris gameplay with score and next-piece preview"],
      ["snake-01", "Snake gameplay"],
      ["life-01", "Game of Life simulation"]
    ]
  },
  {
    id: "follower",
    engine: "unity",
    engineLabel: "Unity",
    category: "Thesis · Simulation",
    title: "Line Follower Robot Simulator",
    period: "2015",
    meta: ["Undergraduate Thesis", "Unity", "C++ scripting"],
    tags: ["Unity", "C++", "Simulation"],
    short: "An undergraduate thesis project: a line follower robot simulator supporting robot control scripts written in C++.",
    description: "My undergraduate thesis at Universitas Negeri Malang: a line follower robot simulator built in Unity. The simulator supports robot control scripts written in C++, covering path handling, sensor input, and motor commands.",
    highlights: [],
    cover: "follower-01",
    coverFit: "cover",
    images: [
      ["follower-01", "Simulator interface and robot following a track"],
      ["follower-02", "Robot navigating the simulator track"],
      ["follower-03", "C++ robot control script — path handling and sensor input"],
      ["follower-04", "C++ robot control script — motor commands"]
    ]
  }
];

const imageSrc = (slug, size) => `assets/projects/${slug}-${size}.webp`;
const pad = (number) => String(number).padStart(2, "0");

const workIndex = document.getElementById("work-index");
const filterButtons = [...document.querySelectorAll(".filter")];
const menuDialog = document.getElementById("menu-dialog");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const projectDialog = document.getElementById("project-dialog");
const sheetLabel = document.getElementById("sheet-label");
const sheetContent = document.getElementById("sheet-content");
const sheetScroll = document.getElementById("sheet-scroll");
const sheetClose = document.getElementById("sheet-close");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lb-img");
const lightboxCounter = document.getElementById("lb-counter");
const lightboxCaption = document.getElementById("lb-caption");
const lightboxPrev = document.getElementById("lb-prev");
const lightboxNext = document.getElementById("lb-next");
const lightboxClose = document.getElementById("lb-close");

let currentImages = [];
let currentImageIndex = 0;
let sheetHistory = false;
let lightboxHistory = false;

/* --------------------------------------------------------------------------
   Work index
   -------------------------------------------------------------------------- */

function rowTemplate(project, index) {
  const number = pad(index + 1);
  const cover = imageSrc(project.cover, "sm");

  return `
    <li class="work-row" data-engine="${project.engine}">
      <button class="work-open" type="button" data-project="${project.id}"
              aria-label="Open case sheet: ${project.title}, ${project.period}, ${project.engineLabel}">
        <span class="work-no">${number}</span>
        <span class="work-thumb">
          <img src="${cover}" alt="" width="900" height="563" loading="lazy" decoding="async">
        </span>
        <span class="work-main">
          <span class="work-title">${project.title}</span>
          <span class="work-sub">${project.meta[0]}</span>
        </span>
        <span class="work-meta">${project.period}<br>${project.engineLabel}</span>
        <span class="work-go" aria-hidden="true">→</span>
      </button>
    </li>
  `;
}

function renderIndex() {
  workIndex.innerHTML = PROJECTS.map(rowTemplate).join("");
}

function initFilters() {
  const counts = { all: PROJECTS.length };
  PROJECTS.forEach((project) => {
    counts[project.engine] = (counts[project.engine] || 0) + 1;
  });

  filterButtons.forEach((button) => {
    const count = button.querySelector(".count");
    if (count) count.textContent = pad(counts[button.dataset.filter] || 0);

    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      workIndex.querySelectorAll(".work-row").forEach((row) => {
        row.hidden = filter !== "all" && row.dataset.engine !== filter;
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Case sheet
   -------------------------------------------------------------------------- */

function plateTemplate([slug, caption], index) {
  const number = pad(index + 1);

  return `
    <figure class="plate">
      <button class="plate-btn" type="button" data-image-index="${index}"
              aria-label="View plate ${number}: ${caption}">
        <img src="${imageSrc(slug, "lg")}" alt="${caption}" loading="lazy" decoding="async">
      </button>
      <figcaption><span>Plate ${number}</span>${caption}</figcaption>
    </figure>
  `;
}

function buildSheet(project) {
  const notes = project.highlights.length
    ? `
      <section class="sheet-section">
        <h3>Engineering notes <span>${pad(project.highlights.length)} items</span></h3>
        <ol class="notes">
          ${project.highlights
            .map(
              (item, index) => `
                <li><span class="note-no">${pad(index + 1)}</span><span>${item}</span></li>
              `
            )
            .join("")}
        </ol>
      </section>
    `
    : "";

  const plates = `
    <section class="sheet-section">
      <h3>Plates <span>${pad(project.images.length)} images</span></h3>
      <div class="plates">
        ${project.images.map(plateTemplate).join("")}
      </div>
    </section>
  `;

  return `
    <p class="sheet-kicker">${project.category}</p>
    <h2 id="sheet-title">${project.title}</h2>

    <dl class="spec">
      <div>
        <dt>Role</dt>
        <dd>${project.meta[0]}</dd>
      </div>
      <div>
        <dt>Period</dt>
        <dd>${project.period}</dd>
      </div>
      <div>
        <dt>Stack</dt>
        <dd>${project.meta[1] || project.tags.join(" · ")}</dd>
      </div>
      <div>
        <dt>Context</dt>
        <dd>${project.meta[2] || project.engineLabel}</dd>
      </div>
    </dl>

    <p class="sheet-desc">${project.description}</p>
    ${notes}
    ${plates}
  `;
}

function openProject(projectId) {
  const index = PROJECTS.findIndex((item) => item.id === projectId);
  if (index === -1) return;
  const project = PROJECTS[index];

  sheetContent.innerHTML = buildSheet(project);
  sheetLabel.innerHTML = `Work — <strong>${pad(index + 1)}</strong> / ${pad(PROJECTS.length)} · ${project.engineLabel}`;
  sheetScroll.scrollTop = 0;
  currentImages = project.images;
  projectDialog.showModal();
  sheetHistory = true;
  try {
    history.pushState({ projectSheet: projectId }, "");
  } catch (error) {
    sheetHistory = false;
  }
  sheetClose.focus({ preventScroll: true });
  syncBodyLock();
}

function closeSheet() {
  if (!projectDialog.open) return;
  projectDialog.close();
  if (sheetHistory) {
    sheetHistory = false;
    history.back();
  }
}

function openLightbox(index) {
  if (!currentImages.length) return;
  showLightboxImage(index);
  lightbox.showModal();
  lightboxHistory = true;
  try {
    history.pushState({ projectLightbox: true }, "");
  } catch (error) {
    lightboxHistory = false;
  }
  syncBodyLock();
}

function closeLightbox() {
  if (!lightbox.open) return;
  lightbox.close();
  if (lightboxHistory) {
    lightboxHistory = false;
    history.back();
  }
}

function showLightboxImage(index) {
  const [slug, caption] = currentImages[index];
  currentImageIndex = index;
  lightboxImg.src = imageSrc(slug, "lg");
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightboxCounter.textContent = `Plate ${pad(index + 1)} / ${pad(currentImages.length)}`;
}

function stepLightbox(direction) {
  if (!currentImages.length) return;
  const next = (currentImageIndex + direction + currentImages.length) % currentImages.length;
  showLightboxImage(next);
}

/* --------------------------------------------------------------------------
   Dialog plumbing
   -------------------------------------------------------------------------- */

function syncBodyLock() {
  const hasOpenDialog = Boolean(document.querySelector("dialog[open]"));
  document.body.classList.toggle("modal-open", hasOpenDialog);
}

[menuDialog, projectDialog, lightbox].forEach((dialog) => {
  dialog.addEventListener("close", syncBodyLock);
});

menuOpen.addEventListener("click", () => {
  menuDialog.showModal();
  menuOpen.setAttribute("aria-expanded", "true");
  menuClose.focus();
  syncBodyLock();
});

menuClose.addEventListener("click", () => menuDialog.close());

menuDialog.addEventListener("close", () => {
  menuOpen.setAttribute("aria-expanded", "false");
});

menuDialog.addEventListener("click", (event) => {
  if (event.target === menuDialog) menuDialog.close();
});

menuDialog.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menuDialog.close());
});

workIndex.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project]");
  if (trigger) openProject(trigger.dataset.project);
});

sheetClose.addEventListener("click", closeSheet);

projectDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeSheet();
});

// The pushed states let Back step out one layer at a time: image → sheet → page.
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.projectLightbox) {
    if (projectDialog.open && currentImages.length) {
      showLightboxImage(currentImageIndex);
      lightbox.showModal();
      lightboxHistory = true;
      syncBodyLock();
    }
    return;
  }
  const atSheet = Boolean(event.state && event.state.projectSheet);
  sheetHistory = atSheet;
  lightboxHistory = false;
  if (lightbox.open) lightbox.close();
  if (!atSheet && projectDialog.open) projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeSheet();
});

sheetContent.addEventListener("click", (event) => {
  const button = event.target.closest(".plate-btn");
  if (!button) return;
  openLightbox(Number(button.dataset.imageIndex));
});

lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));
lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeLightbox();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    stepLightbox(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    stepLightbox(1);
  }
});

lightbox.addEventListener("close", () => {
  lightboxImg.removeAttribute("src");
  lightboxImg.alt = "";
});

/* --------------------------------------------------------------------------
   Active section marker
   -------------------------------------------------------------------------- */

function initActiveNav() {
  const links = [...document.querySelectorAll('.header-nav a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-38% 0px -54% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */

renderIndex();
initFilters();
initActiveNav();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
