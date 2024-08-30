document.addEventListener("mousemove", (event) => {
  const eyeball = document.querySelector(".eyeball");
  const eyeContainer = document.querySelector(".eye-shape");
  const rect = eyeContainer.getBoundingClientRect();

  // Calculate the center of the eye
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Calculate the difference between the cursor position and the center of the eye
  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;

  // Calculate the angle of the cursor relative to the center of the eye
  const angle = Math.atan2(deltaY, deltaX);

  // Define the maximum distance the eyeball can move within the invisible circle
  const radius = rect.width / 8.75;

  // Calculate the distance the eyeball should move within the constraints
  const distance = Math.min(
    radius,
    Math.sqrt(deltaX * deltaX + deltaY * deltaY)
  );

  // Calculate the offset for the eyeball position within the invisible circle
  const offsetX = distance * Math.cos(angle) * 2;
  const offsetY = distance * Math.sin(angle);

  // Apply the transformation to the eyeball
  eyeball.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
