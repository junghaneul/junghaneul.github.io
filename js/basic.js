document.addEventListener('DOMContentLoaded', function() {
    const allToggleButtons = document.querySelectorAll('button.button1');
    const ANIMATION_DURATION = 700;

    allToggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const clickedButton = this;
            const parentListItem = clickedButton.closest('li');
            const contentParagraph = parentListItem.querySelector('p:nth-child(2)');
            const contentLink = parentListItem.querySelector('a:nth-child(3)');

            const isContentCurrentlyVisible = contentParagraph.classList.contains('display-block');

            if (isContentCurrentlyVisible) {
                clickedButton.textContent = '+';
                clickedButton.classList.remove('button-close');
                clickedButton.classList.add('button-open');
            } else {
                clickedButton.textContent = 'X';
                clickedButton.classList.remove('button-open');
                clickedButton.classList.add('button-close');
            }

            if (isContentCurrentlyVisible) {
                if (contentParagraph) {
                    contentParagraph.classList.remove('display-block');
                    setTimeout(() => {
                        contentParagraph.style.display = 'none';
                    }, ANIMATION_DURATION);
                }
                if (contentLink) {
                    contentLink.classList.remove('display-block');
                    setTimeout(() => {
                        contentLink.style.display = 'none';
                    }, ANIMATION_DURATION);
                }
            } else {
                if (contentParagraph) {
                    contentParagraph.style.display = 'block';
                    setTimeout(() => {
                        contentParagraph.classList.add('display-block');
                    }, 10);
                }
                if (contentLink) {
                    contentLink.style.display = 'block';
                    setTimeout(() => {
                        contentLink.classList.add('display-block');
                    }, 10);
                }
            }
        });
    });
});
