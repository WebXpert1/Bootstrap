// pause/play
const videos = document.querySelectorAll(".myvideo");

videos.forEach(function(video) {
  video.addEventListener("click", function () {
    if (video.paused){
      video.play();
    } else {
      video.pause();
    }
  });
});

// like
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        const countSpan = this.querySelector('.like-count');

        if (this.classList.contains('liked')) {
            this.classList.remove('liked');
            icon.classList.replace('fa-solid', 'fa-regular');
            countSpan.textContent = parseInt(countSpan.textContent) - 1;
        } else {
            this.classList.add('liked');
            icon.classList.replace('fa-regular', 'fa-solid');
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
        }
    });
});

const commentButtons = document.querySelectorAll('.fa-comment');
const commentSections = document.querySelectorAll('.comment-section');

commentButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const section = commentSections[index];
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });
});

// Posting a comment
const postButtons = document.querySelectorAll('.post-comment');
postButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const input = commentSections[index].querySelector('.comment-input');
        const commentsList = commentSections[index].querySelector('.comments-list');
        if (input.value.trim() !== '') {
            const newComment = document.createElement('p');
            newComment.textContent = input.value;
            commentsList.appendChild(newComment);
            input.value = '';
        }
    });
});





