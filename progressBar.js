document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.logIN-UI-Box-LeftSide-InfoInput, .inputField');
    const progressCircle = document.getElementById('progressCircle');
  
    const updateProgress = () => {
      const filledInputs = Array.from(inputs).filter(input => input.value.trim() !== '').length;
      const totalInputs = inputs.length;
      const progressValue = (filledInputs / totalInputs) * 100;
  
      const circumference = 2 * Math.PI * 45; // 45 - радиус круга
      const offset = circumference - (progressValue / 100) * circumference;
  
      progressCircle.style.strokeDashoffset = offset;
    };
  
    inputs.forEach(input => {
      input.addEventListener('input', updateProgress);
    });
  });
  