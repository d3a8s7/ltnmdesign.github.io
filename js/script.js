function toggleProjectDetails(project) {
    const projectDetails = project.querySelector(".project-details");
    projectDetails.classList.toggle("expanded");
  }
  
  function expandImage(image) {
    const expandedImage = document.createElement("div");
    expandedImage.classList.add("expanded-image");
    expandedImage.innerHTML = `
      <img src="${image.src}" alt="Expanded Image">
      <span class="close-button" onclick="closeExpandedImage()">&times;</span>
    `;
    document.body.appendChild(expandedImage);
    document.body.style.overflow = "hidden"; // Disable scrolling
  }
  
  function closeExpandedImage() {
    const expandedImage = document.querySelector(".expanded-image");
    document.body.removeChild(expandedImage);
    document.body.style.overflow = ""; // Enable scrolling
  }
  document.getElementById('night-mode-btn').addEventListener('click', toggleNightMode);

  function toggleNightMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
