document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.logIN-UI-Box-LeftSide-InfoInput, .inputField');
    const tasks = document.querySelectorAll('.logIN-UI-Box-RightSide-TaskList li');
  
    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
          tasks[index].style.textDecoration = 'line-through';
        } else {
          tasks[index].style.textDecoration = 'none';
        }
      });
    });
  });
  