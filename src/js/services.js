const services = {
  "machining": {
    "title": "CNC Machining",
    "description": `<p>We have experience working with a wide variety of materials.</p>
    <ul>
      <li>Aluminum</li>
      <li>Brass & Copper</li>
      <li>Steel  & Stainless Steel</li>
      <li>Plastics</li>
    </ul>
    <p>The workflow of the company is tracked by our shop management software (E2 Shop System)
     which supports job tracking and scheduling and maintains our high quality assurance and 
     quality control standards.  Our programmers use Surfcam and Solidworks to program parts
     for fabrication.</p>`,
    "logo": "../images/mill-icon.svg",
    "images": [
      "../images/cnc1.png",
      "../images/cnc2.png",
      "../images/cnc3.png"
    ]
  },
  "edm": {
    "title": "Wire &amp; Conventional EDM",
    "description": `<p>Our Electrical Discharge Machining (EDM) allows us to literally <em>burn</em>
    away metal.  During conventional EDM, we create an electrode "positive" version of the pocket or shape
    to be removed out of a good conductor like copper or graphite.  Then we use that electrode to burn that
    shape out of the base metal.  Combining this with three axes of motion and super-accurate linear motors,
    it's possible to create complex geometry, threads, and even undercuts!<p>
    <p>Our Wire EDM machines use a similar process, but using a very fine wire as the electrode instead.  If you've
    ever seen a hot wire cut foam, the effect is similar, but in <em>metal</em>.  This allows us to cut through
    almost 12 inches of metal leaving only the smallest (down to .002") radius behind. Our larger wire machine has
    additional "U" and "V" axes, allowing the wire to tilt in two dimensions and cut conical shapes.</p>
    <p>These tools are ideal for prototyping long-lead-time items like extrusions and sheet metal shapes.</p>`,
    "logo": "../images/edm-icon.svg",
    "images": [
      "../images/edm1.png",
      "../images/edm2.jpg",
      "../images/edm3.jpg"
    ]
  },
  "engineering": {
    "title": "Engineering Support &amp; Consulting",
    "description": `<p>In addition to the more than 30 combined years of manufacturing, design, and
    design-for-manufacturing experience we have, we also have a full suite of software tools to help us visualize,
    lay out, and assemble systems virtually before we cut a single chip.  This helps us find issues, interferences,
    and solve problems before beginning the more expensive build process.</p>
    <p>We have a Certified SolidWorks Expert on staff to assist you with any tricky CAD issues, and we can also provide
    support with Finite Element Analyses (FEA) and Computational Flow Dynamics (CFD).  Our team also specializes in 
    complex and computation-intensive design calculations.  We can even build you software tools to help you get your
    designs done faster.</p>
    <p>We're happy to sit down with you -- or give you a tour of the shop! -- and provide initial consultation, 
    so that you can get a feel for what we're looking for and what problems we see that will cause your designs to be
    expensive or difficult to machine or mold.  Contact us today and send us your designs, and we'll get you on the
    right track!</p>
    `,
    "logo": "../images/eng-icon.svg",
    "images": [
      "../images/engineering.png",
      "../images/engineering2.jpg",
      "../images/engineering3.jpg",
    ]
  },
  "molding": {
    "title": "Injection Molding &amp; Tool Making",
    "description": `<p>Whether you're ready for production and need thousands
    of parts molded, doing prototyping and exploration and need an efficient, modular,
    and easily modifiable tool, or you're just starting out with a great idea and need
    help figuring out what your next steps are, our team of highly qualified molders, 
    mold-makers, and engineers can help you get your parts optimized and shooting
    quickly.</p>
    <p>We work with customers of all sizes and industries, and if you want it,
    we're happy to work under NDA with you.  We specialize in both aluminum and steel tooling
    and have experience shooting a variety of materials:</p>
    <ul>
      <li>Polycarbonate</li>
      <li>ABS</li>
      <li>Polypropylene</li>
      <li>Polystyrene</li>
      <li>COC's</li>
      <li>Acrylic</li>
      <li>Softer materials like TPE's and TPV's</li>
    </ul>
    <p>Send us your parts or an NDA and we'll get your quote started!</p>`,
    "logo": "../images/mold-icon.svg",
    "images": [
      "../images/mold1.png",
      "../images/mold2.jpg",
      "../images/mold3.jpg",
    ]
  }
};

const navButtons = document.querySelectorAll('.service__nav__link');
const contentTile = document.querySelector('.tile__content');
const title = contentTile.querySelector('.tile__content__header');
const logo = contentTile.querySelector('.tile__logo');
const copy = contentTile.querySelector('.tile__content__copy');
const imageTiles = document.querySelectorAll('.tile__img img');

function deactivate_all() {
  navButtons.forEach(button => {
    button.classList.remove('active');
  });
}

function activate(button) {
  button.classList.add('active');
}

function selectNav(button) {
  const key = button.dataset.target;
  deactivate_all();
  activate(button);
  title.innerHTML = services[key]["title"];
  logo.src = services[key]["logo"];
  copy.innerHTML = services[key]["description"];
  for (let i=0; i<3; i++) {
    imageTiles[i].src = services[key]["images"][i];
  }
}

navButtons.forEach(button => {
  button.addEventListener('click', e => {
    selectNav(e.target);
  });
});

selectNav(navButtons[0]);
