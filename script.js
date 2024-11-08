document.getElementById('resume').style.display = 'none';


document.querySelector('.downpdf').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementsByClassName('resume-form')[0].style.display = 'none';
    document.getElementById('resume').style.display ='block';


    const name1 = document.getElementById('name1').value;
    const email = document.getElementById('email').value;
    const phone = document.querySelector('.phone').value;
    const linkedin = document.querySelector('.linkedin').value;
    const github = document.querySelector('.github').value;
    const experience = document.querySelector('.experience').value;
    const education = document.querySelector('.education').value;

    document.getElementById('name').textContent = name1;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;
    document.getElementById('linkedin').textContent = linkedin;
    document.getElementById('linkedin').href = linkedin;
    document.getElementById('github').textContent = github;
    document.getElementById('github').href = github;
    document.getElementById('experience').textContent = experience;
    document.getElementById('education').textContent = education;

    const photoInput = document.querySelector('.photo');
    if (photoInput.files && photoInput.files[0]) {
        const photoURL = URL.createObjectURL(photoInput.files[0]);
        document.getElementById('photo').src = photoURL;
    }
});

function downloadResume(){
    const resumeElement=document.getElementById('resume');

    const options={
        filename: 'Resume.pdf'
    }

    html2pdf().set(options).from(resumeElement).save();
}


