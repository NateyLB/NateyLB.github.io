function createWork(deployLink, gitLink, description){
    const workContainer = document.querySelector('.workContainer');
    const card = document.createElement('div');
    card.classList.add("card")
    workContainer.appendChild(card);


    const work = document.createElement('iframe');
    work.classList.add("iframe");
    work.setAttribute('src', deployLink);
    card.appendChild(work);

    const deploy = document.createElement('a');
    deploy.setAttribute('href', deployLink);
    deploy.textContent = description;
    card.appendChild(deploy);

    const git = document.createElement('a');
    git.setAttribute('href', gitLink);
    git.textContent = 'GitHub Repo';
    card.appendChild(git);

    return work;
}

createWork("https://condescending-nobel-2a0b3d.netlify.com/", "https://github.com/NateyLB/Sprint-Challenge-Lambda-Eats-starter",
"React Router, Yup Form Validation, Cypress.io testing");
createWork('https://goofy-nightingale-dafcc4.netlify.com/', "https://github.com/NateyLB/Sprint-Challenge-React-Wars",
"React Components and Axios API calls, ")
createWork("https://friendly-bose-b5a0bc.netlify.com", "https://github.com/NateyLB/Sprint-Challenge-Applied-Javascript",
"DOM Manipulation, and Components");