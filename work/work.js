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

createWork("https://random-dog.netlify.app/", "https://github.com/NateyLB/React-Redux-App", "Redux Thunk Middleware | Reducers | Actions ")
createWork("https://loving-minsky-986148.netlify.com/", "https://github.com/NateyLB/React-Github-User-Card",
"React Class Components | Axios API Calls");
createWork("https://festive-jepsen-77ab8d.netlify.app/", "https://github.com/NateyLB/Sprint-Challenge-Lambda-Eats-starter",
"React Router | Yup Form Validation | Cypress.io Testing");
createWork('https://goofy-nightingale-dafcc4.netlify.com/', "https://github.com/NateyLB/Sprint-Challenge-React-Wars",
"React Function Components | Axios API calls ")